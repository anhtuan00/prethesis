import mongoose from "mongoose";

// This function establishes a connection to the database
// at the specified URL using the mongoose library.
const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
