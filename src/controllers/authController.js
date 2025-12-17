// controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateOTP, hashOTP, verifyOTP } from "../utils/otp.js";
import { sendEmailOTP } from "../utils/email.js";
// import { sendPhoneOTP } from "../utils/whatsapp.js"; // not used anymore

// OTP expire time
const OTP_EXPIRE_MS = 10 * 60 * 1000; // 10 minutes

// JWT settings
const JWT_EXPIRES = "1d"; // best practice: default expiry 1 day
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.warn("Warning: JWT_SECRET is not set in .env");
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate phone format (simple validation)
function isValidPhone(phone) {
  const phoneRegex = /^[0-9+\-\s()]{10,15}$/; // Allow numbers, +, -, space, parentheses
  return phoneRegex.test(phone);
}

// Helper function to validate password strength
function isStrongPassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

// ------------------ SIGNUP ------------------
export async function signup(req, res) {
  try {
    console.log("Register body:", req.body);
    const { name, email, phone, password, role } = req.body;

    // Strong validation
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Additional validation
    if (typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ message: "Name must be at least 2 characters long" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    if (!isStrongPassword(password)) {
      return res.status(400).json({ message: "Password must be at least 8 characters with uppercase, lowercase, and number" });
    }

    // Check if role is valid
    const validRoles = ["student", "institute", "parent", "tutor", "jobseeker", "vendor", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role specified" });
    }

    // check existing by email or phone
    const exists = await User.findOne({ $or: [{ email }, { phone }] });
    if (exists) {
      return res.status(400).json({ message: "Email or phone already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12); // Increased salt rounds for better security

    // generate email OTP only
    const emailOTP = generateOTP();
    const emailOTPHash = hashOTP(emailOTP);
    const expiry = Date.now() + OTP_EXPIRE_MS;

    // create user (unverified email). We intentionally do NOT set phoneOTP fields.
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      password: hashedPassword,
      role,
      emailOTPHash,
      emailOTPExpires: expiry
      // phoneOTPHash and phoneOTPExpires are NOT created here
    });

    // send email OTP
    try {
      await sendEmailOTP(email, emailOTP);
    } catch (err) {
      console.error("Email send failed:", err?.message || err);
      // continue — you can implement resend logic on frontend/backend
    }

    // Issue JWT (even if user not verified), so frontend can store it and require verification before use
    const payload = { id: user._id.toString(), role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    return res.status(201).json({
      message: "Signup successful. Please verify your email OTP (check your email).",
      userId: user._id,
      token: token
    });
  } catch (err) {
    console.error("signup error:", err);
    // Don't expose internal errors to client
    if (err.name === 'MongoError' && err.code === 11000) {
      // Duplicate key error
      const field = Object.keys(err.keyPattern)[0];
      return res.status(400).json({ message: `${field} already exists` });
    }
    return res.status(500).json({ message: "Server error" });
  }
}

// ------------------ VERIFY EMAIL ------------------
export async function verifyEmail(req, res) {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.emailOTPHash || !user.emailOTPExpires)
      return res.status(400).json({ message: "No pending email OTP" });

    if (user.emailOTPExpires < Date.now())
      return res.status(400).json({ message: "Email OTP expired" });

    const ok = verifyOTP(otp, user.emailOTPHash);
    if (!ok) return res.status(400).json({ message: "Invalid OTP" });

    user.emailVerified = true;
    user.emailOTPHash = undefined;
    user.emailOTPExpires = undefined;
    await user.save();

    return res.json({ message: "Email verified successfully" });
  } catch (err) {
    console.error("verifyEmail error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ------------------ WHOAMI (validate token and return user info) ------------------
export async function whoami(req, res) {
  try {
    // The user is already attached to req object by the authenticateToken middleware
    const user = req.user;

    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      emailVerified: user.emailVerified,
      phoneVerified: user.phoneVerified
    });
  } catch (err) {
    console.error("whoami error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ------------------ (optional) VERIFY PHONE stub ------------------
// If you no longer want phone verification at all, remove this function and the route.
// For now it's commented out to show how it used to be.
// export async function verifyPhone(req, res) { ... }

// ------------------ LOGIN ------------------
export async function login(req, res) {
  try {
    const { identifier, password } = req.body;

    // Validation
    if (!identifier || !password) {
      return res.status(400).json({ message: "Provide identifier (email or phone) and password" });
    }

    if (typeof identifier !== 'string' || identifier.trim().length === 0) {
      return res.status(400).json({ message: "Invalid identifier format" });
    }

    if (typeof password !== 'string' || password.length < 1) {
      return res.status(400).json({ message: "Invalid password format" });
    }

    // Find by email or phone - normalize the identifier
    const searchIdentifier = identifier.toLowerCase().trim();
    const user = await User.findOne({
      $or: [{ email: searchIdentifier }, { phone: searchIdentifier }]
    });

    if (!user) {
      // Use generic message to prevent user enumeration
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if account is locked or disabled (you can add this field to the User model later)
    // if (user.isLocked) {
    //   return res.status(401).json({ message: "Account is locked" });
    // }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Use generic message to prevent user enumeration
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ONLY email verification is required now:
    if (!user.emailVerified) {
      return res.status(403).json({ message: "Please verify your email before logging in" });
    }

    // sign JWT
    const payload = { id: user._id.toString(), role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    // Don't return sensitive information like password
    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
