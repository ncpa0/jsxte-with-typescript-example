import { Router } from "express";

export const NotFoundRoute = Router();

NotFoundRoute.get("*", (_, res) => {
  res.status(404).render("not-found");
});
