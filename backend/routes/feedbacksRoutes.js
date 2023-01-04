import express from "express";
const router = express.Router();

import {
  createFeedback, // function for creating a new feedback
  deleteFeedback, // function for deleting a feedback
  getAllFeedbacks, // function for getting all feedbacks
  updateFeedback, // function for updating a feedback
} from "../controllers/feedbacksController.js";

// When a POST request is made to the '/' route, call the createFeedback function
// When a GET request is made to the '/' route, call the getAllFeedbacks function
router.route("/").post(createFeedback).get(getAllFeedbacks);

// When a DELETE request is made to the '/:id' route, call the deleteFeedback function
// When a PATCH request is made to the '/:id' route, call the updateFeedback function
router.route("/:id").delete(deleteFeedback).patch(updateFeedback);

export default router;
