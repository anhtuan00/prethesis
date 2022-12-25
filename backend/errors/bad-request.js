import { StatusCodes } from "http-status-codes";

// Import the CustomAPIError class from the custom-api.js file
import CustomAPIError from "./custom-api.js";

// Create a new class called BadRequestError that extends the CustomAPIError class
class BadRequestError extends CustomAPIError {
  // Define a constructor method that takes in a message and calls the super constructor with that message
  constructor(message) {
    super(message);

    // Set the statusCode property of this instance to the BAD_REQUEST status code
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// Export the BadRequestError class as the default export
export default BadRequestError;
