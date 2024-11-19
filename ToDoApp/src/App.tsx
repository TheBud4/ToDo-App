import "./ui/styles/global.css";
import Tasks from "./ui/components/Tasks";
import TitleBar from "./ui/components/TitleBar";
import { useContext, useState } from "react";
import UserContext from "./data/contexts/UserContext";
import LoginModal from "./ui/components/Login";
import RegisterModal from "./ui/components/Register";
  

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
        {register ? "Registre-se para continuar" : "Faça login para continuar"}
      </h1>
      {register ? <RegisterModal /> : <LoginModal />}
      <div className="mt-10">
        {register ? (
          <a onClick={() => setRegister(false)} className="cursor-pointer">
            Já tem uma conta? Faça login
          </a>
        ) : (
          <a onClick={() => setRegister(true)} className="cursor-pointer">
            Não tem uma conta? Registre-se
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
