import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

// This function handles the request to register a new user.
// It expects the request body to contain name, email, and password fields.
// If any of these fields are missing, it will throw a BadRequestError.
// If the provided email is already in use, it will throw a BadRequestError.
// Otherwise, it will create a new user in the database using the provided information,
// generate a JSON Web Token (JWT) for the user, and return the token and user information in the response.
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate that all required fields are present in the request body
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  // Check if a user with the provided email already exists in the database
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  // Create a new user in the database using the provided information
  const user = await User.create({ name, email, password });

  // Generate a JSON Web Token (JWT) for the user
  const token = user.createJWT();

  // Return the token and user information in the response
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

// This function handles the request to log in an existing user.
// It expects the request body to contain email and password fields.
// If any of these fields are missing, it will throw a BadRequestError.
// If no user with the provided email exists in the database, it will throw an UnAuthenticatedError.
// If the provided password is incorrect, it will throw an UnAuthenticatedError.
// Otherwise, it will generate a JSON Web Token (JWT) for the user, and return the token and user information in the response.
const login = async (req, res) => {
  // Destructure the email and password from the request body
  const { email, password } = req.body;

  // Validate that all required fields are present in the request
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  // Find a user with the provided email and select their password field
  const user = await User.findOne({ email }).select("+password");
  // If no user is found, throw an error
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  // Compare the provided password with the hashed password stored in the database
  const isPasswordCorrect = await user.comparePassword(password);
  // If the passwords do not match, throw an error
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  // Create a JWT for the user
  const token = user.createJWT();
  // Remove the password field from the user object
  user.password = undefined;
  // Send the user object, JWT, and location in the response
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  // Destructure the fields from the request body
  const { email, name, lastName, location, studentId } = req.body;
  // Validate that all required fields are present
  if (!email || !name || !lastName || !location || !studentId) {
    throw new BadRequestError("Please provide all values");
  }
  // Find the user by the userId in the request object
  const user = await User.findOne({ _id: req.user.userId });
  // Update the user's fields with the provided values
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  user.studentId = studentId;
  // Save the updated user object to the database
  await user.save();
  // Remove the password field from the user object
  user.password = undefined;
  // Generate a JWT for the user
  const token = user.createJWT();
  // Send the user object, JWT, and location in the response
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login, updateUser };
