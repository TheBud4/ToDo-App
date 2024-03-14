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
router.post('/', async (req: Request, res: Response) => {
  try {
    const createdTask = await prisma.task.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        completed: false,
        dueDate: req.body.dueDate,
        userId: req.body.userId
      },
    });
    res.status(201).json({
      msg: "Task criada com sucesso",
    });
  } catch (err) {
    res.status(500).json({
      msg: "Erro ao criar Task",
      error: err,
    });
  }
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
