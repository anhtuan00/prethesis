import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    fbstudentName: {
      type: String,
      maxlength: 50,
    },
    fbstudentId: {
      type: String,
      maxlength: 50,
      unique: true,
    },
    fbstudentPhone: {
      type: String,
      maxlength: 50,
    },
    fbcompanyName: {
      type: String,
      maxlength: 50,
    },
    fbcompanyPhone: {
      type: String,
      maxlength: 50,
    },
    fbposition: {
      type: String,
      maxlength: 100,
    },
    fblocation: {
      type: String,
      maxlength: 100,
    },
    fbstartDate: {
      type: Date,
      default: "2022-12-30", // default start date
    },
    fbendDate: {
      type: Date,
      default: "2023-12-31", // default end date
    },
    fbComment: {
      type: String,
      required: [true, "Please provide a feedback comment"],
      maxlength: 500,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: [true, "Please provide user"],
      unique: true, // add unique index
    },
    createdDate: {type: Date}
  },
  { timestamps: true }
);

export default mongoose.model("feedback", FeedbackSchema);
