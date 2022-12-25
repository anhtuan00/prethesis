// Import the fs/promises module for reading a file
import { readFile } from "fs/promises";

// Import dotenv for configuration of environment variables
import dotenv from "dotenv";
dotenv.config();

// Import the function to connect to the database
import connectDB from "./db/connect.js";
// Import the Job model
import Job from "./models/Job.js";

// Start the populate process
const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URL);
    // Delete any existing jobs in the database
    await Job.deleteMany();
    // Read the contents of the mock data file
    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    // Create new jobs in the database using the mock data
    await Job.create(jsonProducts);
    console.log("Success!!!");
    // Exit the process with a success code
    process.exit(0);
  } catch (error) {
    // Log the error and exit the process with a failure code
    console.log(error);
    process.exit(1);
  }
};

// Start the populate process
start();
