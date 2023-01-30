import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

// const getAllUsers = async (req, res) => {
//   const users = await User.find({ role: "user" });
//   res.status(StatusCodes.OK).json({ users });
// };

const getAllUsers = async (req, res) => {
  const { searchUsers, email, studentId, sort } = req.query;

  console.log("This is the request: ", req.query);

  const queryObject = { role: "user" };
  if (searchUsers) {
    queryObject.name = { $regex: searchUsers, $options: "i" };
  }

  if (email) {
    queryObject.email = { $regex: email, $options: "i" };
  }

  if (studentId) {
    queryObject.studentId = { $regex: studentId, $options: "i" };
  }
  let result = User.find(queryObject);
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }
 

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  // Execute the query and store the results in the 'users' variable
  const users = await result;

  // Count the total number of users that match the query object
  const totalUsers = await User.countDocuments(queryObject);

  // Calculate the number of pages needed to display all of the results
  const numOfPagesUsers = Math.ceil(totalUsers / limit);

  // Return the results, total number of users, and number of pages in the response
  res.status(StatusCodes.OK).json({ users, totalUsers, numOfPagesUsers });
};
export { getAllUsers };
