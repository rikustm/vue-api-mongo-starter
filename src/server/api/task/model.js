import { Schema, model } from "mongoose";

const schemaOptions = { timestamps: true };

const schema = new Schema(
  {
    name: { type: String, required: [true, "name field is required"] },
  },
  schemaOptions
);

export default model("task", schema);
