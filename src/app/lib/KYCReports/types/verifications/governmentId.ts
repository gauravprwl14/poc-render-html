export enum VerificationType {
  GOVERNMENT_ID = "verification/government-id",
}

export enum CheckName {
  ID_AAMVA_DATABASE_LOOKUP = "id_aamva_database_lookup",
  ID_ACCOUNT_COMPARISON = "id_account_comparison",
  ID_AGE_COMPARISON = "id_age_comparison",
  ID_AGE_INCONSISTENCY_DETECTION = "id_age_inconsistency_detection",
  ID_ATTRIBUTE_COMPARISON = "id_attribute_comparison",
  ID_BARCODE_DETECTION = "id_barcode_detection",
  ID_BARCODE_INCONSISTENCY_DETECTION = "id_barcode_inconsistency_detection",
  ID_BLUR_DETECTION = "id_blur_detection",
  ID_COLOR_INCONSISTENCY_DETECTION = "id_color_inconsistency_detection",
  ID_COMPROMISED_DETECTION = "id_compromised_detection",
  ID_DISALLOWED_COUNTRY_DETECTION = "id_disallowed_country_detection",
  ID_DISALLOWED_TYPE_DETECTION = "id_disallowed_type_detection",
  ID_DOUBLE_SIDE_DETECTION = "id_double_side_detection",
  ID_ELECTRONIC_REPLICA_DETECTION = "id_electronic_replica_detection",
  ID_ENTITY_DETECTION = "id_entity_detection",
  ID_EXPERIMENTAL_MODEL_DETECTION = "id_experimental_model_detection",
  ID_EXPIRED_DETECTION = "id_expired_detection",
  ID_EXTRACTED_PROPERTIES_DETECTION = "id_extracted_properties_detection",
  ID_EXTRACTION_INCONSISTENCY_DETECTION = "id_extraction_inconsistency_detection",
  ID_FABRICATION_DETECTION = "id_fabrication_detection",
  ID_GLARE_DETECTION = "id_glare_detection",
  ID_HANDWRITING_DETECTION = "id_handwriting_detection",
  ID_INCONSISTENT_REPEAT_DETECTION = "id_inconsistent_repeat_detection",
  ID_INQUIRY_COMPARISON = "id_inquiry_comparison",
  ID_MRZ_DETECTION = "id_mrz_detection",
  ID_MRZ_INCONSISTENCY_DETECTION = "id_mrz_inconsistency_detection",
  ID_NUMBER_FORMAT_INCONSISTENCY_DETECTION = "id_number_format_inconsistency_detection",
  ID_PAPER_DETECTION = "id_paper_detection",
  ID_PO_BOX_DETECTION = "id_po_box_detection",
  ID_PORTRAIT_CLARITY_DETECTION = "id_portrait_clarity_detection",
  ID_PORTRAIT_DETECTION = "id_portrait_detection",
  ID_PUBLIC_FIGURE_DETECTION = "id_public_figure_detection",
  ID_REAL_ID_DETECTION = "id_real_id_detection",
  ID_REPEAT_DETECTION = "id_repeat_detection",
  ID_SELFIE_COMPARISON = "id_selfie_comparison",
  ID_TAMPER_DETECTION = "id_tamper_detection",
  ID_UNPROCESSABLE_SUBMISSION_DETECTION = "id_unprocessable_submission_detection",
  ID_VALID_DATES_DETECTION = "id_valid_dates_detection",
  ID_VIDEO_QUALITY_DETECTION = "id_video_quality_detection",
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

enum VerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

// const id_disallowed_type_detection
type IdDisallowedTypeDetection = {
  "country-code": string | null;
  "detected-id-class": string | null;
  "detected-id-designations": string | null;
  "disallowed-id-designations": string | null;
  "selected-id-classes": string | null;
};

// Possible metadata structures across different checks
export type MetadataStructure =
  | {} // Empty object for most checks
  | IdDisallowedTypeDetection; //

type VerificationCheck = {
  name: CheckName;
  status: CheckStatus;
  reasons: string[] | null;
  requirement: RequirementLevel;
  metadata: MetadataStructure;
};

export type GovernmentIdVerificationResponse = {
  type: VerificationType;
  id: string;
  attributes: {
    status: VerificationStatus;
    "created-at": string;
    "created-at-ts": number;
    "submitted-at": string | null;
    "submitted-at-ts": number | null;
    "completed-at": string | null;
    "completed-at-ts": number | null;
    "country-code": string | null;
    "entity-confidence-score": number;
    "entity-confidence-reasons": string[];
    "front-photo-url": string;
    "back-photo-url": string;
    "photo-urls": {
      page: "front" | "back";
      url: string;
      "normalized-url": string;
      "original-urls": string[];
      "byte-size": number;
    }[];
    "selfie-photo": {
      url: string;
      "byte-size": number;
    };
    "selfie-photo-url": string;
    "video-url": string | null;
    "id-class": string;
    "capture-method": string;
    "name-first": string;
    "name-middle": string | null;
    "name-last": string;
    "name-suffix": string | null;
    birthdate: string;
    "address-street-1": string;
    "address-street-2": string | null;
    "address-city": string;
    "address-subdivision": string;
    "address-postal-code": string;
    "issuing-authority": string;
    "issuing-subdivision": string;
    nationality: string | null;
    "document-number": string | null;
    "visa-status": string | null;
    "issue-date": string;
    "expiration-date": string;
    designations: string | null;
    birthplace: string | null;
    endorsements: string | null;
    height: string | null;
    sex: string;
    restrictions: string | null;
    "vehicle-class": string | null;
    "identification-number": string;
    checks: VerificationCheck[];
  };
  relationships: {
    inquiry: { data: { type: string; id: string } | null };
    template: { data: { type: string; id: string } | null };
    "inquiry-template-version": { data: { type: string; id: string } };
    "inquiry-template": { data: { type: string; id: string } };
    "verification-template": { data: { type: string; id: string } };
    "verification-template-version": { data: { type: string; id: string } };
    transaction: { data: { type: string; id: string } | null };
    document: { data: { type: string; id: string } };
  };
};

export const displayConfig = {
  governmentId: {
    displayName: "Government ID Verification",
    displayData: [
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
        key: "name-suffix",
        displayName: "Suffix",
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
        key: "issuing-authority",
        displayName: "Issuing Authority",
        type: "string",
        component: "Text",
      },
      {
        key: "issuing-subdivision",
        displayName: "Issuing State",
        type: "string",
        component: "Text",
      },
      {
        key: "nationality",
        displayName: "Nationality",
        type: "string",
        component: "Text",
      },
      {
        key: "document-number",
        displayName: "Document Number",
        type: "string",
        component: "Text",
      },
      {
        key: "visa-status",
        displayName: "Visa Status",
        type: "string",
        component: "Text",
      },
      {
        key: "issue-date",
        displayName: "Issue Date",
        type: "string",
        component: "Text",
      },
      {
        key: "expiration-date",
        displayName: "Expiration Date",
        type: "string",
        component: "Text",
      },
      {
        key: "designations",
        displayName: "Designations",
        type: "string",
        component: "Text",
      },
      {
        key: "birthplace",
        displayName: "Place of Birth",
        type: "string",
        component: "Text",
      },
      {
        key: "endorsements",
        displayName: "Endorsements",
        type: "string",
        component: "Text",
      },
      {
        key: "height",
        displayName: "Height",
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
