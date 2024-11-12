// nao-dev/api/v1/applications/applicationId/KycCheck?type=tin_verification

export function convertKeysToKebabCase(obj: any): any {
  if (Array.isArray(obj)) {
    // If it's an array, map over each item and convert recursively
    return obj.map((item) => convertKeysToKebabCase(item));
  } else if (obj !== null && typeof obj === "object") {
    // If it's an object, create a new object with converted keys
    return Object.entries(obj).reduce((acc, [key, value]) => {
      // Convert the key from snake_case to kebab-case
      const kebabKey = key.replace(/_/g, "-");
      // Recursively convert the value
      acc[kebabKey] = convertKeysToKebabCase(value);
      return acc;
    }, {});
  } else {
    // If it's a primitive, return as is
    return obj;
  }
}

export const formatResponse = (response: any) => {
  if (response) {
    const formattedResponse = convertKeysToKebabCase(response[0]);
    let displayName = "";
    let description = "";

    switch (formattedResponse?.type) {
      case "verification/database-tin": {
        displayName = "TIN_VERIFICATION";
        description = "TIN_VERIFICATION";
        break;
      }
      case "verification/database-standard": {
        displayName = "STANDARD_DATABASE_VERIFICATION";
        description = "STANDARD_DATABASE_VERIFICATION";
        break;
      }
      case "verification/database": {
        displayName = "DATABASE_VERIFICATION";
        description = "DATABASE_VERIFICATION";
        break;
      }
      case "verification/government-id": {
        displayName = "GOVERNMENT_ID_VERIFICATION";
        description = "GOVERNMENT_ID_VERIFICATION";
        break;
      }
      case "verification/database-phone-carrier": {
        displayName = "PHONE_CARRIER_VERIFICATION";
        description = "PHONE_CARRIER_VERIFICATION";
        break;
      }
      case "verification/selfie": {
        displayName = "SELFIE_VERIFICATION";
        description = "SELFIE_VERIFICATION";
        break;
      }
      case "report/address-lookup": {
        displayName = "ADDRESS_LOOKUP_REPORT";
        description = "ADDRESS_LOOKUP_REPORT";
        break;
      }
      case "report/adverse-media": {
        displayName = "ADVERSE_MEDIA_REPORT";
        description = "ADVERSE_MEDIA_REPORT";
        break;
      }
      case "report/email-address": {
        displayName = "EMAIL_ADDRESS_REPORT";
        description = "EMAIL_ADDRESS_REPORT";
        break;
      }
      case "report/politically-exposed-person": {
        displayName = "POLITICALLY_EXPOSED_PERSON_REPORT";
        description = "POLITICALLY_EXPOSED_PERSON_REPORT";
        break;
      }
      case "report/phone-number": {
        displayName = "PHONE_NUMBER_REPORT";
        description = "PHONE_NUMBER_REPORT";
        break;
      }
      case "report/social-media": {
        displayName = "SOCIAL_MEDIA_REPORT";
        description = "SOCIAL_MEDIA_REPORT";
        break;
      }
      case "report/watchlist": {
        displayName = "WATCHLIST_REPORT";
        description = "WATCHLIST_REPORT";
        break;
      }

      default:
        break;
    }

    return {
      id: formattedResponse.id,
      status: formattedResponse.attributes.status.toUpperCase(),
      statusColor:
        formattedResponse.attributes.status === "Passes" ? "GREEN" : "RED",
      externalVerificationId: "persona:txn_RUonr6Xsmt4rUhm6nEA3Z83jQxP4",
      displayName: displayName,
      description: description,
      createdAt: formattedResponse.attributes["created-at"],
      activityBy: {
        source: "HARAMONY",
        identifier: 123,
      },
      data: formattedResponse,
    };
  }
};

export const CurrentkYCResponseStructure = {
  data: [
    {
      naoUserId: "5tH5YUUSNqpPqrAzXci1",
      checks: {
        tin_verification: [
          {
            id: "3903b5a7-6d66-4e45-85e6-d50bd8f4fd3c",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_RUonr6Xsmt4rUhm6nEA3Z83jQxP4",
            displayName: "TIN_VERIFICATION",
            description: "TIN_VERIFICATION",
            createdAt: "2024-11-07T13:54:03.205Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "verification/database-tin",
              id: "ver_a1gqXM1zUHnkYoeS3yXV5peNV8du",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:54:04.000Z",
                "created-at-ts": 1730987644,
                "submitted-at": "2024-11-07T13:54:04.000Z",
                "submitted-at-ts": 1730987644,
                "completed-at": "2024-11-07T13:54:04.000Z",
                "completed-at-ts": 1730987644,
                "country-code": "US",
                tin: "121312424",
                "tin-type": null,
                "name-first": "Praanv",
                "name-last": "Pandey",
                "name-business": null,
                checks: [
                  {
                    name: "database_tin_name_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_invalid_format_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_disallowed_type_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_service_available_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-tin",
                    id: "vtmpl_Hm7FBzjg86MueKecPbRChYsqgPXn",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-tin",
                    id: "vtmplv_BCeG7i3A1Ykc54z7Y4EhSmV49KiT",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_RUonr6Xsmt4rUhm6nEA3Z83jQxP4",
                  },
                },
              },
            },
          },
          {
            id: "b3c0afb4-3983-45b3-ac0e-79750b6c5fb6",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_6FFiMXufcwZoZ7EW2HS8nNrD3Qn6",
            displayName: "TIN_VERIFICATION",
            description: "TIN_VERIFICATION",
            createdAt: "2024-11-07T13:53:39.715Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-tin",
              id: "ver_n5yqm5PzGjQ67pxs64odGrbgt7xC",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:41.000Z",
                "created-at-ts": 1730987621,
                "submitted-at": "2024-11-07T13:53:41.000Z",
                "submitted-at-ts": 1730987621,
                "completed-at": "2024-11-07T13:53:41.000Z",
                "completed-at-ts": 1730987621,
                "country-code": "US",
                tin: "121312424",
                "tin-type": null,
                "name-first": "Praanv",
                "name-last": "Pandey",
                "name-business": null,
                checks: [
                  {
                    name: "database_tin_name_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_invalid_format_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_disallowed_type_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_service_available_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-tin",
                    id: "vtmpl_Hm7FBzjg86MueKecPbRChYsqgPXn",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-tin",
                    id: "vtmplv_BCeG7i3A1Ykc54z7Y4EhSmV49KiT",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_6FFiMXufcwZoZ7EW2HS8nNrD3Qn6",
                  },
                },
              },
            },
          },
          {
            id: "9c9b7319-9ac8-4e78-8fff-87e25b65f5dd",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_b3GPXQkdhBa5ULxsmxBqkK5YffJb",
            displayName: "TIN_VERIFICATION",
            description: "TIN_VERIFICATION",
            createdAt: "2024-11-07T13:53:20.844Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-tin",
              id: "ver_jkGamL7yYKup5srg4q77phBFEXYw",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:22.000Z",
                "created-at-ts": 1730987602,
                "submitted-at": "2024-11-07T13:53:22.000Z",
                "submitted-at-ts": 1730987602,
                "completed-at": "2024-11-07T13:53:22.000Z",
                "completed-at-ts": 1730987602,
                "country-code": "US",
                tin: "121312424",
                "tin-type": null,
                "name-first": "Praanv",
                "name-last": "Pandey",
                "name-business": null,
                checks: [
                  {
                    name: "database_tin_name_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_invalid_format_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_disallowed_type_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_service_available_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-tin",
                    id: "vtmpl_Hm7FBzjg86MueKecPbRChYsqgPXn",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-tin",
                    id: "vtmplv_BCeG7i3A1Ykc54z7Y4EhSmV49KiT",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_b3GPXQkdhBa5ULxsmxBqkK5YffJb",
                  },
                },
              },
            },
          },
          {
            id: "fc1eee90-f6aa-4434-b408-7f35c4290307",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_2y75U3tFqLuPJqmFbfSe7uxu6XBB",
            displayName: "TIN_VERIFICATION",
            description: "TIN_VERIFICATION",
            createdAt: "2024-11-07T13:50:50.097Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-tin",
              id: "ver_sKLMtqqaY8RnHr1ZkfpVYt2TxqMr",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:50:50.000Z",
                "created-at-ts": 1730987450,
                "submitted-at": "2024-11-07T13:50:51.000Z",
                "submitted-at-ts": 1730987451,
                "completed-at": "2024-11-07T13:50:51.000Z",
                "completed-at-ts": 1730987451,
                "country-code": "US",
                tin: "121312424",
                "tin-type": null,
                "name-first": "Praanv",
                "name-last": "Pandey",
                "name-business": null,
                checks: [
                  {
                    name: "database_tin_name_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_invalid_format_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_disallowed_type_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_tin_service_available_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-tin",
                    id: "vtmpl_Hm7FBzjg86MueKecPbRChYsqgPXn",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-tin",
                    id: "vtmplv_BCeG7i3A1Ykc54z7Y4EhSmV49KiT",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_2y75U3tFqLuPJqmFbfSe7uxu6XBB",
                  },
                },
              },
            },
          },
        ],
        phone_carrier_verification: [
          {
            id: "8ba5a80c-924e-4c4c-8267-550b548b2189",
            status: "failed",
            statusColor: "RED",
            externalVerificationId: "persona:txn_w2DTqhXK5Wg67bgdgHrFK6wSTZdX",
            displayName: "PHONE_CARRIER_VERIFICATION",
            description: "PHONE_CARRIER_VERIFICATION",
            createdAt: "2024-10-21T16:33:53.000Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: convertKeysToKebabCase({
              type: "verification/database-phone-carrier",
              id: "ver_EMdDwGjoZSKaWpdzbRyoJ5eVpn3B",
              attributes: {
                status: "failed",
                created_at: "2024-10-21T16:33:53.000Z",
                created_at_ts: 1729528433,
                submitted_at: "2024-10-21T16:33:53.000Z",
                submitted_at_ts: 1729528433,
                completed_at: "2024-10-21T16:33:55.000Z",
                completed_at_ts: 1729528435,
                country_code: "US",
                phone_number: "12099146402",
                name_first: "Sukhvir",
                name_last: "S Gill",
                address_street_1: "3244 Antonio Loop",
                address_street_2: null,
                address_city: "Tracy",
                address_subdivision: "California",
                address_postal_code: "95377",
                birthdate: "1998-08-08",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: { match_score: 74, match_result: "partial" },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "failed",
                    reasons: ["insufficient_match"],
                    requirement: "required",
                    metadata: { match_score: 42, match_result: "none" },
                  },
                  {
                    name: "database_phone_carrier_birthdate_comparison",
                    status: "not_applicable",
                    reasons: ["unavailable_for_country"],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_phone_carrier_address_comparison",
                    status: "failed",
                    reasons: ["insufficient_match"],
                    requirement: "required",
                    metadata: { match_score: null, match_result: "missing" },
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
                    id: "txn_sEXmMvgsADQ4xHDxR9cJFP45Ax9S",
                  },
                },
              },
            }),
            // data: {
            //   type: "verification/database-phone-carrier",
            //   id: "ver_EMdDwGjoZSKaWpdzbRyoJ5eVpn3B",
            //   attributes: {
            //     status: "failed",
            //     created_at: "2024-10-21T16:33:53.000Z",
            //     created_at_ts: 1729528433,
            //     submitted_at: "2024-10-21T16:33:53.000Z",
            //     submitted_at_ts: 1729528433,
            //     completed_at: "2024-10-21T16:33:55.000Z",
            //     completed_at_ts: 1729528435,
            //     country_code: "US",
            //     phone_number: "12099146402",
            //     name_first: "Sukhvir",
            //     name_last: "S Gill",
            //     address_street_1: "3244 Antonio Loop",
            //     address_street_2: null,
            //     address_city: "Tracy",
            //     address_subdivision: "California",
            //     address_postal_code: "95377",
            //     birthdate: "1998-08-08",
            //     checks: [
            //       {
            //         name: "database_phone_carrier_name_first_comparison",
            //         status: "passed",
            //         reasons: [],
            //         requirement: "required",
            //         metadata: { match_score: 74, match_result: "partial" },
            //       },
            //       {
            //         name: "database_phone_carrier_name_last_comparison",
            //         status: "failed",
            //         reasons: ["insufficient_match"],
            //         requirement: "required",
            //         metadata: { match_score: 42, match_result: "none" },
            //       },
            //       {
            //         name: "database_phone_carrier_birthdate_comparison",
            //         status: "not_applicable",
            //         reasons: ["unavailable_for_country"],
            //         requirement: "required",
            //         metadata: {},
            //       },
            //       {
            //         name: "database_phone_carrier_address_comparison",
            //         status: "failed",
            //         reasons: ["insufficient_match"],
            //         requirement: "required",
            //         metadata: { match_score: null, match_result: "missing" },
            //       },
            //     ],
            //   },
            //   relationships: {
            //     inquiry: { data: null },
            //     template: { data: null },
            //     inquiry_template_version: { data: null },
            //     inquiry_template: { data: null },
            //     verification_template: {
            //       data: {
            //         type: "verification-template/database-phone-carrier",
            //         id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
            //       },
            //     },
            //     verification_template_version: {
            //       data: {
            //         type: "verification-template-version/database-phone-carrier",
            //         id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
            //       },
            //     },
            //     transaction: {
            //       data: {
            //         type: "transaction",
            //         id: "txn_sEXmMvgsADQ4xHDxR9cJFP45Ax9S",
            //       },
            //     },
            //   },
            // },
          },
          {
            id: "8ba5a80c-924e-4c4c-8267-550b548b21892",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_w2DTqhXK5Wg67bgdgHrFK6wSTZdX",
            displayName: "PHONE_CARRIER_VERIFICATION",
            description: "PHONE_CARRIER_VERIFICATION",
            createdAt: "2024-11-07T13:54:04.277Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "verification/database-phone-carrier",
              id: "ver_vLQ4akshs9y5ssVWAS87ghsA3J5x",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:54:06.000Z",
                "created-at-ts": 1730987646,
                "submitted-at": "2024-11-07T13:54:06.000Z",
                "submitted-at-ts": 1730987646,
                "completed-at": "2024-11-07T13:54:06.000Z",
                "completed-at-ts": 1730987646,
                "country-code": "US",
                "phone-number": "9008369803",
                "name-first": "Praanv",
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": null,
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_birthdate_comparison",
                    status: "not_applicable",
                    reasons: ["unavailable_for_country"],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_phone_carrier_address_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-phone-carrier",
                    id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-phone-carrier",
                    id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_w2DTqhXK5Wg67bgdgHrFK6wSTZdX",
                  },
                },
              },
            },
          },
          {
            id: "2db6e393-2cfa-4b59-81c9-2b4e91cfd2d3",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_2F8QqzqVd3ZRKjMynRgt59VBgZNn",
            displayName: "PHONE_CARRIER_VERIFICATION",
            description: "PHONE_CARRIER_VERIFICATION",
            createdAt: "2024-11-07T13:53:40.234Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-phone-carrier",
              id: "ver_TvkAgoMwVjzseYYVVRTAW1knmSQ2",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:41.000Z",
                "created-at-ts": 1730987621,
                "submitted-at": "2024-11-07T13:53:41.000Z",
                "submitted-at-ts": 1730987621,
                "completed-at": "2024-11-07T13:53:41.000Z",
                "completed-at-ts": 1730987621,
                "country-code": "US",
                "phone-number": "9008369803",
                "name-first": "Praanv",
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": null,
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_birthdate_comparison",
                    status: "not_applicable",
                    reasons: ["unavailable_for_country"],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_phone_carrier_address_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-phone-carrier",
                    id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-phone-carrier",
                    id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_2F8QqzqVd3ZRKjMynRgt59VBgZNn",
                  },
                },
              },
            },
          },
          {
            id: "fd9eb9be-8738-433b-b1df-a8849e2f764c",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_nuh3kCqqycjvhXsPdf813gBEszQF",
            displayName: "PHONE_CARRIER_VERIFICATION",
            description: "PHONE_CARRIER_VERIFICATION",
            createdAt: "2024-11-07T13:53:21.454Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-phone-carrier",
              id: "ver_tHfMY4ipUX5UEFdisma55mULQBY8",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:22.000Z",
                "created-at-ts": 1730987602,
                "submitted-at": "2024-11-07T13:53:22.000Z",
                "submitted-at-ts": 1730987602,
                "completed-at": "2024-11-07T13:53:22.000Z",
                "completed-at-ts": 1730987602,
                "country-code": "US",
                "phone-number": "9008369803",
                "name-first": "Praanv",
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": null,
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_birthdate_comparison",
                    status: "not_applicable",
                    reasons: ["unavailable_for_country"],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_phone_carrier_address_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-phone-carrier",
                    id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-phone-carrier",
                    id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_nuh3kCqqycjvhXsPdf813gBEszQF",
                  },
                },
              },
            },
          },
          {
            id: "3f1b8dd4-29b7-4b88-925d-e1676a0d3675",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_YMH3ZmwUxMmLR4pPEequC3U2d1jc",
            displayName: "PHONE_CARRIER_VERIFICATION",
            description: "PHONE_CARRIER_VERIFICATION",
            createdAt: "2024-11-07T13:50:50.697Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-phone-carrier",
              id: "ver_xHadwJEuzrUzeVG2Pwf6kxVc7Bk4",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:50:52.000Z",
                "created-at-ts": 1730987452,
                "submitted-at": "2024-11-07T13:50:52.000Z",
                "submitted-at-ts": 1730987452,
                "completed-at": "2024-11-07T13:50:52.000Z",
                "completed-at-ts": 1730987452,
                "country-code": "US",
                "phone-number": "9008369803",
                "name-first": "Praanv",
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": null,
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                  {
                    name: "database_phone_carrier_birthdate_comparison",
                    status: "not_applicable",
                    reasons: ["unavailable_for_country"],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_phone_carrier_address_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 100,
                      "match-result": "full",
                    },
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-phone-carrier",
                    id: "vtmpl_4XmgMra8Fga5983b4bxUMC4sjoYF",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-phone-carrier",
                    id: "vtmplv_eyTWhFFSUR8b6j6ZBFPJ66jmGA6m",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_YMH3ZmwUxMmLR4pPEequC3U2d1jc",
                  },
                },
              },
            },
          },
        ],
        database_standard_verification: [
          formatResponse([
            {
              type: "verification/database-standard",
              id: "ver_pJ7bK2kewmjmowuyhPCCvnutKNKf",
              attributes: {
                status: "failed",
                created_at: "2024-10-21T16:34:04.000Z",
                created_at_ts: 1729528444,
                submitted_at: "2024-10-21T16:34:05.000Z",
                submitted_at_ts: 1729528445,
                completed_at: "2024-10-21T16:34:05.000Z",
                completed_at_ts: 1729528445,
                country_code: "US",
                name_first: "Sukhvir",
                name_middle: null,
                name_last: "S Gill",
                address_street_1: "3244 Antonio Loop",
                address_street_2: "Tracy, CA 95377",
                address_city: "Tracy",
                address_subdivision: "California",
                address_postal_code: "95377",
                birthdate: "1998-08-08",
                email_address: "g_sukhvir@yahoo.com",
                phone_number: "12099146402",
                checks: [
                  {
                    name: "database_standard_identity_comparison",
                    status: "failed",
                    reasons: ["insufficient_match"],
                    requirement: "required",
                    metadata: {
                      check_requirements: [
                        {
                          name: "name_first",
                          match_result: "none",
                          status: "failed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                            {
                              type: "string_difference",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "name_last",
                          match_result: "partial",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "partial",
                              match_result: "partial",
                            },
                            {
                              type: "string_difference",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_city",
                          match_result: "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
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
                    id: "txn_rqe4XHVgchW5dqynhYsx1yhWRPNC",
                  },
                },
              },
            },
          ]),
          {
            id: "7d48d72f-1fa9-4b2c-b696-b60f46c185fa",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_2LWDL6D1XAorFncZWBY2DpEGgXCh",
            displayName: "DATABASE_STANDARD_VERIFICATION",
            description: "DATABASE_STANDARD_VERIFICATION",
            createdAt: "2024-11-07T13:54:05.141Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "verification/database-standard",
              id: "ver_jyAgr4pMieCff1QNyfLWLzqfx2ga",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:54:06.000Z",
                "created-at-ts": 1730987646,
                "submitted-at": "2024-11-07T13:54:06.000Z",
                "submitted-at-ts": 1730987646,
                "completed-at": "2024-11-07T13:54:06.000Z",
                "completed-at-ts": 1730987646,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "email-address": "pranav@gmail.com",
                "phone-number": "9008369803",
                checks: [
                  {
                    name: "database_standard_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-standard",
                    id: "vtmpl_hQUnXukyWupDSU2HYZjMkbBE4fsB",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-standard",
                    id: "vtmplv_sWDbEXnDfXH1rN3yaq2maQJPpUua",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_2LWDL6D1XAorFncZWBY2DpEGgXCh",
                  },
                },
              },
            },
          },
          {
            id: "58c02634-2f68-4939-82d9-5b923c28a93a",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_KA7yC29x5LujmYacx5umK1P363od",
            displayName: "DATABASE_STANDARD_VERIFICATION",
            description: "DATABASE_STANDARD_VERIFICATION",
            createdAt: "2024-11-07T13:53:40.829Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-standard",
              id: "ver_2pCuafNMBxktH6qwRwByTwM3XcBC",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:41.000Z",
                "created-at-ts": 1730987621,
                "submitted-at": "2024-11-07T13:53:42.000Z",
                "submitted-at-ts": 1730987622,
                "completed-at": "2024-11-07T13:53:42.000Z",
                "completed-at-ts": 1730987622,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "email-address": "pranav@gmail.com",
                "phone-number": "9008369803",
                checks: [
                  {
                    name: "database_standard_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-standard",
                    id: "vtmpl_hQUnXukyWupDSU2HYZjMkbBE4fsB",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-standard",
                    id: "vtmplv_sWDbEXnDfXH1rN3yaq2maQJPpUua",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_KA7yC29x5LujmYacx5umK1P363od",
                  },
                },
              },
            },
          },
          {
            id: "ffe653e2-c90f-4f6c-980b-7d5965e589e0",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_h837gnEomxNkr3mLyfBWFLoc8DJZ",
            displayName: "DATABASE_STANDARD_VERIFICATION",
            description: "DATABASE_STANDARD_VERIFICATION",
            createdAt: "2024-11-07T13:53:21.917Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database-standard",
              id: "ver_fhU6G725bWhdtQmQsLtGWNyHX4p9",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:23.000Z",
                "created-at-ts": 1730987603,
                "submitted-at": "2024-11-07T13:53:23.000Z",
                "submitted-at-ts": 1730987603,
                "completed-at": "2024-11-07T13:53:23.000Z",
                "completed-at-ts": 1730987603,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "email-address": "pranav@gmail.com",
                "phone-number": "9008369803",
                checks: [
                  {
                    name: "database_standard_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database-standard",
                    id: "vtmpl_hQUnXukyWupDSU2HYZjMkbBE4fsB",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database-standard",
                    id: "vtmplv_sWDbEXnDfXH1rN3yaq2maQJPpUua",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_h837gnEomxNkr3mLyfBWFLoc8DJZ",
                  },
                },
              },
            },
          },
        ],
        database_verification: [
          formatResponse([
            {
              type: "verification/database",
              id: "ver_17hQHHXk7QXEDaFxb3J551G2b2Dg",
              attributes: {
                status: "failed",
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
                    name: "database_inquiry_comparison",
                    status: "not_applicable",
                    reasons: ["no_inquiry"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_deliverable_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_residential_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_po_box_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_attribute_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_identity_comparison",
                    status: "failed",
                    reasons: ["property_conflict"],
                    requirement: "required",
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
                        {
                          name: "name_last",
                          match_result: "partial",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                            {
                              type: "string_difference",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                            {
                              type: "substring",
                              match_level_minimum: "partial",
                              match_result: "partial",
                            },
                            {
                              type: "tokenization",
                              match_level_minimum: "partial",
                              match_result: "partial",
                            },
                          ],
                        },
                        {
                          name: "birthdate",
                          match_result: "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "date_similarity",
                              match_level_minimum: "partial",
                              match_result: "full",
                            },
                          ],
                        },
                        {
                          name: "address_street_house_number",
                          match_result: "none",
                          status: "failed",
                          comparisons: [
                            {
                              type: "string_difference",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_street_name",
                          match_result: "none",
                          status: "failed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_street_type",
                          match_result: "none",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "none",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_city",
                          match_result: "none",
                          status: "failed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_subdivision",
                          match_result: "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              match_level_minimum: "full",
                              match_result: "full",
                            },
                          ],
                        },
                        {
                          name: "address_postal_code",
                          match_result: "none",
                          status: "failed",
                          comparisons: [
                            {
                              type: "string_difference",
                              match_level_minimum: "partial",
                              match_result: "none",
                            },
                          ],
                        },
                        {
                          name: "address_country_code",
                          match_result: "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              match_level_minimum: "full",
                              match_result: "full",
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
                  data: {
                    type: "transaction",
                    id: "txn_LafxQ1B82DfspbtymFE8E1hDNboj",
                  },
                },
              },
            },
          ]),
          {
            id: "02a02664-f75a-4190-bb9a-071aeb92f58f",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_B711rjqxy5wiDvhLpQeHAbmy9sVo",
            displayName: "DATABASE_VERIFICATION",
            description: "DATABASE_VERIFICATION",
            createdAt: "2024-11-07T13:54:05.753Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "verification/database",
              id: "ver_28iFudwLrF5roYuM3Movs7tAuoYp",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:54:06.000Z",
                "created-at-ts": 1730987646,
                "submitted-at": "2024-11-07T13:54:07.000Z",
                "submitted-at-ts": 1730987647,
                "completed-at": "2024-11-07T13:54:07.000Z",
                "completed-at-ts": 1730987647,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "identification-number": "121-31-2424",
                "document-number": null,
                "document-issuing-subdivision": null,
                "document-expiry-date": null,
                "document-issuing-date": null,
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "normalized-address-street-1": null,
                "normalized-address-street-2": null,
                "normalized-address-city": null,
                "normalized-address-subdivision": null,
                "normalized-address-postal-code": null,
                checks: [
                  {
                    name: "database_inquiry_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_deliverable_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_residential_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_po_box_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database",
                    id: "vtmpl_G64U49ZeH8zV66K7tSPps5pDsWNH",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database",
                    id: "vtmplv_vRajaTCd7PkAqbUvYAiWqVsmmN53",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_B711rjqxy5wiDvhLpQeHAbmy9sVo",
                  },
                },
              },
            },
          },
          {
            id: "7db39c90-e63c-4421-90aa-10975eb76427",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_ndrKVvMfHvPfHPJ4M273vF1GWUrG",
            displayName: "DATABASE_VERIFICATION",
            description: "DATABASE_VERIFICATION",
            createdAt: "2024-11-07T13:53:41.338Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database",
              id: "ver_nWAfq9fnKAhTpwToFhuuHy3wf7nx",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:42.000Z",
                "created-at-ts": 1730987622,
                "submitted-at": "2024-11-07T13:53:42.000Z",
                "submitted-at-ts": 1730987622,
                "completed-at": "2024-11-07T13:53:43.000Z",
                "completed-at-ts": 1730987623,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "identification-number": "121-31-2424",
                "document-number": null,
                "document-issuing-subdivision": null,
                "document-expiry-date": null,
                "document-issuing-date": null,
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "normalized-address-street-1": null,
                "normalized-address-street-2": null,
                "normalized-address-city": null,
                "normalized-address-subdivision": null,
                "normalized-address-postal-code": null,
                checks: [
                  {
                    name: "database_inquiry_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_deliverable_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_residential_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_po_box_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database",
                    id: "vtmpl_G64U49ZeH8zV66K7tSPps5pDsWNH",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database",
                    id: "vtmplv_vRajaTCd7PkAqbUvYAiWqVsmmN53",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_ndrKVvMfHvPfHPJ4M273vF1GWUrG",
                  },
                },
              },
            },
          },
          {
            id: "a429da6e-0e98-43f4-94a1-353de8116551",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_xewX9jRerYUvoFag5xfqd9xxhGzD",
            displayName: "DATABASE_VERIFICATION",
            description: "DATABASE_VERIFICATION",
            createdAt: "2024-11-07T13:53:22.524Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "verification/database",
              id: "ver_JCJoasBt6pp3vzizZL6eozL4SHbs",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T13:53:23.000Z",
                "created-at-ts": 1730987603,
                "submitted-at": "2024-11-07T13:53:23.000Z",
                "submitted-at-ts": 1730987603,
                "completed-at": "2024-11-07T13:53:23.000Z",
                "completed-at-ts": 1730987603,
                "country-code": "US",
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                birthdate: "1991-10-10",
                "identification-number": "121-31-2424",
                "document-number": null,
                "document-issuing-subdivision": null,
                "document-expiry-date": null,
                "document-issuing-date": null,
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "normalized-address-street-1": null,
                "normalized-address-street-2": null,
                "normalized-address-city": null,
                "normalized-address-subdivision": null,
                "normalized-address-postal-code": null,
                checks: [
                  {
                    name: "database_inquiry_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_deliverable_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_address_residential_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_po_box_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "database_deceased_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "database_identity_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: null,
                },
                "inquiry-template": {
                  data: null,
                },
                "verification-template": {
                  data: {
                    type: "verification-template/database",
                    id: "vtmpl_G64U49ZeH8zV66K7tSPps5pDsWNH",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/database",
                    id: "vtmplv_vRajaTCd7PkAqbUvYAiWqVsmmN53",
                  },
                },
                transaction: {
                  data: {
                    type: "transaction",
                    id: "txn_xewX9jRerYUvoFag5xfqd9xxhGzD",
                  },
                },
              },
            },
          },
        ],
        social_media_report: [
          {
            id: "c157fefb-18df-4913-85bd-278246a22c83",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_DRUYfTDAsiJA4RdG2EbvqSFeg6RY",
            displayName: "SOCIAL_MEDIA_REPORT",
            description: "SOCIAL_MEDIA_REPORT",
            createdAt: "2024-11-07T13:54:06.370Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/social-media",
              id: "rep_awSpVqyPF4CbHSnBoXSxBxwau6My",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:08.000Z",
                "completed-at": "2024-11-07T13:54:08.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-last": "Pandey",
                birthdate: "1991-10-10",
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "linkedin-url": "linkedin.com/in/alexander-sample-9b821b17",
                "linkedin-username": "alexander-sample-9b821b17",
                "linkedin-id": "57272540",
                "facebook-url": "facebook.com/alexanderjsample",
                "facebook-username": "alexanderjsample",
                "facebook-id": "1000000000",
                "twitter-url": "twitter.com/alexanderjsample",
                "twitter-username": "alexanderjsample",
                "github-url": "github.com/alexanderj",
                "github-username": "alexanderj",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/social-media",
                    id: "rptp_W9j7SKvFr7VuGwmVMqCJz3SADCLA",
                  },
                },
              },
            },
          },
          {
            id: "cad2ed7b-ca1f-42a3-8f74-e2afe5dc851b",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_Gtx3HHxdaL86rc1Pe3LdcEmc8CUg",
            displayName: "SOCIAL_MEDIA_REPORT",
            description: "SOCIAL_MEDIA_REPORT",
            createdAt: "2024-11-07T13:53:41.970Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/social-media",
              id: "rep_F3Gpz9g6jAtDEx5EquA6a3NqK6PY",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:43.000Z",
                "completed-at": "2024-11-07T13:53:43.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-last": "Pandey",
                birthdate: "1991-10-10",
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "linkedin-url": "linkedin.com/in/alexander-sample-9b821b17",
                "linkedin-username": "alexander-sample-9b821b17",
                "linkedin-id": "57272540",
                "facebook-url": "facebook.com/alexanderjsample",
                "facebook-username": "alexanderjsample",
                "facebook-id": "1000000000",
                "twitter-url": "twitter.com/alexanderjsample",
                "twitter-username": "alexanderjsample",
                "github-url": "github.com/alexanderj",
                "github-username": "alexanderj",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/social-media",
                    id: "rptp_W9j7SKvFr7VuGwmVMqCJz3SADCLA",
                  },
                },
              },
            },
          },
          {
            id: "2bb5280b-de4f-4bb7-980b-46fe7d0bb216",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_Ha3rMZj52f3NXpqRcFzm9j6MybLE",
            displayName: "SOCIAL_MEDIA_REPORT",
            description: "SOCIAL_MEDIA_REPORT",
            createdAt: "2024-11-07T13:53:23.035Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/social-media",
              id: "rep_UFQeYNSnVj46CudPMA7iSaxNwCMW",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:23.000Z",
                "completed-at": "2024-11-07T13:53:23.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-last": "Pandey",
                birthdate: "1991-10-10",
                "phone-number": "9008369803",
                "email-address": "pranav@gmail.com",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "linkedin-url": "linkedin.com/in/alexander-sample-9b821b17",
                "linkedin-username": "alexander-sample-9b821b17",
                "linkedin-id": "57272540",
                "facebook-url": "facebook.com/alexanderjsample",
                "facebook-username": "alexanderjsample",
                "facebook-id": "1000000000",
                "twitter-url": "twitter.com/alexanderjsample",
                "twitter-username": "alexanderjsample",
                "github-url": "github.com/alexanderj",
                "github-username": "alexanderj",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/social-media",
                    id: "rptp_W9j7SKvFr7VuGwmVMqCJz3SADCLA",
                  },
                },
              },
            },
          },
        ],
        adverse_media_report: [
          {
            id: "3dabb016-831c-4eab-9b35-f0dccb641a23",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_UJx11zg5E5dPrhnqbYW7aXVDqAqE",
            displayName: "ADVERSE_MEDIA_REPORT",
            description: "ADVERSE_MEDIA_REPORT",
            createdAt: "2024-11-07T13:54:06.875Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/adverse-media",
              id: "rep_JRPeC4f99dUrAGywnUXEB35jNRvc",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:09.000Z",
                "completed-at": "2024-11-07T13:54:09.000Z",
                "redacted-at": null,
                "report-template-version-name": "v2",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                "birthdate-year": 1991,
                birthdate: "1991-10-10",
                "country-code": "US",
                "related-sources": [],
                "ignore-list-media": {},
                "ignore-list-entity": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/adverse-media",
                    id: "rptp_GL3tMfQza3JL8cHB7U95Fr7mqo4a",
                  },
                },
              },
            },
          },
          {
            id: "29683f3c-1873-4db2-92de-6f89392b7add",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_dh1XYN58Ug8LYF8w97AmbFV6W7eQ",
            displayName: "ADVERSE_MEDIA_REPORT",
            description: "ADVERSE_MEDIA_REPORT",
            createdAt: "2024-11-07T13:53:43.073Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/adverse-media",
              id: "rep_GDLrxG5TBuQvRfZXksAaPW2gqrB7",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:43.000Z",
                "completed-at": "2024-11-07T13:53:43.000Z",
                "redacted-at": null,
                "report-template-version-name": "v2",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                "birthdate-year": 1991,
                birthdate: "1991-10-10",
                "country-code": "US",
                "related-sources": [],
                "ignore-list-media": {},
                "ignore-list-entity": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/adverse-media",
                    id: "rptp_GL3tMfQza3JL8cHB7U95Fr7mqo4a",
                  },
                },
              },
            },
          },
          {
            id: "16fe2b9e-9170-4820-9445-c08adae6d84e",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_tL3eWSJDcaamxAjEWbkb7NT8bAaP",
            displayName: "ADVERSE_MEDIA_REPORT",
            description: "ADVERSE_MEDIA_REPORT",
            createdAt: "2024-11-07T13:53:23.516Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/adverse-media",
              id: "rep_3cNc6FxMjLdhZHUaMm1XHjXvjRtb",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:25.000Z",
                "completed-at": "2024-11-07T13:53:25.000Z",
                "redacted-at": null,
                "report-template-version-name": "v2",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                "birthdate-year": 1991,
                birthdate: "1991-10-10",
                "country-code": "US",
                "related-sources": [],
                "ignore-list-media": {},
                "ignore-list-entity": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/adverse-media",
                    id: "rptp_GL3tMfQza3JL8cHB7U95Fr7mqo4a",
                  },
                },
              },
            },
          },
        ],
        watchlist_report: [
          formatResponse([
            {
              type: "report/watchlist",
              id: "rep_1MkTERkxdTyrt7LfgNi7pVqPiMBs",
              attributes: {
                status: "ready",
                created_at: "2024-10-22T09:56:51.000Z",
                completed_at: "2024-10-22T09:56:51.000Z",
                redacted_at: null,
                report_template_version_name: "v5",
                has_match: true,
                is_continuous: false,
                is_recurring: false,
                tags: [],
                name_first: "Vladimir",
                name_middle: null,
                name_last: "Putin",
                term: "Vladimir Putin",
                birthdate: "1952-10-07",
                country_code: "RU",
                matched_lists: [
                  {
                    name: "FR - French Treasury - Sanctions Economiques",
                    url: "https://gels-avoirs.dgtresor.gouv.fr/Gels/FichierStructure",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "fr-french-treasury-sanctions-economiques",
                    flag_code: "FR",
                    entities: [
                      {
                        name: "Vladimir Vladimirovich POUTINE",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "GB - HM Treasury - Russia",
                    url: "https://ofsistorage.blob.core.windows.net/publishlive/ConList.html",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "gb-hm-treasury-russia",
                    flag_code: "GB",
                    entities: [
                      {
                        name: "vladimir vladimirovich putin",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "vladimir putin",
                        alias_type: "aka",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "EU - EC - Programme UKR - Ukraine",
                    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2022.053.01.0001.01.ENG&toc=OJ%3AL%3A2022%3A053%3ATOC",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "eu-ec-programme-ukr",
                    flag_code: "EU",
                    entities: [
                      {
                        name: "Vladimir Vladimirovich POUTINE",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Vladimir Vladimirovich PUTIN",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Vladimir Vladimirovitj PUTIN",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Влади́мир Влади́мирович ПУ́ТИН",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "JP - MOF - Foreign Exchange and Foreign Trade Act - Ukraine",
                    url: "https://www.mof.go.jp/international_policy/gaitame_kawase/gaitame/economic_sanctions/list.html",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "jp-mof-foreign-exchange-and-foreign-trade-act-ukraine",
                    flag_code: "JP",
                    entities: [
                      {
                        name: "Vladimir Putin",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "ウラジーミル・プーチン",
                        alias_type: "aka",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "CH - State Secretariat for Economic Affairs (SECO) - Situation in Ukraine",
                    url: "https://www.seco.admin.ch/seco/en/home/Aussenwirtschaftspolitik_Wirtschaftliche_Zusammenarbeit/Wirtschaftsbeziehungen/exportkontrollen-und-sanktionen/sanktionen-embargos/sanktionsmassnahmen/suche_sanktionsadressaten.html",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "ch-seco-situation-in-ukraine",
                    flag_code: "CH",
                    entities: [
                      {
                        name: "putin vladimir vladimirovich",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "ПУ́ТИН Влади́мир Влади́мирович (Russian)",
                        alias_type: "aka",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "AU - DFAT - Australian Autonomous Sanctions (Russia/Ukraine)",
                    url: "https://www.dfat.gov.au/sites/default/files/regulation8_consolidated.xlsx",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "au-dfat-australian-autonomous-sanctions-russia-ukraine",
                    flag_code: "AU",
                    entities: [
                      {
                        name: "vladimir vladimirovich putin",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "US - OFAC - Specially Designated Nationals and Blocked Persons (SDN)",
                    url: "https://sanctionslist.ofac.treas.gov/Home/SdnList",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "us-ofac-specially-designated-nationals-and-blocked-persons",
                    flag_code: "US",
                    entities: [
                      {
                        name: "PUTIN, Vladimir Vladimirovich",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "PUTIN, Vladimir",
                        alias_type: "aka",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "BE - Federal Public Service (FPS) - National Financial Sanctions",
                    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2022.053.01.0001.01.ENG&toc=OJ%3AL%3A2022%3A053%3ATOC",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "be-fps-national-financial-sanctions",
                    flag_code: "BE",
                    entities: [
                      {
                        name: "Vladimir Vladimirovich POUTINE",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Vladimir Vladimirovich PUTIN",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Vladimir Vladimirovitj PUTIN",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                      {
                        name: "Влади́мир Влади́мирович ПУ́ТИН",
                        alias_type: "primary_name",
                        birthdates: [
                          {
                            day: "07",
                            year: "1952",
                            month: "10",
                            granularity: "day",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "CA - GAC - Special Economic Measures Act (Russia)",
                    url: "https://laws.justice.gc.ca/eng/regulations/SOR-2014-58/FullText.html",
                    list_type: "sanction",
                    list_types: ["sanction"],
                    slug: "ca-gac-special-economic-measures-act-russia",
                    flag_code: "CA",
                    entities: [
                      {
                        name: "Vladimir Vladimirovich PUTIN",
                        alias_type: "primary_name",
                        birthdates: [{ year: "1952", granularity: "year" }],
                      },
                      {
                        name: "Владимир Владимирович Путин",
                        alias_type: "aka",
                        birthdates: [{ year: "1952", granularity: "year" }],
                      },
                    ],
                  },
                ],
                run_history: [
                  {
                    scheduled_at: "2024-10-22T09:56:51.000Z",
                    completed_at: "2024-10-22T09:56:51.000Z",
                    report_template_version_id: 15000005209,
                    type: "scheduled",
                  },
                ],
                ignore_list: [],
              },
              relationships: {
                inquiry: { data: null },
                account: { data: null },
                transaction: { data: null },
                report_template: {
                  data: {
                    type: "report-template/watchlist",
                    id: "rptp_GhizrtYpmWiyC3ivUuJKGh2mXf49",
                  },
                },
              },
            },
          ]),
          {
            id: "36bd6e68-8414-4d94-869a-689a3c028ef8",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_KUnwpKxs6Q78AayT6p7PhRG5DNSi",
            displayName: "WATCHLIST_REPORT",
            description: "WATCHLIST_REPORT",
            createdAt: "2024-11-07T13:54:07.421Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/watchlist",
              id: "rep_NFJtV4DtU6Gwtod81426Sg1KvcHu",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:08.000Z",
                "completed-at": "2024-11-07T13:54:08.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                birthdate: "1991-10-10",
                "country-code": "US",
                "matched-lists": [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:54:08.000Z",
                    "completed-at": "2024-11-07T13:54:08.000Z",
                    "report-template-version-id": 15000005209,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/watchlist",
                    id: "rptp_GhizrtYpmWiyC3ivUuJKGh2mXf49",
                  },
                },
              },
            },
          },
          {
            id: "2cd962e2-6a2b-41a0-9e09-8935d09f8084",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_v61vRWp3ECRNdf3NRoEz8ya9gws3",
            displayName: "WATCHLIST_REPORT",
            description: "WATCHLIST_REPORT",
            createdAt: "2024-11-07T13:53:43.624Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/watchlist",
              id: "rep_EdcR9YtGUnHw4y2vkXYbLZPUJq7N",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:44.000Z",
                "completed-at": "2024-11-07T13:53:44.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                birthdate: "1991-10-10",
                "country-code": "US",
                "matched-lists": [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:53:44.000Z",
                    "completed-at": "2024-11-07T13:53:44.000Z",
                    "report-template-version-id": 15000005209,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/watchlist",
                    id: "rptp_GhizrtYpmWiyC3ivUuJKGh2mXf49",
                  },
                },
              },
            },
          },
          {
            id: "c53122a4-51ca-4a88-8d70-fd10da575adf",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_t5edHVR5QR8KfHwce65Ep5PS7A2J",
            displayName: "WATCHLIST_REPORT",
            description: "WATCHLIST_REPORT",
            createdAt: "2024-11-07T13:53:24.305Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/watchlist",
              id: "rep_zSGmsGPka1fXnCT6Nbobfm7LnYn8",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:24.000Z",
                "completed-at": "2024-11-07T13:53:24.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "name-first": "Praanv",
                "name-middle": null,
                "name-last": "Pandey",
                term: "Praanv Pandey",
                birthdate: "1991-10-10",
                "country-code": "US",
                "matched-lists": [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:53:25.000Z",
                    "completed-at": "2024-11-07T13:53:25.000Z",
                    "report-template-version-id": 15000005209,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/watchlist",
                    id: "rptp_GhizrtYpmWiyC3ivUuJKGh2mXf49",
                  },
                },
              },
            },
          },
        ],
        politically_exposed_person_report: [
          formatResponse([
            {
              type: "report/politically-exposed-person",
              id: "rep_AZWzzaJvf1w3TYPst1eXJ1v2BvcN",
              attributes: {
                status: "ready",
                created_at: "2024-10-22T09:56:41.000Z",
                completed_at: "2024-10-22T09:56:41.000Z",
                redacted_at: null,
                report_template_version_name: "v5",
                has_match: true,
                is_continuous: false,
                is_recurring: false,
                tags: [],
                query: {
                  name_first: "Vladimir",
                  name_middle: null,
                  name_last: "Putin",
                  term: "Vladimir Putin",
                  birthdate: "1952-10-07",
                  country_code: "RU",
                },
                result: [
                  {
                    entity_id: "Q7747",
                    name: "Vladimir Vladimirovich PUTIN",
                    aliases: [
                      "PUTIN, Vladimir Vladimirovich",
                      "Putin Vladimir Vladimirovich",
                      "Putin Volodymyr Volodymyrovych",
                      "Vladimir Poetin",
                      "Vladimir Poutine",
                      "Vladimir Putin",
                      "Vladimir Vladimirovich POUTINE",
                      "Vladimir Vladimirovich Putin",
                      "Vladimir Vladimirovitj PUTIN",
                      "Vladimir Vladimiroviç Putin",
                      "Vladimir Vladimirovič Putin",
                      "Vladimiras Putinas",
                      "Vladimirs Putins",
                      "Vladímir Putin",
                      "Vladímír Pútín",
                      "Vlagyimir Vlagyimirovics Putyin",
                      "Wladimir Poetin",
                      "Wladimir Putin",
                      "Wladimir Wladimirowitsch Putin",
                      "Władimir Putin",
                      "Βλαντίμιρ Πούτιν",
                      "Влади́мир Влади́мирович ПУ́ТИН",
                      "Владимир Владимирович Путин",
                      "Владимир Путин",
                      "Путін Володимир Володимирович",
                      "Уладзімір Уладзіміравіч Пуцін",
                      "Վլադիմիր Պուտին",
                      "ולדימיר פוטין",
                      "فلاديمير بوتين",
                      "ولادیمیر پوتین",
                      "ولادیمیر پوٹن",
                      "भ्लादिमिर पुटिन",
                      "व्लादिमीर पुतिन",
                      "ವ್ಲಾದಿಮಿರ್ ಪುತಿನ್",
                      "ဗလာဒီမီယာ ပူတင်",
                      "ვლადიმერ პუტინი",
                      "វ៉្លាឌីមៀរ ពូទីន",
                      "ウラジーミル・プーチン",
                      "弗拉基米尔·普京",
                      "블라디미르 푸틴",
                      "Vladimir PUTIN",
                      "Mr. Vladimir V. Putin",
                      "VLADIMIR VLADIMIROVICH PUTIN",
                      "Президент Путин",
                      "Путин Владимир",
                      "Путин, Владимир",
                      "Platov",
                      "Poutine",
                      "Predsjednik Putin",
                      "President Putin",
                      "Präsident Putin",
                      "Putin",
                      "Putinas",
                      "Vladimir Vladimirovici Putin",
                      "Vladimir Vladimirovitch Poutine",
                      "Vladimir Vladimirovitch Putin",
                      "Vladimir Vladimirovitj Putin",
                      "Vladimír Putin",
                      "Vladimír Vladimirovič Putin",
                      "Vladímir Vladímirovich Putin",
                      "Vladímir Vladímirovitx Putin",
                      "Wladimir Wladimirowitsj Poetin",
                      "Władimir Władimirowicz Putin",
                      "Βλαντίμιρ Βλαντίμιροβιτς Πούτιν",
                      "В. В. Путин",
                      "В.Путин",
                      "ПУ́ТИН Влади́мир Влади́мирович",
                      "Платов",
                      "Путин",
                      "Путин В. В.",
                      "Путин Владимир Владимирович",
                      "Путин, Владимир Владимирович",
                      "Путин, Владимир Владимирович,",
                      "Уладзімір Пуцін",
                      "פוטין",
                      "بوتين",
                      "فلاديمير فلاديميروفيتش بوتين",
                      "ߔߑߟߊߕߐߝ߭",
                      "ပူတင်",
                      "ウラジーミル・ウラジーミロヴィチ・プーチン",
                      "プーチン",
                      "ヴラジーミル・プーチン",
                      "ヴラジーミル・ヴラジーミロヴィチ・プーチン",
                      "ヴラジーミル・ヴラジーミロヴィッチ・プーチン",
                      "弗拉基米尔·弗拉基米罗维奇·普京",
                      "普丁",
                      "普京",
                      "블라디미르 블라디미로비치 푸틴",
                      "뿌찐",
                      "푸틴",
                      "Presiden Putin",
                    ],
                    birthdates: ["1952-10-07"],
                    death_dates: [],
                    locations: ["RU"],
                    country: null,
                    sex: "male",
                    positions: [
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President of the Russian Federation",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Premier",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Acting President of Russia",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Premier",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Supreme Commander-in-Chief of the Armed Forces of the Russian Federation",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Supreme Commander-in-Chief of the Armed Forces of the Russian Federation",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Acting President of Russia",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Premier",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Premier",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Supreme Commander-in-Chief of the Armed Forces of the Russian Federation",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "председатель Совета безопасности Российской Федерации",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President",
                      },
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "Supreme Commander-in-Chief of the Armed Forces of the Russian Federation",
                      },
                    ],
                    associates: [
                      {
                        name: "Sergei Pavlovich ROLDUGIN",
                        relationship: "Financial Manager",
                      },
                      { name: "Luiza Rozova", relationship: "Father" },
                      { name: "Luiza Rozova", relationship: "Child" },
                      {
                        name: "Alina Maratovna KABAEVA",
                        relationship: "Unmarried Partner",
                      },
                      {
                        name: "Roman Igorevich PUTIN",
                        relationship: "Relative",
                      },
                      { name: "Ludmiła Putina", relationship: "Spouse" },
                      {
                        name: "Katerina Vladimirovna TIKHONOVA",
                        relationship: "Father",
                      },
                      {
                        name: "Maria Vladimirovna VORONTSOVA",
                        relationship: "Father",
                      },
                      {
                        name: "Katerina Vladimirovna TIKHONOVA",
                        relationship: "Child",
                      },
                      {
                        name: "Maria Vladimirovna VORONTSOVA",
                        relationship: "Child",
                      },
                      {
                        name: "Igor Alexandrovich PUTIN",
                        relationship: "Relative",
                      },
                      {
                        name: "Kirill Nikolayevich SHAMALOV",
                        relationship: "Wife's Father",
                      },
                      {
                        name: "Jorrit Faassen",
                        relationship: "Wife's Father",
                      },
                      { name: "Ivan Putin", relationship: "Child" },
                      { name: "Vladimir Putin Jr.", relationship: "Child" },
                      {
                        name: "Darina Medwedtschuk",
                        relationship: "Relative",
                      },
                      { name: "Viktor Medvedchuk", relationship: "Relative" },
                      {
                        name: "Viktor Medvedchuk",
                        relationship: "Significant Person",
                      },
                    ],
                    affiliations: [],
                    related_urls: [
                      {
                        source_key: "internal-source-url",
                        name: "https://www.cia.gov/the-world-factbook/countries/russia",
                      },
                      {
                        source_key: "internal-source-url",
                        name: "https://www.cia.gov/resources/world-leaders/foreign-governments/russia",
                      },
                      {
                        source_key: "internal-source-url",
                        name: "https://www.cia.gov/resources/world-leaders/foreign-governments/russia",
                      },
                      {
                        source_key: "internal-source-url",
                        name: "https://gels-avoirs.dgtresor.gouv.fr/Gels/RegistreDetail?idRegistre=4271",
                      },
                      {
                        source_key: "internal-source-url",
                        name: "http://eng.putin.kremlin.ru/",
                      },
                      {
                        source_key: "internal-source-url",
                        name: "http://putin.kremlin.ru/",
                      },
                    ],
                    images: [
                      {
                        internal_url:
                          "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Vladimir_Putin_in_KGB_uniform.jpg",
                        external_url:
                          "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Vladimir_Putin_in_KGB_uniform.jpg",
                        enabled_for_similarity: true,
                        similarity_score: null,
                        similarity_level: null,
                      },
                    ],
                    sources: {
                      wikidata: {
                        url: "https://www.wikidata.org/wiki/Q7747",
                        name: "Wikidata",
                        flag_code: null,
                      },
                      dprk_reports: {
                        url: "https://dprk-reports.org/pages/about",
                        name: "DPRK Reports",
                        flag_code: "GB",
                      },
                      internal_data_source: {
                        url: "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=35096",
                        name: "Internal data source",
                        flag_code: null,
                      },
                      us_cia_world_leaders: {
                        url: "https://www.cia.gov/resources/world-leaders/foreign-governments/",
                        name: "US CIA World Leaders",
                        flag_code: "US",
                      },
                      uk_fcdo_sanctions_list: {
                        url: "https://www.gov.uk/government/publications/the-uk-sanctions-list",
                        name: "UK FCDO Sanctions List",
                        flag_code: "GB",
                      },
                      acf_list_of_war_enablers: {
                        url: "https://acf.international/bribetakers-list",
                        name: "ACF List of War Enablers",
                        flag_code: "RU",
                      },
                      belgian_financial_sanctions: {
                        url: "https://finance.belgium.be/en/treasury/financial-sanctions",
                        name: "Belgian Financial Sanctions",
                        flag_code: "BE",
                      },
                      new_zealand_russia_sanctions: {
                        url: "https://www.mfat.govt.nz/en/countries-and-regions/europe/ukraine/russian-invasion-of-ukraine/sanctions/",
                        name: "New Zealand Russia Sanctions",
                        flag_code: "NZ",
                      },
                      us_sam_procurement_exclusions: {
                        url: "https://sam.gov/data-services/Exclusions/Public%20V2?privacy=Public",
                        name: "US SAM Procurement Exclusions",
                        flag_code: "US",
                      },
                      wikidata_entities_of_interest: {
                        url: "https://docs.google.com/spreadsheets/d/1UyVYpg8jF6q4zRGGlIu_SaEe_QKqfhNcEHG5KurL_r8/edit#gid=0",
                        name: "Wikidata Entities of Interest",
                        flag_code: null,
                      },
                      swiss_seco_sanctions_embargoes: {
                        url: "https://www.seco.admin.ch/seco/en/home/Aussenwirtschaftspolitik_Wirtschaftliche_Zusammenarbeit/Wirtschaftsbeziehungen/exportkontrollen-und-sanktionen/sanktionen-embargos.html",
                        name: "Swiss SECO Sanctions/Embargoes",
                        flag_code: "CH",
                      },
                      eu_financial_sanctions_files_fsf: {
                        url: "https://www.eeas.europa.eu/eeas/european-union-sanctions_en#10710",
                        name: "EU Financial Sanctions Files (FSF)",
                        flag_code: "EU",
                      },
                      lithuanian_international_sanctions: {
                        url: "https://www.fntt.lt/lt/tarptautines-finansines-sankcijos/4166",
                        name: "Lithuanian International Sanctions",
                        flag_code: "LT",
                      },
                      monaco_national_fund_freezing_list: {
                        url: "https://geldefonds.gouv.mc/",
                        name: "Monaco National Fund Freezing List",
                        flag_code: "MC",
                      },
                      wikidata_politically_exposed_persons: {
                        url: "https://www.wikidata.org/wiki/Q7747",
                        name: "Wikidata Politically Exposed Persons",
                        flag_code: null,
                      },
                      french_national_asset_freezing_system: {
                        url: "https://gels-avoirs.dgtresor.gouv.fr/",
                        name: "French National Asset Freezing System",
                        flag_code: "FR",
                      },
                      australian_sanctions_consolidated_list: {
                        url: "https://www.dfat.gov.au/international-relations/security/sanctions/Pages/sanctions",
                        name: "Australian Sanctions Consolidated List",
                        flag_code: "AU",
                      },
                      wikidata_persons_in_relevant_categories: {
                        url: "https://meta.wikimedia.org/wiki/PetScan/en",
                        name: "Wikidata Persons in Relevant Categories",
                        flag_code: null,
                      },
                      uk_hmt_ofsi_consolidated_list_of_targets: {
                        url: "https://www.gov.uk/government/publications/financial-sanctions-consolidated-list-of-targets",
                        name: "UK HMT/OFSI Consolidated List of Targets",
                        flag_code: "GB",
                      },
                      ukraine_nsdc_state_register_of_sanctions: {
                        url: "https://drs.nsdc.gov.ua/",
                        name: "Ukraine NSDC State Register of Sanctions",
                        flag_code: "UA",
                      },
                      us_trade_consolidated_screening_list_csl: {
                        url: "https://www.trade.gov/consolidated-screening-list",
                        name: "US Trade Consolidated Screening List (CSL)",
                        flag_code: "US",
                      },
                      canadian_consolidated_autonomous_sanctions_list: {
                        url: "https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/consolidated-consolide.aspx?lang=eng",
                        name: "Canadian Consolidated Autonomous Sanctions List",
                        flag_code: "CA",
                      },
                      us_ofac_specially_designated_nationals_sdn_list: {
                        url: "https://www.treasury.gov/resource-center/sanctions/Pages/default.aspx",
                        name: "US OFAC Specially Designated Nationals (SDN) List",
                        flag_code: "US",
                      },
                      us_cia_world_factbook_heads_of_state_and_government: {
                        url: "https://www.cia.gov/the-world-factbook/",
                        name: "US CIA World Factbook Heads of State and Government",
                        flag_code: "US",
                      },
                      japan_economic_sanctions_and_list_of_eligible_people: {
                        url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/gaitame/economic_sanctions/gaiyou.html",
                        name: "Japan Economic Sanctions and List of Eligible People",
                        flag_code: "JP",
                      },
                      un_heads_of_state_heads_of_government_and_ministers_for_foreign_affairs:
                        {
                          url: "https://www.un.org/dgacm/en/content/protocol/hshgnfa",
                          name: "UN Heads of State, Heads of Government and Ministers for Foreign Affairs",
                          flag_code: null,
                        },
                    },
                    match_types: ["name_exact"],
                    pep_type: "politically_exposed_person",
                  },
                  {
                    entity_id:
                      "unprot-32bf82971599eb954c89ea33a205527cd2038596",
                    name: "Mr. Vladimir V. Putin",
                    aliases: [],
                    birthdates: [],
                    death_dates: [],
                    locations: ["RU"],
                    country: null,
                    sex: "unknown",
                    positions: [
                      {
                        pep_class: "pep-class-1",
                        source_key: "internal-data-source",
                        name: "President of the Russian Federation",
                      },
                    ],
                    associates: [],
                    affiliations: [],
                    related_urls: [],
                    images: [],
                    sources: {
                      internal_data_source: {
                        url: "",
                        name: "Internal data source",
                        flag_code: null,
                      },
                      un_heads_of_state_heads_of_government_and_ministers_for_foreign_affairs:
                        {
                          url: "https://www.un.org/dgacm/en/content/protocol/hshgnfa",
                          name: "UN Heads of State, Heads of Government and Ministers for Foreign Affairs",
                          flag_code: null,
                        },
                    },
                    match_types: ["name_exact"],
                    pep_type: "politically_exposed_person",
                  },
                ],
                run_history: [
                  {
                    scheduled_at: "2024-10-22T09:56:41.000Z",
                    completed_at: "2024-10-22T09:56:41.000Z",
                    report_template_version_id: 15000005650,
                    type: "scheduled",
                  },
                ],
                ignore_list: [],
              },
              relationships: {
                inquiry: { data: null },
                account: { data: null },
                transaction: { data: null },
                report_template: {
                  data: {
                    type: "report-template/politically-exposed-person",
                    id: "rptp_fbbNZWQyzoHcqiByfZfFtnijBhE8",
                  },
                },
              },
            },
          ]),
          {
            id: "e31b832a-ed48-48e0-9af4-3831070659fb",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_jcJiiSPV4xxeyPzdaaeLKM1Ag7tk",
            displayName: "POLITICALLY_EXPOSED_PERSON_REPORT",
            description: "POLITICALLY_EXPOSED_PERSON_REPORT",
            createdAt: "2024-11-07T13:54:08.037Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/politically-exposed-person",
              id: "rep_ZAhor85Da1f1fNHx3KFBLqcPkZzn",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:08.000Z",
                "completed-at": "2024-11-07T13:54:09.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                query: {
                  "name-first": "Praanv",
                  "name-middle": null,
                  "name-last": "Pandey",
                  term: "Praanv Pandey",
                  birthdate: "1991-10-10",
                  "country-code": "US",
                },
                result: [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:54:09.000Z",
                    "completed-at": "2024-11-07T13:54:09.000Z",
                    "report-template-version-id": 15000005650,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/politically-exposed-person",
                    id: "rptp_fbbNZWQyzoHcqiByfZfFtnijBhE8",
                  },
                },
              },
            },
          },
          {
            id: "d151ac43-ca64-489b-ba19-25da35727f22",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_ZYJC9XfYcWuvG94hAju9J2Tj3ZPd",
            displayName: "POLITICALLY_EXPOSED_PERSON_REPORT",
            description: "POLITICALLY_EXPOSED_PERSON_REPORT",
            createdAt: "2024-11-07T13:53:44.218Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/politically-exposed-person",
              id: "rep_WwkjxpNZUtssfSbkynmWYEEBoUKR",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:45.000Z",
                "completed-at": "2024-11-07T13:53:45.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                query: {
                  "name-first": "Praanv",
                  "name-middle": null,
                  "name-last": "Pandey",
                  term: "Praanv Pandey",
                  birthdate: "1991-10-10",
                  "country-code": "US",
                },
                result: [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:53:45.000Z",
                    "completed-at": "2024-11-07T13:53:45.000Z",
                    "report-template-version-id": 15000005650,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/politically-exposed-person",
                    id: "rptp_fbbNZWQyzoHcqiByfZfFtnijBhE8",
                  },
                },
              },
            },
          },
          {
            id: "5e3d1ef9-a952-41f6-83ae-78fd620fd2b81",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_wbKR8ViBDonijuRu3it77hFRng4Z",
            displayName: "POLITICALLY_EXPOSED_PERSON_REPORT",
            description: "POLITICALLY_EXPOSED_PERSON_REPORT",
            createdAt: "2024-11-07T13:53:24.845Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/politically-exposed-person",
              id: "rep_gssUiyaBWrK8RT35eao5g99PqsRr",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:26.000Z",
                "completed-at": "2024-11-07T13:53:26.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                query: {
                  "name-first": "Praanv",
                  "name-middle": null,
                  "name-last": "Pandey",
                  term: "Praanv Pandey",
                  birthdate: "1991-10-10",
                  "country-code": "US",
                },
                result: [],
                "run-history": [
                  {
                    "scheduled-at": "2024-11-07T13:53:26.000Z",
                    "completed-at": "2024-11-07T13:53:26.000Z",
                    "report-template-version-id": 15000005650,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/politically-exposed-person",
                    id: "rptp_fbbNZWQyzoHcqiByfZfFtnijBhE8",
                  },
                },
              },
            },
          },
          {
            id: "5e3d1ef9-a952-41f6-83ae-78fd620fd2b8",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_wbKR8ViBDonijuRu3it77hFRng4Z",
            displayName: "POLITICALLY_EXPOSED_PERSON_REPORT",
            description: "POLITICALLY_EXPOSED_PERSON_REPORT",
            createdAt: "2024-11-07T13:53:24.845Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/politically-exposed-person",
              id: "rep-LYpGp19d5GtJByAVDGn6djWahzfa",
              attributes: {
                status: "ready",
                "created-at": "2024-10-22T09:55:39.000Z",
                "completed-at": "2024-10-22T09:55:39.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                query: {
                  "name-first": "Narendra",
                  "name-middle": null,
                  "name-last": "Damodardas Modi",
                  term: "Narendra Damodardas Modi",
                  birthdate: "1950-09-17",
                  "country-code": "IN",
                },
                result: [
                  {
                    "entity-id": "Q1058",
                    name: "Narendra Modi",
                    aliases: [
                      "Mr. Narendra Modi",
                      "Modi, Shri Narendra",
                      "Narendra MODI",
                      "Naréndra Módí",
                      "Narēndra Modi",
                      "Ναρέντρα Μόντι",
                      "Нарендра Моди",
                      "Нарендра Моді",
                      "Нарендра Модӣ",
                      "Нарэндра Модзі",
                      "Նարենդրա Մոդի",
                      "נרנדרה מודי",
                      "ناريندرا مودي",
                      "نریندر مودی",
                      "नरेन्द्र मोदी",
                      "ನರೇಂದ್ರ ಮೋದಿ",
                      "နရေန္ဒြ မောဒီ",
                      "ნარენდრა მოდი",
                      "ណារិនដ្រាម៉ូឌី",
                      "ナレンドラ・モディ",
                      "纳伦德拉·莫迪",
                      "나렌드라 모디",
                      "Naréndra Dámodardás Módí",
                      "Narendra Dámodardász Modi",
                      "Categoria:Narendra Modi",
                      "Modi",
                      "Modi Ji",
                      "Modi Narendra",
                      "Modiji",
                      "NaMo",
                      "Narendra Bhai",
                      "Narendra Damodardas Modi",
                      "Narendrabhai",
                      "Narendrabhai Damodardas Modi",
                      "Моди, Нарендра",
                      "Моди, Нарендра Дамодардас",
                      "Нарендра Дамодардас Моди",
                      "נארענדרא מאדי",
                      "نارندرا مودی",
                      "نارێندرا مۆدی",
                      "نارېندى مودى",
                      "نريندرا مودي",
                      "نَریندرٖ مودی",
                      "नमो",
                      "नरेंद्र मोदी",
                      "नरेंद्रभाई दामोदरदास मोदी",
                      "नरेंद्रभाई मोदी",
                      "नरेन्द्र दामोदरदास मोदी",
                      "मोदी",
                      "নরেন্দ্র মোদী",
                      "নৰেন্দ্ৰ মোডী",
                      "ਨਰਿੰਦਰ ਮੋਦੀ",
                      "નરેન્દ્ર દામોદરદાસ મોદી",
                      "નરેન્દ્ર મોદી",
                      "ନରେନ୍ଦ୍ର ମୋଦୀ",
                      "நரேந்திர மோடி",
                      "నరేంద్ర మోడి",
                      "ನರೇಂದ್ರ ದಾಮೋದರ ಮೋದಿ",
                      "നരേന്ദ്ര മോദി",
                      "නරේන්ද්‍ර මෝඩි",
                      "นเรนทระ โมที",
                      "ᱱᱚᱨᱮᱱᱫᱨᱚ ᱢᱚᱫᱤ",
                      "ナレンドラダモダルダスモディ",
                      "莫迪",
                      "ᱱᱚᱨᱮᱱᱫᱽᱨᱚ ᱢᱳᱫᱤ",
                    ],
                    birthdates: ["1950-09-17"],
                    "death-dates": [],
                    locations: ["IN"],
                    country: null,
                    sex: "male",
                    positions: [
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "member of the Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Prime Minister of the Republic of India",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Prime Minister",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Prime Minister",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Head, Dept. of Atomic Energy",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Minister of Personnel, Public Grievances, & Pensions",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Head, Dept. of Space",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Member of the 17th Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Member of the 16th Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Prime Minister of India",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Member of the 17th Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Prime Minister of India",
                      },
                    ],
                    associates: [
                      { name: "Heeraben Modi", relationship: "Mother" },
                      {
                        name: "Jashodaben Narendrabhai Modi",
                        relationship: "Spouse",
                      },
                      {
                        name: "Lucky Bisht",
                        relationship: "Significant Person",
                      },
                    ],
                    affiliations: [],
                    "related-urls": [
                      {
                        "source-key": "internal-source-url",
                        name: "https://www.cia.gov/the-world-factbook/countries/india",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://www.cia.gov/resources/world-leaders/foreign-governments/india",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://twitter.com/narendramodi",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://facebook.com/268475866502370",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "http://www.narendramodi.in/",
                      },
                    ],
                    images: [
                      {
                        "internal-url":
                          "https://cdn.withpersona.com/assets/politically-exposed-persons/images/310af520efc96ebcd8b0d8548b4a647b8f309e49b0b14fc866add75f4be5b667",
                        "external-url":
                          "https://commons.wikimedia.org/wiki/Special:FilePath/Official%20portrait%20of%20Narendra%20Modi%2C%202022%20%28cropped%29.jpg",
                        "enabled-for-similarity": true,
                        "similarity-score": null,
                        "similarity-level": null,
                      },
                      {
                        "internal-url":
                          "https://cdn.withpersona.com/assets/politically-exposed-persons/images/4b225d06fe1cce7ed7e845deea4be5f4e2754de0228270eb4e2599f9d629fca8",
                        "external-url":
                          "https://commons.wikimedia.org/wiki/Special:FilePath/Prime%20Minister%20of%20India%20Narendra%20Modi.jpg",
                        "enabled-for-similarity": true,
                        "similarity-score": null,
                        "similarity-level": null,
                      },
                    ],
                    sources: {
                      wikidata: {
                        url: "https://www.wikidata.org/wiki/Q1058",
                        name: "Wikidata",
                        "flag-code": null,
                      },
                      "every-politician": {
                        url: "http://everypolitician.org/",
                        name: "Every Politician",
                        "flag-code": null,
                      },
                      "internal-data-source": {
                        url: "https://www.narendramodi.in/",
                        name: "Internal data source",
                        "flag-code": null,
                      },
                      "us-cia-world-leaders": {
                        url: "https://www.cia.gov/resources/world-leaders/foreign-governments/",
                        name: "US CIA World Leaders",
                        "flag-code": "US",
                      },
                      "wikidata-politically-exposed-persons": {
                        url: "https://www.wikidata.org/wiki/Q1058",
                        name: "Wikidata Politically Exposed Persons",
                        "flag-code": null,
                      },
                      "wikidata-persons-in-relevant-categories": {
                        url: "https://meta.wikimedia.org/wiki/PetScan/en",
                        name: "Wikidata Persons in Relevant Categories",
                        "flag-code": null,
                      },
                      "us-cia-world-factbook-heads-of-state-and-government": {
                        url: "https://www.cia.gov/the-world-factbook/",
                        name: "US CIA World Factbook Heads of State and Government",
                        "flag-code": "US",
                      },
                      "un-heads-of-state-heads-of-government-and-ministers-for-foreign-affairs":
                        {
                          url: "https://www.un.org/dgacm/en/content/protocol/hshgnfa",
                          name: "UN Heads of State, Heads of Government and Ministers for Foreign Affairs",
                          "flag-code": null,
                        },
                    },
                    "match-types": ["aka-exact"],
                    "pep-type": "politically-exposed-person",
                  },
                ],
                "run-history": [
                  {
                    "scheduled-at": "2024-10-22T09:55:39.000Z",
                    "completed-at": "2024-10-22T09:55:39.000Z",
                    "report-template-version-id": 15000005650,
                    type: "scheduled",
                  },
                ],
                "ignore-list": [],
              },
              relationships: {
                inquiry: { data: null },
                account: { data: null },
                transaction: { data: null },
                "report-template": {
                  data: {
                    type: "report-template/politically-exposed-person",
                    id: "rptp-fbbNZWQyzoHcqiByfZfFtnijBhE8",
                  },
                },
              },
            },
          },
        ],
        address_lookup_report: [
          {
            id: "7da7e62c-922d-4219-9b8d-641b59f7cca7",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_YXGEtg5C6F1pDvtdQh2nGPV2MAZX",
            displayName: "ADDRESS_LOOKUP_REPORT",
            description: "ADDRESS_LOOKUP_REPORT",
            createdAt: "2024-11-07T13:54:08.556Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/address-lookup",
              id: "rep_Zw9eBvCMFYKpoCmPYzBbmoRaQEau",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:09.000Z",
                "completed-at": "2024-11-07T13:54:09.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                addressee: null,
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                "resolved-addressee": null,
                "resolved-address-street-1": "600 California Street",
                "resolved-address-street-2": null,
                "resolved-address-city": "San Francisco",
                "resolved-address-subdivision": "CA",
                "resolved-address-postal-code": null,
                "metadata-record-type": "H",
                "metadata-zip-type": "Standard",
                "metadata-county-fips": "06075",
                "metadata-county-name": "San Francisco",
                "metadata-carrier-route": "C006",
                "metadata-carrier-route-type": "CityRoute",
                "metadata-congressional-district": "12",
                "metadata-building-default-indicator": "Y",
                "metadata-residential-delivery-indicator": null,
                "metadata-latitude": 37.79272,
                "metadata-longitude": -122.40443,
                "metadata-precision": "Zip9",
                "metadata-time-zone": "Pacific",
                "metadata-utc-offset": -8,
                "metadata-obeys-daylight-savings": true,
                "analysis-dpv-match-code": "D",
                "analysis-dpv-match-code-decoded":
                  "Confirmed; missing secondary info",
                "analysis-dpv-footnotes": ["AA", "N1"],
                "analysis-dpv-footnotes-decoded": [
                  "Street name, city, state, and ZIP are all valid.",
                  "Address is missing secondary information (apt, suite, unit)",
                ],
                "analysis-dpv-cmra": null,
                "analysis-dpv-vacant": null,
                "analysis-active": "Y",
                "analysis-footnotes": ["H#", "N#"],
                "analysis-footnotes-decoded": [
                  "Missing secondary number (apt, suite, etc.)",
                  "Fixed abbreviations",
                ],
                "analysis-lacs-link-code": null,
                "analysis-lacs-link-code-decoded": null,
                "analysis-lacs-link-indicator": null,
                "analysis-lacs-link-indicator-decoded": null,
                "analysis-suite-link-match": null,
                "metadata-ews-match": null,
                "error-message": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/address-lookup",
                    id: "rptp_BNMsQ2a5hkozfzWvSj9nor1eQJvk",
                  },
                },
              },
            },
          },
          {
            id: "42d91534-db14-4d87-a35c-95cc5a866e35",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_CDdtPoBzUnywdyHtEqinjVJiVx6e",
            displayName: "ADDRESS_LOOKUP_REPORT",
            description: "ADDRESS_LOOKUP_REPORT",
            createdAt: "2024-11-07T13:53:44.730Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/address-lookup",
              id: "rep_tasa9sRzX7Agembcs7WiwzijDhDa",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:45.000Z",
                "completed-at": "2024-11-07T13:53:45.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                addressee: null,
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                "resolved-addressee": null,
                "resolved-address-street-1": "600 California Street",
                "resolved-address-street-2": null,
                "resolved-address-city": "San Francisco",
                "resolved-address-subdivision": "CA",
                "resolved-address-postal-code": null,
                "metadata-record-type": "H",
                "metadata-zip-type": "Standard",
                "metadata-county-fips": "06075",
                "metadata-county-name": "San Francisco",
                "metadata-carrier-route": "C006",
                "metadata-carrier-route-type": "CityRoute",
                "metadata-congressional-district": "12",
                "metadata-building-default-indicator": "Y",
                "metadata-residential-delivery-indicator": null,
                "metadata-latitude": 37.79272,
                "metadata-longitude": -122.40443,
                "metadata-precision": "Zip9",
                "metadata-time-zone": "Pacific",
                "metadata-utc-offset": -8,
                "metadata-obeys-daylight-savings": true,
                "analysis-dpv-match-code": "D",
                "analysis-dpv-match-code-decoded":
                  "Confirmed; missing secondary info",
                "analysis-dpv-footnotes": ["AA", "N1"],
                "analysis-dpv-footnotes-decoded": [
                  "Street name, city, state, and ZIP are all valid.",
                  "Address is missing secondary information (apt, suite, unit)",
                ],
                "analysis-dpv-cmra": null,
                "analysis-dpv-vacant": null,
                "analysis-active": "Y",
                "analysis-footnotes": ["H#", "N#"],
                "analysis-footnotes-decoded": [
                  "Missing secondary number (apt, suite, etc.)",
                  "Fixed abbreviations",
                ],
                "analysis-lacs-link-code": null,
                "analysis-lacs-link-code-decoded": null,
                "analysis-lacs-link-indicator": null,
                "analysis-lacs-link-indicator-decoded": null,
                "analysis-suite-link-match": null,
                "metadata-ews-match": null,
                "error-message": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/address-lookup",
                    id: "rptp_BNMsQ2a5hkozfzWvSj9nor1eQJvk",
                  },
                },
              },
            },
          },
          {
            id: "a7e52eb8-9c89-412d-9dd9-5a36da34a2ce",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_RJEALA6AcrUNSdinXPc7FBVCGw4a",
            displayName: "ADDRESS_LOOKUP_REPORT",
            description: "ADDRESS_LOOKUP_REPORT",
            createdAt: "2024-11-07T13:53:25.391Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/address-lookup",
              id: "rep_YhR16ed6uKEkUkVutaefMKWG7Chc",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:26.000Z",
                "completed-at": "2024-11-07T13:53:26.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                addressee: null,
                "address-street-1": "THE WHARF DC",
                "address-street-2": "760 MAINE AVE SW",
                "address-city": "WASHINGTON",
                "address-subdivision": "DC",
                "address-postal-code": "20024",
                "resolved-addressee": null,
                "resolved-address-street-1": "600 California Street",
                "resolved-address-street-2": null,
                "resolved-address-city": "San Francisco",
                "resolved-address-subdivision": "CA",
                "resolved-address-postal-code": null,
                "metadata-record-type": "H",
                "metadata-zip-type": "Standard",
                "metadata-county-fips": "06075",
                "metadata-county-name": "San Francisco",
                "metadata-carrier-route": "C006",
                "metadata-carrier-route-type": "CityRoute",
                "metadata-congressional-district": "12",
                "metadata-building-default-indicator": "Y",
                "metadata-residential-delivery-indicator": null,
                "metadata-latitude": 37.79272,
                "metadata-longitude": -122.40443,
                "metadata-precision": "Zip9",
                "metadata-time-zone": "Pacific",
                "metadata-utc-offset": -8,
                "metadata-obeys-daylight-savings": true,
                "analysis-dpv-match-code": "D",
                "analysis-dpv-match-code-decoded":
                  "Confirmed; missing secondary info",
                "analysis-dpv-footnotes": ["AA", "N1"],
                "analysis-dpv-footnotes-decoded": [
                  "Street name, city, state, and ZIP are all valid.",
                  "Address is missing secondary information (apt, suite, unit)",
                ],
                "analysis-dpv-cmra": null,
                "analysis-dpv-vacant": null,
                "analysis-active": "Y",
                "analysis-footnotes": ["H#", "N#"],
                "analysis-footnotes-decoded": [
                  "Missing secondary number (apt, suite, etc.)",
                  "Fixed abbreviations",
                ],
                "analysis-lacs-link-code": null,
                "analysis-lacs-link-code-decoded": null,
                "analysis-lacs-link-indicator": null,
                "analysis-lacs-link-indicator-decoded": null,
                "analysis-suite-link-match": null,
                "metadata-ews-match": null,
                "error-message": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/address-lookup",
                    id: "rptp_BNMsQ2a5hkozfzWvSj9nor1eQJvk",
                  },
                },
              },
            },
          },
        ],
        email_risk_report: [
          {
            id: "a7fe30ad-2f4b-4d01-9f98-00b9bb223134",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_fiBkQ5oAuqRyjLMXyK58GePvAU12",
            displayName: "EMAIL_RISK_REPORT",
            description: "EMAIL_RISK_REPORT",
            createdAt: "2024-11-07T13:54:09.011Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/email-address",
              id: "rep_hmhZWnfAQD1qSaLUPGDwBpZ19a19",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:10.000Z",
                "completed-at": "2024-11-07T13:54:10.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "email-address": "pranav@gmail.com",
                "email-reputation": "high",
                "email-reference-count": null,
                "email-domain-reputation": null,
                "email-first-seen-days": null,
                "email-estimated-age-days": 663,
                "email-last-seen-days": null,
                "email-domain-age-days": 2236,
                "email-credentials-leaked": null,
                "email-credentials-leaked-recent": false,
                "email-data-breached": null,
                "email-malicious-activity-detected": null,
                "email-malicious-activity-detected-recent": false,
                "email-is-blocklisted": null,
                "email-is-spam": false,
                "email-is-free-provider": null,
                "email-is-disposable": false,
                "email-is-deliverable": true,
                "email-is-valid-mx": true,
                "email-is-spoofable": null,
                "email-is-spf-strict": null,
                "email-is-dmarc-enforced": null,
                "email-is-suspicious": false,
                "email-domain-exists": true,
                "email-domain": "gmail.com",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/email-address",
                    id: "rptp_fw94TejHmAbrQRpPdrceS4kFTExR",
                  },
                },
              },
            },
          },
          {
            id: "101a2fbe-0b6a-4317-8edf-78ae688bf6c0",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_zXUunB4AX9wB8b6YUVBYF6QHAjjf",
            displayName: "EMAIL_RISK_REPORT",
            description: "EMAIL_RISK_REPORT",
            createdAt: "2024-11-07T13:53:45.259Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/email-address",
              id: "rep_hnUrAD638AkDqYHWjSMpQhyrKmTN",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:46.000Z",
                "completed-at": "2024-11-07T13:53:46.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "email-address": "pranav@gmail.com",
                "email-reputation": "high",
                "email-reference-count": null,
                "email-domain-reputation": null,
                "email-first-seen-days": null,
                "email-estimated-age-days": 663,
                "email-last-seen-days": null,
                "email-domain-age-days": 2236,
                "email-credentials-leaked": null,
                "email-credentials-leaked-recent": false,
                "email-data-breached": null,
                "email-malicious-activity-detected": null,
                "email-malicious-activity-detected-recent": false,
                "email-is-blocklisted": null,
                "email-is-spam": false,
                "email-is-free-provider": null,
                "email-is-disposable": false,
                "email-is-deliverable": true,
                "email-is-valid-mx": true,
                "email-is-spoofable": null,
                "email-is-spf-strict": null,
                "email-is-dmarc-enforced": null,
                "email-is-suspicious": false,
                "email-domain-exists": true,
                "email-domain": "gmail.com",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/email-address",
                    id: "rptp_fw94TejHmAbrQRpPdrceS4kFTExR",
                  },
                },
              },
            },
          },
          {
            id: "cae4bba3-9ab2-48b0-9822-394b12e39e4a",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_pzk2fbjhv6DivBooQE6Jd6bmFKFU",
            displayName: "EMAIL_RISK_REPORT",
            description: "EMAIL_RISK_REPORT",
            createdAt: "2024-11-07T13:53:26.074Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/email-address",
              id: "rep_61CV9YHSjThprPWGVY3S9jvPNX1U",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:26.000Z",
                "completed-at": "2024-11-07T13:53:26.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "email-address": "pranav@gmail.com",
                "email-reputation": "high",
                "email-reference-count": null,
                "email-domain-reputation": null,
                "email-first-seen-days": null,
                "email-estimated-age-days": 663,
                "email-last-seen-days": null,
                "email-domain-age-days": 2236,
                "email-credentials-leaked": null,
                "email-credentials-leaked-recent": false,
                "email-data-breached": null,
                "email-malicious-activity-detected": null,
                "email-malicious-activity-detected-recent": false,
                "email-is-blocklisted": null,
                "email-is-spam": false,
                "email-is-free-provider": null,
                "email-is-disposable": false,
                "email-is-deliverable": true,
                "email-is-valid-mx": true,
                "email-is-spoofable": null,
                "email-is-spf-strict": null,
                "email-is-dmarc-enforced": null,
                "email-is-suspicious": false,
                "email-domain-exists": true,
                "email-domain": "gmail.com",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/email-address",
                    id: "rptp_fw94TejHmAbrQRpPdrceS4kFTExR",
                  },
                },
              },
            },
          },
        ],
        phone_risk_report: [
          {
            id: "b95d5c5c-8330-4d70-bea5-00c252f095dd",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_M3qV5xsW3whE2cGeyk41ChQXREN1",
            displayName: "PHONE_RISK_REPORT",
            description: "PHONE_RISK_REPORT",
            createdAt: "2024-11-07T13:54:09.682Z",
            activityBy: {
              source: "HARAMONY",
              identifier: 123,
            },
            data: {
              type: "report/phone-number",
              id: "rep_zauzfVFpBABZXHrLFJMGxKzGoq2u",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:54:11.000Z",
                "completed-at": "2024-11-07T13:54:11.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "phone-number": "9008369803",
                "phone-type": "MOBILE",
                "phone-carrier": "Sandbox Phone Carrier",
                "phone-risk-level": "medium-low",
                "phone-risk-recommendation": "allow",
                "phone-risk-score": 250,
                "phone-risk-sim-swap": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/phone-number",
                    id: "rptp_vG3S24iKLkeC5jDFb1CNB3L1Gmr9",
                  },
                },
              },
            },
          },
          {
            id: "76e43395-d761-4330-b2b8-eaea91f946d9",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_PeKoEJ5VaDrRnV18YhQw2ngW2CAs",
            displayName: "PHONE_RISK_REPORT",
            description: "PHONE_RISK_REPORT",
            createdAt: "2024-11-07T13:53:45.804Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/phone-number",
              id: "rep_LxQnrjmUZTmftKucmqsYMFmUjzEa",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:46.000Z",
                "completed-at": "2024-11-07T13:53:46.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "phone-number": "9008369803",
                "phone-type": "MOBILE",
                "phone-carrier": "Sandbox Phone Carrier",
                "phone-risk-level": "medium-low",
                "phone-risk-recommendation": "allow",
                "phone-risk-score": 250,
                "phone-risk-sim-swap": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/phone-number",
                    id: "rptp_vG3S24iKLkeC5jDFb1CNB3L1Gmr9",
                  },
                },
              },
            },
          },
          {
            id: "2f8dc7dd-6466-4d5c-8c56-ec86e722e966",
            status: "READY",
            statusColor: "GREEN",
            externalVerificationId: "persona:txn_3EQ7NsNFeXghTGefM6waK4nqG6z8",
            displayName: "PHONE_RISK_REPORT",
            description: "PHONE_RISK_REPORT",
            createdAt: "2024-11-07T13:53:26.588Z",
            activityBy: {
              source: "HARMONEY",
              identifier: 123,
            },
            data: {
              type: "report/phone-number",
              id: "rep_sULT3sRZBZp4CPkwmfovC1tZyBvJ",
              attributes: {
                status: "ready",
                "created-at": "2024-11-07T13:53:27.000Z",
                "completed-at": "2024-11-07T13:53:27.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": false,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                "phone-number": "9008369803",
                "phone-type": "MOBILE",
                "phone-carrier": "Sandbox Phone Carrier",
                "phone-risk-level": "medium-low",
                "phone-risk-recommendation": "allow",
                "phone-risk-score": 250,
                "phone-risk-sim-swap": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
                  data: null,
                },
                transaction: {
                  data: null,
                },
                "report-template": {
                  data: {
                    type: "report-template/phone-number",
                    id: "rptp_vG3S24iKLkeC5jDFb1CNB3L1Gmr9",
                  },
                },
              },
            },
          },
        ],
        government_id_verification: [
          {
            id: "87d0085e-e188-4229-9a8b-2d6af89b19f6",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:inq_3tTLsn1JjTwfhSKRcv2dqcSARAkR",
            displayName: "Government Id verification",
            description: "Government Id verification",
            createdAt: "2024-11-07T11:33:51.701Z",
            activityBy: {
              source: "NAO_WEB",
              identifier: "5tH5YUUSNqpPqrAzXci1",
            },
            data: {
              type: "verification/government-id",
              id: "ver_Ecn1SZBA64KceUsfkpDL8UXLsyVR",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T11:34:10.000Z",
                "created-at-ts": 1730979250,
                "submitted-at": "2024-11-07T11:34:11.000Z",
                "submitted-at-ts": 1730979251,
                "completed-at": "2024-11-07T11:34:12.000Z",
                "completed-at-ts": 1730979252,
                "country-code": "US",
                "entity-confidence-score": 100,
                "entity-confidence-reasons": ["generic"],
                "front-photo-url":
                  "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjemUzbGFrMm5ucnpqcHByY2N2OW5tdzgxZjhlIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjIyNmFhYzc0LTdhY2UtNDgwMy1iZTk2LTU4Nzk4NDUzNDhiNSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMxMDA5NDM2fQ.kDFeDkvBz2Hq5LeIfMMd_OclrJ2_JWavvZqFdj77FM4",
                "back-photo-url":
                  "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1M3pqdXllN2ZjdjBpZ2NpdHo0aDAwdmUxeGNhIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjA1Y2RkMTQ3LWJjNmEtNGEzYS1hNjE4LTI0M2ZjY2Q2ODQ1OCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMxMDA5NDM2fQ.fvtS4BLi2K7_lHLwzOtFYI5vE6uFwsvq3xoKSvMTPAE",
                "photo-urls": [
                  {
                    page: "front",
                    url: "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjemUzbGFrMm5ucnpqcHByY2N2OW5tdzgxZjhlIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjhhYTcwOTM2LWJkOWMtNGU5ZC05YWYxLWU3NjFhZjAxNDcxNiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMxMDA5NDM2fQ.36EoxsVX0d53KLHpb7rZi-eoG6nakD6bqGpFxBSp1p8",
                    "normalized-url":
                      "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5dmthZWtsMzZzcDZ4bDFxbXJ2aHI1anFoMzgzIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjEzMzc3MjcyLTQzM2YtNDZjMC04ZWQyLWY0OThlNDZiODY5MSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTczMTAwOTQzNn0.qWrbiGlMAEfyssRSWkUdBl45yXJsGO55H6qcH6VoGGg",
                    "original-urls": [
                      "https://files.withpersona.com/image+%285%29.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2NmI0aG1iY3VkNWowNWs0c3J0azJ6enAxY21iIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjlmZDUyMDg5LWFlYzktNDhlYS1iNGUwLWNjMGUxNWZkNDczYiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzMxMDA5NDM2fQ.hKATRjNXBiC6PKC82hR2bnpq5D61Mw-4DGmniTRmUYE",
                    ],
                    "byte-size": 320850,
                  },
                  {
                    page: "back",
                    url: "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1M3pqdXllN2ZjdjBpZ2NpdHo0aDAwdmUxeGNhIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6ImFiYTViMmQyLWUwM2MtNDY5ZS1iMWVkLTBkZTg1YWE1MTg4MiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMxMDA5NDM2fQ.uXOo7qoCyjeEuOB2Xh2v75Tfyng-xaPrSiNXFmp5Ws4",
                    "normalized-url":
                      "https://files.withpersona.com/image+%285%29.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaHVmaHNzemlkaW4xamRzZnN0eGt2czJhcjBtIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjUxODZkMDc3LWZlYjYtNGUzOS1iNmU5LTBjYjlkNzRmOWZiMiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTczMTAwOTQzNn0.1RQsdFTsV4P7et2JF3iDW13hGc5qxDTZmXaCzgNSaGo",
                    "original-urls": [
                      "https://files.withpersona.com/image+%285%29.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhNDhpZ3NjaHlmNHhhdGR5dTZuZ2pnOXF4bnczIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6ImI1ZmQ0OWQ1LTg2MTAtNGM0MS1hYzFiLTVkY2NkZWEzY2FjOCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzMxMDA5NDM2fQ.-YsrNWmnZD3LXy0OtLb04bS46pb-gO_2ll9QWmA8W-o",
                    ],
                    "byte-size": 320850,
                  },
                ],
                "selfie-photo": {
                  url: "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxOXpqY3hrZjgybHNtdzFybGZxcmE5MG1xaGRhIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjcxYmI2NWNmLTBjYjEtNDhhMy05ZGVlLTI3ZGUwMmJiZmJkYSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzMxMDA5NDM2fQ.6s-AFQV-4_78clBfkkK4GOsxwhppIbJNK8Zo6RTJrLc",
                  "byte-size": 320850,
                },
                "selfie-photo-url":
                  "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxOXpqY3hrZjgybHNtdzFybGZxcmE5MG1xaGRhIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM2LCJuYmYiOjE3MzA5ODc4MzYsImp0aSI6IjAwZjFiOTdhLWUwYjYtNDUwZS1iZDBkLTE3MzZjN2M3ZTRjMCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzMxMDA5NDM2fQ.0HzumgfV4-5R6rUwNHa8G1VJjnXEXr9sn3JUF1zlLqg",
                "video-url": null,
                "id-class": "dl",
                "capture-method": "upload",
                "name-first": "ALEXANDER J",
                "name-middle": null,
                "name-last": "SAMPLE",
                "name-suffix": null,
                birthdate: "1977-07-17",
                "address-street-1": "600 CALIFORNIA STREET",
                "address-street-2": null,
                "address-city": "SAN FRANCISCO",
                "address-subdivision": "CA",
                "address-postal-code": "94109",
                "issuing-authority": "CA",
                "issuing-subdivision": "CA",
                nationality: null,
                "document-number": null,
                "visa-status": null,
                "issue-date": "2023-11-07",
                "expiration-date": "2029-11-07",
                designations: null,
                birthplace: null,
                endorsements: null,
                height: null,
                sex: "Male",
                restrictions: null,
                "vehicle-class": null,
                "identification-number": "I1234562",
                checks: [
                  {
                    name: "id_aamva_database_lookup",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_account_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_age_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_age_inconsistency_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_attribute_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_barcode_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_barcode_inconsistency_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_blur_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_color_inconsistency_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_compromised_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_disallowed_country_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "country-code": null,
                      "selected-country-code": null,
                    },
                  },
                  {
                    name: "id_disallowed_type_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "country-code": null,
                      "detected-id-class": null,
                      "detected-id-designations": null,
                      "disallowed-id-designations": null,
                      "selected-id-classes": null,
                    },
                  },
                  {
                    name: "id_double_side_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_electronic_replica_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_entity_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_experimental_model_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_expired_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_extracted_properties_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_extraction_inconsistency_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "check-requirements": [],
                    },
                  },
                  {
                    name: "id_fabrication_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_glare_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_handwriting_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_inconsistent_repeat_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_inquiry_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_mrz_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_mrz_inconsistency_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_number_format_inconsistency_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_paper_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_po_box_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_portrait_clarity_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_portrait_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_public_figure_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_real_id_detection",
                    status: "not_applicable",
                    reasons: ["disabled_by_check_config"],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_repeat_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_selfie_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_tamper_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "id_unprocessable_submission_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_valid_dates_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "id_video_quality_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                ],
              },
              relationships: {
                inquiry: {
                  data: {
                    type: "inquiry",
                    id: "inq_3tTLsn1JjTwfhSKRcv2dqcSARAkR",
                  },
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: {
                    type: "inquiry-template-version",
                    id: "itmplv_8yp4LnhQdRWSJC23uzjfyG51xXub",
                  },
                },
                "inquiry-template": {
                  data: {
                    type: "inquiry-template",
                    id: "itmpl_oDcSP2qVFy2TjUY9D9yH2aXh",
                  },
                },
                "verification-template": {
                  data: {
                    type: "verification-template/government-id",
                    id: "vtmpl_PUN3374NFjRYJ8zRLrkHCNg3",
                  },
                },
                "verification-template-version": {
                  data: {
                    type: "verification-template-version/government-id",
                    id: "vtmplv_5iT2Krpi3XCeZcKifC13V8iFNKEZ",
                  },
                },
                transaction: {
                  data: null,
                },
                document: {
                  data: {
                    type: "document/government-id",
                    id: "doc_aqmLVyY8cYnsyyKWPy6rpW5iVftx",
                  },
                },
              },
            },
          },
        ],
        selfie_verification: [
          {
            id: "73e3e797-7e2c-4338-a3a1-767e63226d21",
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "persona:inq_3tTLsn1JjTwfhSKRcv2dqcSARAkR",
            displayName: "Selfie verification",
            description: "Selfie verification",
            createdAt: "2024-11-07T11:33:51.719Z",
            activityBy: {
              source: "NAO_WEB",
              identifier: "5tH5YUUSNqpPqrAzXci1",
            },
            data: {
              type: "verification/selfie",
              id: "ver_354yUoofbKdLrS8KYAcDs4vdyfhd",
              attributes: {
                status: "passed",
                "created-at": "2024-11-07T11:34:27.000Z",
                "created-at-ts": 1730979267,
                "submitted-at": "2024-11-07T11:34:27.000Z",
                "submitted-at-ts": 1730979267,
                "completed-at": "2024-11-07T11:34:28.000Z",
                "completed-at-ts": 1730979268,
                "country-code": null,
                "left-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15089256004%2Fshrine_processed%2F740cebbf91b05dacd6e8446ed6a59b9c.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDA0L3NocmluZV9wcm9jZXNzZWQvNzQwY2ViYmY5MWIwNWRhY2Q2ZTg0NDZlZDZhNTliOWMuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6IjNlZDZiMDQ2LTA1YjUtNGU4MC1hNDg2LWE4MWY1OTg1YTBlYyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDQvc2hyaW5lX3Byb2Nlc3NlZC83NDBjZWJiZjkxYjA1ZGFjZDZlODQ0NmVkNmE1OWI5Yy5qcGciLCJleHAiOjE3MzEwMDk0MzV9.ktLt0cXYQC6gamAEiu0tv5o0n3MtUjV7_LgV_Fs6TWw",
                "center-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15089256003%2Fshrine_processed%2F4054467b2b3bd0533346c7d876094acf.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDAzL3NocmluZV9wcm9jZXNzZWQvNDA1NDQ2N2IyYjNiZDA1MzMzNDZjN2Q4NzYwOTRhY2YuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6IjUzOTQyYTMxLTVlNzUtNDQ3OC1iOTA4LTU5OTA5MDljYjQ1NCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDMvc2hyaW5lX3Byb2Nlc3NlZC80MDU0NDY3YjJiM2JkMDUzMzM0NmM3ZDg3NjA5NGFjZi5qcGciLCJleHAiOjE3MzEwMDk0MzV9.rj-uUSLIErggIEyRanAjOJb5Yt0y6nESe4BzwAHYwwY",
                "right-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15089256005%2Fshrine_processed%2F43b75e4f839fd954497828bcb06a5218.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDA1L3NocmluZV9wcm9jZXNzZWQvNDNiNzVlNGY4MzlmZDk1NDQ5NzgyOGJjYjA2YTUyMTguanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6ImUyYmI3MjNmLTNhMDgtNGU5My1iYzhiLTFmM2FjZTMzNDlkYSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDUvc2hyaW5lX3Byb2Nlc3NlZC80M2I3NWU0ZjgzOWZkOTU0NDk3ODI4YmNiMDZhNTIxOC5qcGciLCJleHAiOjE3MzEwMDk0MzV9.Fpojj0qGO5TxahNXIkm7M6MgDvKGHlP7Srl9a51uQgc",
                "photo-urls": [
                  {
                    page: "left_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15089256004%2Fshrine_processed%2F740cebbf91b05dacd6e8446ed6a59b9c.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDA0L3NocmluZV9wcm9jZXNzZWQvNzQwY2ViYmY5MWIwNWRhY2Q2ZTg0NDZlZDZhNTliOWMuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6IjQzMmNmMWI1LTZmZjEtNGNmNC1iZGY0LTNmZGNmZTcxMTFkMCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDQvc2hyaW5lX3Byb2Nlc3NlZC83NDBjZWJiZjkxYjA1ZGFjZDZlODQ0NmVkNmE1OWI5Yy5qcGciLCJleHAiOjE3MzEwMDk0MzV9.S6lLFSnk9N0XTzER5WJ2PSwLD1XlHdph-OD-kttKKNk",
                    "byte-size": 195062,
                  },
                  {
                    page: "center_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15089256003%2Fshrine_processed%2F4054467b2b3bd0533346c7d876094acf.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDAzL3NocmluZV9wcm9jZXNzZWQvNDA1NDQ2N2IyYjNiZDA1MzMzNDZjN2Q4NzYwOTRhY2YuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6IjM3ODRhN2FhLWQ2MGYtNDAxZi05NTMyLWM5YTE3YTEwNzUxYyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDMvc2hyaW5lX3Byb2Nlc3NlZC80MDU0NDY3YjJiM2JkMDUzMzM0NmM3ZDg3NjA5NGFjZi5qcGciLCJleHAiOjE3MzEwMDk0MzV9.znM0GZXO7SU4mLY_mv8XLZ3HQrZTPuSHG5HgVt7D4As",
                    "byte-size": 189770,
                  },
                  {
                    page: "right_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15089256005%2Fshrine_processed%2F43b75e4f839fd954497828bcb06a5218.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg5MjU2MDA1L3NocmluZV9wcm9jZXNzZWQvNDNiNzVlNGY4MzlmZDk1NDQ5NzgyOGJjYjA2YTUyMTguanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwOTg3ODM1LCJuYmYiOjE3MzA5ODc4MzUsImp0aSI6IjZlMDY2MWU3LTMyMTAtNDExMS04ZWU4LTA0YTllNzEyNDJjMiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODkyNTYwMDUvc2hyaW5lX3Byb2Nlc3NlZC80M2I3NWU0ZjgzOWZkOTU0NDk3ODI4YmNiMDZhNTIxOC5qcGciLCJleHAiOjE3MzEwMDk0MzV9.FgFxcu6qmzsnUGb2W6tIzBps7Wm3-L_N2zhxEzXUrL4",
                    "byte-size": 197253,
                  },
                ],
                "video-url": null,
                "center-photo-face-coordinates": null,
                "entity-confidence-reasons": [],
                "document-similarity-score": null,
                "selfie-similarity-score-left": null,
                "selfie-similarity-score-right": null,
                checks: [
                  {
                    name: "selfie_attribute_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_id_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_pose_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_multiple_faces_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_pose_repeat_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_account_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_suspicious_entity_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_liveness_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_glasses_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_glare_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_experimental_model_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_portrait_quality_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_public_figure_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_age_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                  {
                    name: "selfie_face_covering_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {},
                  },
                  {
                    name: "selfie_video_quality_detection",
                    status: "passed",
                    reasons: [],
                    requirement: "not_required",
                    metadata: {},
                  },
                ],
                "capture-method": "video",
              },
              relationships: {
                inquiry: {
                  data: {
                    type: "inquiry",
                    id: "inq_3tTLsn1JjTwfhSKRcv2dqcSARAkR",
                  },
                },
                template: {
                  data: null,
                },
                "inquiry-template-version": {
                  data: {
                    type: "inquiry-template-version",
                    id: "itmplv_8yp4LnhQdRWSJC23uzjfyG51xXub",
                  },
                },
                "inquiry-template": {
                  data: {
                    type: "inquiry-template",
                    id: "itmpl_oDcSP2qVFy2TjUY9D9yH2aXh",
                  },
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
                transaction: {
                  data: null,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
