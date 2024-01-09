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
    <div className="font-body">
      <header className="flex justify-between w-11/12">
        <h1 className="text-5xl">Lista de Afazeres</h1>
        <button
          className="bg-dark-primaryColor size-9 flex rounded-sm"
          onClick={openAdd}
        >
          <img src={plusIcon} alt="Add" />
        </button>
      </header>
      <div className="bg-dark-primaryColor h-px my-6 w-11/12"></div>
      <div className="Container">
        <ul>
          {todos.map((todo, index) => (
            <li className="toDo" key={index}>
              <strong>Titulo:</strong> {todo.title} <br />
              <strong>Descricao:</strong> {todo.description} <br />
              <strong>Tag:</strong> {todo.tag}
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <div
          className="size-full bg-dark-backGround fixed inset-0 flex bg-center items-center justify-center"
          id="bg"
        >
          <div className="bg-dark-modalBgColor size-[40rem] flex flex-col px-16 py-8">
            <button
              className="bg-dark-primaryColor size-8 rounded-sm ml-[100%]"
              onClick={closeAdd}
            >
              <img src={xIcon} alt="fechar" />
            </button>
            <form onSubmit={manageToDo} className="flex size-full flex-col justify-evenly ">
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
                  <input
                    type="submit"
                    value="Adicionar"
                    className="bg-dark-primaryColor text-dark-backGround"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
