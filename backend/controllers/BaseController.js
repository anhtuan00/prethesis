import { StatusCodes } from "http-status-codes";
import Company from "../models/Company.js";
import Feedback from "../models/Feedback.js";
import Internship from "../models/Internship.js";
import Job from "../models/Job.js";
import JobCatalog from "../models/JobCatalog.js";
import JobType from "../models/JobType.js";
import User from "../models/User.js";
import WorkCatalog from "../models/WorkCatalog.js";
import mongoose from "mongoose";

let TIME = {};

const updateTime = () => {
  const now = new Date();
  TIME = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
  };
};

const checkTimeUpdated = () => {
  const now = new Date();
  const { year, month, date } = TIME;
  return (
    year === now.getFullYear() &&
    month === now.getMonth() &&
    date === now.getDate()
  );
};

const getTomorrowDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

const MODELS = {
  Company,
  Feedback,
  Internship,
  Job,
  JobCatalog,
  JobType,
  User,
  WorkCatalog,
};

const getModel = (modelName) => MODELS[modelName];

const get = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      const { id } = req.params;
      let query = await m.findById(id);

      if (modelName === "User") {
        query = query.populate("HeadTeacher");
      }

      const result = await query;
      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const gets = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      let result;

      switch (modelName) {
        case "Internship":
          // if (!checkTimeUpdated()) {
          await m.updateMany(
            {
              InternStatus: { $eq: "In-progress" },
              InternCompleteDate: { $lt: getTomorrowDate() },
            },
            { $set: { InternStatus: "Completed" } }
          );
          //   updateTime();
          // }
          result = await m.aggregate(
            [
              req.user.role === "student" && {
                $match: {
                  Student: new mongoose.Types.ObjectId(req.user._id),
                },
              },
              req.user.role === "teacher" && [
                {
                  $lookup: {
                    from: MODELS.User.collection.collectionName,
                    localField: "Student",
                    foreignField: "_id",
                    as: "student",
                  },
                },
                { $unwind: "$student" },
                {
                  $match: {
                    "student.HeadTeacher": new mongoose.Types.ObjectId(
                      req.user._id
                    ),
                  },
                },
                { $unset: "student" },
              ],
              { $sort: { updatedAt: -1 } },
            ]
              .flat()
              .filter((v) => v)
          );
          break;
        case "User":
          switch (req.user.role) {
            case "teacher":
              result = await m.find({ HeadTeacher: req.user._id });
              break;
            default:
              result = await m.find();
          }
          break;
        default:
          result = await m.find();
      }

      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const filterWithPaging = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      const { search, jobType, jobCatalog, sort } = req.query;
      const $regex = new RegExp(search, "i");

      const result = await m.aggregate(
        [
          {
            $match: {
              $or: [{ JobTitle: { $regex } }, { JobDescription: { $regex } }],
            },
          },
          {
            $lookup: {
              from: MODELS.JobType.collection.collectionName,
              localField: "JobType",
              foreignField: "_id",
              as: "JobType",
            },
          },
          { $unwind: "$JobType" },
          jobType && { $match: { "JobType.Name": jobType } },
          {
            $lookup: {
              from: MODELS.JobCatalog.collection.collectionName,
              localField: "JobCatalog",
              foreignField: "_id",
              as: "JobCatalog",
            },
          },
          jobCatalog && {
            $match: { JobCatalog: { $elemMatch: { Name: jobCatalog } } },
          },
          {
            $lookup: {
              from: MODELS.Feedback.collection.collectionName,
              localField: "RecruitCompID",
              foreignField: "companyId",
              as: "feedbacks",
            },
          },
          { $addFields: { rate: { $avg: "$feedbacks.rate" } } },
          { $unset: "feedbacks" },
          sort === "rate" && { $sort: { rate: -1 } },
          { $addFields: { rate: { $round: ["$rate", 2] } } },
          {
            $lookup: {
              from: MODELS.Company.collection.collectionName,
              localField: "RecruitCompID",
              foreignField: "_id",
              as: "RecruitCompID",
            },
          },
          { $unwind: "$RecruitCompID" },
          sort === "applied" && [
            {
              $lookup: {
                from: MODELS.Job.collection.collectionName,
                localField: "RecruitCompID._id",
                foreignField: "RecruitCompID",
                as: "jobs",
              },
            },
            {
              $lookup: {
                from: MODELS.User.collection.collectionName,
                localField: "jobs._id",
                foreignField: "appliedInternship",
                as: "users",
              },
            },
            { $addFields: { applied: { $size: "$users" } } },
            { $sort: { applied: -1 } },
            { $unset: ["jobs", "users"] },
          ],
        ]
          .flat()
          .filter((v) => v)
      );

      res.status(StatusCodes.OK).json(result);

      /*let { pageSize, pageNumber, orderBy, ...filter } = req.query;
      // console.log(pageSize)
      // console.log(pageNumber)

      Object.keys(filter).forEach(key => {
        try {

          filter[key] = JSON.parse(filter[key])
        }
        catch {
          filter[key] = filter[key]
        }
      });

      // console.log(JSON.stringify(req.query))
      // console.log(JSON.stringify(filter))
      let query;
      if (filter !== null)
        query = m.find(filter);
      else
        query = m.find({});

      if (orderBy) {
        query = query.sort(orderBy);
      }
      pageSize = pageSize || 20;
      pageNumber = pageNumber || 1
      const skip = (pageNumber - 1) * pageSize;
      const result = await query.skip(skip).limit(pageSize).exec();

      // Count the total number of jobs that match the query object
      const total = await m.countDocuments(query);

      // Calculate the number of pages needed to display all the results
      const numOfPages = Math.ceil(totalJobs / limit);

      res.status(StatusCodes.OK).json({data: result, totalPage: numOfPages, totalRecord: total});*/
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const create = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      const data = req.body;

      if (modelName === "Internship") {
        if (data.Job) {
          const student = await MODELS.User.findById(data.Student);
          student.appliedInternship = student.appliedInternship.concat(
            data.Job
          );
          await student.save();
        } else {
          data.Student = req.user._id;
          data.Company = "63f333a40b7ce2458b3796bb";
        }
      }

      const result = await m.create(data);
      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const update = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      const { id } = req.params;
      const data = req.body;
      const result = await m.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...data,
          },
        },
        {
          // Return the updated document as the result
          new: true,
          // Run the validators on the update operation
          runValidators: true,
        }
      );

      if (
        modelName === "Internship" &&
        req.user.role === "student" &&
        data.IsChosen
      ) {
        const items = await m.find({ Student: req.user._id });
        for (const item of items) {
          if (item.IsChosen && item._id.toString() !== data._id) {
            item.IsChosen = false;
            await item.save();
          }
        }
      }

      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const Delete = (modelName) => {
  return async (req, res) => {
    try {
      const m = getModel(modelName);
      const { id } = req.params;
      const data = await m.findOneAndDelete({ _id: id });

      if (modelName === "Internship") {
        const student = await MODELS.User.findById(data.Student);
        student.appliedInternship = student.appliedInternship.filter((id) => {
          return id.toString() !== data.Job?.toString();
        });
        await student.save();
      }

      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

export { get, gets, filterWithPaging, create, update, Delete };
