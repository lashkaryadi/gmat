import { useState } from "react";
import { login } from "../api/auth";
import { ArrowLeft } from 'lucide-react';
import { ForgotPassword } from './ForgotPassword';
import { ForgotPasswordVerify } from './ForgotPasswordVerify';
import { ResetPassword } from './ResetPassword';

export interface LoginFormProps {
  onLogin: (token: string, user: any) => void;
  onShowSignup?: () => void;
  onNavigateHome?: () => void;
}

export function LoginForm({ onLogin, onShowSignup, onNavigateHome }: LoginFormProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotPasswordVerify, setShowForgotPasswordVerify] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [otp, setOtp] = useState("");

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

  // Handle forgot password flow
  const handleSendForgotPasswordOTP = (email: string) => {
    setForgotPasswordEmail(email);
    setShowForgotPassword(false);
    setShowForgotPasswordVerify(true);
  };

  // Handle OTP verification
  const handleVerifyOTP = async (otpValue: string) => {
    try {
      // In a real implementation, you would call an API to verify the OTP
      console.log('OTP verified successfully:', otpValue);
      setOtp(otpValue);
      // Navigate to password reset page
      setShowForgotPasswordVerify(false);
      setShowResetPassword(true);
    } catch (err: any) {
      setError(err.message || "Failed to verify OTP. Please try again.");
    }
  };

  // Handle resend OTP
  const handleResendOTP = async (email: string) => {
    console.log('Resending OTP to:', email);
    // In a real implementation, you would call an API to resend the OTP
  };

  // Handle password reset completion
  const handlePasswordResetComplete = () => {
    setShowResetPassword(false);
    // Optionally navigate to login or show success message
  };

  // Show Forgot Password screen
  if (showForgotPassword) {
    return (
      <ForgotPassword
        onBack={() => setShowForgotPassword(false)}
        onSendOTP={handleSendForgotPasswordOTP}
      />
    );
  }

  // Show Forgot Password Verify screen
  if (showForgotPasswordVerify) {
    return (
      <ForgotPasswordVerify
        email={forgotPasswordEmail}
        onBack={() => setShowForgotPasswordVerify(false)}
        onVerify={handleVerifyOTP}
        onResend={handleResendOTP}
      />
    );
  }

  // Show Reset Password screen
  if (showResetPassword) {
    return (
      <ResetPassword
        email={forgotPasswordEmail}
        otp={otp}
        onBack={() => setShowResetPassword(false)}
        onResetComplete={handlePasswordResetComplete}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => onNavigateHome ? onNavigateHome() : window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div></div> {/* Spacer to keep the layout balanced */}
          </div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone
              </label>
              <input
                id="identifier"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                placeholder="Enter your email or phone"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center py-2 px-4 bg-red-50 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-base font-medium"
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

            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  if (onShowSignup) onShowSignup();
                }}
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

