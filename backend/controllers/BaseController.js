import { StatusCodes } from "http-status-codes";
import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Job from "../models/Job.js";
import JobCatalog from "../models/JobCatalog.js";
import JobType from "../models/JobType.js";
import User from "../models/User.js";
import WorkCatalog from "../models/WorkCatalog.js";

const MODELS = {
  Company,
  Internship,
  Job,
  JobCatalog,
  JobType,
  User,
  WorkCatalog,
};

const getModel = async (modelName) => MODELS[modelName];

const get = (modelName) => {
  return async (req, res) => {
    try {
      const m = await getModel(modelName);
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
      const m = await getModel(modelName);
      const result = await m.find();
      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const filterWithPaging = (modelName) => {
  return async (req, res) => {
    try {
      const m = await getModel(modelName);
      const { search, jobType, jobCatalog } = req.query;
      const $regex = new RegExp(search, "i");

      let result = await m
        .find({
          $or: [{ JobTitle: { $regex } }, { JobDescription: { $regex } }],
        })
        .populate("JobCatalog")
        .populate("JobType")
        .populate("RecruitCompID");

      if (jobType) {
        result = result.filter(({ JobType }) => JobType.Name === jobType);
      }

      if (jobCatalog) {
        result = result.filter(({ JobCatalog }) => {
          return JobCatalog.some(({ Name }) => Name === jobCatalog);
        });
      }

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
      const m = await getModel(modelName);
      const data = req.body;
      const result = await m.create(data);

      if (modelName === "Internship") {
        const student = await MODELS.User.findById(data.Student);
        student.appliedInternship = student.appliedInternship.concat(data.Job);
        await student.save();
      }

      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const update = (modelName) => {
  return async (req, res) => {
    try {
      const m = await getModel(modelName);
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

      res.status(StatusCodes.OK).json(result);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
};

const Delete = (modelName) => {
  return async (req, res) => {
    try {
      const m = await getModel(modelName);
      const { id } = req.params;
      const data = await m.findOneAndDelete({ _id: id });

      if (modelName === "Internship") {
        const student = await MODELS.User.findById(data.Student);
        student.appliedInternship = student.appliedInternship.filter((id) => {
          return id.toString() !== data.Job.toString();
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
