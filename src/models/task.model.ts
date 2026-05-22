import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
}

const TaskSchema: Schema<ITask> = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;