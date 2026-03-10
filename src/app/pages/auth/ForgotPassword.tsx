import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import AuthLayout from '../../components/auth/AuthLayout';
import SuccessMessage from '../../components/auth/SuccessMessage';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would send reset email
    setIsSubmitted(true);
  };

  return (
    <AuthLayout 
      title="Reset Password" 
      description={isSubmitted ? "Check your email for instructions" : "We'll send you instructions to reset your password"}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Info Text */}
            <div className="bg-teal/5 border border-teal/20 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                We will send instructions to reset your password to the email address above.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
            >
              Send Reset Link
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <SuccessMessage
              title="Email Sent!"
              message={`We've sent password reset instructions to ${email}`}
            />

            {/* Info */}
            <div className="bg-warmPink/5 border border-warmPink/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-teal hover:text-teal/80 underline"
                >
                  try again
                </button>
              </p>
            </div>

            {/* Return to Login */}
            <Link to="/auth/login">
              <Button
                variant="outline"
                className="w-full h-12 border-2 border-gray-200 hover:border-teal hover:bg-teal/5 text-gray-700 rounded-lg"
              >
                Return to Login
              </Button>
            </Link>
          </div>
        )}

        {/* Back to Login Link */}
        {!isSubmitted && (
          <div className="text-center mt-6">
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
