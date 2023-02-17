import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    Student: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    Job: { type: mongoose.Schema.Types.ObjectId, ref: "job" },

    Company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },

    ConfirmedYN: { type: Boolean },
    ConfirmedDate: { type: Date },
    ConfirmedName: { type: String },

    InternFromDate: { type: Date },
    InternToDate: { type: Date },

    LecturerComment: { type: String },
    InternStatus: { type: String },
    InternCompleteDate: { type: Date },
    InternTime: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("internship", internshipSchema);
