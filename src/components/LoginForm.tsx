import { useState } from "react";
import { login } from "../api/auth";

export interface LoginFormProps {
  onLogin: (token: string, user: any) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await login(identifier, password);
      onLogin(data.token, data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-6 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Sign In</h2>
      <div>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Email or Phone"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          className="border p-2 rounded w-full"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}

