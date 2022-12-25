class CustomAPIError extends Error {
  // CustomAPIError is a custom error class that extends the built-in Error class.
  // It is used to create specific error types that can be handled in the error handling middleware.

  // The constructor function is used to create and initialize an object created from a class.
  // In this case, it takes in a message parameter and passes it to the parent class (Error) using the super() method.
  // This allows the CustomAPIError object to have a message property that can be used to describe the error.
  constructor(message) {
    super(message);
  }
}

export default CustomAPIError;
