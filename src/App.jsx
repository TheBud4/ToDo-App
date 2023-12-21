import "./App.css";
import AddToDo from "./components/AddToDo";
import { useState, useEffect } from "react";

function App() {
  const [Savedtodos, setSavedTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from localStorage on component mount
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setSavedTodos(savedTodos);
  }, []);

  return (
    <>
      <header>
        <h1>Lista de Afazeres</h1>
        <AddToDo />
      </header>
      <div className="Divider"></div>
      <div className="Container">
        <ul>
          {Savedtodos.map((todo, index) => (
            <li key={index}>
              <strong>Title:</strong> {todo.title} <br />
              <strong>Description:</strong> {todo.description} <br />
              <strong>Tag:</strong> {todo.tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
