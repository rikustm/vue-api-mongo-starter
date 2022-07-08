import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./helpers/db";
import apiRoutes from "./api";

db.connect();

const port = process.env.PORT || 9000;
const app = express();

// Configure middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Static folder
app.use(express.static(__dirname + "/www/"));

app.use("/api", apiRoutes);

app.listen(port);
console.log(`Listening on http://localhost:${port}/api`);
