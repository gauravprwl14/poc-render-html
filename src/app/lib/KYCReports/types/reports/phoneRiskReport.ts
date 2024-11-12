// Enum for possible values of phone type
enum PhoneType {
  FIXED_LINE = "FIXED_LINE",
  MOBILE = "MOBILE",
  PREPAID = "PREPAID",
  TOLL_FREE = "TOLL_FREE",
  VOIP = "VOIP",
  PAGER = "PAGER",
  PAYPHONE = "PAYPHONE",
  INVALID = "INVALID",
  RESTRICTED_PREMIUM = "RESTRICTED_PREMIUM",
  PERSONAL = "PERSONAL",
  VOICEMAIL = "VOICEMAIL",
  OTHER = "OTHER",
}

// Enum for possible values of phone risk recommendation
enum PhoneRiskRecommendation {
  BLOCK = "block",
  ALLOW = "allow",
  FLAG = "flag",
}

// Enum for possible values of phone risk level and SIM swap risk
enum PhoneRiskSimSwap {
  VERY_LOW = "very-low",
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  NA = "N/A",
}

// Defines the structure for the Phone Risk Report
export type PhoneRiskReport = {
  type: "report/phone-number"; // Const report type
  id: string; // Unique ID of the report

  attributes: {
    status: "pending" | "ready" | "errored"; // Status of the report
    "created-at": string; // ISO 8601 datetime of report creation
    "completed-at": string | null; // ISO 8601 datetime of report completion or null if incomplete
    "redacted-at": string | null; // ISO 8601 datetime of report redaction or null if not redacted
    "report-template-version-name": string; // Version name of the report template used
    "has-match": boolean; // Indicates if the report matched any criteria
    "is-continuous": boolean; // Indicates if the report has run multiple times
    "is-recurring": boolean; // Indicates if the report is scheduled for future runs
    tags: string[]; // Array of tags associated with the report

    "phone-number": string; // Input phone number for the search
    "phone-type": PhoneType | null; // Type of phone or null if unknown
    "phone-carrier": string | null; // Carrier of the phone or null if unknown
    "phone-risk-level": PhoneRiskSimSwap | null; // Risk level assessment
    "phone-risk-recommendation": PhoneRiskRecommendation | null; // Recommendation based on risk level
    "phone-risk-score": number | null; // Risk score out of 1000
    "phone-risk-sim-swap": PhoneRiskSimSwap | null; // Risk level of SIM swap fraud
  };

  relationships?: {
    inquiry?: {
      data: { id: string; type: "inquiry" } | null; // Linked inquiry data
    };
    account?: {
      data: { id: string; type: "account" } | null; // Linked account data
    };
    transaction?: {
      data: { id: string; type: "transaction" } | null; // Linked transaction data
    };
    "report-template"?: {
      data: { id: string; type: "report-template" }; // Linked report template data
    };
  };
};

export const displayConfig = {
  phoneRiskReport: {
    displayName: "Phone Risk Report",
    displayData: [
      {
        key: "status",
        displayName: "Status",
        type: "status",
        component: "Text",
      },
      {
        key: "has-match",
        displayName: "Has Match",
        type: "string",
        component: "Text",
      },
      {
        key: "is-continuous",
        displayName: "Continuous",
        type: "string",
        component: "Text",
      },
      {
        key: "is-recurring",
        displayName: "Recurring",
        type: "string",
        component: "Text",
      },
      {
        key: "created-at",
        displayName: "Created At",
        type: "date",
        component: "Text",
      },
      {
        key: "completed-at",
        displayName: "Completed At",
        type: "date",
        component: "Text",
      },
      {
        key: "report-template-version-name",
        displayName: "Template Version Name",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-number",
        displayName: "Phone Number",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-type",
        displayName: "Phone Type",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-carrier",
        displayName: "Phone Carrier",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-risk-level",
        displayName: "Risk Level",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-risk-recommendation",
        displayName: "Risk Recommendation",
        type: "string",
        component: "Text",
      },
      {
        key: "phone-risk-score",
        displayName: "Risk Score",
        type: "number",
        component: "Text",
      },
      {
        key: "phone-risk-sim-swap",
        displayName: "SIM Swap Risk",
        type: "boolean",
        component: "Text",
      },
    ],
    displayDate: true,
  },
};
