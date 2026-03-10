interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showFooter?: boolean;
}

export default function AuthLayout({ children, title, description, showFooter = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warmPurple/10 via-teal/5 to-warmPink/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warmPurple to-teal rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl text-white font-bold">CF</span>
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">{title}</h1>
          {description && <p className="text-gray-600">{description}</p>}
        </div>

        {children}

        {/* Footer Text */}
        {showFooter && (
          <p className="text-center text-sm text-gray-500 mt-6">
            Cameras For Girls • Empowering Young Women Through Photography
          </p>
        )}
      </div>
    </div>
  );
}
