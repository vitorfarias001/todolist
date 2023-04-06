import { Request, Response } from 'express';
import TaskModel, { Task } from '../models/index';

interface ErrorResponse {
    message: string;
}


const updateTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description, status } = req.body;

    try {
        const updatedTask: Task | null = await TaskModel.findByIdAndUpdate(
            id,
            { name, description, status },
            { new: true }
        );
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ error: `Task with id ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: (error as ErrorResponse).message });
    }
};

export default updateTask;
