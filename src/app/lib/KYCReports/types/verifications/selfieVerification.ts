// Enums for Selfie Verification specifics
export enum VerificationType {
  SELFIE = "verification/selfie",
}

export enum VerificationStatus {
  INITIATED = "initiated",
  SUBMITTED = "submitted",
  PASSED = "passed",
  FAILED = "failed",
  REQUIRES_RETRY = "requires_retry",
  CANCELED = "canceled",
  CONFIRMED = "confirmed",
}

export enum CheckName {
  ATTRIBUTE_COMPARISON = "selfie_attribute_comparison",
  ID_COMPARISON = "selfie_id_comparison",
  POSE_DETECTION = "selfie_pose_detection",
  MULTIPLE_FACES_DETECTION = "selfie_multiple_faces_detection",
  POSE_REPEAT_DETECTION = "selfie_pose_repeat_detection",
  ACCOUNT_COMPARISON = "selfie_account_comparison",
  SUSPICIOUS_ENTITY_DETECTION = "selfie_suspicious_entity_detection",
  LIVENESS_DETECTION = "selfie_liveness_detection",
  GLASSES_DETECTION = "selfie_glasses_detection",
  GLARE_DETECTION = "selfie_glare_detection",
  EXPERIMENTAL_MODEL_DETECTION = "selfie_experimental_model_detection",
  PORTRAIT_QUALITY_DETECTION = "selfie_portrait_quality_detection",
  PUBLIC_FIGURE_DETECTION = "selfie_public_figure_detection",
  AGE_COMPARISON = "selfie_age_comparison",
  FACE_COVERING_DETECTION = "selfie_face_covering_detection",
  VIDEO_QUALITY_DETECTION = "selfie_video_quality_detection",
}

enum RequirementLevel {
  REQUIRED = "required",
  NOT_REQUIRED = "not_required",
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type MetadataStructure = {}; // No additional metadata details provided for each check

// Defines the structure for each check in the checks array
export type Check = {
  name: CheckName;
  status: VerificationStatus;
  reasons: string[];
  requirement: RequirementLevel;
  // metadata: Record<string, unknown>; // Metadata can be extended for each check if needed
  metadata: MetadataStructure;
};

// Main Selfie Verification Type
type SelfieVerification = {
  type: VerificationType;
  id: string;
  attributes: {
    status: VerificationStatus;
    "created-at": string; // ISO 8601 date string
    "created-at-ts": number; // Unix timestamp
    "submitted-at": string | null; // ISO 8601 date string or null
    "submitted-at-ts": number | null; // Unix timestamp or null
    "completed-at": string | null; // ISO 8601 date string or null
    "completed-at-ts": number | null; // Unix timestamp or null
    "country-code": string | null;
    "left-photo-url": string | null;
    "center-photo-url": string | null;
    "right-photo-url": string | null;
    "photo-urls": { page: string; url: string; "byte-size": number }[];
    "video-url": string | null;
    "capture-method": string;
    "center-photo-face-coordinates": unknown | null;
    "entity-confidence-reasons": string[];
    "document-similarity-score": number | null;
    "selfie-similarity-score-left": number | null;
    "selfie-similarity-score-right": number | null;
    checks: Check[];
  };
  relationships: {
    inquiry: { data: null | { type: string; id: string } };
    template: { data: null | { type: string; id: string } };
    "inquiry-template-version": { data: null | { type: string; id: string } };
    "inquiry-template": { data: null | { type: string; id: string } };
    "verification-template": { data: { type: string; id: string } };
    "verification-template-version": { data: { type: string; id: string } };
    transaction: { data: null | { type: string; id: string } };
  };
};

// export const displayConfig = {
//   selfieVerification: {
//     displayName: "Selfie Verification",
//     displayData: [],
//     displayDate: true,
//   },
// };

export const displayConfig = {
  selfieVerification: {
    displayName: "Selfie Verification",
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
      // {
      //   key: "submitted-at",
      //   displayName: "Submitted At",
      //   type: "date",
      //   component: "Text",
      // },
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
        key: "left-photo-url",
        displayName: "Left Photo",
        type: "string",
        component: "Image",
      },
      {
        key: "center-photo-url",
        displayName: "Center Photo",
        type: "string",
        component: "Image",
      },
      {
        key: "right-photo-url",
        displayName: "Right Photo",
        type: "string",
        component: "Image",
      },
      {
        key: "photo-urls",
        displayName: "Photo URLs",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "page",
            displayName: "Page",
            type: "string",
            component: "Text",
          },
          {
            key: "url",
            displayName: "Photo URL",
            type: "string",
            component: "Image",
          },
          {
            key: "byte-size",
            displayName: "Byte Size",
            type: "number",
            component: "Text",
          },
        ],
      },
      {
        key: "checks",
        displayName: "Checks",
        type: "array",
        component: "Table",
        // properties: [
        //   {
        //     key: "name",
        //     displayName: "Check Name",
        //     type: "string",
        //     component: "Text",
        //   },
        //   {
        //     key: "status",
        //     displayName: "Status",
        //     type: "status",
        //     component: "Text",
        //   },
        //   {
        //     key: "reasons",
        //     displayName: "Reason",
        //     type: "string",
        //     component: "Text",
        //   },
        // ],
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
      {
        key: "capture-method",
        displayName: "Capture Method",
        type: "string",
        component: "Text",
      },
    ],
    displayDate: true,
  },
};

// Example Selfie Verification Response
const exampleSelfieVerification: SelfieVerification = {
  type: VerificationType.SELFIE,
  id: "ver_nLx3FgZgwk63v9QtJBtg5oHA8T1N",
  attributes: {
    status: VerificationStatus.PASSED,
    "created-at": "2024-10-09T11:49:59.000Z",
    "created-at-ts": 1728474599,
    "submitted-at": "2024-10-09T11:50:00.000Z",
    "submitted-at-ts": 1728474600,
    "completed-at": "2024-10-09T11:50:01.000Z",
    "completed-at-ts": 1728474601,
    "country-code": null,
    "left-photo-url": "https://files.withpersona.com/...left_photo.jpg",
    "center-photo-url": "https://files.withpersona.com/...center_photo.jpg",
    "right-photo-url": "https://files.withpersona.com/...right_photo.jpg",
    "photo-urls": [
      {
        page: "left_photo",
        url: "https://files.withpersona.com/...left_photo.jpg",
        "byte-size": 240093,
      },
      {
        page: "center_photo",
        url: "https://files.withpersona.com/...center_photo.jpg",
        "byte-size": 231110,
      },
      {
        page: "right_photo",
        url: "https://files.withpersona.com/...right_photo.jpg",
        "byte-size": 234273,
      },
    ],
    "video-url": null,
    "capture-method": "video",
    "center-photo-face-coordinates": null,
    "entity-confidence-reasons": [],
    "document-similarity-score": null,
    "selfie-similarity-score-left": null,
    "selfie-similarity-score-right": null,
    checks: [
      {
        name: CheckName.ATTRIBUTE_COMPARISON,
        status: VerificationStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.NOT_REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.ID_COMPARISON,
        status: VerificationStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.POSE_DETECTION,
        status: VerificationStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {},
      },
      {
        name: CheckName.FACE_COVERING_DETECTION,
        status: VerificationStatus.PASSED,
        reasons: [],
        requirement: RequirementLevel.REQUIRED,
        metadata: {},
      },
      // Additional checks can be added here as necessary
    ],
  },
  relationships: {
    inquiry: {
      data: { type: "inquiry", id: "inq_p4Wk3qJtW3ZrXxCFiFKyv1YFbUcX" },
    },
    template: { data: null },
    "inquiry-template-version": {
      data: {
        type: "inquiry-template-version",
        id: "itmplv_8yp4LnhQdRWSJC23uzjfyG51xXub",
      },
    },
    "inquiry-template": {
      data: { type: "inquiry-template", id: "itmpl_oDcSP2qVFy2TjUY9D9yH2aXh" },
    },
    "verification-template": {
      data: {
        type: "verification-template/selfie",
        id: "vtmpl_poZqBZ3fqGWswXXgMjexcFGo",
      },
    },
    "verification-template-version": {
      data: {
        type: "verification-template-version/selfie",
        id: "vtmplv_Rqn6urdxs1kPx57pMiwWnJDf8PMZ",
      },
    },
    transaction: { data: null },
  },
};
