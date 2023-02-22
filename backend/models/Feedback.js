import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Types.ObjectId, ref: 'company'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user"
    },
    comment: {
      type: String,
    },

    rate: { type: Number },
    salaryRate: { type: Number },
    trainingRate: { type: Number },
    careRate: { type: Number },
    cultureRate: { type: Number },
    officeRate: { type: Number },


  },
  { timestamps: true }
);

export default mongoose.model("feedback", FeedbackSchema);
