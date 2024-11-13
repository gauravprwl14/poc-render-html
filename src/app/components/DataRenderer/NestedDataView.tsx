import { DisplayField } from "../types/DisplayTypes";
import { DataRenderer } from "./index";

interface NestedDataViewProps {
  field: DisplayField;
  data: unknown[];
  level: number;
}

export const NestedDataView = ({ field, data, level }: NestedDataViewProps) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`
            p-4 rounded-lg border border-gray-100 
            ${level > 0 ? "ml-4 bg-gray-50" : "bg-white"}
            hover:border-gray-200 transition-colors
          `}
        >
          {field.properties?.map((prop) => (
            <div key={prop.key} className="mb-3 last:mb-0">
              <div className="text-xs font-medium text-gray-500 mb-1">
                {prop.displayName}
              </div>
              <div className="text-sm text-gray-900">
                <DataRenderer field={prop} data={item} level={level + 1} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
