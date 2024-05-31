import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { User } from "./Interfaces";
import { randomBytes } from "crypto";

const router = express.Router();
const prisma = new PrismaClient();

// GET /users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users: User[] = await prisma.user.findMany({
      include: {
        tasks: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// GET /users/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user: User | null = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        tasks: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

//LOGIN /users/login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        tasks: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({
      message: "Login bem-sucedido",
      userid: user.id,
    });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao fazer login" });
  } finally {
    await prisma.$disconnect();
  }
});

// POST /users  //todo: implementar a validação de email
router.post("/", async (req: Request, res: Response) => {
  try {
    const createdUser: User = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        tasks: undefined,
      },
      include: {
        tasks: true,
      },
    });
    res.status(201).json({
      msg: "Usuario criado com sucesso",
    });
  } catch (err) {
    res.status(500).json({
      msg: "Erro ao criar usuário",
      error: err,
    });
  }
});

// TODO: IMPLEMENTAR DELETE

// PUT NAO FOI NECESSARIO

// DELETE /users/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    await prisma.$transaction([
      prisma.task.deleteMany({
        where: { userId: userId },
      }),
      prisma.user.delete({
        where: { id: userId },
      }),
    ]);

    res.json({ msg: "Usuário e tarefas excluídos com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao excluir usuário e tarefas", error: error });
  }
});

export default router;
