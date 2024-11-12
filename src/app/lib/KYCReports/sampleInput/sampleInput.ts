export const CurrentkYCResponseStructure = {
  data: [
    {
      naoUserId: "47bd3c7a-f603-4359-901b-60781eb79b20",
      checks: {
        tin_verification: [
          {
            status: "PASSED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_9mtMP74VEWtATXTnGzgReGaMCvff",
            displayName: "TIN verification",
            description: "TIN verification",
            createdAt: "2024-08-13T11:12:31.983Z",
            data: {
              type: "verification/database-tin",
              id: "ver_hYCMRPmFuMGVdRb4gR8QXB3nw4ue",
              attributes: {
                status: "passed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-09-26T10:51:14.000Z",
                "created-at-ts": 1727347874,
                "submitted-at": "2024-09-26T10:51:14.000Z",
                "submitted-at-ts": 1727347874,
                "completed-at": "2024-09-26T10:51:15.000Z",
                "completed-at-ts": 1727347875,
                "country-code": "US",
                tin: "717570663",
                "tin-type": "ssn",
                "name-first": "yuchun",
                "name-last": "jin",
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
                    id: "txn_TpC4PVLMN7dbQjeYnZ3Yrpyyxs3V",
                  },
                },
              },
            },
          },
          {
            status: "failed",
            statusColor: "RED",
            externalVerificationId:
              "persona:txn_39ZSubX54y8uTuNzxwr5a7Xkwh5R",
            displayName: "TIN verification",
            description: "TIN verification",
            createdAt: "2024-08-08T13:05:10.650Z",
            data: null,
          },
        ],
        phone_carrier_verification: [
          {
            status: "FAILED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "RED",
            externalVerificationId:
              "persona:txn_iy1PMNyFR8cJtJaqtd5ku3rm1S9P",
            displayName: "Phone Carrier Verification",
            description: "Phone Carrier Verification",
            createdAt: "2024-08-13T11:12:32.617Z",
            data: {
              type: "verification/database-phone-carrier",
              id: "ver_TPzVL8y2zeAofWkhhxrCHKe8UNiW",
              attributes: {
                status: "failed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-09-26T10:51:35.000Z",
                "created-at-ts": 1727347895,
                "submitted-at": "2024-09-26T10:51:36.000Z",
                "submitted-at-ts": 1727347896,
                "completed-at": "2024-09-26T10:51:37.000Z",
                "completed-at-ts": 1727347897,
                "country-code": "US",
                "phone-number": "18582327059",
                "name-first": "yuchun",
                "name-last": "jin",
                "address-street-1": "52 SKYTOP ST APT 275",
                "address-street-2": null,
                "address-city": "SAN JOSE",
                "address-subdivision": "California",
                "address-postal-code": "95134",
                birthdate: "1997-03-30",
                checks: [
                  {
                    name: "database_phone_carrier_name_first_comparison",
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "match-score": 0,
                      "match-result": "none",
                    },
                  },
                  {
                    name: "database_phone_carrier_name_last_comparison",
                    status: "failed",
                    reasons: ["insufficient_match"],
                    requirement: "required",
                    metadata: {
                      "match-score": 0,
                      "match-result": "none",
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
                      "match-score": 61,
                      "match-result": "partial",
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
                    id: "txn_WEztNzJivdxvimwtkGF8nLS9CMcS",
                  },
                },
              },
            },
          },
        ],
        database_standard_verification: [
          {
            status: "PASSED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_c3ym45PpSJwz321NG1n8JDFyK84b",
            displayName: "Database standard verification",
            description: "Database standard verification",
            createdAt: "2024-08-13T11:12:33.343Z",
            data: {
              type: "verification/database-standard",
              id: "ver_GJn9L5e2s67jyMhSfBfQAVfLBTF6",
              attributes: {
                status: "passed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-10-08T14:45:19.000Z",
                "created-at-ts": 1728398719,
                "submitted-at": "2024-10-08T14:45:19.000Z",
                "submitted-at-ts": 1728398719,
                "completed-at": "2024-10-08T14:45:19.000Z",
                "completed-at-ts": 1728398719,
                "country-code": "US",
                "name-first": "Narendra",
                "name-middle": null,
                "name-last": "Modi",
                "address-street-1": "Address",
                "address-street-2": "AL2",
                "address-city": "City",
                "address-subdivision": "State",
                "address-postal-code": "12345",
                birthdate: "1950-09-17",
                "email-address": "yuliya.nesteruk@vrpconsulting.com",
                "phone-number": "515538245",
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
                    id: "txn_Z6VBEkQvvcPnJGF9YjMPDgY1FQNh",
                  },
                },
              },
            },
          },
        ],
        database_verification: [
          {
            status: "PASSED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_ASPbmN8GdFJibEjuKBknWchSqD3Y",
            displayName: "Database verification",
            description: "Database verification",
            createdAt: "2024-08-13T11:12:34.526Z",
            data: {
              type: "verification/database",
              id: "ver_xV4q8NVZQBtUbN81wrFQ2kt5CPPW",
              attributes: {
                status: "passed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-09-16T15:06:45.000Z",
                "created-at-ts": 1726499205,
                "submitted-at": "2024-09-16T15:06:45.000Z",
                "submitted-at-ts": 1726499205,
                "completed-at": "2024-09-16T15:06:46.000Z",
                "completed-at-ts": 1726499206,
                "country-code": "US",
                "name-first": "Dieon",
                "name-middle": null,
                "name-last": "L Brown",
                "address-street-1": "611 Iris Ave",
                "address-street-2": "Sunnyvale, CA 94086",
                "address-city": "Sunnyvale",
                "address-subdivision": "California",
                "address-postal-code": "94086",
                birthdate: "1998-04-01",
                "identification-number": "602-06-9507",
                "document-number": null,
                "document-issuing-subdivision": null,
                "document-expiry-date": null,
                "document-issuing-date": null,
                "phone-number": "14085097470",
                "email-address": "terryowens430@gmail.com",
                "normalized-address-street-1": null,
                "normalized-address-street-2": null,
                "normalized-address-city": null,
                "normalized-address-subdivision": null,
                "normalized-address-postal-code": null,
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
                    status: "passed",
                    reasons: [],
                    requirement: "required",
                    metadata: {
                      "check-requirements": [
                        {
                          name: "name_first",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                            {
                              type: "string_difference",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                            {
                              type: "substring",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                            {
                              type: "tokenization",
                              "match-level-minimum": "partial",
                              "match-result": "partial",
                            },
                          ],
                        },
                        {
                          name: "name_last",
                          "match-result": "partial",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              "match-level-minimum": "partial",
                              "match-result": "none",
                            },
                            {
                              type: "string_difference",
                              "match-level-minimum": "partial",
                              "match-result": "none",
                            },
                            {
                              type: "substring",
                              "match-level-minimum": "partial",
                              "match-result": "partial",
                            },
                            {
                              type: "tokenization",
                              "match-level-minimum": "partial",
                              "match-result": "partial",
                            },
                          ],
                        },
                        {
                          name: "birthdate",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "date_similarity",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_street_house_number",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_street_name",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_street_type",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              "match-level-minimum": "none",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_city",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_similarity",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_subdivision",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              "match-level-minimum": "full",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_postal_code",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              "match-level-minimum": "partial",
                              "match-result": "full",
                            },
                          ],
                        },
                        {
                          name: "address_country_code",
                          "match-result": "full",
                          status: "passed",
                          comparisons: [
                            {
                              type: "string_difference",
                              "match-level-minimum": "full",
                              "match-result": "full",
                            },
                          ],
                        },
                      ],
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
              },
            },
          },
          {
            status: "SERVICE_ERROR", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "AMBER",
            externalVerificationId:
              "persona:txn_ASPbmN8GdFJibEjuKBknWchSqD3Y",
            displayName: "Database verification",
            description: "Database verification",
            createdAt: "2024-08-13T11:12:34.526Z",
            data: {
              type: "transaction",
              id: "txn_w4pQF1cuZ1bzgaKFocREL38occyx",
              attributes: {
                status: "created",
                "reference-id": "BdJLW22x8EcVFKSDK3_a",
                "external-id": null,
                fields: {
                  birthdate: { type: "date", value: "1991-11-11" },
                  "name-first": { type: "string", value: "Pranav" },
                  "name-last": { type: "string", value: "Pandey" },
                  "address-street-1": { type: "string", value: null },
                  "address-street-2": {
                    type: "string",
                    value: "128 W 9TH ST",
                  },
                  "address-city": {
                    type: "string",
                    value: "COFFEYVILLE",
                  },
                  "address-subdivision": { type: "string", value: "KS" },
                  "address-postal-code": { type: "string", value: null },
                  "phone-number": { type: "string", value: "9008369803" },
                  "email-address": {
                    type: "string",
                    value: "pranav@gmail.com",
                  },
                  "identification-number": {
                    type: "string",
                    value: "123-12-3232",
                  },
                  "address-country-code": { type: "string", value: null },
                },
                tags: [],
                "created-at": "2024-10-22T05:23:08.899Z",
                "updated-at": "2024-10-22T05:23:08.899Z",
              },
              relationships: {
                reviewer: { data: null },
                "transaction-label": { data: null },
                "transaction-type": {
                  data: {
                    type: "transaction-type",
                    id: "txntp_vEpwUH5YKU2qe7e3tyHuzxE6aKy1",
                  },
                },
                "related-objects": { data: [] },
              },
            },
          },
        ],
        social_media_report: [
          {
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_rFSWCkKfdD7P4VQfqS3jwwqitBc9",
            displayName: "Social media report",
            description: "Social media report",
            createdAt: "2024-08-13T11:12:35.152Z",
            data: {
              type: "report/social-media",
              id: "rep_Ew5xnczWMrcm59cEugyYKp76wqEk",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:06:36.000Z",
                "completed-at": "2024-09-16T15:06:36.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": false,
                "is-continuous": false,
                tags: [],
                "name-first": "Dieon",
                "name-last": "L Brown",
                birthdate: "1998-04-01",
                "phone-number": "14085097470",
                "email-address": "terryowens430@gmail.com",
                "address-city": "Sunnyvale",
                "address-subdivision": "California",
                "linkedin-url": null,
                "linkedin-username": null,
                "linkedin-id": null,
                "facebook-url": null,
                "facebook-username": null,
                "facebook-id": null,
                "twitter-url": null,
                "twitter-username": null,
                "github-url": null,
                "github-username": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
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
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_8WcsS3wtj5uREYUF9WSh9RsqhpP5",
            displayName: "Adverse media report",
            description: "Adverse media report",
            createdAt: "2024-08-13T11:12:35.691Z",
            data: {
              type: "report/adverse-media",
              id: "rep_E12vgf1bNeP8JNQA6riT7dsiT6qN",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:06:27.000Z",
                "completed-at": "2024-09-16T15:06:27.000Z",
                "redacted-at": null,
                "report-template-version-name": "v2",
                "has-match": false,
                "is-continuous": false,
                tags: [],
                "name-first": "Dieon",
                "name-middle": null,
                "name-last": "L Brown",
                term: "Dieon L Brown",
                "birthdate-year": 1998,
                birthdate: "1998-04-01",
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
          {
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_nE4PXYJVo9YmwXEq6WGot7psjsSz",
            displayName: "Watchlist report",
            description: "Watchlist report",
            createdAt: "2024-08-13T11:12:36.589Z",
            data: {
              type: "report/watchlist",
              id: "rep_29iZKwTP4PEyC6N8KBZRW1Lc6pPa",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:06:18.000Z",
                "completed-at": "2024-09-16T15:06:18.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": false,
                "is-continuous": false,
                tags: [],
                "name-first": "Dieon",
                "name-middle": null,
                "name-last": "L Brown",
                term: "Dieon L Brown",
                birthdate: "1998-04-01",
                "country-code": "US",
                "matched-lists": [],
                "run-history": [
                  {
                    "scheduled-at": "2024-09-16T15:06:18.000Z",
                    "completed-at": "2024-09-16T15:06:18.000Z",
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
          {
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_sRYLiQykWu3R3qxT9oWEfMvdcfKn",
            displayName: "Politically exposed person report",
            description: "Politically exposed person report",
            createdAt: "2024-08-13T11:12:38.677Z",
            data: {
              type: "report/politically-exposed-person",
              id: "rep_ynuwwsQBXbUFU5p4XEw2Luo312iK",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-27T10:20:25.000Z",
                "completed-at": "2024-09-27T10:20:25.000Z",
                "redacted-at": null,
                "report-template-version-name": "v5",
                "has-match": true,
                "is-continuous": false,
                "is-recurring": false,
                tags: [],
                query: {
                  "name-first": "Narendra Damodardas",
                  "name-middle": null,
                  "name-last": "Modi",
                  term: "Narendra Damodardas Modi",
                  birthdate: "1950-09-17",
                  "country-code": "IN",
                },
                result: [
                  {
                    "entity-id": "Q1058",
                    name: "Narendra Modi",
                    aliases: [
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
                      "Mr. Narendra Modi",
                      "ᱱᱚᱨᱮᱱᱫᱽᱨᱚ ᱢᱳᱫᱤ",
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
                      "Naréndra Dámodardás Módí",
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
                        name: "Prime Minister of the Republic of India",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Prime Minister",
                      },
                      {
                        "pep-class": "pep-class-unknown",
                        "source-key": "internal-data-source",
                        name: "Head, Dept. of Space",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Minister of Personnel, Public Grievances, & Pensions",
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
                        name: "Member of the 16th Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-2",
                        "source-key": "internal-data-source",
                        name: "Leader of the House in Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Prime Minister of India",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Member of the 17th Lok Sabha",
                      },
                      {
                        "pep-class": "pep-class-1",
                        "source-key": "internal-data-source",
                        name: "Member of the Lok Sabha",
                      },
                    ],
                    associates: [
                      {
                        name: "Jashodaben Narendrabhai Modi",
                        relationship: "Spouse",
                      },
                      {
                        name: "Lucky Bisht",
                        relationship: "Significant Person",
                      },
                      {
                        name: "Heeraben Modi",
                        relationship: "Mother",
                      },
                    ],
                    affiliations: [],
                    "related-urls": [
                      {
                        "source-key": "internal-source-url",
                        name: "https://www.narendramodi.in/",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://facebook.com/268475866502370",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "http://www.narendramodi.in/",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://www.cia.gov/the-world-factbook/countries/india",
                      },
                      {
                        "source-key": "internal-source-url",
                        name: "https://www.cia.gov/resources/world-leaders/foreign-governments/india",
                      },
                    ],
                    images: [
                      {
                        "internal-url":
                          "https://cdn.withpersona.com/assets/politically_exposed_persons/images/310af520efc96ebcd8b0d8548b4a647b8f309e49b0b14fc866add75f4be5b667",
                        "external-url":
                          "https://commons.wikimedia.org/wiki/Special:FilePath/Official%20portrait%20of%20Narendra%20Modi%2C%202022%20%28cropped%29.jpg",
                        "enabled-for-similarity": true,
                        "similarity-score": null,
                        "similarity-level": null,
                      },
                      {
                        "internal-url":
                          "https://cdn.withpersona.com/assets/politically_exposed_persons/images/4b225d06fe1cce7ed7e845deea4be5f4e2754de0228270eb4e2599f9d629fca8",
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
                        url: "https://twitter.com/narendramodi",
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
                      "us-cia-world-factbook-heads-of-state-and-government":
                        {
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
                    "match-types": ["aka_exact"],
                    "pep-type": "politically_exposed_person",
                  },
                ],
                "run-history": [
                  {
                    "scheduled-at": "2024-09-27T10:20:25.000Z",
                    "completed-at": "2024-09-27T10:20:25.000Z",
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
        ],
        address_lookup_report: [
          {
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_67rVrS7AMbXuWYXYe69hWUdbHdQP",
            displayName: "Address lookup report",
            description: "Address lookup report",
            createdAt: "2024-08-13T11:12:39.386Z",
            data: {
              type: "report/address-lookup",
              id: "rep_iidLCGAgpTyhZAjEhWqVd3JEfUDA",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:41:19.000Z",
                "completed-at": "2024-09-16T15:41:19.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                tags: [],
                addressee: null,
                "address-street-1": "52 SKYTOP ST APT 275",
                "address-street-2": "SAN JOSE, CA 95134-2197",
                "address-city": "SAN JOSE",
                "address-subdivision": "California",
                "address-postal-code": "95134",
                "resolved-addressee": null,
                "resolved-address-street-1": "52 Skytop St Apt 275 # San",
                "resolved-address-street-2": null,
                "resolved-address-city": "San Jose",
                "resolved-address-subdivision": "CA",
                "resolved-address-postal-code": "95134",
                "metadata-record-type": "H",
                "metadata-zip-type": "Standard",
                "metadata-county-fips": "06085",
                "metadata-county-name": "Santa Clara",
                "metadata-carrier-route": "C019",
                "metadata-carrier-route-type": "CityRoute",
                "metadata-congressional-district": "17",
                "metadata-building-default-indicator": null,
                "metadata-residential-delivery-indicator": "Residential",
                "metadata-latitude": 37.40396,
                "metadata-longitude": -121.94327,
                "metadata-precision": "Zip9",
                "metadata-time-zone": "Pacific",
                "metadata-utc-offset": -8,
                "metadata-obeys-daylight-savings": true,
                "analysis-dpv-match-code": "Y",
                "analysis-dpv-match-code-decoded": "Confirmed",
                "analysis-dpv-footnotes": ["AA", "BB"],
                "analysis-dpv-footnotes-decoded": [
                  "Street name, city, state, and ZIP are all valid.",
                  "Entire address is valid",
                ],
                "analysis-dpv-cmra": "N",
                "analysis-dpv-vacant": "N",
                "analysis-active": "Y",
                "analysis-footnotes": ["N#"],
                "analysis-footnotes-decoded": ["Fixed abbreviations"],
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
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_x55UDJxXXYv5JxF3xFVdwA5Qt9QA",
            displayName: "Email risk report",
            description: "Email risk report",
            createdAt: "2024-08-13T11:12:39.968Z",
            data: {
              type: "report/email-address",
              id: "rep_iGR2DfGkJCZApPzuv8VdKU8K4Grj",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:41:08.000Z",
                "completed-at": "2024-09-16T15:41:10.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                tags: [],
                "email-address": "yuchun.jin@outlook.com",
                "email-reputation": "high",
                "email-reference-count": null,
                "email-domain-reputation": null,
                "email-first-seen-days": null,
                "email-estimated-age-days": 42,
                "email-last-seen-days": null,
                "email-domain-age-days": 10987,
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
                "email-domain": "outlook.com",
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
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
            status: "ready",
            statusColor: "AMBER",
            externalVerificationId:
              "persona:txn_PBtvDLUQvyxdKAApdAaDhKHznpVa",
            displayName: "Email risk report",
            description: "Email risk report",
            createdAt: "2024-08-07T18:57:02.626Z",
            data: {
              id: "txn_PBtvDLUQvyxdKAApdAaDhKHznpVa",
              type: "transaction",
              attributes: {
                tags: [],
                fields: {
                  "email-address": {
                    type: "string",
                    value: "syedyaseen@gmail.com",
                  },
                },
                status: "created",
                "created-at": "2024-08-07T18:57:02.520Z",
                "updated-at": "2024-08-07T18:57:02.529Z",
                "external-id": null,
                "reference-id": "47bd3c7a-f603-4359-901b-60781eb79b20",
              },
              relationships: {
                reviewer: {
                  data: null,
                },
                "related-objects": {
                  data: [],
                },
                "transaction-type": {
                  data: {
                    id: "txntp_ddW7ghP42fi4vUiBSgC3hvuqLknT",
                    type: "transaction-type",
                  },
                },
                "transaction-label": {
                  data: null,
                },
              },
            },
          },
        ],
        phone_risk_report: [
          {
            status: "READY", // can be pending, ready , error
            statusColor: "GREEN",
            externalVerificationId:
              "persona:txn_BJSVWtuFg2ymYZNSTSnhk2RT7dLm",
            displayName: "Phone risk report",
            description: "Phone risk report",
            createdAt: "2024-08-13T11:12:40.553Z",
            data: {
              type: "report/phone-number",
              id: "rep_GfBTbu8ADcaP7VmMSeRnpSQVR5eY",
              attributes: {
                status: "ready", // can be pending, ready , error
                "created-at": "2024-09-16T15:40:59.000Z",
                "completed-at": "2024-09-16T15:41:00.000Z",
                "redacted-at": null,
                "report-template-version-name": "v1",
                "has-match": true,
                "is-continuous": false,
                tags: [],
                "phone-number": "18582327059",
                "phone-type": "MOBILE",
                "phone-carrier": "T-Mobile USA, Inc.",
                "phone-risk-level": "medium-low",
                "phone-risk-recommendation": "allow",
                "phone-risk-score": 300,
                "phone-risk-sim-swap": null,
              },
              relationships: {
                inquiry: {
                  data: null,
                },
                account: {
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
            status: "PASSED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "GREEN",
            externalVerificationId:
              "persona:inq_1SfaNzRMztvo6EzuFEjjb5tgAYxw",
            displayName: "Government Id verification",
            description: "Government Id verification",
            createdAt: "2024-08-13T16:42:42.280Z",
            data: {
              type: "verification/government-id",
              id: "ver_qEuTzATdjNv487kwthvMvavyNHmD",
              attributes: {
                status: "passed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-10-09T11:49:39.000Z",
                "created-at-ts": 1728474579,
                "submitted-at": "2024-10-09T11:49:39.000Z",
                "submitted-at-ts": 1728474579,
                "completed-at": "2024-10-09T11:49:41.000Z",
                "completed-at-ts": 1728474581,
                "country-code": "US",
                "entity-confidence-score": 100,
                "entity-confidence-reasons": ["generic"],
                "front-photo-url":
                  "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Zjd4OHd0MDgyZmFrMmdzZnlwMHZrd2h0eWthIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImM3MjA4ZmI5LWZkYzUtNGFmMS05MjMwLThjYmNmMDI3OWRkYiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzI4NDk2MjA1fQ.iT6zvpMHJ488m7ajQX9uEr9oLw7ui-hJqmZXBEQBY_w",
                "back-photo-url":
                  "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4dmwzMWNiMXh0aDRsbnVtNTE5ZXJyZWxwajU0IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImFiNTg3YWVkLWI2NWMtNGEyMy05NDk1LWEyZGQxODE4ZjYxYyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzI4NDk2MjA1fQ.Q7R1aSJg93R3TuYsqhzA355KRvgLd0KLYtKKcnmX5Cg",
                "photo-urls": [
                  {
                    page: "front",
                    url: "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Zjd4OHd0MDgyZmFrMmdzZnlwMHZrd2h0eWthIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImU4MTFhYWNkLTdjNDUtNDkyYy04NWJhLWI4NGU3MDkzZjMzYyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzI4NDk2MjA1fQ.iJEeax4V9FGDjx3QhQmktUriUXGtY59x1Ds3M-ES4u4",
                    "normalized-url":
                      "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5dWl3aWY4ZndpaWtmb3ltYXVpYmo0YWk5dTM4IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjcyMjMzM2UwLTFiMmMtNDM5Ni04MTJhLWQ2ZDI4MjM5NTBhOSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTcyODQ5NjIwNX0.EOXtb8kZZej1fV9osIVv9-zRsclszuvYYaGYQKRrYJg",
                    "original-urls": [
                      "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwd2hhMjZvc2tnOWdlaWdoM3JhaHM2bWh2b3VrIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjA4NDcyMzAzLWRiMjItNGY0NC05YTMxLTI4NDMxMmMyNWQ3NSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzI4NDk2MjA1fQ.I36HJaFnp3z7rj5HKO91uUUfo1M_4QSPvK7xgKHsBtQ",
                    ],
                    "byte-size": 395258,
                  },
                  {
                    page: "back",
                    url: "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4dmwzMWNiMXh0aDRsbnVtNTE5ZXJyZWxwajU0IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImU3MDBkM2U0LTAxOGQtNDdmNy1hMTRhLTY4OWQ1NWVhN2QwYSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzI4NDk2MjA1fQ.fJ42UYJmjh-LcxQKwqZG5PtmqFbQ4nLJfc4j0fzWbCQ",
                    "normalized-url":
                      "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJueW9mZWExdHhqcW0yN3NvMzVoc29sZmlrNWtxIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjkwODcxMzg0LTY4YjctNDU0Ny1iNWNiLTRlYjAxNmE3NDU0YyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTcyODQ5NjIwNX0.MQF3SwgKlTsjlNK5TmSe591gf1ApjAUwIsJYjyaYBKE",
                    "original-urls": [
                      "https://files.withpersona.com/Screenshot+2024-10-09+at+1.33.04%E2%80%AFPM.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpcWh1bG5pa2hteGpxanN0eTAwcXh3eDdweDk5IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6Ijk5MzgyNDdhLTUyYmQtNGZiMC1hNTc2LWU0ZGNiODg3MGI2ZSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzI4NDk2MjA1fQ.0riTTkAko-ulsTWOAUkK9lE-v9AepPIo7r-wGILNANI",
                    ],
                    "byte-size": 395258,
                  },
                ],
                "selfie-photo": {
                  url: "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNmI2ZXdlOW5raXh4amFoeTh3ejhhd2d3emg4IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjRlMzY0ZDgxLTM1OGUtNDA1MC04ZWJiLWNlNDBlMWI5ZGMyZSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzI4NDk2MjA1fQ.4VcHCq2UAZsaAP9idFYJzBtEOvwv76VI9a4bFFSkSxI",
                  "byte-size": 395258,
                },
                "selfie-photo-url":
                  "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNmI2ZXdlOW5raXh4amFoeTh3ejhhd2d3emg4IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjdkYzQ2YjMyLTJlNTgtNGM1MC05OGE4LTdmOTAyYzQ1NTI4ZCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzI4NDk2MjA1fQ.cAt1fnd7PKMkOJcElA6H1nfXhYEUcn1A6O_AlvCI-nI",
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
                "issue-date": "2023-10-09",
                "expiration-date": "2029-10-09",
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
                    id: "inq_p4Wk3qJtW3ZrXxCFiFKyv1YFbUcX",
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
                    id: "doc_a6yzUx4jLQRdK2RrimE57SYtKUFX",
                  },
                },
              },
            },
          },
        ],
        selfie_verification: [
          {
            status: "PASSED", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
            statusColor: "GREEN",
            externalVerificationId:
              "persona:inq_1SfaNzRMztvo6EzuFEjjb5tgAYxw",
            displayName: "Selfie verification",
            description: "Selfie verification",
            createdAt: "2024-08-13T16:42:42.280Z",
            data: {
              type: "verification/selfie",
              id: "ver_nLx3FgZgwk63v9QtJBtg5oHA8T1N",
              attributes: {
                status: "passed", // can be initiated, submitted, passed, failed, requires_retry, canceled, confirmed
                "created-at": "2024-10-09T11:49:59.000Z",
                "created-at-ts": 1728474599,
                "submitted-at": "2024-10-09T11:50:00.000Z",
                "submitted-at-ts": 1728474600,
                "completed-at": "2024-10-09T11:50:01.000Z",
                "completed-at-ts": 1728474601,
                "country-code": null,
                "left-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15081423653%2Fshrine_processed%2F9ece53f14285cd6b4f75869d5bf2166c.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjUzL3NocmluZV9wcm9jZXNzZWQvOWVjZTUzZjE0Mjg1Y2Q2YjRmNzU4NjlkNWJmMjE2NmMuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjQwYTQ3YmFlLWZiZTUtNDk5OS1hZWI1LTFmNzNkZDQ3NTYwYSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTMvc2hyaW5lX3Byb2Nlc3NlZC85ZWNlNTNmMTQyODVjZDZiNGY3NTg2OWQ1YmYyMTY2Yy5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.eCJVxT7R2RPQJtl2hgnYHguuPQKnXpan_hHOyvjylP0",
                "center-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15081423652%2Fshrine_processed%2F6289cd6726532be2a6707b23ecadce55.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjUyL3NocmluZV9wcm9jZXNzZWQvNjI4OWNkNjcyNjUzMmJlMmE2NzA3YjIzZWNhZGNlNTUuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjU3YzcxMzBjLWNhZTAtNGNhZS05OWI3LWRlMWZiNmUyYzM5NSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTIvc2hyaW5lX3Byb2Nlc3NlZC82Mjg5Y2Q2NzI2NTMyYmUyYTY3MDdiMjNlY2FkY2U1NS5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.4n37hvHqh4nxMiRgiU2dUwnJBRL9H1maHck1ETx5uiE",
                "right-photo-url":
                  "https://files.withpersona.com/selfiefile%2Fimage%2F15081423654%2Fshrine_processed%2Fff968afb75cea2d47cb3259d563db73b.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjU0L3NocmluZV9wcm9jZXNzZWQvZmY5NjhhZmI3NWNlYTJkNDdjYjMyNTlkNTYzZGI3M2IuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjIyOTJlZWFiLTgzMjgtNGVkZS1hYmQxLThhNGM0MjE3NTA5MyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTQvc2hyaW5lX3Byb2Nlc3NlZC9mZjk2OGFmYjc1Y2VhMmQ0N2NiMzI1OWQ1NjNkYjczYi5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.PK2isvkPg8tW6FL8XUbTrFtnxxoiqCTjb47c8AZJDvo",
                "photo-urls": [
                  {
                    page: "left_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15081423653%2Fshrine_processed%2F9ece53f14285cd6b4f75869d5bf2166c.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjUzL3NocmluZV9wcm9jZXNzZWQvOWVjZTUzZjE0Mjg1Y2Q2YjRmNzU4NjlkNWJmMjE2NmMuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImJjMjUxNzEwLTI0YjItNGNkOC1iZTA5LWZlOGFkMmJkMjhkNSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTMvc2hyaW5lX3Byb2Nlc3NlZC85ZWNlNTNmMTQyODVjZDZiNGY3NTg2OWQ1YmYyMTY2Yy5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.J92qV_jvpEuf8JyWfeGlS1DV_h5uuqKzErwYBcBMjlg",
                    "byte-size": 240093,
                  },
                  {
                    page: "center_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15081423652%2Fshrine_processed%2F6289cd6726532be2a6707b23ecadce55.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjUyL3NocmluZV9wcm9jZXNzZWQvNjI4OWNkNjcyNjUzMmJlMmE2NzA3YjIzZWNhZGNlNTUuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6IjA0NWM1NzVhLWNkNDgtNDcyYi1iODZmLTQ5MWQzZmM3M2NkOSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTIvc2hyaW5lX3Byb2Nlc3NlZC82Mjg5Y2Q2NzI2NTMyYmUyYTY3MDdiMjNlY2FkY2U1NS5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.b8K9y3zthRTBmloWyHmN1-awt5_mH2uiLbj1HYHhM30",
                    "byte-size": 231110,
                  },
                  {
                    page: "right_photo",
                    url: "https://files.withpersona.com/selfiefile%2Fimage%2F15081423654%2Fshrine_processed%2Fff968afb75cea2d47cb3259d563db73b.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDgxNDIzNjU0L3NocmluZV9wcm9jZXNzZWQvZmY5NjhhZmI3NWNlYTJkNDdjYjMyNTlkNTYzZGI3M2IuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzI4NDc0NjA1LCJuYmYiOjE3Mjg0NzQ2MDUsImp0aSI6ImZhODJjM2M3LTBiMmItNDZkYS1hNTRjLTI4OWQzMDlmNzliZiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODE0MjM2NTQvc2hyaW5lX3Byb2Nlc3NlZC9mZjk2OGFmYjc1Y2VhMmQ0N2NiMzI1OWQ1NjNkYjczYi5qcGciLCJleHAiOjE3Mjg0OTYyMDV9.XSE13I_FOB5W_z8vgAKocar500yiBsy8-ByeBy98QF0",
                    "byte-size": 234273,
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
                    id: "inq_p4Wk3qJtW3ZrXxCFiFKyv1YFbUcX",
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
        credit_check: [
          {
            status: "PASSED",
            statusColor: "GREEN",
            externalVerificationId: "experian:123",
            displayName: "Soft Credit Enquiry",
            description: "Soft Credit Enquiry",
            createdAt: "2024-06-27T07:13:43Z",
            data: {
              creditProfile: [
                {
                  headerRecord: [
                    {
                      reportDate: "string",
                      reportTime: "string",
                      preamble: "string",
                      versionNo: "string",
                      mKeywordLength: "string",
                      mKeywordText: "string",
                      y2kReportedDate: "string",
                      inquiringSubcode: "string",
                      reportCode: "string",
                      applicationCode: "string",
                    },
                  ],
                  addressInformation: [
                    {
                      censusGeoCode: "string",
                      city: "string",
                      countyCode: "string",
                      dwellingType: "string",
                      firstReportedDate: "string",
                      lastReportingSubscriberCode: "string",
                      lastUpdatedDate: "string",
                      msaCode: "string",
                      source: "string",
                      state: "string",
                      stateCode: "string",
                      streetName: "string",
                      streetPrefix: "string",
                      streetSuffix: "string",
                      timesReported: "string",
                      unitId: "string",
                      unitType: "string",
                      zipCode: "string",
                    },
                  ],
                  consumerAssistanceReferralAddress: {
                    cityStateZip: "string",
                    officeName: "string",
                    phone: "string",
                    poBox: "string",
                    streetName: "string",
                  },
                  consumerIdentity: {
                    dob: {
                      day: "string",
                      month: "string",
                      year: "string",
                    },
                    name: [
                      {
                        firstName: "string",
                        generationCode: "string",
                        middleName: "string",
                        secondSurname: "string",
                        surname: "string",
                        type: "string",
                      },
                    ],
                    phone: [
                      {
                        number: "string",
                        source: "string",
                        type: "string",
                      },
                    ],
                  },
                  directCheck: [
                    {
                      subscriberAddress: "string",
                      subscriberCity: "string",
                      subscriberCode: "string",
                      subscriberName: "string",
                      subscriberPhone: "string",
                      subscriberState: "string",
                      subscriberZipCode: "string",
                    },
                  ],
                  employmentInformation: [
                    {
                      addressExtraLine: "string",
                      addressFirstLine: "string",
                      addressSecondLine: "string",
                      firstReportedDate: "string",
                      lastUpdatedDate: "string",
                      name: "string",
                      source: "string",
                      zipCode: "string",
                    },
                  ],
                  fraudShield: [
                    {
                      addressCount: "string",
                      addressDate: "string",
                      addressErrorCode: "string",
                      dateOfBirth: "string",
                      dateOfDeath: "string",
                      fraudShieldIndicators: {
                        indicator: ["string"],
                      },
                      sic: "string",
                      socialCount: "string",
                      socialDate: "string",
                      socialErrorCode: "string",
                      ssnFirstPossibleIssuanceYear: "string",
                      ssnLastPossibleIssuanceYear: "string",
                      text: "string",
                      type: "string",
                    },
                  ],
                  informationalMessage: [
                    {
                      messageNumber: "string",
                      messageNumberDetailed: "string",
                      messageText: "string",
                    },
                  ],
                  inquiry: [
                    {
                      amount: "string",
                      date: "string",
                      kob: "string",
                      subscriberCode: "string",
                      subscriberName: "string",
                      terms: "string",
                      type: "string",
                    },
                  ],
                  mla: {
                    messageNumber: "string",
                    messageText: "string",
                  },
                  ofac: {
                    messageNumber: "string",
                    messageText: "string",
                  },
                  summaries: [
                    {
                      summaryType: "string",
                      attributes: [
                        {
                          id: "string",
                          value: "string",
                        },
                      ],
                    },
                  ],
                  publicRecord: [
                    {
                      adjustmentPercent: "string",
                      amount: "string",
                      bankruptcyAssetAmount: "string",
                      bankruptcyVoluntaryIndicator: "string",
                      bookPageSequence: "string",
                      consumerComment: "string",
                      courtCode: "string",
                      courtName: "string",
                      disputeFlag: "string",
                      ecoa: "string",
                      evaluation: "string",
                      filingDate: "string",
                      plaintiffName: "string",
                      referenceNumber: "string",
                      repaymentPercent: "string",
                      status: "string",
                      statusDate: "string",
                    },
                  ],
                  riskModel: [
                    {
                      evaluation: "string",
                      grade: "string",
                      modelIndicator: "string",
                      score: "string",
                      scoreFactors: [
                        {
                          importance: "string",
                          code: "string",
                        },
                      ],
                      scorePercentile: "string",
                    },
                  ],
                  ssn: [
                    {
                      number: "string",
                      ssnIndicators: "string",
                      variationIndicator: "string",
                    },
                  ],
                  statement: [
                    {
                      dateReported: "string",
                      statementText: "string",
                      type: "string",
                    },
                  ],
                  tradeline: [
                    {
                      accountNumber: "string",
                      accountType: "string",
                      amount1: "string",
                      amount1Qualifier: "string",
                      amount2: "string",
                      amount2Qualifier: "string",
                      amountBalloonPayment: "string",
                      amountPastDue: "string",
                      balanceAmount: "string",
                      balanceDate: "string",
                      bankruptcyChapterNumber: "string",
                      consumerComment: "string",
                      consumerDisputeFlag: "string",
                      datePaymentDue: "string",
                      delinquencies30Days: "string",
                      delinquencies60Days: "string",
                      delinquencies90to180Days: "string",
                      derogCounter: "string",
                      ecoa: "string",
                      enhancedPaymentData: {
                        actualPaymentAmount: "string",
                        chargeoffAmount: "string",
                        ciiCode: "string",
                        complianceCondition: "string",
                        creditLimitAmount: "string",
                        enhancedAccountCondition: "string",
                        enhancedAccountType: "string",
                        enhancedPaymentHistory84: "string",
                        enhancedPaymentStatus: "string",
                        enhancedSpecialComment: "string",
                        enhancedTerms: "string",
                        enhancedTermsFrequency: "string",
                        firstDelinquencyDate: "string",
                        highBalanceAmount: "string",
                        maxDelinquencyCode: "string",
                        mortgageId: "string",
                        originalCreditorClassificationCode: "string",
                        originalLoanAmount: "string",
                        paymentLevelDate: "string",
                        purchasedPortfolioFromName: "string",
                        secondDelinquencyDate: "string",
                        secondaryAgencyCode: "string",
                        secondaryAgencyId: "string",
                        specialPaymentAmount: "string",
                        specialPaymentCode: "string",
                        specialPaymentDate: "string",
                      },
                      evaluation: "string",
                      kob: "string",
                      lastPaymentDate: "string",
                      maxDelinquencyDate: "string",
                      monthlyPaymentAmount: "string",
                      monthlyPaymentType: "string",
                      monthsHistory: "string",
                      openDate: "string",
                      openOrClosed: "string",
                      originalCreditorName: "string",
                      paymentHistory: "string",
                      revolvingOrInstallment: "string",
                      soldToName: "string",
                      specialComment: "string",
                      status: "string",
                      statusDate: "string",
                      subscriberCode: "string",
                      subscriberName: "string",
                      terms: "string",
                      trendedTrades: [
                        {
                          monthNumber: "string",
                          balanceAmount: "string",
                          originalLoanAmountOrLimit: "string",
                          scheduledPaymentAmount: "string",
                          actualPaymentAmount: "string",
                          lastPaymentDate: "string",
                        },
                      ],
                    },
                  ],
                  uniqueConsumerIdentifier: {
                    value: "string",
                    verificationIndicator: "string",
                  },
                  covidSpotlightAttributes: [
                    {
                      modelTypeIndicator: "string",
                      covidAttributes: [
                        {
                          modelTypeName: "string",
                          variableName: "string",
                          signofAttribute: "string",
                          attributeValue: "string",
                        },
                      ],
                    },
                  ],
                  fcraAttributes: [
                    {
                      modelTypeIndicator: "string",
                      variableName: "string",
                      signofAttribute: "string",
                      attributeValue: "string",
                    },
                  ],
                  staggAttributes: {
                    message: "string",
                    modelAttributes: [
                      {
                        modelTypeIndicator: "string",
                        variableName: "string",
                        signofAttribute: "string",
                        attributeValue: "string",
                      },
                    ],
                  },
                  endTotals: [
                    {
                      totalSegments: "string",
                      totalLength: "string",
                    },
                  ],
                  clarityAttributes: {},
                  incomeReport: {},
                  machineLearningAttributes: [
                    {
                      modelIndicator: "string",
                      modelType: "string",
                      score: "string",
                      scoreFactors: [
                        {
                          importance: "string",
                          code: "string",
                        },
                      ],
                      scorePercentile: "string",
                      attributes: [
                        {
                          id: "string",
                          value: "string",
                        },
                      ],
                    },
                  ],
                  emails: [
                    {
                      email: "string",
                    },
                  ],
                },
              ],
              arf: {
                arfResponse: "string",
              },
              tty: {
                ttyResponse: "string",
              },
            },
          },
        ],
        gkyc_enquiry: [
          {
            id: "e4c58786-4d11-472d-aabf-c1abc9bf3964",
            status: "CREATED",
            statusColor: "AMBER",
            displayName: "GKYC_ENQUIRY",
            description: "GKYC_ENQUIRY",
            createdAt: "2024-10-28T13:16:52.222Z",
            activityBy: {
              source: "SYSTEM",
            },
            data: {
              finalResult: "Pass",
              transactionId: "2fe0013b-dcc7-479e-91f8-dcfab9b4ba3a",
              requestedVia: "GKYC API v1.0",
              ruleIdExecuted: "AP989441",
              ruleNameExecuted: "TEST QUALIFILE CK001",
              ruleRevisionExecuted: "2",
              htmlSummary:
                'Transaction Details<div class="transaction-details-container"><h1 class="transaction-details-header">Transaction Details</h1><h4 class="transaction-details-subheader" id="status-pass">Overall Status: Pass</h4><h4 class="transaction-details-subheader">Created Date: 10/28/2024 13:16 PM</h4><h4 class="transaction-details-subheader">ID: 2fe0013b-dcc7-479e-91f8-dcfab9b4ba3a</h4><h4 class="transaction-details-subheader">Requested via: GKYC API v1.0</h4><h4 class="transaction-details-subheader">Executed rule: TEST QUALIFILE CK001(AP989441)-Rev.(2)</h4></div><div class="person-container"><h4 class="person-details-header">Name: RICARDO ANDREWS</h4><h4 class="person-details-header">Email: abc@test.com</h4><h4 class="person-details-header">Date of Birth: 12/02/1961</h4><h4 class="person-details-header">Consumer ID: -0QtcvnYg6Z931aLYlMT</h4><h4 class="person-details-header">Address: null</h4></div><div class="step-container"><p class="label" id="step-pass">Step 1 - QualiFile (US) Details - Status: Pass</p><table class="gkyc-table risk-screening risk-screening-results-table-1"><tr>null<th><table class="gkyc-table risk-screening risk-screening-txt-report-table"><tr><th>Text Report</th><th>          <br /><table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr id="TOP"> </tr> <tr> <td class="subheading">Consumer Information (As Entered)</td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="smallerboldleft" width="50%">   RICARDO  ANDREWS</td> <td class="smallerboldleft" width="*%">SSN/ITIN: 666-99-0112</td> </tr> <tr><td class="smallerboldleft" width="50%">   100 TOWNSEND ST</td> <td class="smallerboldleft" width="*%">DOB: 12/02/1961</td> </tr> <tr> <td class="smallerboldleft">   MICHIGAN, MI 48009</td> <td class="smallerboldleft" width="*%"> </td> </tr> <tr> <td class="smallerboldleft" width="50%">   </td> <td class="smallerboldleft" width="*%"> </td> </tr> <tr> <td colspan="2"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"><tr>        <td class="smallerboldleft" width="10%">   Home Phone: </td>        <td class="smallerboldleft" width="*" align="left">(248)203-0001</td> <td width="*"> </td></tr><tr> <td colspan="2"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"><tr> <td class="smallerboldleft" width="13%">   Country:  </td> <td class="smallerboldleft">  USA</td></tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">Account Actions </td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="10%" class="smallerboldleft">   Action:</td> <td width="*" class="smallerleft">ACCEPT</td> <td class="smallerleft"> </td></tr> <tr><td colspan="3"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="25%" class="smallerboldleft">   Recommended Actions:</td> <td width="*" class="smallerleft">OPEN ACCOUNT                  </td></tr> <tr><td width="25%" class="smallerboldleft">   </td> <td width="*" class="smallerleft">TRI-BUREAU ID THEFT           </td></tr> <tr><td width="25%" class="smallerboldleft">   </td> <td width="*" class="smallerleft">ALERT NOT FOUND               </td></tr> </table> <p></p> <p></p> <p></p> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">QualiFile® Detail</td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0">  <tr><td width="45%"> </td><td width="10%" class="smallerboldleft">Code</td><td width="45%" class="smallerboldleft">Text</td></tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="20%" class="smallerboldleft">   QualiFile Score:</td><td width="10%" class="smallerleft">9999</td><td width="13%" class="smallerboldleft">Reasons:</td><td valign="top" width="10%" class="smallerleft"> Z3</td><td valign="top" width="45%" class="smallerleft">INSUFFICIENT DATA FOUND                                     </td></tr> </table><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td colspan="2"> </td></tr>   <tr>  <td align="left" colspan="2"> </td></tr><tr>  <td align="left"></td>  </tr></table> <p></p><table cellspacing="0" cellpadding="0" border="1" width="98%" align="center"> <tr><td class="subheading" width="30%"> Non FCRA</td></tr> <tr><td height="1" bgcolor="#000000"></td></tr> <tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%" align="center"> <tr><td><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="smallerboldleft" width="30%">   Identification Information</td> <td> </td></tr> <tr><td> </td></tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="20%" class="smallerboldleft">      SSN Validation:</td> <td class="smallerleft">SSN AVAILABLE FOR RANDOMIZED ISSUANCE                       SSN:N</td> </tr> </table> <br /></td></tr></table> </td></tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">ChexSystems® History </td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr> <td colspan="4" class="smallerleft">  No Closures Found</td> </tr> <tr> <td colspan="4" class="smallerleft">  No Purchased Debt Found</td> </tr> <tr> <td colspan="4" class="smallerleft">  No Previous Inquiries Found</td></tr> <p></p> </table></th></tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr><td class="subheading">Inquiry ID</td><td> </td></tr><tr><td bgcolor="#000000" height="1" colspan="2"></td>  </tr></table><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="22%" class="smallerleft">  698297926</td><td width="78%" class="value"> </td> </tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr><td class="subheading">Reference Detail</td><td> </td></tr><tr><td bgcolor="#000000" height="1" colspan="2"></td> </tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td align="left" width="22%" class="smallboldleft">   Debit Bureau Reference#:</td><td width="*" class="smallleft">14JS29810430</td></tr><tr><td width="22%" class="smallboldleft">   Transaction Tracking ID: </td> <td width="*" class="smallleft">1730121410233:17218:PDC8RNARDISAP02.FNFIS.COM:</td></tr> </table><table width="99%" height="40"><tbody><tr><td width="82%" class="rightalign"> </td> </tr></tbody></table> <table cellpadding="0" cellspacing="0" width="98%" align="center"> <table width="98%" border="0" cellspacing="0" cellpadding="0"> <tr><td class="rightalign"><a href="#TOP">Back To Top</a></td> </tr><tr><td><table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr>                                     <td width="5"> </td>                                     <td width="5"> </td>                          <td align="left" valign="bottom" class="textsecondary">               <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff"> <tr>                                                                 <td height="10" colspan="2"></td> </tr>                                                         <tr>         <td height="10" colspan="2"></td>                                                         </tr>                                                         <tr>                                                                 <td>                                                                 <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#330066">                                                                         <tr>                                                                                 <td align="left">                                                                                 <table width="100%" cellpadding="3" cellspacing="0" bgcolor="#cccc99" border="0">                                                                                         <tr>                                                                                                 <td bgcolor="#002854" align="center" class="H1White">IMPORTANT                                                                                                 INFORMATION FOR CONSUMER REPORT &amp; IDENTITY VERIFICATION SERVICES</td>                                                                                         </tr>                                                                                         <tr> <td class="textSecondary">This consumer/business data is being furnished in connection with a transaction initiated by the consumer, and / or in accordance with the written instructions of the consumer, to whom the information relates as provided for under the federal Fair Credit Reporting Act (FCRA) or the Gramm Leach Bliley Act (GLBA); or is being used in connection with account review as provided for under the FCRA. The data contained in this report may be viewed or printed for no other purpose.  Information returned in Consumer Report services may not be viewed or printed in connection with making a pre-approved firm offer of credit (prescreen).</td>          </tr>     </table>  </td>                                                                                                                                                  </tr>                                                                </table>                                                                </td>                                                                <td width="3"></td>                                                        </tr>                                                        <tr>                                                                <td height="15"></td>                                                        </tr>                                                </table>                                                </td>                                        </tr>                                </table>                                </td>                        </tr></table></table></th></tr></table>   <table width="100%" height="10"><tbody><tr><td width="82%" class="rightalign"> </td> </tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr style="background-color:#A9A9A9;font-size:10.0pt;padding-top:.15cm">  <td><span></span> <span style="color:white;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif">           Copyright © 2022 FIS and/or its subsidiaries. All Rights Reserved.</span></td> <td><span><a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica ,sans-serif" href="https://production.penleyinc.com/penley/jsp/secure/sitecontent/practices.html" target="_blank"><span style="color:white">Data Practices      </span></a>  <a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif" href="http://www.fisglobal.com/privacystatement" target="_blank"><span style="color:white">Privacy Policy      </span></a>  <a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif" href="http://www.fisglobal.com/termsofuse" target="_blank"><span style="color:white">Terms of Use</span>            </a></span></td> </tr></table> </div><br />',
              riskScreeningResponse: [
                {
                  product: "Risk_Screening",
                  result: "Pass",
                  order: 1,
                  stepSequence: 1,
                  accountAcceptanceText: "ACCEPT",
                  qualifileScore: "9999",
                  reasonCode: "Z3",
                  reasonText:
                    "INSUFFICIENT DATA FOUND                                     ",
                  creditBureauId: "",
                  txtReport:
                    '          <br /><table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr id="TOP"> </tr> <tr> <td class="subheading">Consumer Information (As Entered)</td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="smallerboldleft" width="50%">   RICARDO  ANDREWS</td> <td class="smallerboldleft" width="*%">SSN/ITIN: 666-99-0112</td> </tr> <tr><td class="smallerboldleft" width="50%">   100 TOWNSEND ST</td> <td class="smallerboldleft" width="*%">DOB: 12/02/1961</td> </tr> <tr> <td class="smallerboldleft">   MICHIGAN, MI 48009</td> <td class="smallerboldleft" width="*%"> </td> </tr> <tr> <td class="smallerboldleft" width="50%">   </td> <td class="smallerboldleft" width="*%"> </td> </tr> <tr> <td colspan="2"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"><tr>        <td class="smallerboldleft" width="10%">   Home Phone: </td>        <td class="smallerboldleft" width="*" align="left">(248)203-0001</td> <td width="*"> </td></tr><tr> <td colspan="2"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"><tr> <td class="smallerboldleft" width="13%">   Country:  </td> <td class="smallerboldleft">  USA</td></tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">Account Actions </td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="10%" class="smallerboldleft">   Action:</td> <td width="*" class="smallerleft">ACCEPT</td> <td class="smallerleft"> </td></tr> <tr><td colspan="3"> </td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="25%" class="smallerboldleft">   Recommended Actions:</td> <td width="*" class="smallerleft">OPEN ACCOUNT                  </td></tr> <tr><td width="25%" class="smallerboldleft">   </td> <td width="*" class="smallerleft">TRI-BUREAU ID THEFT           </td></tr> <tr><td width="25%" class="smallerboldleft">   </td> <td width="*" class="smallerleft">ALERT NOT FOUND               </td></tr> </table> <p></p> <p></p> <p></p> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">QualiFile® Detail</td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0">  <tr><td width="45%"> </td><td width="10%" class="smallerboldleft">Code</td><td width="45%" class="smallerboldleft">Text</td></tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="20%" class="smallerboldleft">   QualiFile Score:</td><td width="10%" class="smallerleft">9999</td><td width="13%" class="smallerboldleft">Reasons:</td><td valign="top" width="10%" class="smallerleft"> Z3</td><td valign="top" width="45%" class="smallerleft">INSUFFICIENT DATA FOUND                                     </td></tr> </table><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td colspan="2"> </td></tr>   <tr>  <td align="left" colspan="2"> </td></tr><tr>  <td align="left"></td>  </tr></table> <p></p><table cellspacing="0" cellpadding="0" border="1" width="98%" align="center"> <tr><td class="subheading" width="30%"> Non FCRA</td></tr> <tr><td height="1" bgcolor="#000000"></td></tr> <tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%" align="center"> <tr><td><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="smallerboldleft" width="30%">   Identification Information</td> <td> </td></tr> <tr><td> </td></tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="20%" class="smallerboldleft">      SSN Validation:</td> <td class="smallerleft">SSN AVAILABLE FOR RANDOMIZED ISSUANCE                       SSN:N</td> </tr> </table> <br /></td></tr></table> </td></tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr> <tr> <td class="subheading">ChexSystems® History </td> <td> </td></tr> <tr><td bgcolor="#000000" height="1" colspan="2"></td></tr> </table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr> <td colspan="4" class="smallerleft">  No Closures Found</td> </tr> <tr> <td colspan="4" class="smallerleft">  No Purchased Debt Found</td> </tr> <tr> <td colspan="4" class="smallerleft">  No Previous Inquiries Found</td></tr> <p></p> </table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr><td class="subheading">Inquiry ID</td><td> </td></tr><tr><td bgcolor="#000000" height="1" colspan="2"></td>  </tr></table><table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td width="22%" class="smallerleft">  698297926</td><td width="78%" class="value"> </td> </tr></table> <table align="center" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr> </tr><tr><td class="subheading">Reference Detail</td><td> </td></tr><tr><td bgcolor="#000000" height="1" colspan="2"></td> </tr></table> <table align="center" class="gray" width="98%" border="0" cellpadding="0" cellspacing="0"> <tr><td align="left" width="22%" class="smallboldleft">   Debit Bureau Reference#:</td><td width="*" class="smallleft">14JS29810430</td></tr><tr><td width="22%" class="smallboldleft">   Transaction Tracking ID: </td> <td width="*" class="smallleft">1730121410233:17218:PDC8RNARDISAP02.FNFIS.COM:</td></tr> </table><table width="99%" height="40"><tbody><tr><td width="82%" class="rightalign"> </td> </tr></tbody></table> <table cellpadding="0" cellspacing="0" width="98%" align="center"> <table width="98%" border="0" cellspacing="0" cellpadding="0"> <tr><td class="rightalign"><a href="#TOP">Back To Top</a></td> </tr><tr><td><table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr>                                     <td width="5"> </td>                                     <td width="5"> </td>                          <td align="left" valign="bottom" class="textsecondary">               <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff"> <tr>                                                                 <td height="10" colspan="2"></td> </tr>                                                         <tr>         <td height="10" colspan="2"></td>                                                         </tr>                                                         <tr>                                                                 <td>                                                                 <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#330066">                                                                         <tr>                                                                                 <td align="left">                                                                                 <table width="100%" cellpadding="3" cellspacing="0" bgcolor="#cccc99" border="0">                                                                                         <tr>                                                                                                 <td bgcolor="#002854" align="center" class="H1White">IMPORTANT                                                                                                 INFORMATION FOR CONSUMER REPORT &amp; IDENTITY VERIFICATION SERVICES</td>                                                                                         </tr>                                                                                         <tr> <td class="textSecondary">This consumer/business data is being furnished in connection with a transaction initiated by the consumer, and / or in accordance with the written instructions of the consumer, to whom the information relates as provided for under the federal Fair Credit Reporting Act (FCRA) or the Gramm Leach Bliley Act (GLBA); or is being used in connection with account review as provided for under the FCRA. The data contained in this report may be viewed or printed for no other purpose.  Information returned in Consumer Report services may not be viewed or printed in connection with making a pre-approved firm offer of credit (prescreen).</td>          </tr>     </table>  </td>                                                                                                                                                  </tr>                                                                </table>                                                                </td>                                                                <td width="3"></td>                                                        </tr>                                                        <tr>                                                                <td height="15"></td>                                                        </tr>                                                </table>                                                </td>                                        </tr>                                </table>                                </td>                        </tr></table></table>   <table width="100%" height="10"><tbody><tr><td width="82%" class="rightalign"> </td> </tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr style="background-color:#A9A9A9;font-size:10.0pt;padding-top:.15cm">  <td><span></span> <span style="color:white;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif">           Copyright © 2022 FIS and/or its subsidiaries. All Rights Reserved.</span></td> <td><span><a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica ,sans-serif" href="https://production.penleyinc.com/penley/jsp/secure/sitecontent/practices.html" target="_blank"><span style="color:white">Data Practices      </span></a>  <a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif" href="http://www.fisglobal.com/privacystatement" target="_blank"><span style="color:white">Privacy Policy      </span></a>  <a style="text-decoration:none;font-size:10.0pt;font-family:Arial, Helvetica, sans-serif" href="http://www.fisglobal.com/termsofuse" target="_blank"><span style="color:white">Terms of Use</span>            </a></span></td> </tr></table> ',
                },
              ],
              actionResults: [],
            },
          },
        ],
      },
    },
  ],
};
