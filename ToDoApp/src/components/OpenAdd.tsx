import { useState } from "react";
import { Plus, X } from "@phosphor-icons/react";
import axios from "axios";
import "../../styles/global.css";

const CreateTask = async () => {
  try {
    const response = await axios.post("http://localhost:3333/tasks/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

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
              <button onClick={() => setIsOpen(false)}>
                <X className="text-zinc-100" size={24} />
              </button>
            </div>
            <form className="flex flex-col gap-4 mt-8">
              <input
                className="p-2 border border-gray-300 rounded"
                placeholder="Título"
              />
              <textarea
                className="text-zinc-800 p-2 border border-gray-300 rounded resize-none"
                placeholder="Descrição"
              />
              <input
                className="p-2 border border-gray-300 rounded"
                placeholder="Data"
              />
              <button className="bg-emerald-500 py-2 rounded-lg hover:bg-emerald-600">
                Adicionar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OpenAdd;
