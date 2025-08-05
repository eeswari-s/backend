import express from "express";
import { 

  approveCompany,
  rejectCompany,
  getAllCompanies,
  getAllStudents,
  getAllJobs,
  generateReport

} from "../Controllers/AdminController.js";
import { protect, adminOnly ,} from "../Middleware/Admin.js";
import { createAdmin } from '../Controllers/AdminController.js';

const router = express.Router();


// ✅ Approve or Reject Company
router.put("/companies/:companyId/approve", protect, adminOnly, approveCompany);
router.put("/companies/:companyId/reject", protect, adminOnly, rejectCompany);

// ✅ View all Companies, Students, Jobs
router.get("/companies", protect, adminOnly, getAllCompanies);
router.get("/students", protect, adminOnly, getAllStudents);
router.get("/jobs", protect, adminOnly, getAllJobs);

router.post('/create', createAdmin);

// ✅ Generate Placement Report
router.get("/reports", protect, adminOnly, generateReport);
























export default router;