import { useState } from "react";
import { signup } from "../api/auth";

export interface SignupFormProps {
  onSignup: (token: string, userId: string) => void;
}

export function SignupForm({ onSignup }: SignupFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "jobseeker"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await signup(form);
      onSignup(data.token, data.userId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 animate-fadeIn">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-600 text-sm mt-1">Join our education community today</p>
      </div>

      <div className="mb-4 animate-slideIn">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4 animate-slideIn">
        <input
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4 animate-slideIn">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4 animate-slideIn">
        <input
          type="password"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6 animate-slideIn">
        <select
          name="role"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="institution">Institution</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
          <option value="vendor">Vendor</option>
        </select>
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
            Creating Account...
          </>
        ) : "Sign Up"}
      </button>
    </form>
  );
}

