import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import Company from "../models/Company.js";
import Feedback from "../models/Feedback.js";
import {
  get,
  gets,
  create,
  Delete,
  filterWithPaging,
} from "./BaseController.js";

const modelName = "Feedback";

const averageOfArray = (arr) => {
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let average = (sum * 1.0) / numbers.length;
  return average;
};

export const result = {
  get: get(modelName),
  gets: gets(modelName),
  update: async (req, res, next) => {
    const {
      companyId,
      createdBy,
      content,
      salaryRate,
      trainingRate,
      careRate,
      cultureRate,
      officeRate,
    } = neq.body;

    const fb = await Feedback.findOne({
      companyId: companyId,
      createdBy: createdBy,
    });
    if (fb.exists()) {
      res.status(400).send("Bad Request");
      return;
    }

    const result = await Feedback.create({
      companyId,
      createdBy,
      content,
      rate: averageOfArray([
        salaryRate,
        trainingRate,
        careRate,
        cultureRate,
        officeRate,
      ]),
      salaryRate,
      trainingRate,
      careRate,
      cultureRate,
      officeRate,
    });

    const allFbOfCompany = await Feedback.find({ companyId: companyId });

    const rates = {
      salaryRate: averageOfArray(allFbOfCompany.map((x) => x.salaryRate)),
      trainingRate: averageOfArray(allFbOfCompany.map((x) => x.trainingRate)),
      careRate: averageOfArray(allFbOfCompany.map((x) => x.careRate)),
      cultureRate: averageOfArray(allFbOfCompany.map((x) => x.cultureRate)),
      officeRate: averageOfArray(allFbOfCompany.map((x) => x.officeRate)),
    };

    const setData = { rate: averageOfArray(Object.values(rates)), ...rates };

    await Company.findByIdAndUpdate(companyId, { $set: setData });

    req.status(200).json(result);
  },
  create: create(modelName),
  Delete: Delete(modelName),
  filterWithPaging: filterWithPaging(modelName),
  getbyCompanyId: async (req, res, next) => {
    const { companyId } = req.params;

    var result = await Feedback.find({ companyId: companyId });

    res.status(StatusCodes.OK).json(result);
  },
};

export const getFeedbackByCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Feedback.aggregate([
      { $match: { companyId: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $group: {
          _id: null,
          rate: { $avg: "$rate" },
          salaryRate: { $avg: "$salaryRate" },
          trainingRate: { $avg: "$trainingRate" },
          careRate: { $avg: "$careRate" },
          cultureRate: { $avg: "$cultureRate" },
          officeRate: { $avg: "$officeRate" },
          comments: { $push: { comment: "$comment", user: "$user.name" } },
        },
      },
      { $unset: "_id" },
    ]);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};
