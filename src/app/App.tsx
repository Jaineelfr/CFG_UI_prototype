import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import LiveSessions from './pages/LiveSessions';
import Community from './pages/Community';
import Profile from './pages/Profile';
import ProgressPage from './pages/Progress';
import Resources from './pages/Resources';
import Sidebar from './components/Sidebar';

// Auth Demo pages
import AuthScreensDemo from './pages/AuthScreensDemo';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import InviteLanding from './pages/auth/InviteLanding';
import AccessGranted from './pages/auth/AccessGranted';
import InvalidCode from './pages/auth/InvalidCode';
import PaymentAccess from './pages/auth/PaymentAccess';
import PaymentSuccess from './pages/auth/PaymentSuccess';
import AuthFlowDiagram from './pages/auth/AuthFlowDiagram';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Screens Demo - View all auth screens */}
        <Route path="/auth-demo" element={<AuthScreensDemo />} />
        
        {/* Individual Auth Screens for testing */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/invite" element={<InviteLanding />} />
        <Route path="/auth/access-granted" element={<AccessGranted />} />
        <Route path="/auth/invalid-code" element={<InvalidCode />} />
        <Route path="/auth/payment" element={<PaymentAccess />} />
        <Route path="/auth/payment-success" element={<PaymentSuccess />} />
        <Route path="/auth/flow" element={<AuthFlowDiagram />} />

        {/* Main Portal Pages - No auth required */}
        <Route path="/*" element={
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            
            {/* Main Content Area - takes remaining space */}
            <div className="flex-1 pt-16 lg:pt-0 lg:ml-64">
              <main className="max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/lessons" element={<Lessons />} />
                  <Route path="/sessions" element={<LiveSessions />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/progress" element={<ProgressPage />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}