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
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-6 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <div>
        <input
          type="text"
          className="border p-2 rounded w-full"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          className="border p-2 rounded w-full"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          className="border p-2 rounded w-full"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          className="border p-2 rounded w-full"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <select
          name="role"
          className="border p-2 rounded w-full"
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
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded" disabled={loading}>
        {loading ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
  );
}

