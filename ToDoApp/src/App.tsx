import "../styles/global.css";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <div className="h-full w-56 bg-zinc-700">
        <h1 className="text-4xl text-center mt-14">Hello, World!</h1>
      </div>
      <div className="h-full p-16">
        <h1 className="text-4xl text-center mt-14">
          Veja Aqui as suas tarefas!
        </h1>
      </div>
    </div>
  );
}

export default App;
