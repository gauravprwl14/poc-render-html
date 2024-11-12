// Enums for predefined string values inline as per HTML
type ReportStatus = "pending" | "ready" | "errored";
type EmailReputation = "high" | "medium" | "low";

// Relationship object structure
interface RelationshipData {
  id: string;
  type: string;
}

interface Relationship {
  data: RelationshipData | null;
}

// Attributes object structure
export interface EmailAddressReportAttributes {
  status: ReportStatus;
  "created-at": string; // ISO 8601 format
  "completed-at"?: string | null; // ISO 8601 format
  "redacted-at"?: string | null; // ISO 8601 format
  "report-template-version-name"?: string;
  "has-match": boolean;
  "is-continuous": boolean;
  "is-recurring": boolean;
  tags?: string[];
  "email-address"?: string | null;
  "email-reputation"?: EmailReputation | null;
  "email-reference-count"?: number | null;
  "email-domain-reputation"?: EmailReputation | null;
  "email-first-seen-days"?: number | null;
  "email-last-seen-days"?: number | null;
  "email-estimated-age-days"?: number | null;
  "email-domain-age-days"?: number | null;
  "email-credentials-leaked"?: boolean | null;
  "email-credentials-leaked-recent"?: boolean | null;
  "email-data-breached"?: boolean | null;
  "email-malicious-activity-detected"?: boolean | null;
  "email-malicious-activity-detected-recent"?: boolean | null;
  "email-is-blocklisted"?: boolean | null;
  "email-is-spam"?: boolean | null;
  "email-is-free-provider"?: boolean | null;
  "email-is-disposable"?: boolean | null;
  "email-is-deliverable"?: boolean | null;
  "email-is-valid-mx"?: boolean | null;
  "email-is-spoofable"?: boolean | null;
  "email-is-spf-strict"?: boolean | null;
  "email-is-dmarc-enforced"?: boolean | null;
  "email-is-suspicious"?: boolean | null;
  "email-domain-exists"?: boolean | null;
  "email-domain"?: string;
}

// Email Address Report structure
interface EmailAddressReport {
  id: string;
  type: "report/email-address";
  attributes: EmailAddressReportAttributes;
  relationships: {
    inquiry: Relationship;
    account: Relationship;
    transaction: Relationship;
    "report-template": Relationship;
  };
}

// Example usage
export const emailAddressReportExample: EmailAddressReport = {
  id: "emailReport123",
  type: "report/email-address",
  attributes: {
    status: "ready",
    "created-at": "2024-10-28T00:00:00Z",
    "has-match": true,
    "is-continuous": false,
    "is-recurring": true,
    tags: ["verified", "trusted"],

    "email-address": "example@example.com",
    "email-reputation": "high",
    "email-reference-count": 5,
    "email-domain-reputation": "medium",
    "email-first-seen-days": 30,
    "email-last-seen-days": 15,
    "email-estimated-age-days": 120,
    "email-domain-age-days": 400,
    "email-credentials-leaked": false,
    "email-credentials-leaked-recent": false,
    "email-data-breached": true,
    "email-malicious-activity-detected": true,
    "email-malicious-activity-detected-recent": false,
    "email-is-blocklisted": false,
    "email-is-spam": true,
    "email-is-free-provider": false,
    "email-is-disposable": false,
    "email-is-deliverable": true,
    "email-is-valid-mx": true,
    "email-is-spoofable": false,
    "email-is-spf-strict": true,
    "email-is-dmarc-enforced": false,
    "email-is-suspicious": true,
    "email-domain-exists": true,
    "email-domain": "example.com",
  },
  relationships: {
    inquiry: { data: { id: "inquiry456", type: "inquiry" } },
    account: { data: { id: "account789", type: "account" } },
    transaction: { data: { id: "transaction123", type: "transaction" } },
    "report-template": { data: { id: "template001", type: "report-template" } },
  },
};

export const displayConfig = {
  email: {
    displayName: "Email Risk Report",
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
        key: "email-address",
        displayName: "Email Address",
        type: "string",
        component: "Text",
      },
      {
        key: "email-domain",
        displayName: "Email Domain",
        type: "string",
        component: "Text",
      },
      {
        key: "email-reputation",
        displayName: "Email Reputation",
        type: "string",
        component: "Text",
      },
      {
        key: "email-reference-count",
        displayName: "Email Reference Count",
        type: "number",
        component: "Text",
      },
      {
        key: "email-domain-reputation",
        displayName: "Email Domain Reputation",
        type: "string",
        component: "Text",
      },
      {
        key: "email-first-seen-days",
        displayName: "Days Since First Seen",
        type: "number",
        component: "Text",
      },
      {
        key: "email-estimated-age-days",
        displayName: "Estimated Age (Days)",
        type: "number",
        component: "Text",
      },
      {
        key: "email-last-seen-days",
        displayName: "Days Since Last Seen",
        type: "number",
        component: "Text",
      },
      {
        key: "email-domain-age-days",
        displayName: "Domain Age (Days)",
        type: "number",
        component: "Text",
      },
      {
        key: "email-credentials-leaked",
        displayName: "Credentials Leaked",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-credentials-leaked-recent",
        displayName: "Recent Credentials Leaked",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-data-breached",
        displayName: "Data Breached",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-malicious-activity-detected",
        displayName: "Malicious Activity Detected",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-malicious-activity-detected-recent",
        displayName: "Recent Malicious Activity Detected",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-blocklisted",
        displayName: "Blocklisted",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-spam",
        displayName: "Spam",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-free-provider",
        displayName: "Free Provider",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-disposable",
        displayName: "Disposable",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-deliverable",
        displayName: "Deliverable",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-valid-mx",
        displayName: "Valid MX",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-spoofable",
        displayName: "Spoofable",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-spf-strict",
        displayName: "SPF Strict",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-dmarc-enforced",
        displayName: "DMARC Enforced",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-is-suspicious",
        displayName: "Suspicious",
        type: "boolean",
        component: "Text",
      },
      {
        key: "email-domain-exists",
        displayName: "Domain Exists",
        type: "boolean",
        component: "Text",
      },
    ],
    displayDate: true,
  },
};
