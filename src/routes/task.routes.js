import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";
// import {validations} from "../validators/task.validator.js";


const router = Router()

router.post('/create-task', /*validations.taskValidate,*/ createTask);


export default router;