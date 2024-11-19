import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "../@types/UserInterface";
import api from "../services/ApiConn";

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })  
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/users/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post("/users/", { name, email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
