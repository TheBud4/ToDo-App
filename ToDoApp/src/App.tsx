import "./ui/styles/global.css";
//import SearchBar from "./components/SearchBar";
import Tasks from "./ui/components/Tasks";
import TitleBar from "./ui/components/TitleBar";
import { useContext, useState } from "react";
import UserContext from "./data/contexts/UserContext";
import Login from "./ui/components/LoginModal";

function App() {
  const userContext = useContext(UserContext);
  const [register, setRegister] = useState(false);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { user } = userContext;

  return user ? (
    <div className="h-full w-full p-16 flex flex-col">
      <TitleBar />
      <Tasks />
    </div>
  ) : (
    <div className="flex flex-col w-full h-full p-16 justify-center items-center">
      <h1 className="text-4xl text-zinc-100">
        Faça login ou registre-se para continuar
      </h1>
      <Login />
      <div className="mt-10">
        Ou registre-se <a onClick={() => setRegister(true)}>aqui</a>
      </div>
    </div>
  );
}

export default App;
