// src/api/authorizedFetch.ts
// Helper for fetch calls with JWT Authorization header (if logged in)
import { getToken } from "./jwt";

export async function authorizedFetch(input: RequestInfo, init?: RequestInit) {
  const token = getToken();
  const headers = {
    ...(init?.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  return fetch(input, { ...init, headers });
}

