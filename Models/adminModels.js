import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    dob: String,
    address: String,
    photoLink: String,
    skills: [String]  
    
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;