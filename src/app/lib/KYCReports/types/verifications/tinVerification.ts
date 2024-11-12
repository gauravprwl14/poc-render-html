// no understanding of the metadata structure for each check

// Enums for phone carrier verification specifics
export enum VerificationType {
  DATABASE_TIN = "verification/database-tin",
}

// Enum for TIN verification statuses
enum TinVerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

// Enum for TIN verification check names
export enum CheckName {
  NAME_COMPARISON = "database_tin_name_comparison",
  DECEASED_DETECTION = "database_tin_deceased_detection",
  INVALID_FORMAT_DETECTION = "database_tin_invalid_format_detection",
  DISALLOWED_TYPE_DETECTION = "database_tin_disallowed_type_detection",
  SERVICE_AVAILABLE_DETECTION = "database_tin_service_available_detection",
}

// Enum for requirement types in TIN verification
enum RequirementType {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
  REQUIRES_RETRY = "requires_retry",
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type MetadataStructure = {}; // No additional metadata details provided for each check

// Definition of the structure for each check in TIN verification
type TinVerificationCheck = {
  name: CheckName;
  status: "passed" | "failed" | "not_applicable";
  reasons: string[] | null;
  requirement: RequirementType;
  metadata: MetadataStructure;
};

// Example TIN Verification Response based on extracted structure
export type TinVerificationResponse = {
  type: VerificationType;
  id: string;
  attributes: {
    status: TinVerificationStatus;
    created_at: string; // ISO 8601 format
    created_at_ts: number; // Unix timestamp
    submitted_at: string | null;
    submitted_at_ts: number | null;
    completed_at: string | null;
    completed_at_ts: number | null;

    country_code: string | null; // ISO 3166-1 alpha-2 code
    tin: string; // TIN number
    tin_type: string | null; // e.g., "ssn", "ein"
    name_first: string | null;
    name_last: string | null;
    name_business: string | null;

    checks: TinVerificationCheck[];
  };
  relationships: {
    inquiry: { data: null };
    template: { data: null };
    inquiry_template_version: { data: null };
    inquiry_template: { data: null };
    verification_template: {
      data: {
        type: "verification-template/database-tin";
        id: string;
      };
    };
    verification_template_version: {
      data: {
        type: "verification-template-version/database-tin";
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

// Example of a TIN verification response instance
export const exampleTinVerificationResponse: TinVerificationResponse = {
  type: VerificationType.DATABASE_TIN,
  id: "ver_d542LspeAzGLWX8DMBACDgFeapQB",
  attributes: {
    status: TinVerificationStatus.PASSED,
    created_at: "2024-10-21T16:31:38.000Z",
    created_at_ts: 1729528298,
    submitted_at: "2024-10-21T16:31:38.000Z",
    submitted_at_ts: 1729528298,
    completed_at: "2024-10-21T16:31:42.000Z",
    completed_at_ts: 1729528302,
    country_code: "US",
    tin: "361253818",
    tin_type: "ssn",
    name_first: "Akane",
    name_last: "Miura",
    name_business: null,
    checks: [
      {
        name: CheckName.NAME_COMPARISON,
        status: "passed",
        reasons: [],
        requirement: RequirementType.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.DECEASED_DETECTION,
        status: "passed",
        reasons: [],
        requirement: RequirementType.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.INVALID_FORMAT_DETECTION,
        status: "passed",
        reasons: [],
        requirement: RequirementType.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.DISALLOWED_TYPE_DETECTION,
        status: "passed",
        reasons: [],
        requirement: RequirementType.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.SERVICE_AVAILABLE_DETECTION,
        status: "passed",
        reasons: [],
        requirement: RequirementType.REQUIRED,
        metadata: {},
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
        type: "verification-template/database-tin",
        id: "vtmpl_Hm7FBzjg86MueKecPbRChYsqgPXn",
      },
    },
    verification_template_version: {
      data: {
        type: "verification-template-version/database-tin",
        id: "vtmplv_BCeG7i3A1Ykc54z7Y4EhSmV49KiT",
      },
    },
    transaction: {
      data: {
        type: "transaction",
        id: "txn_ssWEQe8QB4t5hgbHVFTXBNaGc515",
      },
    },
  },
};

export const displayConfig = {
  tinVerification: {
    displayName: "TIN Verification",
    displayData: [
      {
        key: "status",
        displayName: "Status",
        type: "string",
        component: "Text",
      },
      {
        key: "tin",
        displayName: "TIN",
        type: "string",
        component: "Text",
      },
      {
        key: "tin-type",
        displayName: "TIN Type",
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
        key: "name-business",
        displayName: "Business Name",
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
