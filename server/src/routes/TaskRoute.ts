import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Task } from "./Interfaces";
import { title } from "process";

const router = express.Router();
const prisma = new PrismaClient();

// GET /tasks --Feito
router.get("/", async (req: Request, res: Response) => {
  const tasks: Task[] = await prisma.task.findMany();
  res.json(tasks);
});

// GET /tasks/:id --Feito
router.get("/:id", async (req: Request, res: Response) => {
  const task: Task | { msg: string } = await prisma.task
    .findMany({
      where: {
        id: req.params.id,
      },
    })
    .then((tasks) => {
      return tasks.length === 0 ? { msg: "Tarefa não encontrada" } : tasks[0];
    });
  res.json(task);
});

// POST /tasks  --A fazer
router.post("/", async (req: Request, res: Response) => {
  try {
    const createdTask: Task = await prisma.task.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        completed: false,
        dueDate: req.body.dueDate,
        userId: req.body.userId,
      },
    });
    res.status(201).json({
      msg: "Tarefa criada com sucesso",
    });
  } catch (err) {
    res.status(500).json({
      msg: "Erro ao criar Tarefa",
      error: err,
    });
  }
});

// PUT /tasks/:id  --A fazer
router.put("/:id", (req: Request, res: Response) => {
  // Lógica para atualizar uma tarefa pelo ID
  const taskId = req.params.id;
  res.send(`Tarefa ${taskId} atualizada`);
});

// DELETE /tasks/:id --A fazer
router.delete("/:id", (req: Request, res: Response) => {
  // Lógica para excluir uma tarefa pelo ID
  const taskId = req.params.id;
  res.send(`Tarefa ${taskId} excluída`);
});

export default router;
