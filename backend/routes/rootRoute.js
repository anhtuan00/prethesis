import express from "express";

import { authRouter } from "./authRoutes.js";
import { baseRoute } from "./baseRoute.js";

const route = express.Router();

route.use("/auth", authRouter);
// route.use("/jobs", authenticateUser, jobsRouter);
// route.use("/feedbacks", authenticateUser, feedbacksRouter);
// route.use("/users", authenticateUser, usersRouter);

const modelNames = [
  "company",
  "internship",
  "job",
  "jobCatalog",
  "jobType",
  "user",
  "workCatalog",
];

modelNames.forEach((name) => {
  route.use(`/${name}`, baseRoute(name[0].toUpperCase() + name.slice(1)));
});

export const rootRouter = route;
