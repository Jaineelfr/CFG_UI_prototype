import { useNavigate } from 'react-router';
import { Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import AuthLayout from '../../components/auth/AuthLayout';
import SuccessMessage from '../../components/auth/SuccessMessage';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <AuthLayout 
      title="Welcome to the Learning Portal" 
      description=""
    >
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <SuccessMessage
          title="Payment Successful!"
          message="Your access has been successfully activated."
        />

        <div className="mt-8 space-y-4">
          {/* Welcome Info */}
          <div className="bg-gradient-to-br from-warmPurple/10 to-teal/10 border-2 border-teal/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-900 mb-2">
                  <strong>You're all set!</strong>
                </p>
                <p className="text-sm text-gray-700">
                  You now have full access to all lessons, workshops, community forums, and resources. Start your photography journey today!
                </p>
              </div>
            </div>
          </div>

          {/* Receipt Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 text-center">
              A receipt has been sent to your email address
            </p>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}