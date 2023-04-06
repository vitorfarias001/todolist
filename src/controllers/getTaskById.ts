import { Request, Response } from 'express';
import TaskModel from '../models/index';

interface ErrorResponse {
    message: string;
}


const getTaskById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const task = await TaskModel.findById(id);
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({ error: (error as ErrorResponse).message });
    }
};

export default getTaskById;
