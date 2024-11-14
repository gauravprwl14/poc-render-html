import React, { useState } from "react";
import KYCReportCard from "./components/KYCReportCard";
import { generateKYCReport } from "./lib/KYCReports/transform";

interface HTMLRenderProps {
  data: any;
}

const HTMLRender: React.FC<HTMLRenderProps> = ({ data }) => {
  const kycReportData = generateKYCReport(data);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {kycReportData.map((report: any, index: number) => (
            <button
              key={index}
              className={`py-2 px-4 border-b-2 ${
                activeTab === index
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              Nao User ID: {report?.naoUserId || "-"}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 max-w-4xl mx-auto space-y-4">
        {Object.keys(kycReportData[activeTab].checks)
          .filter(
            (checkType) =>
              kycReportData[activeTab].checks[checkType] !== undefined
          )
          .map((checkType) => (
            <KYCReportCard
              key={checkType}
              kycReport={kycReportData[activeTab]}
              checkType={checkType}
            />
          ))}
      </div>
    </div>
  );
};

export default HTMLRender;
