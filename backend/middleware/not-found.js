// This middleware function is called when a request is made to a route that does not exist
const notFoundMiddleware = (req, res) => {
  // Respond with a 404 status code and a message that the route does not exist
  res.status(404).send("Route does not exist");
};

// Export the middleware function
export default notFoundMiddleware;
