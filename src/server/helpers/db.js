import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(`error: ${err.stack}`);
      process.exit(1);
    });

  mongoose.connection.on("open", () => {
    console.log("connected to database");
  });
};

mongoose.Promise = global.Promise;

export default { connect };
