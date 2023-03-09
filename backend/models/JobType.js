import mongoose from "mongoose";

const jobTypeSchema = new mongoose.Schema({
  Name: { type: String, maxLength: 50, require: true },
  Descriptions: { type: String, maxLength: 400 },
});

export default mongoose.model("jobType", jobTypeSchema);
