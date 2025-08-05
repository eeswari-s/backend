import express from "express";
import {
  saveCompanyDetails,
  viewCompanyDetails,
  postJob,
} from "../Controllers/companyController.js";
import verifyToken from "../Middleware/auth.js"; // if protected routes

const router = express.Router();

// Save or Update Company Details
router.post("/save", verifyToken, saveCompanyDetails); // Protected
// Or use PUT for update if needed:
// router.put("/update", verifyToken, saveCompanyDetails);

// View Company Details
router.get("/me", verifyToken, viewCompanyDetails); // Protected

// Post a Job
router.post("/post-job", verifyToken, postJob); // Protected

export default router;