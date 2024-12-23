import { X } from "@phosphor-icons/react";
import EditTask from "./EditTask";

interface EditTaskModalProps {
    isOpen: boolean;
    toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, toggleIsOpen }) => {
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
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-zinc-700 bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="w-1/2 h-5/6 bg-background-black rounded-lg shadow-lg p-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Editar Tarefa</h1>
          <button onClick={() => toggleIsOpen(false)}>
            <X className="text-white" size={24} />
          </button>
        </div>
        <EditTask />
      </div>
    </div>
  );
}

export default EditTaskModal;