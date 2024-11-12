import * as TinVerification from "./tinVerification";
import * as PhoneCarrierVerification from "./phoneCarrier";
import * as DatabaseVerification from "./databaseVerification";
import * as DatabaseStandardVerification from "./databaseStandardVerification";
import * as GovernmentIdVerification from "./governmentId";
import * as SelfieVerification from "./selfieVerification";

// Enum for match levels in metadata
export enum MatchLevel {
  Full = "full",
  Partial = "partial",
  None = "none",
}
// Enum for comparison types in metadata
// Enum for comparison types in metadata
enum ComparisonType {
  STRING_SIMILARITY = "string_similarity",
  STRING_DIFFERENCE = "string_difference",
  SUBSTRING = "substring",
  TOKENIZATION = "tokenization",
  DATE_SIMILARITY = "date_similarity",
}

// Structure of each comparison in the metadata
export type Comparison = {
  type: ComparisonType;
  match_level_minimum: MatchLevel;
  match_result: MatchLevel;
};

enum CheckStatus {
  Passed = "passed",
  Failed = "failed",
  NotApplicable = "not_applicable",
}

// Structure of each requirement check in the metadata
export type CheckRequirement = {
  name: string;
  match_result: MatchLevel;
  status: CheckStatus;
  comparisons: Comparison[];
};

// Enum for requirement types in DatabaseStandard verification
enum RequirementType {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
  REQUIRES_RETRY = "requires_retry",
}

// Defines the structure for each check in the checks array
type Checks = {
  name: CheckName;
  status: CheckStatus;
  reasons: string[] | null;
  requirement: RequirementType;
  metadata: MetadataStructure;
};

enum VerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

type VerificationType =
  | TinVerification.VerificationType
  | PhoneCarrierVerification.VerificationType
  | DatabaseVerification.VerificationType
  | DatabaseStandardVerification.VerificationType
  | SelfieVerification.VerificationType
  | GovernmentIdVerification.VerificationType;

type CheckName =
  | TinVerification.CheckName
  | PhoneCarrierVerification.CheckName
  | DatabaseVerification.CheckName
  | DatabaseStandardVerification.CheckName
  | SelfieVerification.CheckName
  | GovernmentIdVerification.CheckName;

type MetadataStructure =
  | TinVerification.MetadataStructure
  | PhoneCarrierVerification.MetadataStructure
  | DatabaseVerification.MetadataStructure
  | DatabaseStandardVerification.MetadataStructure
  | SelfieVerification.MetadataStructure
  | GovernmentIdVerification.MetadataStructure;

export type VerificationResponse = {
  type: VerificationType;
  id: string;
  attributes: {
    status: VerificationStatus;
    created_at: string; // ISO 8601 format
    created_at_ts: number; // Unix timestamp
    submitted_at: string | null;
    submitted_at_ts: number | null;
    completed_at: string | null;
    completed_at_ts: number | null;

    checks: Checks[];
  };
  relationships: {
    inquiry?: { data: { type: "inquiry"; id: string } | null };
    template?: { data: { type: string; id: string } | null };
    verification_template?: {
      data: {
        type: string; // 'verification-template/database';
        id: string;
      } | null;
    };
    verification_template_version?: {
      data: {
        type: string; // 'verification-template-version/database';
        id: string;
      } | null;
    };
    transaction?: { data: { type: "transaction"; id: string } | null };
  };
};
