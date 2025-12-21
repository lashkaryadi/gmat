import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from 'lucide-react';

interface ForgotPasswordVerifyProps {
  email: string;
  onBack: () => void;
  onVerify: (otp: string) => void;
  onResend: (email: string) => void;
}

export function ForgotPasswordVerify({ email, onBack, onVerify, onResend }: ForgotPasswordVerifyProps) {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds countdown
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Handle OTP input changes
  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered and not the last input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace to move to previous input
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP when all fields are filled
  useEffect(() => {
    const isComplete = otp.every(digit => digit !== '');
    if (isComplete) {
      onVerify(otp.join(''));
    }
  }, [otp, onVerify]);

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResendClick = () => {
    if (timeLeft === 0) {
      onResend(email);
      setTimeLeft(60);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').substring(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < Math.min(6, pastedData.length); i++) {
      newOtp[i] = pastedData[i];
    }

    setOtp(newOtp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={onBack}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
            <p className="text-gray-600 mt-2">Enter the 6-digit code sent to {email}</p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-14 text-2xl text-center rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            <div className="text-center text-sm text-gray-500 mb-6">
              {timeLeft > 0 ? (
                <p>Resend OTP in <span className="font-semibold text-blue-600">{timeLeft}s</span></p>
              ) : (
                <p>Didn't receive the code?
                  <button
                    type="button"
                    onClick={handleResendClick}
                    className="ml-1 text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    Resend OTP
                  </button>
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => onVerify(otp.join(''))}
              disabled={otp.some(digit => digit === '')}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-base font-medium"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}