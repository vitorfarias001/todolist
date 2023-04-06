import express from 'express';
import createTask from '../controllers/createTask';
import getTasks from '../controllers/getTasks';
import getTaskById from '../controllers/getTaskById';
import updateTask from '../controllers/updateTask';
import deleteTask from '../controllers/deleteTask';

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
