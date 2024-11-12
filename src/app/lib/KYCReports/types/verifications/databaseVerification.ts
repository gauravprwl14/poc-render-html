// Enums for database verification specifics
export enum VerificationType {
  DATABASE = "verification/database",
}

// Enum for verification status
enum VerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

// Enum for check status
enum CheckStatus {
  PASSED = "passed",
  FAILED = "failed",
  NOT_APPLICABLE = "not_applicable",
}

// Enum for requirement levels
enum RequirementLevel {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
  REQUIRES_RETRY = "requires_retry",
}

// Enum for check names
export enum CheckName {
  DATABASE_INQUIRY_COMPARISON = "database_inquiry_comparison",
  DATABASE_ADDRESS_DELIVERABLE_DETECTION = "database_address_deliverable_detection",
  DATABASE_ADDRESS_RESIDENTIAL_DETECTION = "database_address_residential_detection",
  DATABASE_PO_BOX_DETECTION = "database_po_box_detection",
  DATABASE_DECEASED_DETECTION = "database_deceased_detection",
  DATABASE_ATTRIBUTE_COMPARISON = "database_attribute_comparison",
  DATABASE_IDENTITY_COMPARISON = "database_identity_comparison",
}

// Defines the structure for each check in the checks array
type Checks = {
  name: CheckName;
  status: CheckStatus;
  reasons: string[] | null;
  requirement: RequirementLevel;
  metadata: MetadataStructure;
};

type IdentifyComparisonCheck = {
  check_requirements: {
    name: string; // Field name, e.g., "name_first"
    match_result: "full" | "partial" | "none";
    status: "passed" | "failed";
    comparisons: {
      type:
        | "string_similarity"
        | "string_difference"
        | "substring"
        | "tokenization"
        | "date_similarity";
      match_level_minimum: "full" | "partial" | "none";
      match_result: "full" | "partial" | "none";
    }[];
  }[];
};

// Possible metadata structures across different checks
export type MetadataStructure =
  // eslint-disable-next-line @typescript-eslint/ban-types
  | {} // Empty object for most checks
  | IdentifyComparisonCheck; // Complex structure for database_identity_comparison only
// Example for a Check object
export const sampleCheck: Checks = {
  name: CheckName.DATABASE_IDENTITY_COMPARISON,
  status: CheckStatus.FAILED,
  reasons: ["property_conflict"],
  requirement: RequirementLevel.REQUIRED,
  metadata: {
    check_requirements: [
      {
        name: "name_first",
        match_result: "full",
        status: "passed",
        comparisons: [
          {
            type: "string_similarity",
            match_level_minimum: "partial",
            match_result: "full",
          },
          {
            type: "string_difference",
            match_level_minimum: "partial",
            match_result: "full",
          },
          {
            type: "substring",
            match_level_minimum: "partial",
            match_result: "full",
          },
          {
            type: "tokenization",
            match_level_minimum: "partial",
            match_result: "partial",
          },
        ],
      },
      // Additional requirements can be added here...
    ],
  },
};

// Defines the DatabaseVerification type structure
export type DatabaseVerification = {
  type: VerificationType; // Const verification type
  id: string; // Unique ID of the verification

  attributes: {
    status: VerificationStatus;
    created_at: string; // ISO 8601 datetime of creation
    created_at_ts: number; // Unix timestamp of creation
    submitted_at: string | null; // ISO 8601 datetime of submission
    submitted_at_ts: number | null; // Unix timestamp of submission
    completed_at: string | null; // ISO 8601 datetime of completion
    completed_at_ts: number | null; // Unix timestamp of completion
    country_code: string | null; // Country code in ISO 3166-1 alpha-2 format

    name_first: string | null; // First name
    name_middle: string | null; // Middle name
    name_last: string | null; // Last name
    address_street_1: string | null; // Primary street address
    address_street_2: string | null; // Secondary street address
    address_city: string | null; // City
    address_subdivision: string | null; // State or subdivision
    address_postal_code: string | null; // Postal code
    birthdate: string | null; // Date of birth in "YYYY-MM-DD" format
    identification_number: string | null;
    document_number: string | null;
    document_issuing_subdivision: string | null;
    document_expiry_date: string | null;
    document_issuing_date: string | null;
    phone_number: string | null;
    email_address: string | null;
    normalized_address_street_1: string | null;
    normalized_address_street_2: string | null;
    normalized_address_city: string | null;
    normalized_address_subdivision: string | null;
    normalized_address_postal_code: string | null;

    checks: Checks[];
  };

  relationships: {
    inquiry?: { data: { type: "inquiry"; id: string } | null };
    template?: { data: { type: string; id: string } | null };
    verification_template?: {
      data: { type: "verification-template/database"; id: string } | null;
    };
    verification_template_version?: {
      data: {
        type: "verification-template-version/database";
        id: string;
      } | null;
    };
    transaction?: { data: { type: "transaction"; id: string } | null };
  };
};

export const displayConfig = {
  databaseVerification: {
    displayName: "Database Verification",
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
            displayName: "Check Name",
            type: "string",
            component: "Text",
          },
          {
            key: "status",
            displayName: "Check Status",
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

// Sample response example
export const sampleDatabaseVerification: DatabaseVerification = {
  type: VerificationType.DATABASE,
  id: "ver_17hQHHXk7QXEDaFxb3J551G2b2Dg",
  attributes: {
    status: VerificationStatus.FAILED,
    created_at: "2024-10-21T16:41:47.000Z",
    created_at_ts: 1729528907,
    submitted_at: "2024-10-21T16:41:47.000Z",
    submitted_at_ts: 1729528907,
    completed_at: "2024-10-21T16:41:49.000Z",
    completed_at_ts: 1729528909,
    country_code: "US",
    name_first: "Timothy",
    name_middle: null,
    name_last: "Lee Mullet",
    address_street_1: "719 Lakebird Dr",
    address_street_2: "Sunnyvale, CA 94089",
    address_city: "Sunnyvale",
    address_subdivision: "California",
    address_postal_code: "94089",
    birthdate: "1982-07-15",
    identification_number: null,
    document_number: null,
    document_issuing_subdivision: null,
    document_expiry_date: null,
    document_issuing_date: null,
    phone_number: null,
    email_address: null,
    normalized_address_street_1: null,
    normalized_address_street_2: null,
    normalized_address_city: null,
    normalized_address_subdivision: null,
    normalized_address_postal_code: null,
    checks: [
      {
        name: CheckName.DATABASE_INQUIRY_COMPARISON,
        status: CheckStatus.NOT_APPLICABLE,
        reasons: ["no_inquiry"],
        requirement: RequirementLevel.NOT_REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.DATABASE_PO_BOX_DETECTION,
        status: CheckStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.NOT_REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.DATABASE_IDENTITY_COMPARISON,
        status: CheckStatus.FAILED,
        reasons: ["property_conflict"],
        requirement: RequirementLevel.REQUIRED,
        metadata: {
          check_requirements: [
            {
              name: "name_first",
              match_result: "full",
              status: "passed",
              comparisons: [
                {
                  type: "string_similarity",
                  match_level_minimum: "partial",
                  match_result: "full",
                },
                // Additional comparison objects
              ],
            },
            // Additional check requirements
          ],
        },
      },
      // Additional checks can be added here
    ],
  },
  relationships: {
    inquiry: { data: null },
    template: { data: null },
    verification_template: {
      data: {
        type: "verification-template/database",
        id: "vtmpl_G64U49ZeH8zV66K7tSPps5pDsWNH",
      },
    },
    verification_template_version: {
      data: {
        type: "verification-template-version/database",
        id: "vtmplv_vRajaTCd7PkAqbUvYAiWqVsmmN53",
      },
    },
    transaction: {
      data: { type: "transaction", id: "txn_LafxQ1B82DfspbtymFE8E1hDNboj" },
    },
  },
};

// 1. database_inquiry_comparison
// Status: not_applicable
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 2. database_address_deliverable_detection
// Status: not_applicable
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 3. database_address_residential_detection
// Status: not_applicable
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 4. database_po_box_detection
// Status: passed
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 5. database_deceased_detection
// Status: passed
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 6. database_attribute_comparison
// Status: passed
// Metadata Structure:
// typescript
// Copy code
// {
//   // Empty metadata object; no additional data
// }
// 7. database_identity_comparison
// Status: failed
// Metadata Structure: This metadata structure is more complex and contains detailed information regarding each attribute comparison.
// typescript
// Copy code
// {
//   check_requirements: [
//     {
//       name: string; // e.g., "name_first"
//       match_result: "full" | "partial" | "none"; // Result of the comparison
//       status: "passed" | "failed";
//       comparisons: [
//         {
//           type: "string_similarity" | "string_difference" | "substring" | "tokenization" | "date_similarity";
//           match_level_minimum: "full" | "partial" | "none";
//           match_result: "full" | "partial" | "none";
//         }
//         // More comparison objects can be added depending on the check requirements
//       ];
//     }
//     // More check requirement objects based on different fields being compared
//   ];
// }
