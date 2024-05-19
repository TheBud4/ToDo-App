export interface Task {
  id: string;
  title: string;
  description: string; // Permitir que a descrição seja nula
  completed: boolean;
  dueDate: Date; // Permitir que a data de vencimento seja nula
  createdAt: Date; // Permitir que a data de criação seja nula
  userId: string;
}
