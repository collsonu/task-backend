import { check } from "express-validator";
import  formValidation from "./other.validator";
const validations = {
    taskValidate: [
        check("title")
            .notEmpty().withMessage("Title is required"),
        check("description")
            .notEmpty().withMessage("Description is required"),
        check("dueDate")
            .notEmpty().withMessage("Due Date is required"),
        check("status")
            .notEmpty().withMessage("status is required"),

        formValidation,
    ],
};

export default validations;
