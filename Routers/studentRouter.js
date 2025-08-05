import express from "express";
import { createStudent, getStudent, updateStudent } from "../Controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);
router.get("/:id", getStudent);
router.put("/update/:id", updateStudent);

export default router;