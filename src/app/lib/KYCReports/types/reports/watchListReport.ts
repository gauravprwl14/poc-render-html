// Defines the structure for the Watchlist Report
export type WatchlistReport = {
  type: "report/watchlist"; // Const report type
  id: string; // Unique ID of the report

  attributes: {
    status: "pending" | "ready" | "errored"; // Status of the report, may include additional values in the future
    createdAt: string; // ISO 8601 datetime string for report creation
    completedAt: string | null; // ISO 8601 datetime for report completion or null if incomplete
    redactedAt: string | null; // ISO 8601 datetime for report redaction or null if not redacted
    reportTemplateVersionName: string; // Name of the report template version
    hasMatch: boolean; // Indicates if a match was found in the report
    isContinuous: boolean; // Indicates if the report has been run multiple times
    isRecurring: boolean; // Indicates if the report is scheduled to run in the future
    tags: string[]; // Array of tags related to the report

    nameFirst?: string | null; // First name of the searched individual
    nameMiddle?: string | null; // Middle name of the searched individual
    nameLast?: string | null; // Last name of the searched individual
    term?: string | null; // Combined term used for searching (first + middle + last name)
    birthdate?: string | null; // Date of birth in YYYY-MM-DD format
    countryCode?: string | null; // Search country in alpha-2 format

    matchedLists: Array<{
      name: string; // Name of the matched list
      url: string; // URL associated with the matched list
      "list-type": string; // Type of the matched list
      "list-Types": string[]; // Array of list types
      slug: string; // Slug identifier for the matched list
      flagCode: string; // Flag code for the matched list
      entities: Array<{
        name: string; // Name of the matched entity
        "alias-type": "primary_name" | "aka" | string; // Alias type (e.g., primary_name, aka)
        birthdates: Array<{
          day: string; // Day of birth
          month: string; // Month of birth
          year: string; // Year of birth
          granularity: string; // Precision of the provided birthdate
        }>;
      }>;
    }> | null;

    runHistory: Array<{
      scheduledAt: string; // Scheduled run time in ISO 8601 format
      completedAt: string; // Completion time in ISO 8601 format
      type: "scheduled" | "manual"; // Run type
      reportTemplateVersionId: number; // Deprecated template version ID
    }>;

    ignoreList: Array<{
      ignoredAt: string; // ISO 8601 datetime of when the entry was ignored
      runHistoryCompletedAt: string; // ISO 8601 datetime of run history completion
      match: {
        name: string; // Name of the ignored match
        url: string; // URL associated with the ignored match
        listType: string; // Type of the ignored list
        listTypes: string[]; // Array of list types for the ignored match
        slug: string; // Slug identifier
        flagCode: string; // Flag code for the ignored match
        entities: Array<{
          name: string; // Name of the entity
          aliasType: "primary_name" | "aka" | string; // Alias type (e.g., primary_name, aka)
          birthdates: Array<{
            day: string; // Day of birth
            month: string; // Month of birth
            year: string; // Year of birth
            granularity: string; // Precision of the provided birthdate
          }>;
        }>;
      };
      user: string; // User who added the entry to the ignore list
      ignoreReason: string; // Reason for adding the entry to the ignore list
    }>;
  };

  relationships?: {
    inquiry?: {
      data: { id: string; type: "inquiry" } | null; // The inquiry linked to the report
    };
    account?: {
      data: { id: string; type: "account" } | null; // The account linked to the report
    };
    transaction?: {
      data: { id: string; type: "transaction" } | null; // The transaction linked to the report
    };
    reportTemplate?: {
      data: { id: string; type: "report-template" }; // The report template used to create this report
    };
  };
};

export const displayConfig = {
  watchList: {
    displayName: "Watch List Report",
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
        key: "term",
        displayName: "term",
        type: "string",
        component: "Text",
      },
      {
        key: "birthdate",
        displayName: "Birthdate",
        type: "string",
        component: "Text",
      },
      {
        key: "run-history",
        displayName: "Run History",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "type",
            displayName: "Type",
            type: "string",
            component: "Text",
          },
          {
            key: "completed-at",
            displayName: "Completed At",
            type: "string",
            component: "Text",
          },
        ],
      },
      {
        key: "matched-lists",
        displayName: "Match List",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "name",
            displayName: "List Name",
            type: "string",
            component: "Text",
          },
          {
            key: "url",
            displayName: "List URL",
            type: "string",
            component: "Link",
          },
          {
            key: "list-type",
            displayName: "List Type",
            type: "string",
            component: "Text",
          },
          {
            key: "list-Types",
            displayName: "List Types",
            type: "array",
            component: "List",
          },
          {
            key: "slug",
            displayName: "Slug",
            type: "string",
            component: "Text",
          },
          {
            key: "flag-code",
            displayName: "Flag Code",
            type: "string",
            component: "Text",
          },
          {
            key: "entities",
            displayName: "Entities",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "name",
                displayName: "Entity Name",
                type: "string",
                component: "Text",
              },
              {
                key: "alias-type",
                displayName: "Alias Type",
                type: "string",
                component: "Text",
              },
              {
                key: "birthdates",
                displayName: "Birthdates",
                type: "array",
                component: "Table",
                properties: [
                  {
                    key: "day",
                    displayName: "Day",
                    type: "string",
                    component: "Text",
                  },
                  {
                    key: "month",
                    displayName: "Month",
                    type: "string",
                    component: "Text",
                  },
                  {
                    key: "year",
                    displayName: "Year",
                    type: "string",
                    component: "Text",
                  },
                  {
                    key: "granularity",
                    displayName: "Granularity",
                    type: "string",
                    component: "Text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: "ignore-list",
        displayName: "Ignore List",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "ignore-name",
            displayName: "Ignore Name",
            type: "string",
            component: "Text",
          },
          {
            key: "ignore-details",
            displayName: "Ignore Details",
            type: "string",
            component: "Text",
          },
        ],
      },
    ],
    displayDate: true,
  },
};

// Second format

// type WatchlistReportType = 'report/watchlist';

// interface WatchlistReport {
//   type: WatchlistReportType;
//   id: string;
//   attributes: WatchlistAttributes;
//   relationships: WatchlistRelationships;
// }

// interface WatchlistAttributes {
//   status: 'pending' | 'ready' | 'errored' | string;
//   created_at: string;
//   completed_at: string | null;
//   redacted_at: string | null;
//   report_template_version_name: string;
//   has_match: boolean;
//   is_continuous: boolean;
//   is_recurring: boolean;
//   tags: string[];
//   name_first: string | null;
//   name_middle: string | null;
//   name_last: string | null;
//   term: string | null;
//   birthdate: string | null;
//   country_code: string | null;
//   matched_lists: MatchedList[] | null;
//   run_history: RunHistory[];
//   ignore_list: IgnoreList[];
// }

// interface MatchedList {
//   name: string;
//   url: string;
//   list_type: string;
//   list_types: string[];
//   slug: string;
//   flag_code: string;
//   entities: MatchedEntity[];
// }

// interface MatchedEntity {
//   name: string;
//   alias_type: 'primary_name' | 'aka' | string;
//   birthdates: Birthdate[];
//   group_id: string;
// }

// interface Birthdate {
//   day: string;
//   year: string;
//   month: string;
//   granularity: string;
// }

// interface RunHistory {
//   scheduled_at: string;
//   completed_at: string;
//   type: 'scheduled' | 'manual' | string;
//   report_template_version_id: number;
// }

// interface IgnoreList {
//   ignored_at: string;
//   run_history_completed_at: string;
//   match: IgnoreMatch;
//   user: string;
//   ignore_reason: string;
// }

// interface IgnoreMatch {
//   name: string;
//   url: string;
//   list_type: string;
//   list_types: string[];
//   slug: string;
//   flag_code: string;
//   entities: IgnoreMatchEntity[];
// }

// interface IgnoreMatchEntity {
//   name: string;
//   alias_type: string;
//   birthdates: Birthdate[];
//   group_id: string;
// }

// interface WatchlistRelationships {
//   inquiry: InquiryRelationship;
//   account: AccountRelationship;
//   transaction: TransactionRelationship;
//   report_template: ReportTemplateRelationship;
// }

// interface InquiryRelationship {
//   data: RelationshipData | null;
// }

// interface AccountRelationship {
//   data: RelationshipData | null;
// }

// interface TransactionRelationship {
//   data: RelationshipData | null;
// }

// interface ReportTemplateRelationship {
//   data: RelationshipData | null;
// }

// interface RelationshipData {
//   id: string;
//   type: string;
// }
