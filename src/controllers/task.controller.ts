import { Request, Response } from "express";
import Task, { ITask } from "../models/task.model";
import mongoose from "mongoose";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      message: 'Tasks fetched successfully',
      data: tasks
    });
  } catch (error: any) {
    console.log(`Error in getAllTasks controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID'
      });
    }

    const task: ITask | null = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task fetched successfully',
      data: task
    });

  } catch (error: any) {
    console.log(`Error in getTaskById controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    const newTask: ITask | null = await Task.create({ title, description });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: newTask
    });

  } catch (error: any) {
    console.log(`Error in createTask controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body || {};

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID'
      });
    }

    const queryParams: Partial<ITask> = {};
    if (title) queryParams['title'] = title;
    if (description) queryParams['description'] = description;

    if (Object.keys(queryParams).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one field (title or description) must be provided for update'
      });
    }

    const updatedTask: ITask | null = await Task.findByIdAndUpdate(id, queryParams, {
      new: true,
      runValidators: true
    });
    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask
    });

  } catch (error: any) {
    console.log(`Error in updateTask controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID'
      });
    }

    const deletedTask: ITask | null = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: deletedTask
    });

  } catch (error: any) {
    console.log(`Error in deleteTask controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

export const deleteAllTasks = async (req: Request, res: Response) => {
  try {
    await Task.deleteMany({});

    res.status(200).json({
      success: true,
      message: 'All tasks deleted successfully'
    });

  } catch (error: any) {
    console.log(`Error in deleteAllTasks controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}