import OpenAdd from "./OpenAdd";
import "../../styles/global.css";

function TitleBar() {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-16">
        <h1 className="text-4xl text-justify">Veja Aqui as suas tarefas!</h1>
        <OpenAdd />
      </div>
    </>
  );
}
export default TitleBar;
