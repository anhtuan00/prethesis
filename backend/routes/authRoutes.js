import express from "express";
const router = express.Router();

// Middleware for rate limiting the API requests
import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // maximum number of allowed requests from a single IP within the window time
  message: "Too many requests from this IP, please try again after 15 minutes",
});

// Importing the controllers for handling authentication routes
import { register, login, updateUser } from "../controllers/authController.js";

// Middleware for authenticating requests
import authenticateUser from "../middleware/auth.js";

// Rate limiting the register and login routes
router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);

// Requiring authentication for the updateUser route
router.route("/updateUser").patch(authenticateUser, updateUser);

export const authRouter = router;
