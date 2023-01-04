import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    fbstudentName: {
      type: String,
      required: [true, "Please provide student name"],
      maxlength: 50,
    },
    fbstudentId: {
      type: String,
      required: [true, "Please provide student id"],
      maxlength: 50,
      unique: true,
    },
    fbstudentPhone: {
      type: String,
      required: [true, "Please provide student phone number"],
      maxlength: 50,
    },
    fbcompanyName: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    fbcompanyPhone: {
      type: String,
      required: [true, "Please provide company phone number"],
      maxlength: 50,
    },
    fbposition: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    fblocation: {
      type: String,
      required: [true, "Please provide location"],
      maxlength: 100,
    },
    fbstartDate: {
      type: Date,
      required: [true, "Please provide start date"],
      default: "2022-12-30", // default start date
    },
    fbendDate: {
      type: Date,
      required: [true, "Please provide end date"],
      default: "2023-12-31", // default end date
    },
    fbComment: {
      type: String,
      required: [true, "Please provide a feedback comment"],
      maxlength: 500,
    },

    

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
      unique: true, // add unique index
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", FeedbackSchema);
