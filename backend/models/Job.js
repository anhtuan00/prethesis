// Import the mongoose library to create the job model
import mongoose from "mongoose";

// Create the JobSchema for the job model
const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"], // company is a required field
      maxlength: 50, // company name can be at most 50 characters long
    },
    position: {
      type: String,
      required: [true, "Please provide position"], // position is a required field
      maxlength: 100, // position name can be at most 100 characters long
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"], // status can only be one of these three values
      default: "pending", // default value for status is "pending"
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"], // jobType can only be one of these four values
      default: "full-time", // default value for jobType is "full-time"
    },
    jobLocation: {
      type: String,
      default: "my city", // default value for jobLocation is "my city"
      required: true, // jobLocation is a required field
    },
    startDate: {
      type: Date,
      required: [true, "Please provide start date"],
      default: "2022-12-30", // default start date
    },
    fbendDate: {
      type: Date,
      required: [true, "Please provide end date"],
      default: "2023-12-31", // default end date
    },
    createdBy: {
      type: mongoose.Types.ObjectId, // createdBy field stores the object ID of a user
      ref: "User", // createdBy field references the User model
      required: [true, "Please provide user"], // createdBy is a required field
    },
    approve: {
      type: String,
      enum: ["approved", "unapproved"], // approve field can only have two possible values: "approved" or "unapproved"
      default: "unapproved", // default value for approve field is "unapproved"
    },
  },
  {
    timestamps: true, // timestamps will automatically be added to documents to track when they were created and last updated
  }
);

export default mongoose.model("Job", JobSchema); // export the Job model
