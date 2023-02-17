import express from "express";
import {
  create,
  Delete,
  filterWithPaging,
  get,
  gets,
  update,
} from "../controllers/BaseController.js";

export const baseRoute = (modelName) => {
  const router = express.Router();

  router.route("/").get(gets(modelName));
  router.route("/search").get(filterWithPaging(modelName));
  router.route("/:id").get(get(modelName));
  router.route("/:id").put(update(modelName));
  router.route("/").post(create(modelName));
  router.route("/:id").delete(Delete(modelName));

  return router;
};
