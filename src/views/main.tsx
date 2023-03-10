import type { Todo } from "../adapters/todos.js";
import { TodoAddForm } from "../components/todo-add.js";
import { Html } from "../templates/html-tmpl.js";

export default (props: { todos: Todo[] }) => {
  return (
    <Html>
      <div class="main-container">
        <h1>TODO List</h1>
        <ul class="todos-list">
          {props.todos.map((todo) => (
            <li class="todo-entry">
              <span>{todo.title}</span>
              <div>
                <form action="/todo-delete" method="get">
                  <input type="hidden" name="id" value={todo.id} />
                  <button class="todo-entry-remove-btn btn" type="submit">
                    Delete
                  </button>
                </form>
                <p class="todo-entry-is-done-label">Is Done:</p>
                <form action="/todo-update-state" method="get">
                  <input type="hidden" name="id" value={todo.id} />
                  <input
                    type="hidden"
                    name="state"
                    value={todo.completed ? "0" : "1"}
                  />
                  <button class="todo-entry-update-state-btn" type="submit">
                    <span>{todo.completed ? "✅" : "❌"}</span>
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
        <TodoAddForm />
      </div>
    </Html>
  );
};
