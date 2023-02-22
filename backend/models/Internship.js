import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    Student: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    Job: { type: mongoose.Schema.Types.ObjectId, ref: "job" },

    Company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    OtherCompanyName: { type: String },
    OtherCompanyContact: { type: String },
    SupervisorPosition: { type: String },
    SupervisorName: { type: String },
    SuperVisorPhone: { type: String },
    SuperVisorEmail: { type: String },
    IsChosen: { type: Boolean },

    ConfirmedYN: { type: Boolean },
    ConfirmedDate: { type: Date },
    ConfirmedName: { type: String },

    InternFromDate: { type: Date },
    InternToDate: { type: Date },

    LecturerComment: { type: String },
    InternStatus: { type: String, default: "Pending" },
    InternCompleteDate: { type: Date },
    InternTime: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("internship", internshipSchema);
