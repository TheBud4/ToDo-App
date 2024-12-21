import { useContext, useEffect } from "react";
import Task from "./Task";
import { TaskContext } from "../../context/TaskContext";

function Tasks() {
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
          <div className="mt-12 w-full" key={task.id}>
            <Task {...task} />
          </div>
        ))
      ) : (
        <h1>Nenhuma tarefa encontrada</h1>
      )}
    </div>
  );
}

export default Tasks;
