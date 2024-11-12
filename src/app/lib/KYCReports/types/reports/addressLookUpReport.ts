// Defines the structure for the Address Lookup Report
export type AddressLookupReport = {
  type: "report/address-lookup"; // Const report type
  id: string; // Unique ID of the report

  attributes: {
    status: "pending" | "ready" | "errored"; // Status of the report, may include additional values
    createdAt: string; // ISO 8601 datetime string
    completedAt: string | null; // ISO 8601 datetime or null if incomplete
    redactedAt: string | null; // ISO 8601 datetime or null if not redacted
    reportTemplateVersionName: string; // Name of the report template version
    hasMatch: boolean; // Whether there was a match in the report
    isContinuous: boolean; // If the report was run more than once
    isRecurring: boolean; // If the report is scheduled to recur
    tags: string[]; // Array of tags associated with the report

    // Address details
    addressee: string | null;
    addressStreet1: string | null;
    addressStreet2: string | null;
    addressCity: string | null;
    addressSubdivision: string | null;
    addressPostalCode: string | null;

    // Resolved address details
    resolvedAddressee: string | null;
    resolvedAddressStreet1: string | null;
    resolvedAddressStreet2: string | null;
    resolvedAddressCity: string | null;
    resolvedAddressSubdivision: string | null;
    resolvedAddressPostalCode: string | null;

    // Metadata
    metadataRecordType: string | null;
    metadataZipType: string | null;
    metadataCountyFIPS: string | null;
    metadataCountyName: string | null;
    metadataCarrierRoute: string | null;
    metadataCarrierRouteType: string | null;
    metadataCongressionalDistrict: string | null;
    metadataBuildingDefaultIndicator: string | null;
    metadataResidentialDeliveryIndicator: string | null;
    metadataLatitude: number | null;
    metadataLongitude: number | null;
    metadataPrecision: string | null;
    metadataTimeZone: string | null;
    metadataUtcOffset: number | null;
    metadataObeysDaylightSavings: boolean | null;

    // Analysis details
    analysisDpvMatchCode: string | null;
    analysisDpvMatchCodeDecoded: string | null;
    analysisDpvFootnotes: string[] | null;
    analysisDpvFootnotesDecoded: string[] | null;
    analysisDpvCmra: string | null;
    analysisDpvVacant: string | null;
    analysisActive: string | null;
    analysisFootnotes: string[] | null;
    analysisFootnotesDecoded: string[] | null;
    analysisLacsLinkCode: string | null;
    analysisLacsLinkCodeDecoded: string | null;
    analysisLacsLinkIndicator: string | null;
    analysisLacsLinkIndicatorDecoded: string | null;
    analysisSuiteLinkMatch: string | null;
    metadataEwsMatch: string | null;
    errorMessage: string | null;
  };

  relationships?: RelationshipsObject; // Other Persona objects related to the report
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

export const displayConfig = {
  addressProof: {
    displayName: "Address Lookup Report",
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
        key: "attributes.tags",
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
        key: "report-template-version-name",
        displayName: "Template Version Name",
        type: "string",
        component: "Text",
      },
      {
        key: "address-street-1",
        displayName: "Address Street 1",
        type: "string",
        component: "Text",
      },
      {
        key: "address-street-2",
        displayName: "Address Street 2",
        type: "string",
        component: "Text",
      },
      {
        key: "address-city",
        displayName: "Address City",
        type: "string",
        component: "Text",
      },
      {
        key: "address-subdivision",
        displayName: "Address Subdivision",
        type: "string",
        component: "Text",
      },
      {
        key: "address-postal-code",
        displayName: "Address Postal Code",
        type: "string",
        component: "Text",
      },
      {
        key: "resolved-address-street-1",
        displayName: "Resolved Address Street 1",
        type: "string",
        component: "Text",
      },
      {
        key: "resolved-address-street-2",
        displayName: "Resolved Address Street 2",
        type: "string",
        component: "Text",
      },
      {
        key: "resolved-address-city",
        displayName: "Resolved Address City",
        type: "string",
        component: "Text",
      },
      {
        key: "resolved-address-subdivision",
        displayName: "Resolved Address Subdivision",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-county-name",
        displayName: "County Name",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-time-zone",
        displayName: "Time Zone",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-latitude",
        displayName: "Latitude",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-longitude",
        displayName: "Longitude",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-precision",
        displayName: "Precision",
        type: "string",
        component: "Text",
      },
      {
        key: "metadata-obeys-daylight-savings",
        displayName: "Daylight Savings Observed",
        type: "string",
        component: "Text",
      },
      {
        key: "analysis-dpv-match-code",
        displayName: "DPV Match Code",
        type: "string",
        component: "Text",
      },
      {
        key: "analysis-dpv-match-code-decoded",
        displayName: "DPV Match Code Decoded",
        type: "string",
        component: "Text",
      },
      {
        key: "analysis-dpv-footnotes",
        displayName: "DPV Footnotes",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "footnote",
            displayName: "Footnote",
            type: "string",
            component: "Text",
          },
        ],
      },
      {
        key: "analysis-dpv-footnotes-decoded",
        displayName: "DPV Footnotes Decoded",
        type: "array",
        component: "Table",
        properties: [
          {
            key: "description",
            displayName: "Description",
            type: "string",
            component: "Text",
          },
        ],
      },
      {
        key: "analysis-active",
        displayName: "Active Analysis",
        type: "string",
        component: "Text",
      },
      {
        key: "error-message",
        displayName: "Error Message",
        type: "string",
        component: "Text",
      },
    ],
    displayDate: true,
  },
};
