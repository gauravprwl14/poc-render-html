interface StatusRendererProps {
  status: string;
}

export const StatusRenderer = ({ status }: StatusRendererProps) => {
  const getStatusStyle = (status: string) => {
    const lowercaseStatus = status.toLowerCase();
    switch (lowercaseStatus) {
      case 'passed':
      case 'ready':
      case 'success':
      case 'active':
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'failed':
      case 'error':
      case 'inactive':
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
      case 'in_progress':
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'warning':
      case 'attention':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'neutral':
      case 'unknown':
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        border ${getStatusStyle(status)}
      `}
    >
      <span className="relative flex h-2 w-2 mr-1.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          status.toLowerCase() === 'pending' ? 'bg-yellow-400' : ''
        }`}></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
      </span>
      {status}
    </span>
  );
}; 