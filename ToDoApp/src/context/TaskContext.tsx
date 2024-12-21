import React, { createContext, useState, ReactNode } from "react";
import { Task } from "../data/@types/TaskInterface";
import api from "../data/services/ApiConn";

interface TaskContextType {
  tasks: Task[];
  CreateTask: (task: Task) => Promise<boolean>;
  FetchTasks: () => Promise<void>;
  UpdateTask: (task: Task) => Promise<void>;
  RemoveTask: (id: string) => Promise<void>;
  ToggleTaskCompletion: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
    undefined
);

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

  const FetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const CreateTask = async (task: Task) => {
    try {
      await api.post("/tasks/create", task);
      return true;
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      return false;
    }
  };

  const UpdateTask = async (task: Task) => {
    try {
      await api.put(`/tasks/${task.id}`, task);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  const RemoveTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    }
  };

  const ToggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        CreateTask,
        FetchTasks,
        UpdateTask,
        RemoveTask,
        ToggleTaskCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
