import { useState } from "react";
import "../styles/global.css";
import { Plus } from "@phosphor-icons/react";
import AddTaskModal from "./AddTaskModal";

function TitleBar() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModal = (isOpen: boolean) => setIsAddModalOpen(isOpen);
  
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-16">
        <h1 className="text-4xl text-justify">Veja Aqui as suas tarefas!</h1>
        <div className="flex gap-4">
          <div className="mr-10">
            <button
              className="bg-zinc-200 size-10 flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
              onClick={() => toggleAddModal(true)}
            >
              <Plus className="text-zinc-900" size={32} />
            </button>
          </div>
        </div>
      </div>
      <AddTaskModal isOpen={isAddModalOpen} toggleIsOpen={setIsAddModalOpen} />
    </>
  );
}
export default TitleBar;
