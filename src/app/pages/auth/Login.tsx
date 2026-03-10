import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import AuthLayout from '../../components/auth/AuthLayout';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Navigate to dashboard
    navigate('/');
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      description="Sign in to continue your learning journey"
    >
      {/* Login Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-11 pr-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                required
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-teal hover:text-teal/80 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Create Account Button */}
        <Link to="/auth/signup">
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 border-2 border-gray-200 hover:border-teal hover:bg-teal/5 text-gray-700 text-base rounded-lg"
          >
            Create an Account
          </Button>
        </Link>

        {/* Invitation Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            Have a teacher invitation?{' '}
            <Link to="/auth/invite" className="text-teal hover:text-teal/80">
              Use your invite link
            </Link>{' '}
            to get free access.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}