import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title: string;
  message: string;
  icon?: boolean;
}

export default function ErrorMessage({ title, message, icon = true }: ErrorMessageProps) {
  return (
    <div className="text-center space-y-4">
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-coral/10 rounded-full">
          <AlertCircle className="h-8 w-8 text-coral" />
        </div>
      )}
      <div>
        <h3 className="text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}
