// Import the jsonwebtoken library to verify the auth token
import jwt from "jsonwebtoken";

// Import the UnAuthenticatedError class
import {UnAuthenticatedError} from "../errors/index.js";

// Define the auth middleware function
const auth = async (req, res, next) => {
  // Get the authorization header from the request
  const authHeader = req.headers.authorization;

  // If the authorization header is not present or does not start with 'Bearer', throw an UnAuthenticatedError
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  // Get the token from the authorization header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the JWT secret
    // console.log("jwt: " + JSON.stringify(jwt));
    // console.log("payload: " + JSON.stringify(payload));
    // Add the userId from the payload to the request object
    req.user = jwt.verify(token, process.env.JWT_SECRET);

    // Call the next middleware function
    next();
  } catch (error) {
    // If there was an error verifying the token, throw an UnAuthenticatedError
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

// Export the auth middleware function
export default auth;
