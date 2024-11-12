// Enums for database verification specifics
export enum VerificationType {
  DATABASE_STANDARD = "verification/database-standard",
}

// Enum for DatabaseStandard verification statuses
enum DatabaseStandardVerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

// Enum for DatabaseStandard verification check names
export enum CheckName {
  IDENTITY_COMPARISON = "database_standard_identity_comparison",
}

// Enum for requirement types in DatabaseStandard verification
enum RequirementType {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
  REQUIRES_RETRY = "requires_retry",
}

enum CheckStatus {
  PASSED = "passed",
  FAILED = "failed",
  NOT_APPLICABLE = "not_applicable",
}

// Enum for comparison types in metadata
enum ComparisonType {
  STRING_SIMILARITY = "string_similarity",
  STRING_DIFFERENCE = "string_difference",
}

// Enum for match levels in metadata
enum MatchLevel {
  FULL = "full",
  PARTIAL = "partial",
  NONE = "none",
}

// Metadata structure for checks that don't require metadata
// eslint-disable-next-line @typescript-eslint/ban-types
type EmptyMetadata = {};

// Define the structure of complex metadata for Identity Comparison checks
type IdentityComparisonMetadata = {
  check_requirements: {
    name: string; // Field name, e.g., "name_first"
    match_result: MatchLevel;
    status: CheckStatus;
    comparisons: {
      type: ComparisonType;
      match_level_minimum: MatchLevel;
      match_result: MatchLevel;
    }[];
  }[];
};

// Unified Metadata structure across checks
export type MetadataStructure = EmptyMetadata | IdentityComparisonMetadata;

// Definition of the structure for each check in DatabaseStandard verification
export type Checks = {
  name: CheckName;
  status: CheckStatus;
  reasons: string[] | null;
  requirement: RequirementType;
  metadata: MetadataStructure;
};

// Example DatabaseStandard Verification Response based on extracted structure
type DatabaseStandardVerificationResponse = {
  type: "verification/database-standard";
  id: string;
  attributes: {
    status: DatabaseStandardVerificationStatus;
    created_at: string; // ISO 8601 format
    created_at_ts: number; // Unix timestamp
    submitted_at: string | null;
    submitted_at_ts: number | null;
    completed_at: string | null;
    completed_at_ts: number | null;

    country_code: string | null; // ISO 3166-1 alpha-2 code
    name_first: string | null;
    name_middle: string | null;
    name_last: string | null;
    address_street_1: string | null;
    address_street_2: string | null;
    address_city: string | null;
    address_subdivision: string | null;
    address_postal_code: string | null;
    birthdate: string | null; // Format "YYYY-MM-DD"
    email_address: string | null;
    phone_number: string | null;

    checks: Checks[];
  };
  relationships: {
    inquiry: { data: null };
    template: { data: null };
    inquiry_template_version: { data: null };
    inquiry_template: { data: null };
    verification_template: {
      data: {
        type: "verification-template/database-standard";
        id: string;
      };
    };
    verification_template_version: {
      data: {
        type: "verification-template-version/database-standard";
        id: string;
      };
    };
    transaction: {
      data: {
        type: "transaction";
        id: string;
      };
    };
  };
};

// Example of a DatabaseStandard verification response instance
export const exampleDatabaseStandardVerificationResponse: DatabaseStandardVerificationResponse =
  {
    type: "verification/database-standard",
    id: "ver_XxVxLqkPEFhoppfWcFpFmFKKRTCF",
    attributes: {
      status: DatabaseStandardVerificationStatus.PASSED,
      created_at: "2024-10-21T16:37:43.000Z",
      created_at_ts: 1729528663,
      submitted_at: "2024-10-21T16:37:43.000Z",
      submitted_at_ts: 1729528663,
      completed_at: "2024-10-21T16:37:44.000Z",
      completed_at_ts: 1729528664,
      country_code: "US",
      name_first: "Sucharitha",
      name_middle: null,
      name_last: "Rallapalli",
      address_street_1: "736 Saint John Cir",
      address_street_2: "Pleasanton, CA 94566",
      address_city: "Pleasanton",
      address_subdivision: "California",
      address_postal_code: "94566",
      birthdate: "1961-12-13",
      email_address: "suchi.rallapalli@yahoo.com",
      phone_number: "19254845233",
      checks: [
        {
          name: CheckName.IDENTITY_COMPARISON,
          status: CheckStatus.PASSED,
          reasons: [],
          requirement: RequirementType.REQUIRED,
          metadata: {
            check_requirements: [
              {
                name: "name_first",
                match_result: MatchLevel.FULL,
                status: "passed",
                comparisons: [
                  {
                    type: ComparisonType.STRING_SIMILARITY,
                    match_level_minimum: MatchLevel.PARTIAL,
                    match_result: MatchLevel.PARTIAL,
                  },
                  {
                    type: ComparisonType.STRING_DIFFERENCE,
                    match_level_minimum: MatchLevel.PARTIAL,
                    match_result: MatchLevel.FULL,
                  },
                ],
              },
              {
                name: "name_last",
                match_result: MatchLevel.FULL,
                status: "passed",
                comparisons: [
                  {
                    type: ComparisonType.STRING_SIMILARITY,
                    match_level_minimum: MatchLevel.PARTIAL,
                    match_result: MatchLevel.FULL,
                  },
                  {
                    type: ComparisonType.STRING_DIFFERENCE,
                    match_level_minimum: MatchLevel.PARTIAL,
                    match_result: MatchLevel.FULL,
                  },
                ],
              },
              {
                name: "phone_number",
                match_result: MatchLevel.FULL,
                status: "passed",
                comparisons: [
                  {
                    type: ComparisonType.STRING_SIMILARITY,
                    match_level_minimum: MatchLevel.FULL,
                    match_result: MatchLevel.FULL,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    relationships: {
      inquiry: { data: null },
      template: { data: null },
      inquiry_template_version: { data: null },
      inquiry_template: { data: null },
      verification_template: {
        data: {
          type: "verification-template/database-standard",
          id: "vtmpl_hQUnXukyWupDSU2HYZjMkbBE4fsB",
        },
      },
      verification_template_version: {
        data: {
          type: "verification-template-version/database-standard",
          id: "vtmplv_sWDbEXnDfXH1rN3yaq2maQJPpUua",
        },
      },
      transaction: {
        data: {
          type: "transaction",
          id: "txn_tkgEMcGHpVNRdXas4Wge8fPnfQBV",
        },
      },
    },
  };

export const displayConfig = {
  standardDatabaseVerification: {
    displayName: "Standard Database Verification",
    displayData: [
      {
        key: "status",
        displayName: "Status",
        type: "status",
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
        key: "address-street-1",
        displayName: "Street Address 1",
        type: "string",
        component: "Text",
      },
      {
        key: "address-street-2",
        displayName: "Street Address 2",
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
        displayName: "State",
        type: "string",
        component: "Text",
      },
      {
        key: "address-postal-code",
        displayName: "ZIP Code",
        type: "string",
        component: "Text",
      },
      {
        key: "birthdate",
        displayName: "Date of Birth",
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
        key: "email-address",
        displayName: "Email Address",
        type: "string",
        component: "Text",
      },
      {
        key: "checks",
        displayName: "Checks",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "name",
            displayName: "Name",
            type: "string",
            component: "Text",
          },
          {
            key: "status",
            displayName: "Status",
            type: "status",
            component: "Text",
          },
          {
            key: "requirement",
            displayName: "Requirement",
            type: "string",
            component: "Text",
          },
          {
            key: "reasons",
            displayName: "Reason",
            type: "string",
            component: "Text",
          },
        ],
      },
    ],
    displayDate: true,
  },
};
