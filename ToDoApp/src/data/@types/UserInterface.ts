import { Task } from "./TaskInterface";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  tasks: Task[];
}
