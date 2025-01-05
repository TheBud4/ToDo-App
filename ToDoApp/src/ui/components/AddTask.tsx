import { useState, useContext } from "react";
import "../styles/global.css";
import { Task } from "../../data/@types/TaskInterface";
import { TaskContext } from "../../context/TaskContext";

interface AddTaskProps {
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTask({ toggleIsOpen }: AddTaskProps) {
  const taskContext = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(dueDate);
    
    if(dueDate != ""  && dueDate < new Date().toString()){
      alert("A data de entrega não pode ser menor que a data atual");
      return;
    }

    const newTask: Task = {
      title,
      description,
      createdAt: new Date(),
      dueDate: new Date(dueDate),
      completed: false,
    };

    const isCreated = await taskContext?.CreateTask(newTask);
    console.log(isCreated);
    if (isCreated) {
      toggleIsOpen(false);
      setTitle("");
      setDescription("");
      setDueDate("");
      taskContext?.FetchTasks();
    }
  };

  return (
    <div className="flex flex-col p-6 h-full">
      <form
        className="w-full h-full flex flex-col gap-4 "
        onSubmit={handleSubmit}
      >
        {/* Título e Data */}
        <div className="relative w-full bg-neutral-900 flex-2 flex flex-row justify-between gap-x-2 items-center">
          <input
            type="text"
            placeholder="Insira o título aqui"
            className="text-xl font-semibold w-full bg-transparent border-none focus:outline-none focus:ring-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <input
            type="date"
            className="p-2 rounded bg-neutral-900 border-none focus:outline-none focus:ring-0 "
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            
          />
        </div>
        {/* Descrição */}
        <div className="flex-1 h-5/6 overflow-y-auto">
          <textarea
            className="resize-none p-3 w-full h-full bg-neutral-900 border-none focus:outline-none focus:ring-0"
            value={description}
            placeholder="Insira a descrição aqui"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end">
          <button
            type="submit"
            className="flex-2 bg-zinc-200 text-zinc-700 w-32 font-bold flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
