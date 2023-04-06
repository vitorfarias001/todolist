import { Request, Response } from 'express';
import TaskModel, { Task } from '../models/index';

interface ErrorResponse {
    message: string;
}


const createTask = async (req: Request, res: Response): Promise<void> => {
    const { description } = req.body;

    try {
        const newTask: Task = new TaskModel({
            description
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: (error as ErrorResponse).message });
    }
};

export default createTask;
