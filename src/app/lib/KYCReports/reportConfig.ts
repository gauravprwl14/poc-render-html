//  name to persona Config
export const ReportConfig = {
  kycCheck: {
    enable: true,
    flows: {
      selfieVerification: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "verification/selfie",
          },
        ],
      },
      governmentId: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "verification/government-id",
          },
        ],
      },
    },
  },

  eligibilityCheck: {
    enabled: true,
    flows: {
      addressProof: {
        enabled: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "report/address-lookup",
          },
        ],
      },
      citizenship: {
        enabled: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "w8ben",
          },
        ],
      },
      employment: {
        enabled: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "proofOfEmployment",
          },
        ],
      },
    },
  },

  legalAndComplianceCheck: {
    enable: true,
    flow: {
      tinVerification: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "tinVerification",
          },
        ],
      },
      databaseVerification: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "databaseVerification",
          },
        ],
      },
      standardDatabaseVerification: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "standardDatabaseVerification",
          },
        ],
      },
    },
  },

  riskCheck: {
    enabled: true,
    flows: {
      pep: {
        enabled: true,
        checks: [
          {
            checkName: "pepReport",
          },
        ],
      },
      watchList: {
        enabled: true,
        checks: [
          {
            checkName: "watchListReport",
          },
        ],
      },
      adverseMediaReport: {
        enabled: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "adverseMediaReport",
          },
        ],
      },
      socialMediaReport: {
        enabled: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "adverseMediaReport",
          },
        ],
      },
    },
  },

  fraudPrevention: {
    enable: true,
    flows: {
      email: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "emailRiskReport",
          },
        ],
      },
      phone: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "report/phone-number",
          },
        ],
      },
      address: {
        enable: true,
        checks: [
          {
            vendorName: "PERSONA",
            checkName: "addressLookupReport",
          },
        ],
      },
    },
  },

  creditCheck: {
    enable: true,
    flows: {
      creditScore: {
        enable: true,
        checks: [
          {
            vendorName: "Experian",
            checkName: "creditScore",
          },
        ],
      },
    },
  },

  depositCheck: {
    enable: true,
    flows: {
      financialDocumentVerification: {
        enable: true,
        checks: [
          {
            vendorName: "FIS",
            checkName: "FinancialDocumentVerification",
          },
        ],
      },
    },
  },
};
