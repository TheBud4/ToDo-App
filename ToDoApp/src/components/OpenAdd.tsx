import { useState } from "react";
import { Plus, X } from "@phosphor-icons/react";
import "../../styles/global.css";
function OpenAdd() {
  const [isOpen, setIsOpen] = useState(false);
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
      {isOpen ? (
        <div className="fixed inset-0 bg-zinc-700 bg-opacity-50 flex justify-center items-center">
          <div className="w-96 h-96 bg-zinc-800 flex flex-col p-4">
            <div className="flex flex-row justify-between">
              <h1 className="text-center">Adicionar Tarefa</h1>
              <button className="bg-zinc-200 ">
                <X className="text-zinc-900" size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OpenAdd;
