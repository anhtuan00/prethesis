import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Define the schema for a User model
const UserSchema = new mongoose.Schema({
  name: {
    // The user's name
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    // The user's email address
    type: String,
    required: [true, "Please provide email"],
    // Validate that the email is in a proper format
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    // Enforce uniqueness for the email field
    unique: true,
  },
  password: {
    // The user's password
    type: String,
    required: [true, "Please provide password"],
    // Ensure that the password is at least 6 characters long
    minlength: 6,
    // Exclude the password field from the model's toJSON representation (so it is not included in responses)
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  lastName: {
    // The user's last name
    type: String,
    trim: true,
    maxlength: 20,
    // Set a default value for the lastName field
    default: "Last Name",
  },
  studentId: {
    type: String,
    unique: true,
    minlength: 11,
    maxlength: 11,
  },
  location: {
    // The user's location
    type: String,
    trim: true,
    maxlength: 20,
    // Set a default value for the location field
    default: "Your Location",
  },
  hasSentFeedback: {
    type: Boolean,
    default: false,
  },
});

// This middleware function is run before saving the user to the database.
// It hashes the user's password if it has been modified.
UserSchema.pre("save", async function () {
  // Check if the password field has been modified
  if (!this.isModified("password")) return;
  // Generate a salt value to use when hashing the password
  const salt = await bcrypt.genSalt(10);
  // Hash the password using the salt
  this.password = await bcrypt.hash(this.password, salt);
});

// This method generates a JSON Web Token (JWT) for the user instance it is called on.
// It signs the token using the JWT_SECRET from the environment variables and sets the token's expiration time to the value specified in the JWT_LIFETIME variable.
// The token contains the user's id as the payload, which can be used to identify the user on subsequent requests.
// The method returns the generated token.
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

// This method compares a provided password to the password stored in the user instance it is called on.
// It hashes the provided password and compares it to the hashed password stored in the user's password field.
// If the two hashes match, the method returns true. Otherwise, it returns false.
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// This line exports the User model, which is based on the UserSchema and can be used to perform CRUD operations on the users collection in the database.
export default mongoose.model("User", UserSchema);
