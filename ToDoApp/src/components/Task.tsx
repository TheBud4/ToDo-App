import { PencilSimple, Trash } from "@phosphor-icons/react";

const Task = () => {
  return (
    <div className="flex flex-row justify-between py-8 px-16 border-t border-zinc-500">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <h1 className="">titulo</h1>
          <p className="">descricao</p>
        </div>
        <div className="flex flex-col mr-16">
          <p>dataInicio</p>
          <p>dataFim</p>
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