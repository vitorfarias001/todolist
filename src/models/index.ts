import mongoose, { Document, Schema } from 'mongoose';

export interface Task extends Document {
    description: string;
    created_at: Date;
}

const TaskSchema: Schema = new Schema(
    {
        description: { type: String, required: true },
        created_at: { type: Date, default: Date.now }
    }
);

const TaskModel = mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;
