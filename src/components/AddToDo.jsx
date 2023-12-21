
import plusIcon from "../assets/plus_icon.svg";
import xIcon from "../assets/closeIcon.svg";
import { useState } from "react";

export function AddToDo() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [todos, setTodos] = useState([]);
  function openAdd() {
    setOpen(true);
  }

  function closeAdd() {
    setOpen(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function manageToDo(event) {
    event.preventDefault();

    // Save the new todo to localStorage
    const newTodo = {
      title: formData.title,
      description: formData.description,
      tag: formData.tag,
    };

    const updatedTodos = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));

    // Update state to display the new todo
    setTodos(updatedTodos);

    closeAdd();
  }

  return (
    <>
      <button className="addToDo" onClick={openAdd}>
        <img src={plusIcon} alt="Add" />
      </button>
      {open ? (
        <div className="Background" id="bg">
          <div className="modalToDo">
            <div className="rightAlign">
              <button className="addToDo end" onClick={closeAdd}>
                <img src={xIcon} alt="fechar" />
              </button>
            </div>
            <form onSubmit={manageToDo}>
              
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="title"
                  title="title"
                  id="title"
                  name="title"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="title" className="form__label">
                  Titulo
                </label>
              </div>
              <span>Descrição:</span>
              <textarea
                rows="1"
                name="description"
                id="description"
                onChange={handleInputChange}
              />
              <span>Tag: </span>
              <div className="containerSmall">
                <select
                  name="tag"
                  id="tag"
                  onChange={handleInputChange}
                >
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

export default AddToDo;
