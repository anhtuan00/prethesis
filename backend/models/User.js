import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      default: "student",
    },
    name: { type: String },
    IDNumber: { type: String },
    DOB: { type: Date },
    Address: { type: String },
    District: { type: String },
    City: { type: String },
    Country: { type: String },
    Tel: { type: String },
    CourseNumber: { type: String },
    ClassCode: { type: String },
    ClassName: { type: String },
    Faculty: { type: String },
    HeadTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    appliedInternship: [{ type: mongoose.Schema.Types.ObjectId, ref: "job" }],
    AdmitDate: { type: Date },
    GradDate: { type: Date },
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
  const { _id, role } = this;
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

// This method compares a provided password to the password stored in the user instance it is called on.
// It hashes the provided password and compares it to the hashed password stored in the user's password field.
// If the two hashes match, the method returns true. Otherwise, it returns false.
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// This line exports the User model, which is based on the UserSchema and can be used to perform CRUD operations on the users collection in the database.
export default mongoose.model("user", UserSchema);
