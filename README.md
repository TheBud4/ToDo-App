# ToDo-App

![ToDo-App](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Licença MIT](https://img.shields.io/badge/licença-MIT-blue)

## Descrição

O **ToDo-App** é uma aplicação web desenvolvida com o objetivo de auxiliar no gerenciamento de tarefas diárias. Permite adicionar, editar, remover e marcar tarefas como concluídas, proporcionando uma interface intuitiva para organizar suas atividades.

## Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas com descrições personalizadas.
- **Editar Tarefas**: Atualize informações de tarefas existentes.
- **Remover Tarefas**: Exclua tarefas que não são mais necessárias.
- **Marcar como Concluída**: Indique quais tarefas já foram finalizadas.
- **Visualizar Lista de Tarefas**: Veja todas as suas tarefas em uma lista organizada.

## Tecnologias Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [SQLite](https://www.sqlite.org/)
  - [Prisma](https://www.prisma.io/)

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/TheBud4/ToDo-App.git
   ```

2. **Configuração do Frontend**:

   - Navegue até o diretório do frontend:

     ```bash
     cd ToDo-App/ToDoApp
     ```

   - Instale as dependências:

     ```bash
     npm install
     ```

3. **Configuração do Backend**:

   - Navegue até o diretório do backend:

     ```bash
     cd ../server
     ```

   - Instale as dependências:

     ```bash
     npm install
     ```

   - Configure o banco de dados com o Prisma:

     ```bash
     npx prisma migrate dev
     ```

## Uso

1. **Inicie o Backend**:

   - No diretório `server`, execute:

     ```bash
     npm run dev
     ```

2. **Inicie o Frontend**:

   - No diretório `ToDoApp`, execute:

     ```bash
     npm run dev
     ```

3. **Acesse a Aplicação**:

   - Abra o navegador e vá para:

     ```
     http://localhost:5173/
     ```

## Estrutura do Projeto

```plaintext
ToDo-App/
├── ToDoApp/           # Código fonte do frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── server/            # Código fonte do backend
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── ...
├── README.md
└── LICENSE
```

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

Desenvolvido por [TheBud4](https://github.com/TheBud4) com o intuito de aprendizado e aprimoramento de habilidades em desenvolvimento web.
