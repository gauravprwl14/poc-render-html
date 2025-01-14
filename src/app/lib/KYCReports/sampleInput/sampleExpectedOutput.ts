export const expectedResponseStructure = {
  data: [
    {
      naoUserId: "nao_123456",
      checks: {
        kycCheck: {
          status: "Failed",
          message: "KYC report generated successfully",
          checks: {
            governmentId: [
              {
                id: "dfc50fc5-c170-429d-994b-2565f357ec24",
                status: "PASSED",
                statusColor: "GREEN",
                externalVerificationId:
                  "persona:inq_5duDpJPKSDwei9W5EzE6SkpN6aPi",
                displayName: "Government Id verification",
                description: "Government Id verification",
                createdAt: "2024-10-30T14:57:38.627Z",
                activityBy: {
                  source: "NAO_WEB",
                  identifier: "Wjxqf1w4O48Fj1T8rikc",
                },
                data: {
                  type: "verification/government-id",
                  id: "ver_ZTTgPabR2RX1ffn3BsVJ8oLouXJG",
                  attributes: {
                    status: "passed",
                    "created-at": "2024-10-30T14:58:05.000Z",
                    "created-at-ts": 1730300285,
                    "submitted-at": "2024-10-30T14:58:05.000Z",
                    "submitted-at-ts": 1730300285,
                    "completed-at": "2024-10-30T14:58:08.000Z",
                    "completed-at-ts": 1730300288,
                    "country-code": "US",
                    "entity-confidence-score": 100,
                    "entity-confidence-reasons": ["generic"],
                    "front-photo-url":
                      "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvZ2V4aHh4YjBmcGgwc2R0YXExMzhmZGxtdzJjIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjU5ZTVmYzdkLTc4YWUtNGVmYi04YTkyLTVjYjhjZGU3YzdiNyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMwNzAzOTA5fQ.OaJrCYFhG0Lfj43cwc6Ij8VMRCcJ7pX-2FTW4LLdLeA",
                    "back-photo-url":
                      "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZHdoZng4cTRiYWhlbWtyMW9oNXU0OWExeDJwIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6Ijk3NjEzZGNkLWQzMjctNDRiNC05YjQyLWZkNDk4NzhhNDhlNCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMwNzAzOTA5fQ.GNHNSl2q3kIfm21UKG7qh4CGF5xfP5gJ-7oT6PJa2xY",
                    "photo-urls": [
                      {
                        page: "front",
                        url: "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvZ2V4aHh4YjBmcGgwc2R0YXExMzhmZGxtdzJjIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6ImU3MWUyMWJkLTg5MjItNGRlNC1hNmMyLWU0OTgyZTAxYjgzZiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMwNzAzOTA5fQ.FgA_h0SOEhoWRLCQIsVTNNkfFIkqptdJHpMz9V0OLSY",
                        "normalized-url":
                          "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2aHRvOHl0NGgxZHI2Nzd6MXphc2t4dGEwMGMzIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjlhYTAzYmZhLTkwYTQtNGI2ZC1hYWEwLTY1MTBiNDU2ZmQ3MyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTczMDcwMzkwOX0.9RBmF7-ZYMFDIWU8YVnalhg2CeG0BGvHuV5vOQWTJWg",
                        "original-urls": [
                          "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcWNzNDJrbjd6enhpbWdoeXMxb2MzY2c1czd5IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjdiOTQ4ZjUwLTY0YTktNDNhNC04ZjRlLTRiMGUwZDIxNDJiMyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzMwNzAzOTA5fQ.PrqwSBwxTcYl10MgtUQzftwuSVTWJ81hk6OqhGobXoE",
                        ],
                        "byte-size": 186106,
                      },
                      {
                        page: "back",
                        url: "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZHdoZng4cTRiYWhlbWtyMW9oNXU0OWExeDJwIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6ImNiM2EzMTJiLWVlYTAtNDYyYi05M2IyLWI5YWZjMDJjNmI4OSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoicHJvY2Vzc2VkIiwiZXhwIjoxNzMwNzAzOTA5fQ.dzsDO6ukWh1luZdVv0WUpSnqhf3bH5xKXG_2-d33KuQ",
                        "normalized-url":
                          "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydzczYzMxcWhwcjQycnloM3NuODRmbHR2Mm43IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6ImRiZjI5MWNjLTY2NzYtNDYwMy04YjkzLTFkY2QwZDZlMmI1NSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoibm9ybWFsaXplZCIsImV4cCI6MTczMDcwMzkwOX0.y3QoDJF4Y77s3QWsoQDBosuTuYIENiW4NdX0qBUN34o",
                        "original-urls": [
                          "https://files.withpersona.com/Screenshot+2024-10-17+at+3.59.22%E2%80%AFPM.png?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJldW41aGZienYzd2NzMnRtNWF0M2xncXJ0cTB0IiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjMyZDY2NmM3LTBkZTUtNDY2Mi1iMDI5LWQzNzk2NGRmZjkwOCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoib3JpZ2luYWxzIiwiZXhwIjoxNzMwNzAzOTA5fQ.hKwDzPbJZm1E-YnigGYauYUF1y54_JgDCIQbBAtJD30",
                        ],
                        "byte-size": 186106,
                      },
                    ],
                    "selfie-photo": {
                      url: "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4ejd2M2h4YWdlZXFtMjk2NXhjZG9lcHk3N2VxIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjIxN2YyMjYzLTY4MjgtNDAyNC1hYjM4LTRhMjA3OGJkYjhhYSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzMwNzAzOTA5fQ.jHbrHeCEbnJPAU7Xx0cHaMCsFzJiiY9zVL-LY3o4psQ",
                      "byte-size": 186106,
                    },
                    "selfie-photo-url":
                      "https://files.withpersona.com/selfie_photo.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4ejd2M2h4YWdlZXFtMjk2NXhjZG9lcHk3N2VxIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzA5LCJuYmYiOjE3MzA2ODIzMDksImp0aSI6IjM0NGVjMjgwLWNlM2QtNDZkMS1hMGI4LTcxNDI0NzZiNWQ4NCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJnb3Zlcm5tZW50X2lkX2ZpbGVzIiwiZmlsZV9pbmZvIjoic2VsZmllX3Bob3RvIiwiZXhwIjoxNzMwNzAzOTA5fQ.A8wJTxUQ-__11LFp7Mi8aji_tWAuljg6rsOKOXu1pWM",
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
                    "issue-date": "2023-10-30",
                    "expiration-date": "2029-10-30",
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
                        id: "inq_5duDpJPKSDwei9W5EzE6SkpN6aPi",
                      },
                    },
                    template: {
                      data: null,
                    },
                    "inquiry-template-version": {
                      data: {
                        type: "inquiry-template-version",
                        id: "itmplv_SF6jUwzNToDqqYsvSVAUo9XrpVkm",
                      },
                    },
                    "inquiry-template": {
                      data: {
                        type: "inquiry-template",
                        id: "itmpl_BZX6a7erzVVCJZrbJF4DU5khXg6R",
                      },
                    },
                    "verification-template": {
                      data: {
                        type: "verification-template/government-id",
                        id: "vtmpl_yV8JN1c7fUFPMEaQkaaFudizd4qa",
                      },
                    },
                    "verification-template-version": {
                      data: {
                        type: "verification-template-version/government-id",
                        id: "vtmplv_PBNbuBxm1eGPpf67ok6VZeQszzHK",
                      },
                    },
                    transaction: {
                      data: null,
                    },
                    document: {
                      data: {
                        type: "document/government-id",
                        id: "doc_LBq2WGMU1zcmSBf7GxiXk6fdUWbS",
                      },
                    },
                  },
                  display: {
                    summary:
                      "<html><body><div>Summary Of Goverment ID</div></></div></body></html>",
                    detailed:
                      "<html><body><div>Detailed summary Of Goverment ID</div></></div></body></html>",
                  },
                },
              },
            ],
            selfieVerification: [
              {
                id: "d84e10bc-7bcf-4b87-99ef-409eba85c067",
                status: "PASSED",
                statusColor: "GREEN",
                externalVerificationId:
                  "persona:inq_vQ8Lmqf5Wyi8XCEwDz6b4U4uLqWa",
                displayName: "Selfie verification",
                description: "Selfie verification",
                createdAt: "2024-10-30T15:00:39.931Z",
                activityBy: {
                  source: "NAO_WEB",
                  identifier: "7gBvfF4vVT2C4eQ8uToA",
                },
                data: {
                  type: "verification/selfie",
                  id: "ver_rNB6bfWMVdvBHXUAtspkDyb1sGtF",
                  attributes: {
                    status: "passed",
                    "created-at": "2024-10-30T15:01:25.000Z",
                    "created-at-ts": 1730300485,
                    "submitted-at": "2024-10-30T15:01:26.000Z",
                    "submitted-at-ts": 1730300486,
                    "completed-at": "2024-10-30T15:01:27.000Z",
                    "completed-at-ts": 1730300487,
                    "country-code": null,
                    "left-photo-url":
                      "https://files.withpersona.com/selfiefile%2Fimage%2F15087099295%2Fshrine_processed%2F8a1e9654151b7fa3c8a4a2353955f669.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk1L3NocmluZV9wcm9jZXNzZWQvOGExZTk2NTQxNTFiN2ZhM2M4YTRhMjM1Mzk1NWY2NjkuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6ImYxNWU5NDUwLTYwZGMtNGFkMC1iNzY2LWZjMjRmOGQ4N2JjZCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTUvc2hyaW5lX3Byb2Nlc3NlZC84YTFlOTY1NDE1MWI3ZmEzYzhhNGEyMzUzOTU1ZjY2OS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.ub1c_u-R-EAQ074RIjwQTMOEdEw2hcU1Sdua7xwwvJ4",
                    "center-photo-url":
                      "https://files.withpersona.com/selfiefile%2Fimage%2F15087099294%2Fshrine_processed%2Fdbc39cd5159194e5bd3973239a2f45b9.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk0L3NocmluZV9wcm9jZXNzZWQvZGJjMzljZDUxNTkxOTRlNWJkMzk3MzIzOWEyZjQ1YjkuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6IjVhNzcxNTkxLTNmZjEtNGMxMS1hMjBkLWYwNDQ2ODI4YjI4MyIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTQvc2hyaW5lX3Byb2Nlc3NlZC9kYmMzOWNkNTE1OTE5NGU1YmQzOTczMjM5YTJmNDViOS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.ZMKqR4V3wwKhQVMs8TuaAr7oIiJciI03lgN4EhSklo0",
                    "right-photo-url":
                      "https://files.withpersona.com/selfiefile%2Fimage%2F15087099296%2Fshrine_processed%2F7edc8da5ab0b01b81812fb4bec976fc1.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk2L3NocmluZV9wcm9jZXNzZWQvN2VkYzhkYTVhYjBiMDFiODE4MTJmYjRiZWM5NzZmYzEuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6IjA3NWVkZDcwLTAxZTEtNDYyYy1iYjQzLTgxOGQyOTRjN2YzOCIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTYvc2hyaW5lX3Byb2Nlc3NlZC83ZWRjOGRhNWFiMGIwMWI4MTgxMmZiNGJlYzk3NmZjMS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.KvQlJbj8ZIgpcCKyTnaphuk69ertfr8al64hjIVQYeQ",
                    "photo-urls": [
                      {
                        page: "left_photo",
                        url: "https://files.withpersona.com/selfiefile%2Fimage%2F15087099295%2Fshrine_processed%2F8a1e9654151b7fa3c8a4a2353955f669.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk1L3NocmluZV9wcm9jZXNzZWQvOGExZTk2NTQxNTFiN2ZhM2M4YTRhMjM1Mzk1NWY2NjkuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6ImZmYmJhMzc5LWE3MWMtNGU2MC05NDAwLWE2ZWVlNzdhNWJiNSIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTUvc2hyaW5lX3Byb2Nlc3NlZC84YTFlOTY1NDE1MWI3ZmEzYzhhNGEyMzUzOTU1ZjY2OS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.mI4Sf_AlReIVmgKfsfRvSbovvC_0lC1JWeFWWgY2ZBY",
                        "byte-size": 255620,
                      },
                      {
                        page: "center_photo",
                        url: "https://files.withpersona.com/selfiefile%2Fimage%2F15087099294%2Fshrine_processed%2Fdbc39cd5159194e5bd3973239a2f45b9.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk0L3NocmluZV9wcm9jZXNzZWQvZGJjMzljZDUxNTkxOTRlNWJkMzk3MzIzOWEyZjQ1YjkuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6ImNjOWM3ZjNmLTllMmQtNDUxOS1iYWU5LTg5N2JhNDJiNmE5ZiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTQvc2hyaW5lX3Byb2Nlc3NlZC9kYmMzOWNkNTE1OTE5NGU1YmQzOTczMjM5YTJmNDViOS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.77Z2Jl67bwG7J9sPSEVeCvAzVUkVgCmDTk5NSsWEBG8",
                        "byte-size": 252411,
                      },
                      {
                        page: "right_photo",
                        url: "https://files.withpersona.com/selfiefile%2Fimage%2F15087099296%2Fshrine_processed%2F7edc8da5ab0b01b81812fb4bec976fc1.jpg?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZWxmaWVmaWxlL2ltYWdlLzE1MDg3MDk5Mjk2L3NocmluZV9wcm9jZXNzZWQvN2VkYzhkYTVhYjBiMDFiODE4MTJmYjRiZWM5NzZmYzEuanBnIiwiYXVkIjoiZmlsZXMud2l0aHBlcnNvbmEuY29tIiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNzMwNjgyMzE4LCJuYmYiOjE3MzA2ODIzMTgsImp0aSI6IjJhYzE4YzJmLTQ3NTctNDFlYy1hOWRkLWE3YzA1YzBkYTdlMiIsImdjc19idWNrZXQiOiJwZXJzb25hLXdlYiIsImZpbGVfZW5jcnlwdGVkIjp0cnVlLCJmaWxlX3NhbHQiOiJTaHJpbmU6OlVwbG9hZGVkRmlsZSIsImZpbGVfaW5mbyI6InNlbGZpZWZpbGUvaW1hZ2UvMTUwODcwOTkyOTYvc2hyaW5lX3Byb2Nlc3NlZC83ZWRjOGRhNWFiMGIwMWI4MTgxMmZiNGJlYzk3NmZjMS5qcGciLCJleHAiOjE3MzA3MDM5MTh9.UQ4ZpSp8KsV6DjNQ1SXQnnxnL3mWXoOoJdQRfUWIy4Q",
                        "byte-size": 251957,
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
                        id: "inq_vQ8Lmqf5Wyi8XCEwDz6b4U4uLqWa",
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
      },
    },
  ],
};
