import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("Comida china");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      },
    ]);
    console.log(todos);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.key}>
              <label htmlFor="">
                <input type="checkbox" checked={todo.checked} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
