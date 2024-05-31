import axios from "axios";
import { Task as task } from "../../data/@types/TaskInterface";
import Task from "./Task";
import { useEffect, useState } from "react";

const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3333/tasks/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    };

    getTasks();
  }, []);

  return tasks.map((task: task) => (
    <div className=" mt-12 w-full">
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        createdAt={task.createdAt}
        dueDate={task.dueDate}
        completed={task.completed}
        userId={task.userId}
      />
    </div>
  ));
}

export default Tasks;
