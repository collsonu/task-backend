import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description:{
        type: String,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
});

export const Task = mongoose.model("Task", taskSchema)
