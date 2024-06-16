import { useState } from "react";

export function NewTodoForm (props) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        if(newItem === "") return
        e.preventDefault();
        props.onSubmit(newItem);
        setNewItem("");
      }

    return (
        <form action="" onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}