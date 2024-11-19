import { useContext, useState } from "react";
import { Plus, X } from "@phosphor-icons/react";
import "../styles/global.css";
import { Task } from "../../data/@types/TaskInterface";
import api from "../../data/services/ApiConn";
import UserContext from "../../data/contexts/UserContext";

function AddTask() {
  const userContext = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const { user } = userContext;

const CreateTask = async (taskData: Task) => {
  try {
    const response = await api.post("/tasks/", taskData);
    console.log("Task created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    return null;
  }
};


  const handleSubmit = async () => {
    const newTask: Task = {
      id: "",
      title,
      description,
      createdAt: new Date(),
      dueDate: new Date(dueDate),
      completed: false,
      userId: user?.id || "",
    };    
    const createdTask = await CreateTask(newTask);
    
    if (createdTask) {
      console.log("Task created successfully:", createdTask);
      setIsOpen(true); //Mudar para false depois do teste
      setTitle("");
      setDescription("");
      setDueDate("");
    } else {
      console.error("Failed to create task.");
    }
  };

  return (
    <>
      <div className="mr-10">
        <button
          className="bg-zinc-200 size-10 flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="text-zinc-900" size={32} />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-zinc-700 bg-opacity-50 flex justify-center items-center">
          <div className="w-96 h-96 bg-zinc-800 flex flex-col p-4">
            <div className="flex flex-row justify-between">
              <h1 className="text-center text-zinc-100">Adicionar Tarefa</h1>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-zinc-100" size={24} />
              </button>
            </div>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
              <input
                className="p-2 border border-gray-300 rounded text-zinc-800"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                className="text-zinc-800 p-2 border border-gray-300 rounded resize-none"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded text-zinc-800"
                placeholder="Data"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                
              />
              <button
                type="submit"
                className="bg-zinc-200 text-zinc-700 w-32 font-bold flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
              >
                Adicionar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTask;
