import { Request, Response } from 'express';
import TaskModel from '../models/index';

interface ErrorResponse {
    message: string;
}

const getTasks = async (_req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: (error as ErrorResponse).message });
    }
};

export default getTasks;
