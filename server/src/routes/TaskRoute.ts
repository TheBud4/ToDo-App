import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Task } from "./Interfaces";

const router = express.Router();
const prisma = new PrismaClient();

// GET /tasks
router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks: Task[] = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      msg: "Erro ao buscar tarefas",
      error: err,
    });
  }
});

// GET /tasks/:id
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

// POST create task 
router.post("/create", async (req: Request, res: Response) => {
  const { title, description, dueDate } = req.body;
  
  try {
    await prisma.task.create({
      data: {
        title: title,
        description: description,
        completed: false,
        dueDate: dueDate,
      },
    });
    res.status(201).json({
      msg: "Tarefa criada com sucesso",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
    console.log(err);
  }
});

// PUT /tasks/:id  --A fazer
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const taskId: Task = await prisma.task.update({
      where: {
        id: req.params.id,
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        dueDate: req.body.dueDate,
      },
    });
    res.status(200).send(`Tarefa atualizada`);
  } catch (err) {
    res.status(404).json({
      msg: "Tarefa não encontrada",
      error: err,
    });
  }
});

// DELETE /tasks/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const task: Task = await prisma.task.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send(`Tarefa excluída com sucesso`);
  } catch (err) {
    res.status(404).json({
      msg: "Tarefa não encontrada",
      error: err,
    });
  }
});

export default router;
