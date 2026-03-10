import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../components/ui/button';

export default function AuthFlowDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warmPurple/10 via-teal/5 to-warmPink/10 p-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warmPurple to-teal rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl text-white font-bold">CF</span>
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">Authentication Flow</h1>
          <p className="text-gray-600">User journey through the Cameras For Girls portal</p>
        </div>

        {/* Flow Diagram */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Flow 1: Login */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-900 mb-4">Existing User Flow</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Login</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-warmPurple/10 border-2 border-warmPurple rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Dashboard</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Flow 2: Sign Up with Invitation Code */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-900 mb-4">New User with Invitation Code</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Sign Up</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Enter Code</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal" />
                  <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-900">Valid Code</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                  <div className="bg-warmPurple/10 border-2 border-warmPurple rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-900">Dashboard (Free)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow 3: Sign Up without Code */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-900 mb-4">New User without Code</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Sign Up</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-coral/10 border-2 border-coral rounded-lg px-4 py-2 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-coral" />
                <span className="text-sm text-gray-900">No Code</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-gold/10 border-2 border-gold rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Payment</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-warmPurple/10 border-2 border-warmPurple rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Dashboard (Paid)</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Flow 4: Invite Link */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-900 mb-4">Teacher Invitation Link</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-warmPink/10 border-2 border-warmPink rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Invite Link</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-teal/10 border-2 border-teal rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Create Account</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-warmPurple/10 border-2 border-warmPurple rounded-lg px-4 py-2">
                <span className="text-sm text-gray-900">Dashboard (Free)</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-sm text-gray-700 mb-3">Legend</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal/10 border border-teal rounded"></div>
                <span className="text-gray-600">Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gold/10 border border-gold rounded"></div>
                <span className="text-gray-600">Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-warmPurple/10 border border-warmPurple rounded"></div>
                <span className="text-gray-600">Access Granted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-coral/10 border border-coral rounded"></div>
                <span className="text-gray-600">Error/Alternative</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/auth/login">
            <Button className="bg-gradient-to-r from-warmPurple to-teal hover:from-warmPurple/90 hover:to-teal/90 text-white rounded-lg">
              Go to Login
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="rounded-lg">
              View Portal (Demo)
            </Button>
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Cameras For Girls • Empowering Young Women Through Photography
        </p>
      </div>
    </div>
  );
}
