import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

// This function handles the request to create a new job posting.
// It expects the request body to contain company, position, and other optional fields.
// If any of these fields are missing, it will throw a BadRequestError.
// Otherwise, it will create a new job in the database using the provided information
// and return the created job in the response.
const createJob = async (req, res) => {
  // Extract the position, company, and approve values from the request body
  const { position, company, approve = "unapproved" } = req.body;

  // Validate that all required fields are present in the request body
  if (!position || !company || !approve) {
    throw new BadRequestError("Please provide all values");
  }
  // Set the user ID of the authenticated user as the creator of the job
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// This function handles the request to retrieve a list of all jobs.
// It expects the request query to contain optional status, jobType, sort, search, page, and limit fields.
// It uses these query parameters to filter and sort the jobs and paginate the result.
// It returns the matching jobs, total number of jobs, and total number of pages in the response.
const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query;

  // Set the user ID of the authenticated user as the creator of the job
  const queryObject = {
    createdBy: req.user.userId,
  };
  // Add additional fields to the query object based on the provided query parameters
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }
  // NO AWAIT
  // Find all jobs that match the query object
  let result = Job.find(queryObject);

  // Sort the results based on the provided sort query parameter
  // If no sort parameter is provided, the results will not be sorted
  if (sort === "latest") {
    result = result.sort("-createdAt"); // sort by most recent first
  }
  if (sort === "oldest") {
    result = result.sort("createdAt"); // sort by oldest first
  }
  if (sort === "a-z") {
    result = result.sort("position"); // sort alphabetically by position field
  }
  if (sort === "z-a") {
    result = result.sort("-position"); // sort alphabetically by position field in reverse order
  }

  // Set up pagination by skipping and limiting the number of results
  // If no page or limit query parameters are provided, default to page 1 with 10 results per page
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  // Execute the query and store the results in the 'jobs' variable
  const jobs = await result;

  // Count the total number of jobs that match the query object
  const totalJobs = await Job.countDocuments(queryObject);

  // Calculate the number of pages needed to display all of the results
  const numOfPages = Math.ceil(totalJobs / limit);

  // Return the results, total number of jobs, and number of pages in the response
  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};

const updateJob = async (req, res) => {
  // Extract the job ID and company and position values from the request parameters and body, respectively
  const { id: jobId } = req.params;
  const { company, position, approve } = req.body;

  // Validate that all required fields are present in the request body
  if (!position || !company || !approve) {
    throw new BadRequestError("Please provide all values");
  }

  // Find the job with the given ID
  const job = await Job.findOne({ _id: jobId });

  // If no job is found with the given ID, throw a NotFoundError
  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  // Check if the authenticated user has permission to update the job
  checkPermissions(req.user, job.createdBy);

  // Update the job with the given ID using the provided company and position values
  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    // Return the updated document as the result
    new: true,
    // Run the validators on the update operation
    runValidators: true,
  });

  // Return the updated job in the response
  res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  // Extract the job ID from the request parameters
  const { id: jobId } = req.params;

  // Find the job with the specified ID in the database
  const job = await Job.findOne({ _id: jobId });

  // If no job was found, throw a NotFoundError
  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  // Check if the authenticated user is authorized to delete the job
  checkPermissions(req.user, job.createdBy);

  // Remove the job from the database
  await job.remove();

  // Return a success message in the response
  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

export { createJob, deleteJob, getAllJobs, updateJob };
