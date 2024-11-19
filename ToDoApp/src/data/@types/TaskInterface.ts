export interface Task {
  id: string | null;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  createdAt: Date;
  userId: string;
}
