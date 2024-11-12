// Defines the structure for the Query object
type QueryObject = {
  nameFirst: string | null; // The input first name of the individual being searched
  nameMiddle: string | null; // The input middle name of the individual being searched
  nameLast: string | null; // The input last name of the individual being searched
  term: string; // The combined search term (first + middle + last name); either this or name fields are required
  birthdate: string; // Date of birth in YYYY-MM-DD format
  countryCode: string | null; // The country code in alpha-2 format (e.g., "US")
};

// Defines the structure for each data object in the Relationships object
type RelationshipData = {
  id: string; // Unique identifier for the related object
  type: "inquiry" | "account" | "transaction" | "report-template"; // Const type for the specific relationship object
};

// Defines the structure for the Relationships object
type RelationshipsObject = {
  inquiry?: {
    data: RelationshipData | null; // The inquiry linked to the report
  };
  account?: {
    data: RelationshipData | null; // The account linked to the report
  };
  transaction?: {
    data: RelationshipData | null; // The transaction linked to the report
  };
  reportTemplate?: {
    data: RelationshipData; // The report template used to create this report
  };
};

// Defines the structure for the Politically Exposed Person Report
export type PoliticallyExposedPersonReport = {
  type: "report/politically-exposed-person"; // Const report type
  id: string; // Unique ID of the report

  attributes: {
    status: "pending" | "ready" | "errored"; // Status of the report, may include additional values in the future
    createdAt: string; // ISO 8601 datetime string
    completedAt: string | null; // ISO 8601 datetime or null if incomplete
    redactedAt: string | null; // ISO 8601 datetime or null if not redacted
    reportTemplateVersionName: string; // Name of the report template version
    hasMatch: boolean; // Whether there was a match in the report
    isContinuous: boolean; // If the report was run more than once
    isRecurring: boolean; // If the report is scheduled to recur
    tags: string[]; // Array of tags associated with the report
    query?: QueryObject; // Query object, optional

    result: Array<{
      entityId: string; // Unique entity identifier
      name: string; // Name of the matched entity
      birthdates: string[]; // Array of birthdates in ISO 8601 format
      deathDates?: string[] | null; // Array of death dates or null if not applicable
      locations?: string[] | null; // Array of locations or null if not provided
      country: string; // Country code or name
      sex?: string | null; // Sex of the individual, if provided
      positions: Array<{
        pepClass: string; // PEP class for the position
        sourceKey: string; // Source key identifier
        name: string; // Position name
      }>;
      associates: Array<{
        name: string; // Name of the associate
        relationship: string; // Description of the relationship
      }>;
      affiliations: Array<{
        sourceKey: string; // Source key identifier
        name: string; // Affiliation name
      }>;
      relatedUrls: Array<{
        sourceKey: string; // Source key identifier
        name: string; // Related URL name
      }>;
      images?: string[] | null; // Array of image URLs, or null if not applicable
      sources?: Record<string, any>; // Map of sources associated by entity
      matchTypes: string[]; // Array of match types
      pepType?: string | null; // Type of politically exposed person or null if not provided
    }> | null;

    runHistory: Array<{
      scheduledAt: string; // Scheduled run time in ISO 8601 format
      completedAt: string; // Completion time in ISO 8601 format
      type: "scheduled" | "manual"; // Type of run (e.g., scheduled, manual)
      reportTemplateVersionId: number; // Deprecated template version ID
    }>;

    ignoreList: Array<{
      ignoredAt: string; // ISO 8601 datetime of when the entry was ignored
      runHistoryCompletedAt: string; // ISO 8601 datetime of run history completion
      match: {
        entityId: string; // Entity ID of the ignored match
        name: string; // Name of the ignored match
        birthdates: string[]; // Array of birthdates associated with the match
        deathDates: string[]; // Array of death dates, if applicable
        locations: string[]; // Array of location strings
        country: string; // Country code or name
        sex: string; // Sex of the individual in the match
        positions: Array<{
          pepClass: string; // Class of PEP position
          sourceKey: string; // Source key identifier
          name: string; // Position name
        }>;
        associates: Array<{
          name: string; // Name of the associate
          relationship: string; // Relationship description
        }>;
        affiliations: Array<{
          sourceKey: string; // Source key identifier
          name: string; // Affiliation name
        }>;
        relatedUrls: Array<{
          sourceKey: string; // Source key identifier
          name: string; // Related URL name
        }>;
        images: string[]; // Array of image URLs
        sources: {
          url: string; // URL of the source
          name: string; // Name of the source
          flagCode: string; // Flag code of the source's country
        };
        matchTypes: string[]; // Types of matches found
        pepType: string; // Type of politically exposed person
      };
      user: string; // User who added the entry to the ignore list
      ignoreReason: string; // Reason for adding the entry to the ignore list
      isInternal: boolean; // Whether the ignore list entry is internal
    }>;
  };

  relationships?: RelationshipsObject; // Other Persona objects related to the report
};

export const displayConfig = {
  pep: {
    displayName: "Politically Exposed Person Report",
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
      // {
      //   key: "created-at",
      //   displayName: "Created At",
      //   type: "date",
      //   component: "Text",
      // },
      // {
      //   key: "completed-at",
      //   displayName: "Completed At",
      //   type: "date",
      //   component: "Text",
      // },
      {
        key: "report-template-version-name",
        displayName: "Template Version Name",
        type: "string",
        component: "Text",
      },
      {
        key: "query.name-first",
        displayName: "First Name",
        type: "string",
        component: "Text",
      },
      {
        key: "query.name-middle",
        displayName: "Middle Name",
        type: "string",
        component: "Text",
      },
      {
        key: "query.name-last",
        displayName: "Last Name",
        type: "string",
        component: "Text",
      },
      {
        key: "query.term",
        displayName: "Search Term",
        type: "string",
        component: "Text",
      },
      {
        key: "query.birthdate",
        displayName: "Birthdate",
        type: "date",
        component: "Text",
      },
      {
        key: "query.country-code",
        displayName: "Country Code",
        type: "string",
        component: "Text",
      },
      {
        key: "result",
        displayName: "Result",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "entity-id",
            displayName: "Entity ID",
            type: "string",
            component: "Text",
          },
          {
            key: "name",
            displayName: "Name",
            type: "string",
            component: "Text",
          },
          {
            key: "aliases",
            displayName: "Aliases",
            type: "array",
            component: "List",
          },
          {
            key: "birthdates",
            displayName: "Birthdates",
            type: "array",
            component: "List",
          },
          {
            key: "death_dates",
            displayName: "Death Dates",
            type: "array",
            component: "List",
          },
          {
            key: "locations",
            displayName: "Locations",
            type: "array",
            component: "List",
          },
          {
            key: "country",
            displayName: "Country",
            type: "string",
            component: "Text",
          },
          {
            key: "sex",
            displayName: "Sex",
            type: "string",
            component: "Text",
          },
          {
            key: "positions",
            displayName: "Positions",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "pep-class",
                displayName: "PEP Class",
                type: "string",
                component: "Text",
              },
              {
                key: "source-key",
                displayName: "Source Key",
                type: "string",
                component: "Text",
              },
              {
                key: "name",
                displayName: "Position Name",
                type: "string",
                component: "Text",
              },
            ],
          },
          {
            key: "associates",
            displayName: "Associates",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "name",
                displayName: "Associate Name",
                type: "string",
                component: "Text",
              },
              {
                key: "relationship",
                displayName: "Relationship",
                type: "string",
                component: "Text",
              },
            ],
          },
          {
            key: "affiliations",
            displayName: "Affiliations",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "source-key",
                displayName: "Source Key",
                type: "string",
                component: "Text",
              },
              {
                key: "name",
                displayName: "Affiliation Name",
                type: "string",
                component: "Text",
              },
            ],
          },
          {
            key: "related-urls",
            displayName: "Related URLs",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "source-key",
                displayName: "Source Key",
                type: "string",
                component: "Text",
              },
              {
                key: "name",
                displayName: "URL",
                type: "string",
                component: "Link",
              },
            ],
          },
          {
            key: "images",
            displayName: "Images",
            type: "array",
            component: "Table",
            properties: [
              {
                key: "internal-url",
                displayName: "Internal URL",
                type: "string",
                component: "Link",
              },
              {
                key: "external-url",
                displayName: "External URL",
                type: "string",
                component: "Link",
              },
              {
                key: "enabled-for-similarity",
                displayName: "Enabled for Similarity",
                type: "boolean",
                component: "Text",
              },
            ],
          },
          {
            key: "sources",
            displayName: "Sources",
            type: "object-array",
            component: "Table",
            properties: [
              {
                key: "url",
                displayName: "Source URL",
                type: "string",
                component: "Link",
              },
              {
                key: "name",
                displayName: "Source Name",
                type: "string",
                component: "Text",
              },
              {
                key: "flag-code",
                displayName: "Flag Code",
                type: "string",
                component: "Text",
              },
            ],
          },
          {
            key: "match-types",
            displayName: "Match Types",
            type: "array",
            component: "List",
          },
          {
            key: "pep-type",
            displayName: "PEP Type",
            type: "string",
            component: "Text",
          },
        ],
      },
      {
        key: "run-history",
        displayName: "Run History",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "scheduled-at",
            displayName: "Scheduled At",
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
            key: "report-template-version-id",
            displayName: "Template Version ID",
            type: "number",
            component: "Text",
          },
          {
            key: "type",
            displayName: "Run Type",
            type: "string",
            component: "Text",
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
            key: "ignored-item",
            displayName: "Ignored Item",
            type: "string",
            component: "Text",
          },
        ],
      },
    ],
    displayDate: true,
  },
};
