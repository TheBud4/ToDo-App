export interface Task {
  id: string | null;
  title: string;
  description: string | null; // Permitir que a descrição seja nula
  completed: boolean;
  dueDate: Date | null; // Permitir que a data de vencimento seja nula
  createdAt: Date | null; // Permitir que a data de criação seja nula
  userId: string;
}

export interface User {
  id: string | null;
  email: string;
  name: string;
  password: string;
  tasks: Task[] | null;
}
