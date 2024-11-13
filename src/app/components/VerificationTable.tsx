import { Verification } from "./types/KYCReportTypes";
import { DisplayConfig, DisplayField } from "./types/DisplayTypes";
import { DataRenderer } from "./DataRenderer";

interface VerificationTableProps {
  verification: Verification;
  config: DisplayConfig;
}

export const VerificationTable = ({
  verification,
  config,
}: VerificationTableProps) => {
  const attributes = verification.data.attributes;

  // Group fields by their type
  const simpleFields: DisplayField[] = [];
  const complexFields: DisplayField[] = [];

  config.displayData.forEach((field) => {
    if (
      field.type === "string" ||
      field.type === "date" ||
      field.type === "number" ||
      field.type === "boolean" ||
      field.type === "status"
    ) {
      simpleFields.push(field);
    } else {
      complexFields.push(field);
    }
  });

  return (
    <div className="mt-4 space-y-6">
      {/* Render simple fields in a table-like view */}
      {simpleFields.length > 0 && (
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {simpleFields.map((field) => (
                <tr key={field.key} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm font-medium text-gray-500 w-1/3">
                    {field.displayName}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900">
                    <DataRenderer field={field} data={attributes} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Render complex fields normally */}
      {complexFields.map((field) => (
        <div key={field.key} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">
            {field.displayName}
          </h4>
          <div className="bg-white rounded-lg">
            <DataRenderer field={field} data={attributes} />
          </div>
        </div>
      ))}
    </div>
  );
};
