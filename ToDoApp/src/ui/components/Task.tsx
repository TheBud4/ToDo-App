import { PencilSimple, Trash, Check } from "@phosphor-icons/react";
import { Task as TaskType } from "../../data/@types/TaskInterface";

const Task = ({
  title,
  description,
  createdAt,
  dueDate,
  completed,
}: TaskType) => {
  // Garantir que createdAt e dueDate sejam objetos Date
  const createdAtDate = new Date(createdAt);
  const dueDateDate = new Date(dueDate);

  return (
    <div className="flex flex-row justify-between py-8 px-16 border-t w-full h-28 border-zinc-500">
      {completed && (
        <div className="h-full mr-10 flex items-center">
          <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full">
            <Check className="text-white" weight="bold" size={23} />
          </div>
        </div>
      )}
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <h1 className="">{title}</h1>
          <p className="overflow-hidden w-8/12">{description}</p>
        </div>
        <div className="flex flex-col mr-14 w-full items-end">
          <p>Criada: {createdAtDate.toLocaleDateString("pt-BR")}</p>
          <p>Entrega: {dueDateDate.toLocaleDateString("pt-BR")}</p>
        </div>
      </div>
      <div className="flex">
        <button className="mr-4">
          <PencilSimple className="text-zinc-100" size={24} />
        </button>
        <button>
          <Trash className="text-zinc-100" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Task;
