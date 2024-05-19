import { Task as task } from "../interfaces/TaskInterface";
import Task from "./Task";

// const teste = {
//   title: "Teste",
//   description:
//     "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   createdAt: new Date(),
//   dueDate: new Date("2022-12-31"),
// };
function Tasks(tasks: task[]) {
  return tasks.map((task) => (
    <div className=" mt-12 w-full">
      <Task
        id="1" // Alterar para o valor correto
        title={task.title}
        description={task.description}
        createdAt={task.createdAt}
        dueDate={task.dueDate}
        completed={false} // Alterar para o valor correto
        userId="1" // Alterar para o valor correto
      />
    </div>
  ));
}

export default Tasks;
