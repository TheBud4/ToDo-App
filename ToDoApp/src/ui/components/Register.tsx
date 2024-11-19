import { useState, FormEvent,useContext } from "react";
import UserContext from "../../data/contexts/UserContext"; // ajuste o caminho conforme necessário

const RegisterModal = () => {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

   if (!userContext) {
     throw new Error("UserContext must be used within a UserProvider");
   }

  const { register } = userContext;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-32 flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col gap-2">
        <label>Nome:</label>
        <input
          type="text"
          className="bg-gray-50 w-96 border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 block p-2.5 "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Email:</label>
        <input
          type="email"
          className="bg-gray-50 w-96 border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 block  p-2.5 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Senha:</label>
        <input
          type="password"
          className="bg-gray-50 w-96 border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 block  p-2.5 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-zinc-200 text-zinc-700 w-32 font-bold flex justify-center items-center py-2 rounded-lg  hover:bg-zinc-100 "
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterModal;
