import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    registerNumber: String,
    phone: String,
    email: String,
    dob: String,
    address: String,
    resumeLink: String,
    photoLink: String,
    skills: [String],
    education: String,
    projects: [
        {
            title: String,
            description: String,
            link: String,
        }
    ]
});

const Student = mongoose.model("Student", studentSchema);

export default Student;