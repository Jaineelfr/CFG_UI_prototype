import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Check, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function PaymentAccess() {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would process payment through Stripe
    navigate('/auth/payment-success');
  };

  const features = [
    'Access to all photography lessons and modules',
    'Live workshop sessions with professional photographers',
    'Community discussion forums and peer support',
    'Assignment feedback from experienced mentors',
    'Portfolio building and sharing tools',
    'Exclusive resources and learning materials'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmPurple/10 via-teal/5 to-warmPink/10 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warmPurple to-teal rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl text-white font-bold">CF</span>
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">Unlock Full Access</h1>
          <p className="text-gray-600">
            Join the learning portal to access lessons, workshops, and student resources
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl mb-6 text-gray-900">What's Included</h2>
            
            {/* Price Card */}
            <div className="bg-gradient-to-br from-warmPurple/10 to-teal/10 border-2 border-teal/20 rounded-xl p-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Monthly Subscription</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600">
                  Cancel anytime • No hidden fees
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-teal" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 bg-warmPink/5 border border-warmPink/20 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                💡 <strong>Have an access code?</strong>{' '}
                <Link to="/auth/signup" className="text-teal hover:text-teal/80 underline">
                  Go back
                </Link>{' '}
                to enter your teacher's invitation code for free access.
              </p>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="h-5 w-5 text-gray-400" />
              <h2 className="text-xl text-gray-900">Payment Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Card Number */}
              <div>
                <label htmlFor="cardNumber" className="block text-sm text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    className="pl-11 h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              {/* Expiry & CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={paymentData.expiry}
                    onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                    className="h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm text-gray-700 mb-2">
                    CVC
                  </label>
                  <Input
                    id="cvc"
                    type="text"
                    placeholder="123"
                    value={paymentData.cvc}
                    onChange={(e) => setPaymentData({ ...paymentData, cvc: e.target.value })}
                    className="h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name on card"
                  value={paymentData.name}
                  onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                  className="h-12 border-gray-200 focus:border-teal focus:ring-teal rounded-lg"
                  required
                />
              </div>

              {/* Security Notice */}
              <div className="bg-teal/5 border border-teal/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700">
                    Your payment information is secure and encrypted. We use Stripe for secure payment processing.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white text-base shadow-md rounded-lg"
              >
                Continue to Payment
              </Button>
            </form>

            {/* Back Link */}
            <div className="text-center mt-6">
              <Link
                to="/auth/signup"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Cameras For Girls • Empowering Young Women Through Photography
        </p>
      </div>
    </div>
  );
}
