import { X } from "@phosphor-icons/react";
import AddTask from "./AddTask";

interface AddTaskModalProps {
  isOpen: boolean;
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  isOpen,
  toggleIsOpen,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      toggleIsOpen(false);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-zinc-700 bg-opacity-50 flex justify-center items-center "
      onClick={handleBackdropClick}
    >
      <div className="w-1/2 h-5/6 bg-background-black rounded-lg shadow-lg p-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-bold text-zinc-100">Adicionar Tarefa</h1>
          <button onClick={() => toggleIsOpen(false)}>
            <X className="text-zinc-100" size={24} />
          </button>
        </div>
        <AddTask toggleIsOpen={toggleIsOpen} />
      </div>
    </div>
  );
};

export default AddTaskModal;
