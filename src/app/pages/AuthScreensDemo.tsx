import { Link } from 'react-router';
import { ArrowRight, CheckCircle, XCircle, LogIn, UserPlus, KeyRound, Mail, CreditCard, Award, Workflow, Home } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function AuthScreensDemo() {
  const authScreens = [
    {
      id: 'login',
      name: 'Login Page',
      path: '/auth/login',
      icon: LogIn,
      color: 'from-teal to-warmPurple',
      description: 'Email/password authentication with forgot password and create account options'
    },
    {
      id: 'signup',
      name: 'Sign Up Page',
      path: '/auth/signup',
      icon: UserPlus,
      color: 'from-warmPurple to-warmPink',
      description: 'Full registration form with optional invitation code for free access'
    },
    {
      id: 'invite',
      name: 'Invite Landing',
      path: '/auth/invite',
      icon: Mail,
      color: 'from-warmPink to-coral',
      description: 'Landing page for students with teacher invitation links'
    },
    {
      id: 'forgot',
      name: 'Forgot Password',
      path: '/auth/forgot-password',
      icon: KeyRound,
      color: 'from-coral to-gold',
      description: 'Password reset request with email confirmation'
    },
    {
      id: 'granted',
      name: 'Access Granted',
      path: '/auth/access-granted',
      icon: CheckCircle,
      color: 'from-teal to-teal',
      description: 'Success screen when valid invitation code is used'
    },
    {
      id: 'invalid',
      name: 'Invalid Code',
      path: '/auth/invalid-code',
      icon: XCircle,
      color: 'from-coral to-coral',
      description: 'Error state for invalid codes with retry options'
    },
    {
      id: 'payment',
      name: 'Payment Access',
      path: '/auth/payment',
      icon: CreditCard,
      color: 'from-gold to-warmPurple',
      description: 'Subscription payment form with feature list ($29/month)'
    },
    {
      id: 'success',
      name: 'Payment Success',
      path: '/auth/payment-success',
      icon: Award,
      color: 'from-warmPurple to-teal',
      description: 'Confirmation screen after successful payment'
    },
    {
      id: 'flow',
      name: 'Auth Flow Diagram',
      path: '/auth/flow',
      icon: Workflow,
      color: 'from-teal to-warmPink',
      description: 'Visual diagram showing all user journeys through the system'
    }
  ];

  const flows = [
    {
      title: 'Existing User',
      steps: ['Login', 'Dashboard'],
      color: 'teal'
    },
    {
      title: 'New User with Invitation',
      steps: ['Sign Up', 'Enter Code', 'Access Granted', 'Dashboard'],
      color: 'warmPurple'
    },
    {
      title: 'New User without Code',
      steps: ['Sign Up', 'Payment', 'Payment Success', 'Dashboard'],
      color: 'gold'
    },
    {
      title: 'Teacher Invite Link',
      steps: ['Invite Landing', 'Create Account', 'Dashboard'],
      color: 'warmPink'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmPurple/10 via-teal/5 to-warmPink/10">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-warmPurple to-teal rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-xl text-white font-bold">CF</span>
                </div>
                <div>
                  <h1 className="text-2xl text-gray-900">Authentication & Access Flow</h1>
                  <p className="text-sm text-gray-600">Cameras For Girls Student Portal</p>
                </div>
              </div>
            </div>
            <Link to="/">
              <Button className="bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white rounded-lg flex items-center gap-2">
                <Home className="h-4 w-4" />
                View Main Portal
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-700 mb-6">
            This prototype includes a complete authentication and onboarding system with multiple user flows. 
            Click on any screen below to view the full interactive version, or review the flow diagrams to understand the user journeys.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-teal/5 border border-teal/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1 text-teal">9</div>
              <div className="text-xs text-gray-600">Auth Screens</div>
            </div>
            <div className="bg-warmPurple/5 border border-warmPurple/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1 text-warmPurple">4</div>
              <div className="text-xs text-gray-600">User Flows</div>
            </div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1 text-gold">2</div>
              <div className="text-xs text-gray-600">Access Types</div>
            </div>
            <div className="bg-coral/5 border border-coral/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1 text-coral">7</div>
              <div className="text-xs text-gray-600">Portal Pages</div>
            </div>
          </div>
        </div>

        {/* User Flows Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl mb-6 text-gray-900">User Flows</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {flows.map((flow, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base text-gray-900 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${flow.color}`}></div>
                  {flow.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {flow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`bg-${flow.color}/10 border border-${flow.color}/20 rounded-lg px-3 py-1.5`}>
                        <span className="text-xs text-gray-700">{step}</span>
                      </div>
                      {i < flow.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View Detailed Flow */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link to="/auth/flow">
              <Button variant="outline" className="w-full border-2 hover:border-teal hover:bg-teal/5 rounded-lg flex items-center justify-center gap-2">
                <Workflow className="h-4 w-4" />
                View Detailed Flow Diagram
              </Button>
            </Link>
          </div>
        </div>

        {/* All Screens Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl mb-6 text-gray-900">All Authentication Screens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {authScreens.map((screen) => {
              const Icon = screen.icon;
              return (
                <Link key={screen.id} to={screen.path}>
                  <div className="group bg-white border-2 border-gray-200 hover:border-teal hover:shadow-lg rounded-xl p-6 transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${screen.color} rounded-lg flex items-center justify-center shadow-sm flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base mb-1 text-gray-900 group-hover:text-teal transition-colors">
                          {screen.name}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {screen.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-teal group-hover:gap-2 transition-all">
                      <span>View Screen</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-xl mb-6 text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-base text-gray-900">Authentication Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>Email/password login with validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>Password visibility toggles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>Password reset functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>Form validation and error states</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                  <span>Loading states during account creation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base text-gray-900">Access Control Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmPurple mt-0.5 flex-shrink-0" />
                  <span>Teacher invitation code system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmPurple mt-0.5 flex-shrink-0" />
                  <span>Free access for invited students</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmPurple mt-0.5 flex-shrink-0" />
                  <span>Stripe-style payment flow ($29/month)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmPurple mt-0.5 flex-shrink-0" />
                  <span>Success/error state handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmPurple mt-0.5 flex-shrink-0" />
                  <span>Reusable component system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testing Info */}
        <div className="bg-gradient-to-br from-teal/10 to-warmPurple/10 border-2 border-teal/20 rounded-2xl p-6 mt-8">
          <h3 className="text-base text-gray-900 mb-3">💡 Testing Tips</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Use invitation code <strong className="text-teal">TEACHER2024</strong> during sign up to test the free access flow</p>
            <p>• Enter any other code to test the invalid code error state</p>
            <p>• All payment forms are mockups - no real charges will be made</p>
            <p>• The main portal at <Link to="/" className="text-teal hover:underline">/</Link> is accessible without authentication</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Cameras For Girls • Empowering Young Women Through Photography
        </p>
      </div>
    </div>
  );
}
