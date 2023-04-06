import express, { Application } from 'express';
import cors from 'cors';
import connectDB from './api/db';
import taskRoutes from './routes/routes';

const app: Application = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default server;
