import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Creating your account..." }: LoadingStateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warmPurple/10 via-teal/5 to-warmPink/10 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg">
          <Loader2 className="h-10 w-10 text-teal animate-spin" />
        </div>
        <p className="text-gray-700 text-lg">{message}</p>
      </div>
    </div>
  );
}
