import { useState, useContext, FormEvent } from "react";
import UserContext from "../../data/contexts/UserContext";

const Login = () => {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { login } = userContext;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-32 flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col gap-2">
        <label>Email:</label>
        <input
          className="bg-gray-50 w-96 border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 block  p-2.5 "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Senha:</label>
        <input
          className="bg-gray-50 w-96 border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 block  p-2.5 "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-zinc-200 text-zinc-700 w-32 font-bold flex justify-center items-center py-2 rounded-lg hover:bg-zinc-100"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
