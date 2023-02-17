import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    Name: { type: String, maxLength: 35 },
    IDNumber: { type: String, maxLength: 15 },
    DOB: { type: Date },
    Add: { type: String, maxLength: 25 },
    District: { type: String, maxLength: 20 },
    City: { type: String, maxLength: 20 },
    Country: { type: String, maxLength: 20 },
    Email: { type: String },
    Tel: { type: String, maxLength: 12 },

    CourseNumber: { type: String, maxLength: 8 },
    ClassCode: { type: String, maxLength: 10 },
    ClassName: { type: String, maxLength: 20 },

    Faculty: { type: String, maxLength: 20 },
    HeadTeacher: { type: String, maxLength: 8 },
    AdmitDate: { type: Date },
    GradDate: { type: Date },

    Description: { type: String, maxLength: 500 },
    CreatedDate: { type: Date },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("student", studentSchema);
