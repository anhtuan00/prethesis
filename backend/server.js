// Import express
import express from "express";
import cors from "cors";

// Create an express app
const app = express();

// Import dotenv to configure environment variables
import dotenv from "dotenv";
dotenv.config();

// Import the express-async-errors library to handle async errors in express routes
import "express-async-errors";

// Import morgan for request logging
import morgan from "morgan";

// Import helmet to secure the app with various HTTP headers
import helmet from "helmet";
// Import xss-clean to prevent cross-site scripting attacks
import xss from "xss-clean";
// Import mongo-sanitize to sanitize user input to prevent NoSQL injection attacks
import mongoSanitize from "express-mongo-sanitize";

// Import the function to connect to the database
import connectDB from "./db/connect.js";

// Import the route handlers for the auth and jobs routes
import { rootRouter } from "./routes/rootRoute.js";
// import authRouter from "./routes/authRoutes.js";
// import jobsRouter from "./routes/jobsRoutes.js";
// import feedbacksRouter from "./routes/feedbacksRoutes.js";
// import usersRouter from "./routes/usersRoutes.js";

// Import the middleware for handling not found routes and errors
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// Import the middleware to authenticate users
import authenticateUser from "./middleware/auth.js";

import swaggerUI from "swagger-ui-express";
import { swaggerDocument } from "./swagger/swaggerDocument.js";

// Use morgan for request logging in development mode
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Use express.json to parse JSON bodies in requests
app.use(express.json());
// Use helmet to secure the app with various HTTP headers
app.use(helmet());
// Use xss-clean to prevent cross-site scripting attacks
app.use(xss());
// Use mongo-sanitize to sanitize user input to prevent NoSQL injection attacks
app.use(mongoSanitize());

app.use("/api/v1", rootRouter);
// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/jobs", authenticateUser, jobsRouter);
// app.use("/api/v1/feedbacks", authenticateUser, feedbacksRouter);
// app.use("/api/v1/users", authenticateUser, usersRouter);

// Use the notFoundMiddleware for any requests that do not match any of the above routes
app.use(notFoundMiddleware);

// Use the errorHandlerMiddleware to handle any errors that occur during the request-response cycle
app.use(errorHandlerMiddleware);

// Set the port for the server to listen on, either from the environment variable or a default value of 5000
const port = process.env.PORT || 5000;

// Async function to start the server
const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URL);
    // Start the server and log a message once it is listening
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "*" }));

// Start the server
start();
