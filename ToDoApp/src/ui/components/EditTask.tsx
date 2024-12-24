import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../data/@types/TaskInterface";

interface EditTaskProps {
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditTask({toggleIsOpen}: EditTaskProps) {
  const taskContext = useContext(TaskContext);

  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false); // Estado para a checkbox

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const taskToEdit = taskContext?.tasks.find(
        (t) => t.id === taskContext?.taskId
      );
      if (taskToEdit) {
        setTask(taskToEdit);
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setDueDate(taskToEdit.dueDate.toString().split("T")[0]);
        setCompleted(taskToEdit.completed); 
      }
    };

    fetchTask();
  }, [taskContext?.taskId, taskContext]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!task) return;

    const updatedTask: Task = {
      ...task,
      title,
      description,
      dueDate: new Date(dueDate),
      completed, 
    };

    await taskContext?.UpdateTask(updatedTask);
    taskContext?.FetchTasks();
    toggleIsOpen(false);
  };

  if (!task) {
    return <div>Carregando tarefa...</div>;
  }

  return (
    <div className="flex flex-col p-6 h-full">
      <form
        className="w-full h-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Título e Data */}
        <div className="relative w-full flex-2 flex flex-row justify-between gap-x-2 items-center">
          <div
            className="overflow-x-auto"
            onClick={() => setIsEditingTitle(true)}
            onBlur={() => setIsEditingTitle(false)}
          >
            {isEditingTitle ? (
              <input
                type="text"
                className="text-xl font-semibold w-full bg-transparent border-none focus:outline-none focus:ring-0"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            ) : (
              <h2 className="text-xl font-semibold whitespace-nowrap ">
                {title || "Clique para adicionar um título"}
              </h2>
            )}
          </div>
          <input
            type="date"
            className="p-2 rounded bg-transparent border-none focus:outline-none focus:ring-0 "
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        {/* Descrição */}
        <div
          className="flex-1 h-5/6 overflow-y-auto"
          onClick={() => setIsEditingDescription(true)}
          onBlur={() => setIsEditingDescription(false)}
        >
          {isEditingDescription ? (
            <textarea
              className="resize-none w-full h-full bg-transparent border-none focus:outline-none focus:ring-0"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoFocus
            />
          ) : (
            <p className="whitespace-no-wrap">
              {description || "Clique para adicionar uma descrição"}
            </p>
          )}
        </div>
        {/* Checkbox Concluído */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-4">
            <input
              type="checkbox"
              className="w-6"
              checked={completed}
              onChange={() => setCompleted((prev) => !prev)} 
            />
            <label htmlFor="completed">Concluído</label>
          </div>
          <button
            type="submit"
            className="flex-2 bg-zinc-200 text-zinc-700 w-32 font-bold flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
