/* eslint-disable @typescript-eslint/ban-types */
// Phone Carrier metadata structure has score and result fields

// Enums for phone carrier verification specifics
export enum VerificationType {
  PHONE_CARRIER = "verification/database-phone-carrier",
}

enum VerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

// Enums for common types used in the Phone Carrier verification checks
export enum CheckName {
  NAME_FIRST_COMPARISON = "database_phone_carrier_name_first_comparison",
  NAME_LAST_COMPARISON = "database_phone_carrier_name_last_comparison",
  BIRTHDATE_COMPARISON = "database_phone_carrier_birthdate_comparison",
  ADDRESS_COMPARISON = "database_phone_carrier_address_comparison",
}

enum CheckStatus {
  PASSED = "passed",
  FAILED = "failed",
  NOT_APPLICABLE = "not_applicable",
}

enum RequirementLevel {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
  REQUIRES_RETRY = "requires_retry",
}

enum MatchResult {
  FULL = "full",
  PARTIAL = "partial",
  NONE = "none",
}

// Metadata structure for checks that have match_score and match_result properties
type MatchScoreMetadata = {
  match_score: number;
  match_result: MatchResult;
};

// Metadata structure for checks without metadata fields
type EmptyMetadata = {};

// Unified Metadata structure across checks
export type MetadataStructure = EmptyMetadata | MatchScoreMetadata;

// Defines the structure for each check in the checks array
type Check = {
  name: CheckName;
  status: CheckStatus;
  reasons: string[] | null;
  requirement: RequirementLevel;
  metadata: MetadataStructure;
};

// Sample Check Response Using the Defined Structure
export const exampleCheck: Check[] = [
  {
    name: CheckName.NAME_FIRST_COMPARISON,
    status: CheckStatus.PASSED,
    reasons: [],
    requirement: RequirementLevel.REQUIRED,
    metadata: {
      match_score: 86,
      match_result: MatchResult.PARTIAL,
    },
  },
  {
    name: CheckName.NAME_LAST_COMPARISON,
    status: CheckStatus.PASSED,
    reasons: [],
    requirement: RequirementLevel.REQUIRED,
    metadata: {
      match_score: 100,
      match_result: MatchResult.FULL,
    },
  },
  {
    name: CheckName.BIRTHDATE_COMPARISON,
    status: CheckStatus.NOT_APPLICABLE,
    reasons: ["unavailable_for_country"],
    requirement: RequirementLevel.REQUIRED,
    metadata: {},
  },
  {
    name: CheckName.ADDRESS_COMPARISON,
    status: CheckStatus.PASSED,
    reasons: [],
    requirement: RequirementLevel.REQUIRED,
    metadata: {
      match_score: 38,
      match_result: MatchResult.NONE,
    },
  },
];

// Main Phone Carrier Verification Type
type PhoneCarrierVerification = {
  type: VerificationType;
  id: string;
  attributes: {
    status: VerificationStatus;
    created_at: string; // ISO 8601 date string
    created_at_ts: number; // Unix timestamp
    submitted_at: string | null; // ISO 8601 date string or null
    submitted_at_ts: number | null; // Unix timestamp or null
    completed_at: string | null; // ISO 8601 date string or null
    completed_at_ts: number | null; // Unix timestamp or null

    country_code: string | null; // ISO 3166-1 alpha-2
    phone_number: string | null;
    name_first: string | null;
    name_last: string | null;
    address_street_1: string | null;
    address_street_2: string | null;
    address_city: string | null;
    address_subdivision: string | null;
    address_postal_code: string | null;
    birthdate: string | null; // Date in format YYYY-MM-DD

    checks: Check[]; // Array of Check objects
  };
  relationships: {
    inquiry: { data: null | { type: string; id: string } };
    template: { data: null | { type: string; id: string } };
    inquiry_template_version: { data: null | { type: string; id: string } };
    inquiry_template: { data: null | { type: string; id: string } };
    verification_template: { data: { type: string; id: string } };
    verification_template_version: { data: { type: string; id: string } };
    transaction: { data: { type: string; id: string } };
  };
};

export const displayConfig = {
  databasePhoneCarrierVerification: {
    displayName: "Database Phone Carrier Verification",
    displayData: [
      {
        key: "status",
        displayName: "Status",
        type: "status",
        component: "Text",
      },
      {
        key: "created-at",
        displayName: "Created At",
        type: "date",
        component: "Text",
      },
      {
        key: "submitted-at",
        displayName: "Submitted At",
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
        key: "country-code",
        displayName: "Country Code",
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
        displayName: "State/Region",
        type: "string",
        component: "Text",
      },
      {
        key: "address-postal-code",
        displayName: "Postal Code",
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
            key: "metadata.match-score",
            displayName: "Match Score",
            type: "number",
            component: "Text",
          },
          {
            key: "metadata.match-result",
            displayName: "Match Result",
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

// Example Phone Carrier Verification response
export const examplePhoneCarrierVerification: PhoneCarrierVerification = {
  type: VerificationType.PHONE_CARRIER,
  id: "ver_RbehaUdn3t9YKFLVqMPD5hkdSCmv",
  attributes: {
    status: VerificationStatus.PASSED,
    created_at: "2024-10-21T16:45:46.000Z",
    created_at_ts: 1729529146,
    submitted_at: "2024-10-21T16:45:47.000Z",
    submitted_at_ts: 1729529147,
    completed_at: "2024-10-21T16:45:48.000Z",
    completed_at_ts: 1729529148,
    country_code: "US",
    phone_number: "15033880692",
    name_first: "noah thomas",
    name_last: "voeller",
    address_street_1: "3420 VITTORIA PL UNIT 3",
    address_street_2: null,
    address_city: "SAN JOSE",
    address_subdivision: "California",
    address_postal_code: "95136",
    birthdate: "1999-04-19",
    checks: [
      {
        name: CheckName.NAME_FIRST_COMPARISON,
        status: CheckStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {
          match_score: 86,
          match_result: MatchResult.PARTIAL,
        },
      },
      {
        name: CheckName.NAME_LAST_COMPARISON,
        status: CheckStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {
          match_score: 100,
          match_result: MatchResult.FULL,
        },
      },
      {
        name: CheckName.BIRTHDATE_COMPARISON,
        status: CheckStatus.NOT_APPLICABLE,
        reasons: ["unavailable_for_country"],
        requirement: RequirementLevel.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.ADDRESS_COMPARISON,
        status: CheckStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {
          match_score: 38,
          match_result: MatchResult.NONE,
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
        type: "verification-template/database-phone-carrier",
        id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
      },
    },
    verification_template_version: {
      data: {
        type: "verification-template-version/database-phone-carrier",
        id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
      },
    },
    transaction: {
      data: {
        type: "transaction",
        id: "txn_UxtitXARMFBjeqbMAfraBdX8Dh5w",
      },
    },
  },
};
