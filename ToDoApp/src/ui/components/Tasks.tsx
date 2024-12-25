import { useContext, useEffect } from "react";
import Task from "./Task";
import { TaskContext } from "../../context/TaskContext";

interface TasksProps {
  toggleEditModal: (isOpen: boolean) => void;
}

function Tasks({ toggleEditModal }: TasksProps) {

  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <h1>Não foi possível resgatar tarefas</h1>;
  }

  const { tasks, FetchTasks } = taskContext;

  useEffect(() => {
    FetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div className="mt-10 w-full" key={task.id}>
            <Task {...task} toggleEditModal={toggleEditModal} />
          </div>
        ))
      ) : (
        <h1>Nenhuma tarefa encontrada</h1>
      )}
    </div>
  );
}

export default Tasks;
