import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    JobTitle: { type: String, maxLength: 30 },
    JobDescription: { type: String, maxLength: 100 },
    JobValidFromDate: { type: Date },
    JobValidToDate: { type: Date },
    RecruitCompID: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    JobType: { type: mongoose.Schema.Types.ObjectId, ref: "jobType" },
    JobCatalog: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobCatalog" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("job", JobSchema);
