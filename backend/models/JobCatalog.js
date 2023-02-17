import mongoose from "mongoose";

const jobCatalogSchema = new mongoose.Schema({
  Name: { type: String, maxLength: 200, require: true },
  Descriptions: { type: String, maxLength: 200 },
});

export default mongoose.model("jobCatalog", jobCatalogSchema);
