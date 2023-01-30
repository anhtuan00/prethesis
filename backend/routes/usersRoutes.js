import express from "express";
const router = express.Router();

import {
  getAllUsers, // function for getting all users
} from "../controllers/usersController.js";

// When a GET request is made to the '/' route, call the getAllUsers function
router.route("/").get(getAllUsers);

export default router;
