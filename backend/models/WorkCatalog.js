import mongoose from "mongoose";

const workCatalogSchema = new mongoose.Schema({
  Name: { type: String, maxLength: 200, require: true },
  Descriptions: { type: String, maxLength: 200 },
});

export default mongoose.model("workCatalog", workCatalogSchema);
