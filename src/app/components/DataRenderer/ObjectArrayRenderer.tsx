import { DisplayField } from "../types/DisplayTypes";

interface ObjectArrayRendererProps {
  field: DisplayField;
  data: Record<string, any>;
  level: number;
}

export const ObjectArrayRenderer = ({
  field,
  data,
  level,
}: ObjectArrayRendererProps) => {
  if (!field.properties || typeof data !== "object") {
    return null;
  }

  // Convert object to array format
  const tableData = Object.entries(data).map(([key, value]) => ({
    key,
    ...value,
  }));

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Key
            </th>
            {field.properties.map((prop) => (
              <th
                key={prop.key}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {prop.displayName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr
              key={`${item.key} ${index} ${level}`}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                {item.key}
              </td>
              {field.properties!.map((prop, index) => (
                <td
                  key={`${prop.key} ${index} ${level}`}
                  className="px-4 py-3 text-sm"
                >
                  {prop.component === "Link" ? (
                    <a
                      href={item[prop.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                    >
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Link
                    </a>
                  ) : prop.key === "flag_code" && item[prop.key] ? (
                    <span className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/16x12/${item[
                          prop.key
                        ].toLowerCase()}.png`}
                        alt={item[prop.key]}
                        className="inline-block"
                      />
                      {item[prop.key]}
                    </span>
                  ) : (
                    item[prop.key] || "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
