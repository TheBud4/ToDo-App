import "./ui/styles/global.css";
import Tasks from "./ui/components/Tasks";
import TitleBar from "./ui/components/TitleBar";
import { TaskProvider } from "./context/TaskContext";
function App() {

  return (
    <TaskProvider>
      <div className="h-full w-full p-16 flex flex-col">
        <TitleBar />
        <Tasks />
      </div>
    </TaskProvider>
  );
}

export default App;
