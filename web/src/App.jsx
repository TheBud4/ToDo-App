import "./App.css";
import plusIcon from "./assets/plus_icon.svg";
import xIcon from "./assets/closeIcon.svg";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "tag":
        setTag(value);
        break;
      default:
        break;
    }
  };

  const manageToDo = (event) => {
    event.preventDefault();

    // Create a new todo object
    const newTodo = {
      title: title,
      description: description,
      tag: tag,
    };

    // Update the todos state with the new todo
    setTodos([...todos, newTodo]);

    // Reset the form
    setTitle("");
    setDescription("");
    setTag("");
    closeAdd();
  };

  function openAdd() {
    setOpen(true);
  }

  function closeAdd() {
    setOpen(false);
  }

  return (
    <>
      <header>
        <h1>Lista de Afazeres</h1>
        <button className="addToDo" onClick={openAdd}>
          <img src={plusIcon} alt="Add" />
        </button>
      </header>
      <div className="Divider"></div>
      <div className="Container">
        <ul>
          {todos.map((todo, index) => (
            <li className="toDo"key={index}>
              <strong>Titulo:</strong> {todo.title} <br />
              <strong>Descricao:</strong> {todo.description} <br />
              <strong>Tag:</strong> {todo.tag}
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <div className="Background" id="bg">
          <div className="modalToDo">
            <div className="rightAlign">
              <button className="addToDo end" onClick={closeAdd}>
                <img src={xIcon} alt="fechar" />
              </button>
            </div>
            <form onSubmit={manageToDo}>
              <h2>Escreva aqui sua tarefa</h2>
              <input
                type="text"
                id="title"
                placeholder="Titulo"
                onChange={handleInputChange}
              />
              <textarea
                rows="1"
                id="description"
                placeholder="Descrição"
                onChange={handleInputChange}
              />
              <div className="containerSmall">
                <select id="tag" onChange={handleInputChange}>
                  <option value="">Selecione Aqui a Tag</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Estudo">Estudo</option>
                  <option value="Treino">Treino</option>
                  <option value="Lazer">Lazer</option>
                </select>
                <div className="rightAlign">
                  <input type="submit" value="Adicionar" className="add" />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
