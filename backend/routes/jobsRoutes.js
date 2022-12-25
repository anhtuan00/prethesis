import express from "express";
const router = express.Router();

import {
  createJob, // function for creating a new job
  deleteJob, // function for deleting a job
  getAllJobs, // function for getting all jobs
  updateJob, // function for updating a job
} from "../controllers/jobsController.js";

// When a POST request is made to the '/' route, call the createJob function
// When a GET request is made to the '/' route, call the getAllJobs function
router.route("/").post(createJob).get(getAllJobs);

// When a DELETE request is made to the '/:id' route, call the deleteJob function
// When a PATCH request is made to the '/:id' route, call the updateJob function
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
