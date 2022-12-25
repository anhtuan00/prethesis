// Import the HTTP status codes module
import { StatusCodes } from "http-status-codes";

// Import the CustomAPIError base class
import CustomAPIError from "./custom-api.js";

// Create the UnAuthenticatedError class that extends the CustomAPIError base class
class UnAuthenticatedError extends CustomAPIError {
  // Override the constructor of the base class to add the statusCode property to the UnAuthenticatedError class
  constructor(message) {
    // Call the constructor of the base class
    super(message);
    // Set the statusCode of the UnAuthenticatedError class to the unauthorized status code
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

// Export the UnAuthenticatedError class
export default UnAuthenticatedError;
