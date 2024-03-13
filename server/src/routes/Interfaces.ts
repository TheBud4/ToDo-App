export interface User {
    id?: string;
    email: string;
    name?: string;
    password: string;
    tasks: Task[];
  }
  
  export interface Task {
    id?: string;
    title: string;
    content?: string;
    completed: boolean;
    dueDate?: Date;
  }
  