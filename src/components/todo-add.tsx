export const TodoAddForm = () => {
  return (
    <div>
      <form action="/todo-add" method="get">
        <input class="text-input" name="title" type="text" />
        <button class="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
