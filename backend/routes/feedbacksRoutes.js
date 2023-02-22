import express from "express";
const router = express.Router();

import {
  getFeedbackByCompany,
  result,
} from "../controllers/feedbacksController.js";

const { get, gets, update, create, Delete, filterWithPaging, getbyCompanyId } =
  result;

router.route("/").get(gets);
router.route("/search").get(filterWithPaging);
router.route("/getbyCompanyId/:companyId").get(getbyCompanyId);
router.route("/:id").get(get);
router.route("/:id").put(update);
router.route("/").post(create);
router.route("/:id").delete(Delete);
router.route("/company/:id").get(getFeedbackByCompany);

export default router;
