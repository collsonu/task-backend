import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Task } from "../models/task.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const createTask = asyncHandler(async (req, res) => {

    const { title, description, dueDate, status } = req.body;

    const task = await Task.create({
        title,
        description,
        dueDate,
        status,
    })

    if (!createTask) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createTask, "Task Created Successfully")
    )

})


export {
    createTask,
}