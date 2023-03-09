import mongoose from "mongoose";

const jobCatalogSchema = new mongoose.Schema({
  Name: { type: String, maxLength: 300, require: true },
  Descriptions: { type: String, maxLength: 300 },
});

export default mongoose.model("jobCatalog", jobCatalogSchema);
