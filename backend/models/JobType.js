import mongoose from "mongoose";

const jobTypeSchema = new mongoose.Schema({
  Name: { type: String, maxLength: 200, require: true },
  Descriptions: { type: String, maxLength: 200 },
});

export default mongoose.model("jobType", jobTypeSchema);
