import { useState } from "react";
import { DisplayField } from "../types/DisplayTypes";
import { formatDate } from "../utils/kycUtils";
import _ from "lodash";
import { TableRenderer } from "./TableRenderer";
import { StatusRenderer } from "./StatusRenderer";
import { ArrayRenderer } from "./ArrayRenderer";
import { ObjectRenderer } from "./ObjectRenderer";
import { ComplexDataModal } from "./ComplexDataModal";
import { ObjectArrayRenderer } from "./ObjectArrayRenderer";
import { URLRenderer } from "./URLRenderer";

interface DataRendererProps {
  field: DisplayField;
  data: any;
  level?: number;
  isInTable?: boolean;
}

export const DataRenderer = ({
  field,
  data,
  level = 0,
  isInTable = false,
}: DataRendererProps) => {
  const [showModal, setShowModal] = useState(false);
  const value = _.get(data, field.key);

  if (value === undefined || value === null) {
    return <span className="text-gray-400">-</span>;
  }

  // If we're in a table and dealing with complex data, show a button to open modal
  if (isInTable && (field.type === "object" || field.type === "array")) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View Details
        </button>
        <ComplexDataModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          data={value}
          field={field}
        />
      </>
    );
  }

  // Regular rendering for other cases
  switch (field.type) {
    case "string":
      // Check if it's a URL field
      if (
        field.component === "Link" ||
        (typeof value === "string" &&
          (value.startsWith("http") || value.startsWith("/")))
      ) {
        return (
          <URLRenderer
            url={value}
            type={field.component === "Image" ? "image" : undefined}
          />
        );
      }
      return (
        <span className="text-gray-900">
          {String(value).replace(/_/g, " ")}
        </span>
      );

    case "date":
      return <span className="text-gray-900">{formatDate(value)}</span>;

    case "status":
      return <StatusRenderer status={value} />;

    case "table":
      return <TableRenderer field={field} data={value} level={level} />;

    case "array":
      return <ArrayRenderer field={field} data={value} level={level} />;

    case "object":
      return <ObjectRenderer field={field} data={value} level={level} />;

    case "object-array":
      return <ObjectArrayRenderer field={field} data={value} level={level} />;

    default:
      return <span className="text-gray-900">{String(value)}</span>;
  }
};
