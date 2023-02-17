import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  // CompId: { type: String, maxlength: 8, unique: true },

  // UserId: { type: Schema.Types.ObjectId, ref: "user" },

  Name: { type: String, maxLength: 100 },
  Address: { type: String, maxLength: 50 },
  District: { type: String, maxLength: 8 },
  City: { type: String, maxLength: 25 },
  Country: { type: String, maxLength: 25 },
  Nationality: { type: String, maxLength: 25 },
  ContactPerson: { type: String, maxLength: 25 },
  ContactPerTel: { type: String, maxLength: 12 },
  // ContactPerEmail: { type: String, maxLength: 30 },
  ContactEmail: { type: String, maxLength: 30 },

  Rate: { type: Number },
  Logo: { type: String },

  WorkCatalogId: [{ type: mongoose.Schema.Types.ObjectId, ref: "workCatalog" }],

  // _id: { type: String },

  Description: { type: String, maxLength: 500 },
  // CreatedDate: { type: Date },
  // CreatedBy: { type: Schema.Types.ObjectId, ref: "user" },
});

export default mongoose.model("company", companySchema);
