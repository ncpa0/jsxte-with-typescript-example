import { randomUUID } from "crypto";

class Todo {
  constructor(
    private _id: string,
    private _title: string,
    private _completed: boolean
  ) {}

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get completed() {
    return this._completed;
  }

  updateTitle(title?: string) {
    if (title != null) {
      this._title = title;
    }
  }

  updateCompleted(completed?: boolean) {
    if (completed != null) {
      this._completed = completed;
    }
  }
}

export class TodoController {
  private static entities: Todo[] = [];

  static create(title: string) {
    const id = randomUUID();
    const todo = new Todo(id, title, false);
    TodoController.entities.push(todo);
    return todo;
  }

  static read(id: string) {
    return TodoController.entities.find((todo) => todo.id === id);
  }

  static readAll() {
    return TodoController.entities.slice();
  }

  static update(id: string, update: { title?: string; completed?: boolean }) {
    const todo = TodoController.read(id);
    if (!todo) {
      throw new Error(`Todo entity for ID[${id}] not found.`);
    }
    todo.updateTitle(update.title);
    todo.updateCompleted(update.completed);
    return todo;
  }

  static delete(id: string) {
    const index = TodoController.entities.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      TodoController.entities.splice(index, 1);
    }
  }
}

export type { Todo };
