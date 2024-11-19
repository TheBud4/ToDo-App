import AddTask from "./AddTask";
import "../styles/global.css";
import AccessProfile from "./SignOut";

function TitleBar() {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-16">
        <h1 className="text-4xl text-justify">Veja Aqui as suas tarefas!</h1>
        <div className="flex gap-4">
          <AccessProfile />
          <AddTask />
        </div>
      </div>
    </>
  );
}
export default TitleBar;
