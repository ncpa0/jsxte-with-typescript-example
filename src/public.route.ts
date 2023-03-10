import express from "express";
import path from "path";

export const PublicRouter = express.Router();

PublicRouter.use("/", express.static(path.resolve(__dirname, "./public")));
