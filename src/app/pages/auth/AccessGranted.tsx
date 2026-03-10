import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import AuthLayout from '../../components/auth/AuthLayout';
import SuccessMessage from '../../components/auth/SuccessMessage';

export default function AccessGranted() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <AuthLayout 
      title="Access Granted" 
      description=""
    >
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <SuccessMessage
          title="Welcome to the Portal!"
          message="Your teacher has provided free access to the portal."
        />

        <div className="mt-8 space-y-4">
          {/* Success Info */}
          <div className="bg-teal/5 border border-teal/20 rounded-lg p-4">
            <p className="text-sm text-gray-700 text-center">
              🎉 You now have full access to all lessons, workshops, and resources
            </p>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}