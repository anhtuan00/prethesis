import express from "express";

import { authRouter } from "./authRoutes.js";
import { baseRoute } from "./baseRoute.js";
import authenticateUser from "../middleware/auth.js";
import feedbackRoute from "./feedbacksRoutes.js";

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

const auths = ["internship", "user"];

modelNames.forEach((name) => {
  route.use(
    `/${name}`,
    auths.includes(name)
      ? authenticateUser
      : (_, __, next) => {
          next();
        },
    baseRoute(name[0].toUpperCase() + name.slice(1))
  );
});

route.use("/feedback", feedbackRoute);

export const rootRouter = route;
