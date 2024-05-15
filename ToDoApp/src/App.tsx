import "../styles/global.css";
import OptionsModal from "./components/OptionsModal";
import Tasks from "./components/Tasks";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <OptionsModal />
      <div className="h-full w-full p-16 flex flex-col">
        <TitleBar />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
