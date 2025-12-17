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
    <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 animate-fadeIn">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 text-sm mt-1">Sign in to your account</p>
      </div>

      <div className="mb-4 animate-slideIn">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Email or Phone"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          required
        />
      </div>

      <div className="mb-6 animate-slideIn">
        <input
          type="password"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      {error && (
        <div className="mb-4 text-red-500 text-sm text-center py-2 px-4 bg-red-50 rounded-lg animate-pulse">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing In...
          </>
        ) : "Sign In"}
      </button>
    </form>
  );
}

