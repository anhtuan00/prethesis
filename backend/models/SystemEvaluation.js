// import mongoose from "mongoose";

// const systemEvaluationSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   question1: { type: Number },
//   question2: { type: Number },
//   question3: { type: Number },
//   question4: { type: Number },
//   question5: { type: Number },
//   question6: { type: Number },
//   question7: { type: Number },
//   question8: { type: Number },
//   question9: { type: Number },
//   question10: { type: Number },
//   otherComment: { type: String },
// });

// SystemEvaluationSchema.pre("find", function (next) {
//   this.populate("user", "name email role");
//   next();
// }).pre("findOne", function (next) {
//   this.populate("user", "name email role");
//   next();
// });

// export default mongoose.model("systemEvaluation", systemEvaluationSchema);
