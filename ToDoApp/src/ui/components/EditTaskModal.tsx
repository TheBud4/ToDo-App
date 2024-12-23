
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
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-40"
      onClick={handleBackdropClick}
    >
      <div className="w-96 h-96 bg-background-black rounded-lg shadow-lg p-8">
        <h1>Modal</h1>
      </div>
    </div>
  );
}

export default EditTaskModal;