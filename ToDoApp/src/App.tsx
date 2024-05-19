import "../styles/global.css";
//import SearchBar from "./components/SearchBar";
import Tasks from "./components/Tasks";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <TitleBar />
      {/* <Tasks /> */}
    </div>
  );
}

export default App;
