interface URLRendererProps {
  url: string;
  type?: 'image' | 'product' | 'link';
}

export const URLRenderer = ({ url, type = 'link' }: URLRendererProps) => {
  // Helper to ensure URL has protocol
  const getFullUrl = (url: string): string => {
    if (!url) return '';
    
    // If URL starts with '//', add https:
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    
    // If URL doesn't start with http:// or https://, add https://
    if (!url.match(/^https?:\/\//i)) {
      return `https://${url}`;
    }
    
    return url;
  };

  // Helper to determine URL type if not specified
  const determineUrlType = (url: string): 'image' | 'product' | 'link' => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const lowercaseUrl = url.toLowerCase();
    
    // Check if it's an image URL
    if (imageExtensions.some(ext => lowercaseUrl.endsWith(ext)) || 
        lowercaseUrl.includes('/image/') ||
        lowercaseUrl.includes('/images/') ||
        lowercaseUrl.includes('/photos/')) {
      return 'image';
    }
    
    // Check if it's a product URL
    if (lowercaseUrl.includes('/product/') || 
        lowercaseUrl.includes('/products/') ||
        lowercaseUrl.includes('/item/') ||
        lowercaseUrl.includes('/p/')) {
      return 'product';
    }
    
    return 'link';
  };

  const fullUrl = getFullUrl(url);
  const urlType = type || determineUrlType(url);

  switch (urlType) {
    case 'image':
      return (
        <div className="group relative">
          <img
            src={fullUrl}
            alt="Preview"
            className="h-20 w-20 object-cover rounded-lg border border-gray-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder-image.png';
            }}
          />
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg"
          >
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              View Full
            </span>
          </a>
        </div>
      );

    case 'product':
      return (
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="text-sm text-gray-700">View Product</span>
        </a>
      );

    default:
      return (
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="text-sm">Open Link</span>
        </a>
      );
  }
}; 