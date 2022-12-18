import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 50,
    },
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    feedback: {
      type: String,
      required: [true, "Please provide feedback"],
      maxlength: 100,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    approve: {
      type: String,
      enum: ["approved", "unapproved"],
      default: "unapproved",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
