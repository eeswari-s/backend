import Company from "../Models/companyModel.js";
import Job from "../Models/jobModel.js";
import Student from "../Models/studentModel.js"; 
import Admin from "../Models/adminModels.js";

//adin details
export const createAdmin = async (req, res) => {
  try {
      const {
          name,
          phone,
          email,
          dob,
          address,
          photoLink          
      } = req.body;

      const newAdmin = new Admin({
          name,
          phone,
          email,
          dob,
          address,
          photoLink
      });

      await newAdmin.save();
      res.status(201).json( {message: "Admin profile updated successfully", newAdmin});
  } catch (err) {
      res.status(400).json({ error: err.message });
      console.log(err);
  }
};
// ✅ Approve Company
export const approveCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) return res.status(404).json({ message: "Company not found" });

    company.status = "approved";
    await company.save();

    res.json({ message: "Company approved successfully", company });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Reject Company
export const rejectCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) return res.status(404).json({ message: "Company not found" });

    company.status = "rejected";
    await company.save();

    res.json({ message: "Company rejected successfully", company });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ View All Companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate("userId", "email");
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ View All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("userId", "email");
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ View All Jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("companyId", "name industry");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Generate Placement Report
export const generateReport = async (req, res) => {
  try {
    const totalCompanies = await Company.countDocuments({ status: "approved" });
    const totalStudents = await Student.countDocuments();
    const totalJobs = await Job.countDocuments();

    res.json({
      totalCompanies,
      totalStudents,
      totalJobs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};








































