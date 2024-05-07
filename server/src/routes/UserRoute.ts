import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { User } from "./Interfaces";

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
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// GET /users/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user: User = await prisma.user.findUnique({
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
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({ message: "Login bem-sucedido", userid: user.id });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: "Erro ao fazer login" });
  } finally {
    await prisma.$disconnect();
  }
});

// POST /users
router.post("/", async (req: Request, res: Response) => {
  try {
    const createdUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      },
    });
    res.status(201).json({
      msg: "Usuario criado com sucesso",
      user: createdUser,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Erro ao criar usuário",
      error: err,
    });
  }
});

// TODO: IMPLEMENTAR PUT E DELETE

// PUT /users/:id
router.put("/:id", (req: Request, res: Response) => {
  // Lógica para atualizar um usuário pelo ID
  const userId = req.params.id;
  res.send(`Usuário ${userId} atualizado`);
});

// DELETE /users/:id
router.delete("/:id", (req: Request, res: Response) => {
  // Lógica para excluir um usuário pelo ID
  const userId = req.params.id;
  res.send(`Usuário ${userId} excluído`);
});

export default router;
