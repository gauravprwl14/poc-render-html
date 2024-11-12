import { DisplayField } from "../types/DisplayTypes";
import { DataRenderer } from "./DataRenderer";

interface ObjectRendererProps {
  field: DisplayField;
  data: Record<string, unknown>;
  level: number;
}

export const ObjectRenderer = ({ field, data, level }: ObjectRendererProps) => {
  if (!field.properties || typeof data !== "object") {
    return null;
  }

  return (
    <div
      className={`
        rounded-lg
        ${level > 0 ? "pl-4 border-l border-gray-200" : ""}
      `}
    >
      <div className="space-y-4">
        {field.properties.map((prop, index) => (
          <div key={`${prop.key} ${index} ${level}`} className="group">
            <div className="flex items-start gap-4">
              <span className="text-sm font-medium text-gray-500 min-w-[120px] pt-1">
                {prop.displayName}
              </span>
              <div className="flex-1">
                <DataRenderer field={prop} data={data} level={level + 1} />
              </div>
            </div>
            {level === 0 && (
              <div className="h-px bg-gray-100 mt-4 group-last:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
