import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

import userRoutes from './routes/UserRoute';
import taskRoutes from './routes/TaskRoute';

dotenv.config();

const app = express();

app.use(express.json());


app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
  });

app.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server on na porta ${process.env.PORT_NUMBER}`);
  });