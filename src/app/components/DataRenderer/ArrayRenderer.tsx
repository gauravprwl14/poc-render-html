import { useState } from 'react';
import { DisplayField } from '../types/DisplayTypes';
import { DataRenderer } from './DataRenderer';
import { TableRenderer } from './TableRenderer';
import { SectionRenderer } from './SectionRenderer';

interface ArrayRendererProps {
  field: DisplayField;
  data: unknown[];
  level: number;
}

export const ArrayRenderer = ({ field, data, level }: ArrayRendererProps) => {
  const [showModal, setShowModal] = useState(false);

  if (!Array.isArray(data)) {
    return null;
  }

  // Use TableRenderer for top-level table components
  if (field.component === 'Table' && level === 0) {
    return <TableRenderer field={field} data={data} level={level} />;
  }

  // Use SectionRenderer for nested structures
  if (field.properties || field.nestedConfig?.type === 'object') {
    return <SectionRenderer field={field} data={data} level={level} />;
  }

  // For simple arrays (strings, URLs, etc)
  const isSimpleArray = data.every(item => 
    typeof item === 'string' || 
    (typeof item === 'string' && (item.startsWith('http') || item.startsWith('/')))
  );

  if (isSimpleArray) {
    const displayItems = data.slice(0, 5);
    const hasMore = data.length > 5;
    const isUrlArray = data.some(item => 
      typeof item === 'string' && (item.startsWith('http') || item.startsWith('/'))
    );

    return (
      <div>
        <div className="flex flex-wrap gap-2">
          {displayItems.map((item, index) => (
            isUrlArray ? (
              <a
                key={index}
                href={String(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Link {index + 1}
              </a>
            ) : (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
              >
                {String(item)}
              </span>
            )
          ))}
          {hasMore && (
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              +{data.length - 5} more
            </button>
          )}
        </div>

        {/* Modal for showing all items */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-medium">{field.displayName}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {data.map((item, index) => (
                    isUrlArray ? (
                      <a
                        key={index}
                        href={String(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Link {index + 1}
                      </a>
                    ) : (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {String(item)}
                      </span>
                    )
                  ))}
                </div>
              </div>
              <div className="p-4 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // For other types of arrays
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
        >
          {String(item)}
        </span>
      ))}
    </div>
  );
}; 