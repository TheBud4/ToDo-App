import { PencilSimple, Trash } from "@phosphor-icons/react";
import { Task as task } from "../interfaces/TaskInterface";

const Task = (task: task) => {
  return (
    <div className="flex flex-row justify-between py-8 px-16 border-t w-full h-28 border-zinc-500">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <h1 className="">{task.title}</h1>
          <p className="overflow-hidden w-8/12">{task.description}</p>
        </div>
        <div className="flex flex-col mr-14 w-full items-end">
          <p>Criada: {task.createdAt.toLocaleDateString("pt-BR")}</p>
          <p>Entrega: {task.dueDate.toLocaleDateString("pt-BR")}</p>
        </div>
      </div>
      <div className="flex ">
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
