import { CheckCircle2 } from 'lucide-react';

interface SuccessMessageProps {
  title: string;
  message: string;
  icon?: boolean;
}

export default function SuccessMessage({ title, message, icon = true }: SuccessMessageProps) {
  return (
    <div className="text-center space-y-4">
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full">
          <CheckCircle2 className="h-8 w-8 text-teal" />
        </div>
      )}
      <div>
        <h3 className="text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}
