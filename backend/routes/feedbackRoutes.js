import express from "express";
const router = express.Router();

// Import the controllers for handling feedback requests
import {
  submitFeedback,
  deleteFeedback,
} from "../controllers/feedbackController";

// Import middleware for authenticating requests
import authenticateUser from "../middleware/auth.js";

// Define routes for handling feedback requests
router.route("/submit").post(authenticateUser, submitFeedback);
router.route("/:feedbackId").delete(authenticateUser, deleteFeedback);

export default router;
