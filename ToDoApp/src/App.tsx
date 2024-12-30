import "./ui/styles/global.css";
import Tasks from "./ui/components/Tasks";
import TitleBar from "./ui/components/TitleBar";
import { TaskProvider } from "./context/TaskContext";
import { useState } from "react";
import EditTaskModal from "./ui/components/EditTaskModal";

function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEditModal = (isOpen: boolean) => setIsEditModalOpen(isOpen);

  return (
    <TaskProvider>
      <div className="h-full w-full p-16 flex flex-col">
        <TitleBar />
        <Tasks toggleEditModal={toggleEditModal} />
        <EditTaskModal
          isOpen={isEditModalOpen}
          toggleIsOpen={setIsEditModalOpen}
        />
      </div>
    </TaskProvider>
  );
}

export default App;
