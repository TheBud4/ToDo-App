import express, { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET /tasks
router.get('/', async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', async (req: Request, res: Response) => {
  const task = await prisma.task.findMany({
    where: {
      id: req.params.id,
    },
  });
  res.json(task);
});

// POST /tasks
router.post('/', (req: Request, res: Response) => {
  // Lógica para criar uma nova tarefa
  res.send('Nova tarefa criada');
});

// PUT /tasks/:id
router.put('/:id', (req: Request, res: Response) => {
  // Lógica para atualizar uma tarefa pelo ID
  const taskId = req.params.id;
  res.send(`Tarefa ${taskId} atualizada`);
});

// DELETE /tasks/:id
router.delete('/:id', (req: Request, res: Response) => {
  // Lógica para excluir uma tarefa pelo ID
  const taskId = req.params.id;
  res.send(`Tarefa ${taskId} excluída`);
});

export default router;
