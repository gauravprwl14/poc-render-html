// has free form fields and is not as structured as the other two.
// getting the related_sources field in Amit Shah Profile
// Ignore list media and Ignore list entity fields are free form

// Enum for report status
enum ReportStatus {
  PENDING = "pending",
  READY = "ready",
  ERRORED = "errored",
}

// Defines the structure for the Adverse Media Report
export type AdverseMediaReport = {
  type: "report/adverse-media"; // Const report type
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

    "name-first": string | null; // First name input for search
    "name-middle": string | null; // Middle name input for search
    "name-last": string | null; // Last name input for search
    term: string; // Combined term used for searching (first + middle + last name)
    "birthdate-year": number | null; // Birth year input or null
    birthdate: string | null; // Date of birth in YYYY-MM-DD format
    "country-code": string | null; // Country code in alpha2 format for search

    "related-sources": {
      akas: (string | null)[] | null; // Alternative names
      birthdates: (string | null)[] | null; // Associated birthdates
      "match-types": string[]; // Match types
      media: {
        date: string | null; // Date of matched media
        snippet: string; // Snippet from matched media
        url: string; // URL of matched media
        title: string; // Title of matched media
      }[];
      name: string; // Name of the entity in the matched source
      sources: {
        "country-codes": string[]; // Array of country codes related to the source
        name: string; // Source name
        types: string[]; // Source types
      }[];
      "entity-id": string; // Entity ID of the matched source
    }[];

    "ignore-list-media"?: { [key: string]: any }; // Additional fields for ignored media
    "ignore-list-entity"?: Array<{ [key: string]: any }>; // Array of ignored entities
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
  adverseMediaReport: {
    displayName: "Adverse Media Report",
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
        key: "tags",
        displayName: "Recurring",
        type: "array",
        component: "List",
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
        key: "name-middle",
        displayName: "Middle Name",
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
        key: "term",
        displayName: "Search Term",
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
        key: "birthdate-year",
        displayName: "Birth Year",
        type: "number",
        component: "Text",
      },
      {
        key: "country-code",
        displayName: "Country Code",
        type: "string",
        component: "Text",
      },
      {
        key: "related-sources",
        displayName: "Related Sources",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "source-name",
            displayName: "Source Name",
            type: "string",
            component: "Text",
          },
          {
            key: "source-url",
            displayName: "Source URL",
            type: "string",
            component: "Link",
          },
        ],
      },
      // {
      //   key: "ignore-list-media",
      //   displayName: "Ignored Media",
      //   type: "object",
      //   component: "Text",
      // },
      {
        key: "ignore-list-entity",
        displayName: "Ignored Entities",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "entity-name",
            displayName: "Entity Name",
            type: "string",
            component: "Text",
          },
        ],
      },
    ],
    displayDate: true,
  },
};
