import { Plus } from "@phosphor-icons/react";
import "../../styles/global.css";
function OpenAdd() {
  return (
    <>
      <div className="mr-10">
        <button
          className="bg-zinc-200 size-10 flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
          onClick={() => console.log("Adicionar tarefa")}
        >
          <Plus className="text-zinc-900" size={32} />
        </button>
      </div>
    </>
  );
}

export default OpenAdd;
