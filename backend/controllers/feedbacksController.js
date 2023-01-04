import Feedback from "../models/Feedback.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import User from "../models/User.js";

// This function handles the request to submit a new feedback.
// It expects the request body to contain fbstudentName, fbstudentId, fbstudentPhone, fbcompanyName, fbcompanyPhone, fbposition, fblocation, fbstartDate, fbendDate, and fbComment fields.
// If any of these fields are missing, it will throw a BadRequestError.
// Otherwise, it will create a new feedback in the database using the provided information
// and return the created feedback in the response.
const createFeedback = async (req, res) => {
  // Extract the feedback fields from the request body
  const {
    fbstudentName,
    fbstudentId,
    fbposition,
    fbstudentPhone,
    fbcompanyName,
    fblocation,
    fbcompanyPhone,
    fbstartDate,
    fbendDate,
    fbComment,
  } = req.body;

  // Validate that all required fields are present in the request body
  if (
    !fbstudentName ||
    !fbstudentId ||
    !fbstudentPhone ||
    !fbcompanyName ||
    !fbcompanyPhone ||
    !fbposition ||
    !fblocation ||
    !fbstartDate ||
    !fbendDate ||
    !fbComment
  ) {
    throw new BadRequestError("Please provide all values");
  }

  // Check if the user has already sent a feedback
  const user = await User.findOne({
    _id: req.user.userId,
    hasSentFeedback: true,
  });
  if (user) {
    throw new BadRequestError("You can only send one feedback");
  }

  // Set the user ID of the authenticated user as the creator of the feedback
  req.body.createdBy = req.user.userId;
  // Create a new feedback in the database using the provided information
  const feedback = await Feedback.create(req.body);

  // Update the user's hasSentFeedback field to true
  await User.findByIdAndUpdate(req.user.userId, { hasSentFeedback: true });

  res.status(StatusCodes.CREATED).json({ feedback });
};

// This function handles the request to retrieve a list of all feedbacks.
// It expects the request query to contain optional status, sort, search, page, and limit fields.
// It uses these query parameters to filter and sort the feedbacks and paginate the result.
// It returns the matching feedbacks, total number of feedbacks, and total number of pages in the response.
const getAllFeedbacks = async (req, res) => {
  // Set the user ID of the authenticated user as the creator of the feedback
  const queryObject = {
    createdBy: req.user.userId,
  };

  // Find all feedbacks that match the query object
  let result = Feedback.find(queryObject);

  // Set up pagination by skipping and limiting the number of results
  // If no page or limit query parameters are provided, default to page 1 with 10 results per page
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  // Execute the query and store the results in the 'feedbacks' variable
  const feedbacks = await result;

  // Count the total number of feedbacks that match the query object
  const totalFeedbacks = await Feedback.countDocuments(queryObject);

  // Calculate the number of pages needed to display all of the results
  const numOfPages = Math.ceil(totalFeedbacks / limit);

  // Return the results, total number of feedbacks, and number of pages in the response
  res.status(StatusCodes.OK).json({ feedbacks, totalFeedbacks, numOfPages });
};

// This function handles the request to update a feedback.
// It expects the request params to contain a feedback ID and the request body to contain the updated values.
// It first checks that the feedback exists and throws a NotFoundError if it does not.
// It then checks that the authenticated user has permission to update the feedback.
// If the user does not have permission, it throws a BadRequestError.
// Otherwise, it updates the feedback and returns the updated feedback in the response.
const updateFeedback = async (req, res) => {
  // Extract the feedback ID and updated values from the request params and body
  const { feedbackId } = req.params;
  const {
    fbstudentName,
    fbstudentId,
    fbstudentPhone,
    fbcompanyName,
    fbcompanyPhone,
    fbposition,
    fblocation,
    fbstartDate,
    fbendDate,
    fbComment,
    approve,
  } = req.body;

  // Find the feedback by its ID
  const feedback = await Feedback.findById(feedbackId);

  // If the feedback does not exist, throw a NotFoundError
  if (!feedback) {
    throw new NotFoundError("Feedback not found");
  }

  // Check that the authenticated user has permission to update the feedback
  checkPermissions(req.user.userId, feedback.createdBy);

  // Update the feedback with the provided values
  feedback.fbstudentName = fbstudentName;
  feedback.fbstudentId = fbstudentId;
  feedback.fbstudentPhone = fbstudentPhone;
  feedback.fbcompanyName = fbcompanyName;
  feedback.fbcompanyPhone = fbcompanyPhone;
  feedback.fbposition = fbposition;
  feedback.fblocation = fblocation;
  feedback.fbstartDate = fbstartDate;
  feedback.fbendDate = fbendDate;
  feedback.fbComment = fbComment;
  feedback.approve = approve;

  // Save the updated feedback to the database
  const updatedFeedback = await feedback.save();

  // Return the updated feedback in the response
  res.status(StatusCodes.OK).json({ feedback: updatedFeedback });
};

// This function handles the request to delete a feedback.
// It expects the request params to contain a feedback ID.
// It first checks that the feedback exists and throws a NotFoundError if it does not.
// It then checks that the authenticated user has permission to delete the feedback.
// If the user does not have permission, it throws a BadRequestError.
// Otherwise, it deletes the feedback and returns a success message in the response.
// This function handles the request to delete a feedback.
// It expects the request params to contain a feedback ID.
// If the feedback does not exist or the authenticated user is not the creator of the feedback, it will throw a NotFoundError.
// Otherwise, it will delete the feedback from the database and return the deleted feedback in the response.
const deleteFeedback = async (req, res) => {
  // Extract the feedback ID from the request params
  const { id: feedbackId } = req.params;

  // Find the feedback by its ID and the authenticated user's ID
  const feedback = await Feedback.findOne({
    _id: feedbackId,
    createdBy: req.user.userId,
  });

  // If the feedback does not exist, throw a NotFoundError
  if (!feedback) {
    throw new NotFoundError("Feedback not found");
  }

  // Delete the feedback from the database
  await feedback.remove();

  // Update the user's hasSentFeedback field to false
  await User.findByIdAndUpdate(req.user.userId, { hasSentFeedback: false });

  res.status(StatusCodes.OK).json({ feedback });
};


export { createFeedback, getAllFeedbacks, updateFeedback, deleteFeedback };
