import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  completed: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema<ITask> = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;