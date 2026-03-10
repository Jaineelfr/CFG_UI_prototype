import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import AuthLayout from '../../components/auth/AuthLayout';
import ErrorMessage from '../../components/auth/ErrorMessage';

export default function InvalidCode() {
  const navigate = useNavigate();

  return (
    <AuthLayout 
      title="Invalid Code" 
      description=""
    >
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <ErrorMessage
          title="Invalid or expired access code"
          message="The invitation code you entered is not valid. Please check with your teacher or continue to payment."
        />

        <div className="mt-8 space-y-3">
          {/* Try Again Button */}
          <Button
            onClick={() => navigate('/auth/signup')}
            variant="outline"
            className="w-full h-12 border-2 border-gray-200 hover:border-teal hover:bg-teal/5 text-gray-700 text-base rounded-lg"
          >
            Try Again
          </Button>

          {/* Continue to Payment */}
          <Button
            onClick={() => navigate('/auth/payment')}
            className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
          >
            Continue to Payment
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-6 bg-warmPink/5 border border-warmPink/20 rounded-lg p-4">
          <p className="text-sm text-gray-700 text-center">
            💡 Need help? Contact your teacher to get a valid invitation code
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
