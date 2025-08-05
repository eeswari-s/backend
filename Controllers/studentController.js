import Student from "../Models/studentModel.js";

// Create new student
export const createStudent = async (req, res) => {
    try {
        const {
            name,
            registerNumber,
            phone,
            email,
            dob,
            address,
            resumeLink,
            photoLink,
            skills,
            education,
            projects
        } = req.body;

        const newStudent = new Student({
            name,
            registerNumber,
            phone,
            email,
            dob,
            address,
            resumeLink,
            photoLink,
            skills,
            education,
            projects
        });

        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get student by ID
export const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Update student
export const updateStudent = async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body  // Accepts updates including registerNumber
            },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};