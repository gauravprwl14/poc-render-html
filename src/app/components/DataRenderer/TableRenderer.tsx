import { DisplayField } from "../types/DisplayTypes";
import { DataRenderer } from "./DataRenderer";
import { SectionRenderer } from "./SectionRenderer";

interface TableRendererProps {
  field: DisplayField;
  data: unknown[];
  level: number;
}

export const TableRenderer = ({ field, data, level }: TableRendererProps) => {
  if (!Array.isArray(data) || !field.properties) {
    return null;
  }

  // Check if the data structure is simple enough for table view
  const canUseTableView = field.properties.every(
    (prop) =>
      prop.type === "string" ||
      prop.type === "date" ||
      prop.type === "status" ||
      (prop.type === "object" &&
        !prop.properties?.some(
          (p) => p.type === "array" || p.type === "object"
        ))
  );

  // Use table view for simple data structures, even at deeper levels
  if (canUseTableView) {
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {field.properties.map((prop) => (
                <th
                  key={prop.key}
                  className={`
                    px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                    ${prop.type === "status" ? "w-32" : ""}
                  `}
                >
                  {prop.displayName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {field.properties!.map((prop, nestIndex) => (
                  <td
                    key={`${prop.key} ${index} ${nestIndex}`}
                    className={`
                      px-4 py-3 text-sm whitespace-nowrap
                      ${prop.type === "status" ? "w-32" : ""}
                    `}
                  >
                    <DataRenderer
                      field={prop}
                      data={item}
                      level={level + 1}
                      isInTable={true}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // For complex nested structures, use section view
  return <SectionRenderer field={field} data={data} level={level} />;
};
