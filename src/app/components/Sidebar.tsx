import { useState } from 'react';
import { Home, BookOpen, Video, Users, BarChart3, User, Menu, X, Library, Workflow } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import logo from 'figma:asset/5d07d7fe444b42b3f1f73ef3e7ea5941a6eb561c.png';

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Lessons', path: '/lessons', icon: BookOpen },
    { name: 'Live Sessions', path: '/sessions', icon: Video },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Resources', path: '/resources', icon: Library },
    { name: 'Progress', path: '/progress', icon: BarChart3 },
    { name: 'Profile', path: '/profile', icon: User }
  ];

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Cameras For Girls" 
            className="w-10 h-10 object-contain"
          />
          <div>
            <h2 className="text-base leading-tight">Cameras For Girls</h2>
            <p className="text-xs text-gray-500">Student Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-coral text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Auth Screens Button */}
      <div className="p-4 border-t border-gray-200">
        <Link to="/auth-demo">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <Workflow className="h-5 w-5 mr-3" />
            <span className="text-sm">Auth Screens</span>
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Cameras For Girls" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-sm">Cameras For Girls</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 bg-white border-r border-gray-200 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 flex flex-col">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
