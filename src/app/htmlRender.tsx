import React from "react";
import KYCReportCard from "./components/KYCReportCard";
import { generateKYCReport } from "./lib/KYCReports/transform";

interface HTMLRenderProps {
  data: any;
}

const HTMLRender: React.FC<HTMLRenderProps> = ({ data }) => {
  const kycReportData = generateKYCReport(data);
  const report = kycReportData[0];
  // Filter out any undefined checks
  const validCheckTypes = Object.keys(report.checks).filter(
    (checkType) => report.checks[checkType] !== undefined
  );
  return (
    <div>
      {/* <h1>Hello, World!</h1>
      <p>This is a basic React component.</p> */}
      <div className="p-4 max-w-4xl mx-auto space-y-4">
        {validCheckTypes.map((checkType) => (
          <KYCReportCard
            key={checkType}
            kycReport={report}
            checkType={checkType}
          />
        ))}
      </div>
    </div>
  );
};

export default HTMLRender;
