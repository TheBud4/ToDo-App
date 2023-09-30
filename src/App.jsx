import "./App.css";
import AddToDo from "./components/AddToDo";
function App() {
  return (
    <>
      <header>
      <h1>Lista de Afazeres</h1>
      <AddToDo/>
      </header>
      <div className="Divider"></div>
      <div className="Container">

      </div>
    </>
  );
}

export default App;
