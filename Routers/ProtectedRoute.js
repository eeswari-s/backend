import express from "express";
import verifyToken from "../Middleware/auth.js";

const router = express.Router();

router.get("/student", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, this is the student page.` });
});

export default router;
