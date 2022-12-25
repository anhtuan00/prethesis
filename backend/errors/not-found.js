import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

// This class extends the base CustomAPIError class and sets the HTTP status code to 404 (Not Found)
class NotFoundError extends CustomAPIError {
  constructor(message) {
    // Call the constructor of the base class and pass the error message
    super(message);

    // Set the HTTP status code to 404
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

// Export the NotFoundError class so it can be used in other parts of the app
export default NotFoundError;
