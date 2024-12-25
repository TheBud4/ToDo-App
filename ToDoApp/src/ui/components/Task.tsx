import { useContext } from "react";
import { PencilSimple, Trash, Check } from "@phosphor-icons/react";
import { Task as TaskType } from "../../data/@types/TaskInterface";
import { TaskContext } from "../../context/TaskContext";

interface TaskProps extends TaskType {
  toggleEditModal: (isOpen: boolean) => void;
}

const Task = ({
  id,
  title,
  description,
  createdAt,
  dueDate,
  completed,
  toggleEditModal,
}: TaskProps) => {
  const taskContext = useContext(TaskContext);

  const handleDelete = () => {
    if (id) {
      taskContext?.RemoveTask(id);
      taskContext?.FetchTasks();
    }
  };
  const handleEditTask = () => {
    if (id) {
      taskContext?.setTaskId(id);
      toggleEditModal(true);
    }
  };

  // Garantir que createdAt e dueDate sejam objetos Date
  const createdAtDate = new Date(createdAt);
  const dueDateDate = new Date(dueDate);

  return (
    <div className="flex flex-row justify-between items-center gap-2 px-12 border-t w-full h-28 border-zinc-500">
      <div className="flex flex-row justify-start items-center w-6/12">
        <div className="h-full min-w-8 flex items-center">
          {completed && (
            <div className="bg-green-500 size-8 flex items-center justify-center rounded-full">
              <Check className="text-white" weight="bold" size={23} />
            </div>
          )}
        </div>
        <div className="flex flex-col ml-6">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="ml-2 overflow-hidden line-clamp-1">{description}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-betwwen">
        <div className="flex flex-col mr-6">
          <p>Criada: {createdAtDate.toLocaleDateString("pt-BR")}</p>
          <p>Entrega: {dueDateDate.toLocaleDateString("pt-BR")}</p>
        </div>
        <div>
          <button className="mr-4" onClick={handleEditTask}>
            <PencilSimple className="text-zinc-100" size={24} />
          </button>
          <button onClick={handleDelete}>
            <Trash className="text-zinc-100" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
