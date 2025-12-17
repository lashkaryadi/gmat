

import express from "express";
import rateLimit from "express-rate-limit";
import { signup, verifyEmail, login, whoami, forgotPassword, resetPassword } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// Strict rate limiter for sensitive auth actions
const strictAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests for sensitive actions
  message: { message: "Too many authentication attempts, please try again later." },
});

// Apply strict rate limiting to sensitive endpoints
router.post("/signup", strictAuthLimiter, signup);
router.post("/verify-email", strictAuthLimiter, verifyEmail);
router.post("/login", strictAuthLimiter, login);
router.get("/whoami", authenticateToken, whoami);

// Password reset routes
router.post("/forgot-password", rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit password reset requests
  message: { message: "Too many password reset attempts, please try again later." },
}), forgotPassword);
router.post("/reset-password", resetPassword);

export default router;

