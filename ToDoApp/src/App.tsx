import "./ui/styles/global.css";
//import SearchBar from "./components/SearchBar";
import Tasks from "./ui/components/Tasks";
import TitleBar from "./ui/components/TitleBar";

function App() {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <TitleBar />
      <Tasks />
    </div>
  );
}

export default App;
