import { Link } from 'react-router';
import { Mail, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import AuthLayout from '../../components/auth/AuthLayout';

export default function InviteLanding() {
  return (
    <AuthLayout 
      title="You've Been Invited to Join" 
      description="Your teacher has invited you to join the learning portal"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Free Access Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-gradient-to-r from-warmPurple to-teal text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Free Student Access
          </Badge>
        </div>

        {/* Description */}
        <div className="text-center mb-8 space-y-3">
          <p className="text-gray-700">
            Create your account to access lessons, workshops, and resources.
          </p>
          <div className="bg-teal/5 border border-teal/20 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              ✨ This invitation grants you <strong>free access</strong> to all portal features
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link to="/auth/signup">
            <Button
              className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
            >
              Create Account
            </Button>
          </Link>

          <Link to="/auth/login">
            <Button
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-teal hover:bg-teal/5 text-gray-700 text-base rounded-lg"
            >
              Already have an account? Login
            </Button>
          </Link>
        </div>

        {/* Teacher Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <Mail className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
            <p>
              This invite link was sent by your teacher. If you have any questions, please contact them directly.
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
