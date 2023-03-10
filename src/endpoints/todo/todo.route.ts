import { Router } from "express";
import { TodoController } from "../../adapters/todos.js";

const assertQueryParams = <P extends string[]>(
  query: object,
  ...params: P
): query is Record<P[number], string> => {
  for (const param of params) {
    if (!(param in query) || typeof (query as any)[param] !== "string")
      return false;
  }
  return true;
};

export const TodoRouter = Router();

TodoRouter.get("/", (_, res) => {
  res.render("main", { todos: TodoController.readAll() });
});

TodoRouter.get("/todo-add", (req, res) => {
  const query = req.query;
  if (assertQueryParams(query, "title")) {
    TodoController.create(query.title);
    res.redirect("/");
  } else {
    res.status(400).render("bad-request");
  }
});

TodoRouter.get("/todo-update-state", (req, res) => {
  if (assertQueryParams(req.query, "id", "state")) {
    TodoController.update(req.query.id, {
      completed: req.query.state === "1",
    });
    res.redirect("/");
  } else {
    res.status(400).render("bad-request");
  }
});

TodoRouter.get("/todo-delete", (req, res) => {
  if (assertQueryParams(req.query, "id")) {
    TodoController.delete(req.query.id);
    res.redirect("/");
  } else {
    res.status(400).render("bad-request");
  }
});
