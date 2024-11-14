// import { sampleKYCResponse } from "../../../../sampleInput/input_2";
// name the flow to checks

const ReportKeyConfig = [
  {
    reportName: "Identity Verification",
    enable: true,
    checks: [
      {
        vendorName: "PERSONA",
        checkName: "selfieVerification",
        checkKey: "selfie_verification",
        enabled: true,
      },
      {
        checkName: "governmentId",
        checkKey: "government_id_verification",
      },
    ],
    messages: {
      PASSED: "Identify generated successfully",
      FAILED: "Identify generation failed",
      // PENDING: "KYC report generation pending",
    },
  },
  {
    reportName: "eligibilityCheck",
    checks: [
      {
        checkName: "addressProof",
        checkKey: "address_lookup_report",
      },
      {
        checkName: "citizenship",
        checkKey: "w8ben",
      },
      {
        checkName: "Proof Of Employment",
        checkKey: "proofOfEmployment",
      },
    ],
    messages: {
      PASSED: "Eligibility report generated successfully",
      FAILED: "Eligibility report generation failed",
      // PENDING: "Eligibility report generation pending",
    },
  },
  {
    reportName: "KYC Check",
    checks: [
      {
        checkName: "tinVerification",
        checkKey: "tin_verification",
      },
      {
        checkName: "databaseVerification",
        checkKey: "database_verification",
      },
      {
        checkName: "standardDatabaseVerification",
        checkKey: "database_standard_verification",
      },
      {
        checkName: "databasePhoneCarrierVerification",
        checkKey: "phone_carrier_verification",
      },
      {
        checkName: "email",
        checkKey: "email_risk_report",
      },
      {
        checkName: "phoneRiskReport",
        checkKey: "phone_risk_report",
      },
      {
        checkName: "addressProof",
        checkKey: "address_lookup_report",
      },
    ],
    messages: {
      PASSED: "KYC Check report generated successfully",
      FAILED: "KYC Check report generation failed",
      // PENDING: "Legal and compliance report generation pending",
    },
  },
  // {
  //   reportName: "riskCheck",
  //   checks: [
  //     {
  //       checkName: "politicallyExposedPersonReport",
  //       checkKey: "politically_exposed_person_report",
  //     },
  //     {
  //       checkName: "watchList",
  //       checkKey: "watchlist_report",
  //     },
  //     {
  //       checkName: "adverseMediaReport",
  //       checkKey: "adverse_media_report",
  //     },
  //     {
  //       checkName: "socialMediaReport",
  //       checkKey: "social_media_report",
  //     },
  //   ],
  //   messages: {
  //     PASSED: "Risk report generated successfully",
  //     FAILED: "Risk report generation failed",
  //     // PENDING: "Risk report generation pending",
  //   },
  // },
  // {
  //   reportName: "fraudPrevention",
  //   checks: [
  //     {
  //       checkName: "email",
  //       checkKey: "email_risk_report",
  //     },
  //     {
  //       checkName: "phoneRiskReport",
  //       checkKey: "phone_risk_report",
  //     },
  //     {
  //       checkName: "addressProof",
  //       checkKey: "address_lookup_report",
  //     },
  //   ],
  //   messages: {
  //     PASSED: "Fraud prevention report generated successfully",
  //     FAILED: "Fraud prevention report generation failed",
  //     // PENDING: "Fraud prevention report generation pending",
  //   },
  // },
  {
    reportName: "creditCheck",
    checks: [
      {
        checkName: "creditScore",
        checkKey: "credit_check",
      },
    ],
    messages: {
      PASSED: "Credit report generated successfully",
      FAILED: "Credit report generation failed",
      // PENDING: "Credit report generation pending",
    },
  },
  {
    reportName: "depositCheck",
    checks: [
      {
        checkName: "financialDocumentVerification",
        checkKey: "FinancialDocumentVerification",
      },
    ],
    messages: {
      PASSED: "Deposit report generated successfully",
      FAILED: "Deposit report generation failed",
      // PENDING: "Deposit report generation pending",
    },
  },
  {
    reportName: "OFAC/AML check",
    checks: [
      {
        checkName: "pep",
        checkKey: "politically_exposed_person_report",
      },
      {
        checkName: "watchList",
        checkKey: "watchlist_report",
      },
      {
        checkName: "adverseMediaReport",
        checkKey: "adverse_media_report",
      },
      {
        checkName: "socialMediaReport",
        checkKey: "social_media_report",
      },
    ],
    messages: {
      PASSED: "OFAC/AML generated successfully",
      FAILED: "OFAC/AML generation failed",
      // PENDING: "Deposit report generation pending",
    },
  },
];

interface InputCheck {
  id: string;
  status: "PASSED" | "FAILED" | "PENDING";
  statusColor: "GREEN" | "RED" | "YELLOW";
  externalVerificationId: string;
  displayName: string;
  description: string;
  createdAt: string;
  activityBy: {
    source: string;
    identifier: string;
  };
  data: {
    type: string;
    id: string;
    attributes: any;
    relationships: any;
  };
}

interface OutputCheck extends InputCheck {
  data: {
    type: string;
    id: string;
    attributes: any;
    relationships: any;
  };
  display: {
    summary: string;
    detailed: string;
  };
  // message: string;
}

interface InputReport {
  naoUserId: string;
  checks: {
    [key: string]: InputCheck[];
  };
}

interface FlowCheckReport {
  status: "PASSED" | "FAILED" | "PENDING";
  messages: string[];
  checks: OutputCheck[];
}

interface FlowCheckOutput {
  [key: string]: FlowCheckReport;
}

interface OutputReport {
  naoUserId: string;
  checks: any;
  status: "PASSED" | "FAILED" | "PENDING";
  message: string;
}

function processCheck(check: InputCheck): OutputCheck {
  return {
    ...check,
    display: {
      summary: `<html><body><div>Summary Of ${check.displayName}</div></></div></body></html>`,
      detailed: `<html><body><div>Detailed summary Of ${check.displayName}</div></></div></body></html>`,
    },
    // message: [
    //   'Check failed xyz',
    //   'Check failed xyz',
    // ]
    // data: {
    //   ...check.data,

    //   display: {
    //     summary: `<html><body><div>Summary Of ${check.displayName}</div></></div></body></html>`,
    //     detailed: `<html><body><div>Detailed summary Of ${check.displayName}</div></></div></body></html>`,
    //   },
    // },
  };
}

function getCheckStatus(check: InputCheck[]) {
  const hasFailedCheck = check.some(
    (c) => c.status === "FAILED" || c?.status?.toLocaleLowerCase() === "failed"
  );
  if (hasFailedCheck) {
    return "FAILED";
  }
  return "PASSED";
}

function transformReport(report: InputReport) {
  const reportData: any = {
    naoUserId: report.naoUserId,
    checks: {},
    status: "PASSED",
  };

  let overallStatus: "PASSED" | "FAILED" = "PASSED";

  for (const reportKey of ReportKeyConfig) {
    const checkReport: {
      checks: any;
      status: "PASSED" | "FAILED";
      messages: string[];
    } = {
      checks: {},
      status: "PASSED",
      messages: [reportKey.messages.PASSED],
    };
    let reportStatus: "PASSED" | "FAILED" | "PENDING" = "PASSED";
    for (const flow of reportKey.checks) {
      const checkName = flow.checkName;
      const checkKey = flow.checkKey;
      const checks = report.checks[checkKey];
      if (!checks) {
        continue;
      }
      const checkStatus = getCheckStatus(checks);
      const transformedChecks = checks.map(processCheck);
      if (
        reportStatus === "PASSED" &&
        (checkStatus === "FAILED" ||
          checkStatus.toLocaleLowerCase() === "failed")
      ) {
        reportStatus = checkStatus;
      }
      checkReport.checks[checkName] = transformedChecks;
    }
    checkReport.status = reportStatus;
    checkReport.messages = [reportKey.messages[reportStatus]];
    reportData.checks[reportKey.reportName] = checkReport;
    if (
      overallStatus === "PASSED" &&
      (reportStatus === "FAILED" ||
        reportStatus.toLocaleLowerCase() === "failed")
    ) {
      overallStatus = reportStatus;
    }
  }
  reportData.status = overallStatus;
  return reportData;
}

export function transformReportData(reportData: any) {
  const transformedReportData = reportData.data.map(transformReport);
  return transformedReportData;
}

// console.log(
//   JSON.stringify(transformReportData(sampleKYCResponse), null, 2)
// );

export function generateKYCReport(data: any) {
  if (data) {
    console.log("Data is available", { data });
    // return transformReportData(data);
    return transformReportData(data);
  }
  // return transformReportData(sampleKYCResponse);
}

// console.log(convertKeysToKebabCase(sampleKYCResponse));
