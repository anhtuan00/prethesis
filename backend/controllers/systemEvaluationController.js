// import SystemEvaluation from "../models/SystemEvaluation.js";
// import { StatusCodes } from "http-status-codes";

// export const createEvaluation = async (req, res) => {
//   try {
//     const evaluation = await SystemEvaluation.create(req.body);
//     res.status(StatusCodes.CREATED).json(evaluation);
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json(error);
//   }
// };

// export const getEvaluations = async (req, res) => {
//   try {
//     const evaluations = await SystemEvaluation.find();
//     res.status(StatusCodes.OK).json(evaluations);
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json(error);
//   }
// };

// export const getEvaluationById = async (req, res) => {
//   try {
//     const evaluation = await SystemEvaluation.findById(req.params.id);
//     if (evaluation) {
//       res.status(StatusCodes.OK).json(evaluation);
//     } else {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "Evaluation not found" });
//     }
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json(error);
//   }
// };

// export const updateEvaluation = async (req, res) => {
//   try {
//     const updatedEvaluation = await SystemEvaluation.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (updatedEvaluation) {
//       res.status(StatusCodes.OK).json(updatedEvaluation);
//     } else {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "Evaluation not found" });
//     }
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json(error);
//   }
// };

// export const deleteEvaluation = async (req, res) => {
//   try {
//     const evaluation = await SystemEvaluation.findByIdAndDelete(req.params.id);
//     if (evaluation) {
//       res.status(StatusCodes.NO_CONTENT).end();
//     } else {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "Evaluation not found" });
//     }
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json(error);
//   }
// };
