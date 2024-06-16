import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(
    () => {
      const localValue = localStorage.getItem("ITEMS");
      if(localValue == null) return [];
      return JSON.parse(localValue);
    }
  );

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])
  
  function addTodo(title) {
        
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
    setNewItem("");
  }
function toggleTodo(id, completed) {
  console.log('state free ', completed)
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        //todo.completed = completed;
        console.log('state',completed);
        return {...todo, completed}
      }
      return todo;
    })
  })
}

function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter( todo => todo.id !== id)
  })
}

  return (
    <>
     <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
