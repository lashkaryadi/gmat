import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./src/routes/authRoutes.js";
import rateLimit from "express-rate-limit";

const app = express();
app.use(helmet());
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// General rate limiter for all API routes (except auth which has its own)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests
  message: { message: "Too many requests from this IP, please try again later." },
});

// Apply general limiter to all routes except auth (which has its own limits)
app.use(/\/(?!auth)/, generalLimiter);
app.use("/auth", authRoutes);

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error("CENTRAL ERROR:", err);
  const status = err.statusCode || 500;
  const msg = err.message || "Internal server error";
  // Never expose stack in prod
  res.status(status).json({ message: msg });
});

const start = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

start();
