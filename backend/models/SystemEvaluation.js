import mongoose from "mongoose";

const SystemEvaluationSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    question1: {
      type: Number,
      min: 1,
      max: 5,
    },
    question2: {
      type: Number,
      min: 1,
      max: 5,
    },
    question3: {
      type: Number,
      min: 1,
      max: 5,
    },
    question4: {
      type: Number,
      min: 1,
      max: 5,
    },
    question5: {
      type: Number,
      min: 1,
      max: 5,
    },
    question6: {
      type: Number,
      min: 1,
      max: 5,
    },
    question7: {
      type: Number,
      min: 1,
      max: 5,
    },
    question8: {
      type: Number,
      min: 1,
      max: 5,
    },
    question9: {
      type: Number,
      min: 1,
      max: 5,
    },
    question10: {
      type: Number,
      min: 1,
      max: 5,
    },
    otherComment: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("systemEvaluation", SystemEvaluationSchema);
