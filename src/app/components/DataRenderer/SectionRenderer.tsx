import { useState } from "react";
import { DisplayField } from "../types/DisplayTypes";
import { DataRenderer } from "./DataRenderer";

interface SectionRendererProps {
  field: DisplayField;
  data: unknown[];
  level: number;
}

export const SectionRenderer = ({
  field,
  data,
  level,
}: SectionRendererProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  if (!Array.isArray(data)) return null;

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    setIsAllExpanded(!isAllExpanded);
    const newState = data.reduce((acc, _, index) => {
      acc[index] = !isAllExpanded;
      return acc;
    }, {} as Record<number, boolean>);
    setExpandedItems(newState);
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        {field.displayName && level > 0 && (
          <div className="text-sm font-medium text-gray-600">
            {field.displayName}
          </div>
        )}
        {data.length > 1 && (
          <button
            onClick={toggleAll}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {isAllExpanded ? "Collapse All" : "Expand All"}
          </button>
        )}
      </div>

      {/* Scrollable Container */}
      <div
        className={`
        ${level > 0 ? "max-h-[400px] overflow-y-auto pr-2" : ""}
        ${level > 0 ? "ml-4 border-l-2 pl-4 border-gray-200" : ""}
      `}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-4 last:mb-0 border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Collapsible Header */}
            <div
              className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center gap-2">
                <button
                  className={`transform transition-transform duration-200 ${
                    expandedItems[index] ? "rotate-90" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Item {index + 1}
                </span>
              </div>

              {/* Preview of first few fields */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {field.properties?.slice(0, 2).map((prop, index) => (
                  <span
                    key={`${prop.key} ${index} ${level}`}
                    className="hidden sm:inline"
                  >
                    {prop.displayName}:{" "}
                    <span className="font-medium">
                      <DataRenderer
                        field={{ ...prop, type: "string" }}
                        data={item}
                        level={level + 1}
                      />
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Collapsible Content with Scroll */}
            <div
              className={`
              transition-all duration-200 ease-in-out
              ${expandedItems[index] ? "max-h-[300px]" : "max-h-0"}
              ${expandedItems[index] ? "opacity-100" : "opacity-0"}
              overflow-hidden
            `}
            >
              <div className="p-4 bg-white overflow-y-auto max-h-[300px]">
                <div className="space-y-3">
                  {field.properties?.map((prop) => (
                    <div key={prop.key} className="group">
                      <div className="flex items-start">
                        <span className="text-sm font-medium text-gray-500 min-w-[140px] pt-0.5">
                          {prop.displayName}
                        </span>
                        <div className="flex-1">
                          <DataRenderer
                            field={prop}
                            data={item}
                            level={level + 1}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Scroll Indicator for Collapsible Content */}
              {expandedItems[index] &&
                field.properties &&
                field.properties.length > 5 && (
                  <div className="text-xs text-gray-500 text-center py-1 bg-gray-50 border-t">
                    Scroll for more details
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* Main Scroll Indicator */}
      {level > 0 && data.length > 3 && (
        <div className="text-xs text-gray-500 text-center mt-2">
          {/* Scroll to see more items */}-
        </div>
      )}
    </div>
  );
};
