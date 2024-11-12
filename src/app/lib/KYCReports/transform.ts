import { CurrentkYCResponseStructure } from "./sampleInput/input_2";
// name the flow to checks

const ReportKeyConfig = [
  {
    reportName: "Identity Verification",
    enable: true,
    flows: [
      {
        vendorName: "PERSONA",
        // TODO Rename to checkName
        flowName: "selfieVerification",
        // TODO Rename to checkKey
        inputKeyName: "selfie_verification",
        enabled: true,
      },
      {
        flowName: "governmentId",
        inputKeyName: "government_id_verification",
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
    flows: [
      {
        flowName: "addressProof",
        inputKeyName: "address_lookup_report",
      },
      {
        flowName: "citizenship",
        inputKeyName: "w8ben",
      },
      {
        flowName: "Proof Of Employment",
        inputKeyName: "proofOfEmployment",
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
    flows: [
      {
        flowName: "tinVerification",
        inputKeyName: "tin_verification",
      },
      {
        flowName: "databaseVerification",
        inputKeyName: "database_verification",
      },
      {
        flowName: "standardDatabaseVerification",
        inputKeyName: "database_standard_verification",
      },
      {
        flowName: "databasePhoneCarrierVerification",
        inputKeyName: "phone_carrier_verification",
      },
      {
        flowName: "email",
        inputKeyName: "email_risk_report",
      },
      {
        flowName: "phoneRiskReport",
        inputKeyName: "phone_risk_report",
      },
      {
        flowName: "addressProof",
        inputKeyName: "address_lookup_report",
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
  //   flows: [
  //     {
  //       flowName: "politicallyExposedPersonReport",
  //       inputKeyName: "politically_exposed_person_report",
  //     },
  //     {
  //       flowName: "watchList",
  //       inputKeyName: "watchlist_report",
  //     },
  //     {
  //       flowName: "adverseMediaReport",
  //       inputKeyName: "adverse_media_report",
  //     },
  //     {
  //       flowName: "socialMediaReport",
  //       inputKeyName: "social_media_report",
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
  //   flows: [
  //     {
  //       flowName: "email",
  //       inputKeyName: "email_risk_report",
  //     },
  //     {
  //       flowName: "phoneRiskReport",
  //       inputKeyName: "phone_risk_report",
  //     },
  //     {
  //       flowName: "addressProof",
  //       inputKeyName: "address_lookup_report",
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
    flows: [
      {
        flowName: "creditScore",
        inputKeyName: "credit_check",
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
    flows: [
      {
        flowName: "financialDocumentVerification",
        inputKeyName: "FinancialDocumentVerification",
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
    flows: [
      {
        flowName: "pep",
        inputKeyName: "politically_exposed_person_report",
      },
      {
        flowName: "watchList",
        inputKeyName: "watchlist_report",
      },
      {
        flowName: "adverseMediaReport",
        inputKeyName: "adverse_media_report",
      },
      {
        flowName: "socialMediaReport",
        inputKeyName: "social_media_report",
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
    (c) => c.status === "FAILED" || c.status === "failed"
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
    for (const flow of reportKey.flows) {
      const flowName = flow.flowName;
      const inputKeyName = flow.inputKeyName;
      const checks = report.checks[inputKeyName];
      if (!checks) {
        continue;
      }
      const checkStatus = getCheckStatus(checks);
      const transformedChecks = checks.map(processCheck);
      if (
        reportStatus === "PASSED" &&
        (checkStatus === "FAILED" || checkStatus === "failed")
      ) {
        reportStatus = checkStatus;
      }
      checkReport.checks[flowName] = transformedChecks;
    }
    checkReport.status = reportStatus;
    checkReport.messages = [reportKey.messages[reportStatus]];
    reportData.checks[reportKey.reportName] = checkReport;
    if (
      overallStatus === "PASSED" &&
      (reportStatus === "FAILED" || reportStatus === "failed")
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
//   JSON.stringify(transformReportData(CurrentkYCResponseStructure), null, 2)
// );

export function generateKYCReport(data: any) {
  if (data) {
    console.log("Data is available", { data });
    // return transformReportData(data);
    return transformReportData(CurrentkYCResponseStructure);
  }
  return transformReportData(CurrentkYCResponseStructure);
}

// console.log(convertKeysToKebabCase(CurrentkYCResponseStructure));
