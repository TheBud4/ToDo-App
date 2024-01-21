import plusIcon from "./assets/plus_icon.svg";
import xIcon from "./assets/closeIcon.svg";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [todos, setTodos] = useState([]);

  function resetForm () {

    setTitle("");
    setDescription("");
    setTag("");
    closeAdd();

  }

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

    // Cria um novo objeto todo
    const newTodo = {
      title: title,
      description: description,
      tag: tag,
    };

    // Atualiza a lista de ToDos
    setTodos([...todos, newTodo]);

    resetForm();

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
            <form
              onSubmit={manageToDo}
              className="flex size-full flex-col justify-evenly "
            >
              <h2>Escreva aqui sua tarefa</h2>

              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-white  bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="title"
                  onChange={handleInputChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Titulo
                </label>
              </div>

              <div className="relative w-full min-w-[200px]">
                <textarea
                  rows="8"
                  className="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-dark-textColor outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="description"
                  onChange={handleInputChange}
                ></textarea>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-dark-textColor transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-dark-primaryColor before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-dark-primaryColor after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-dark-primaryColor peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-textColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-dark-textColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-dark-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-dark-textColor">
                  Descrição
                </label>
              </div>
              <div className="flex w-full justify-between py-1.5">
                <button
                  className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                ></button>
                <div className="flex gap-2">
                  <select
                    id="tag"
                    onChange={handleInputChange}
                    className="peer h-full w-full rounded-[7px] border border-dark-primaryColor bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-dark-textColor outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-dark-primaryColor empty:!bg-dark-primaryColor focus:border-2 focus:border-dark-primaryColor focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  >
                    <option value="">Selecione Aqui a Tag</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Treino">Treino</option>
                    <option value="Lazer">Lazer</option>
                  </select>
                  <button
                    className="px-4  font-sans text-xs font-bold text-center text-dark-textColor uppercase align-middle transition-all rounded-md select-none hover:bg-dark-primaryColor hover:text-dark-modalBgColor active:bg-dark-primaryColor disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                  >
                    Adicionar
                  </button>
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
