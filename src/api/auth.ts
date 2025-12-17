// src/api/auth.ts
// API helpers for authentication
import { getToken } from "./jwt";

interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  };
}

export async function login(identifier: string, password: string) {
  const res = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ identifier, password }),
  });
  const data: LoginResponse = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
}

interface SignupResponse {
  message: string;
  userId: string;
  token: string;
}

export async function signup(payload: {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}) {
  const res = await fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  const data: SignupResponse = await res.json();
  if (!res.ok) throw new Error(data.message || "Signup failed");
  return data;
}

interface WhoamiResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  emailVerified: boolean;
  phoneVerified: boolean;
}

export async function whoami(): Promise<WhoamiResponse> {
  const token = getToken();
  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch("http://localhost:5000/auth/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });
  const data: WhoamiResponse = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to get user info");
  return data;
}

export async function isAuthenticated() {
  try {
    const userData = await whoami();
    return { authenticated: true, user: userData };
  } catch (error) {
    return { authenticated: false, user: null };
  }
}

