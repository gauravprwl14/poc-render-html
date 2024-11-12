// Enum for report status
enum ReportStatus {
  PENDING = "pending",
  READY = "ready",
  ERRORED = "errored",
}

// Defines the structure for the Social Media Report
export type SocialMediaReport = {
  type: "report/social-media"; // Const report type
  id: string; // Unique ID of the report

  attributes: {
    status: ReportStatus; // Status of the report
    "created-at": string; // ISO 8601 datetime of report creation
    "completed-at": string | null; // ISO 8601 datetime of report completion or null if incomplete
    "redacted-at": string | null; // ISO 8601 datetime of report redaction or null if not redacted
    "report-template-version-name": string; // Version name of the report template used
    "has-match": boolean; // Indicates if the report matched any criteria
    "is-continuous": boolean; // Indicates if the report has run multiple times
    "is-recurring": boolean; // Indicates if the report is scheduled for future runs
    tags: string[]; // Array of tags associated with the report

    "name-first": string | null; // First name of the individual in the report
    "name-last": string | null; // Last name of the individual in the report
    birthdate: string; // Date of birth in YYYY-MM-DD format
    "phone-number": string | null; // Phone number associated with the report
    "email-address": string | null; // Email address associated with the report
    "address-city": string | null; // City of residence
    "address-subdivision": string | null; // Subdivision (state/province)

    "linkedin-url": string | null; // LinkedIn profile URL
    "linkedin-username": string | null; // LinkedIn username
    "linkedin-id": string | null; // LinkedIn ID

    "facebook-url": string | null; // Facebook profile URL
    "facebook-username": string | null; // Facebook username
    "facebook-id": string | null; // Facebook ID

    "twitter-url": string | null; // Twitter profile URL
    "twitter-username": string | null; // Twitter username

    "github-url": string | null; // GitHub profile URL
    "github-username": string | null; // GitHub username
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
  socialMediaReport: {
    displayName: "Social Media Report",
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
        key: "name-first",
        displayName: "First Name",
        type: "string",
        component: "Text",
      },
      {
        key: "name-last",
        displayName: "Last Name",
        type: "string",
        component: "Text",
      },
      {
        key: "birthdate",
        displayName: "Birthdate",
        type: "date",
        component: "Text",
      },
      {
        key: "phone-number",
        displayName: "Phone Number",
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
        key: "address-city",
        displayName: "City",
        type: "string",
        component: "Text",
      },
      {
        key: "address-subdivision",
        displayName: "State/Region",
        type: "string",
        component: "Text",
      },
      {
        key: "linkedin-url",
        displayName: "LinkedIn URL",
        type: "string",
        component: "Link",
      },
      {
        key: "linkedin-username",
        displayName: "LinkedIn Username",
        type: "string",
        component: "Text",
      },
      {
        key: "linkedin-id",
        displayName: "LinkedIn ID",
        type: "string",
        component: "Text",
      },
      {
        key: "facebook-url",
        displayName: "Facebook URL",
        type: "string",
        component: "Link",
      },
      {
        key: "facebook-username",
        displayName: "Facebook Username",
        type: "string",
        component: "Text",
      },
      {
        key: "facebook-id",
        displayName: "Facebook ID",
        type: "string",
        component: "Text",
      },
      {
        key: "twitter-url",
        displayName: "Twitter URL",
        type: "string",
        component: "Link",
      },
      {
        key: "twitter-username",
        displayName: "Twitter Username",
        type: "string",
        component: "Text",
      },
      {
        key: "github-url",
        displayName: "GitHub URL",
        type: "string",
        component: "Link",
      },
      {
        key: "github-username",
        displayName: "GitHub Username",
        type: "string",
        component: "Text",
      },
    ],
    displayDate: true,
  },
};

// Second one

// export interface SocialMediaReport {
//   type: 'report/social-media';
//   id: string; // Unique identifier for the report

//   attributes: {
//     status: 'pending' | 'ready' | 'errored' | string; // Status with potential future values
//     createdAt: string; // ISO 8601 format
//     completedAt: string | null; // ISO 8601 format or null if not completed
//     redactedAt: string | null; // ISO 8601 format or null if not redacted
//     reportTemplateVersionName: string; // Template version name
//     hasMatch: boolean; // Indicates if a match was found
//     isContinuous: boolean; // Indicates if report ran multiple times
//     isRecurring: boolean; // Indicates if report is scheduled for future runs
//     tags: string[]; // Array of tag strings
//     nameFirst: string | null; // First name, nullable
//     nameLast: string | null; // Last name, nullable
//     birthdate: string; // Birthdate in YYYY-MM-DD format
//     phoneNumber: string | null; // Phone number, nullable
//     emailAddress: string | null; // Email address, nullable
//     addressCity: string | null; // City of address, nullable
//     addressSubdivision: string | null; // State/Province, nullable

//     linkedinUrl: string | null; // LinkedIn URL, nullable
//     linkedinUsername: string | null; // LinkedIn username, nullable
//     linkedinId: string | null; // LinkedIn ID, nullable

//     facebookUrl: string | null; // Facebook URL, nullable
//     facebookUsername: string | null; // Facebook username, nullable
//     facebookId: string | null; // Facebook ID, nullable

//     twitterUrl: string | null; // Twitter URL, nullable
//     twitterUsername: string | null; // Twitter username, nullable

//     githubUrl: string | null; // GitHub URL, nullable
//     githubUsername: string | null; // GitHub username, nullable
//   };

//   relationships: {
//     inquiry: {
//       data: {
//         id: string;
//         type: 'inquiry';
//       } | null;
//     };
//     account: {
//       data: {
//         id: string;
//         type: 'account';
//       } | null;
//     };
//     transaction: {
//       data: {
//         id: string;
//         type: 'transaction';
//       } | null;
//     };
//     reportTemplate: {
//       data: {
//         id: string;
//         type: 'report-template';
//       } | null;
//     };
//   };
// }
