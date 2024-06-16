export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li key={todo.id}>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
