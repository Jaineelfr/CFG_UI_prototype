import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, Mail, Lock, Eye, EyeOff, Key } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import AuthLayout from '../../components/auth/AuthLayout';
import LoadingState from '../../components/auth/LoadingState';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    invitationCode: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);

    // Simulate account creation delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if invitation code is provided
    if (formData.invitationCode) {
      // Simulate validation - in real app, validate with backend
      if (formData.invitationCode.toUpperCase() === 'TEACHER2024') {
        navigate('/auth/access-granted');
      } else {
        navigate('/auth/invalid-code');
      }
    } else {
      // No invitation code - go to payment
      navigate('/auth/payment');
    }
  };

  if (isLoading) {
    return <LoadingState message="Creating your account..." />;
  }

  return (
    <AuthLayout 
      title="Create Account" 
      description="Join the Cameras For Girls community"
    >
      {/* Sign Up Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="pl-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
              />
            </div>
          </div>

          {/* Email */}
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-11 pr-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="pl-11 pr-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Invitation Code */}
          <div>
            <label htmlFor="invitationCode" className="block text-sm text-gray-700 mb-2">
              Invitation Code <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="invitationCode"
                type="text"
                placeholder="Enter code from your teacher"
                value={formData.invitationCode}
                onChange={(e) => setFormData({ ...formData, invitationCode: e.target.value.toUpperCase() })}
                className="pl-11 h-12 border-gray-200 focus:border-warmPurple focus:ring-warmPurple uppercase rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-600 mt-2 bg-teal/5 p-3 rounded-lg border border-teal/20">
              💡 Have an access code from your teacher? Enter it above to unlock free access.
            </p>
          </div>

          {/* Create Account Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md mt-6 rounded-lg"
          >
            Create Account
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-teal hover:text-teal/80 transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
