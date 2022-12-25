import { StatusCodes } from "http-status-codes";

// Middleware function to handle errors in the app
const errorHandlerMiddleware = (err, req, res, next) => {
  // Default error object to return in the response
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, // Use the status code specified in the error object, or 500 if not specified
    msg: err.message || "Something went wrong, try again later", // Use the message specified in the error object, or a default message if not specified
  };

  // If the error is a Mongoose validation error, set the status code to 400 (Bad Request)
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.msg = err.message
    // Get an array of error messages from the Mongoose validation error object, and join them into a single string
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  // If the error is a MongoDB duplicate key error, set the status code to 400 (Bad Request)
  // and set the error message to indicate which field must be unique
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  // Send the response with the appropriate status code and error message
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
