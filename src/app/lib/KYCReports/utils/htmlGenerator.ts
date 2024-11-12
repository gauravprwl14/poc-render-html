// @ts-ignore
// @ts-nocheck

export function generateReportHTML(reports: any[]): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>KYC Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
          }
          .report-container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .report-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          .status-badge {
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 14px;
            font-weight: bold;
          }
          .status-passed {
            background-color: #dcfce7;
            color: #166534;
          }
          .status-failed {
            background-color: #fee2e2;
            color: #991b1b;
          }
          .check-section {
            border-top: 1px solid #eee;
            padding-top: 15px;
            margin-top: 15px;
          }
          .check-item {
            background-color: #f9fafb;
            padding: 10px;
            margin: 5px 0;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="report-container">
          ${reports
            .map(
              (report) => `
            <div class="report-card">
              <div class="header">
                <h2>User ID: ${report.naoUserId}</h2>
                <span class="status-badge ${
                  report.status === "PASSED" ? "status-passed" : "status-failed"
                }">
                  ${report.status}
                </span>
              </div>
              
              ${Object.entries(report.checks)
                .map(
                  ([reportName, checkReport]) => `
                <div class="check-section">
                  <h3>${reportName}</h3>
                  <div>
                    <p>Status: ${checkReport.status}</p>
                    ${checkReport.messages
                      .map(
                        (message) => `
                      <p>${message}</p>
                    `
                      )
                      .join("")}
                    
                    ${checkReport.checks
                      .map(
                        (check) => `
                      <div class="check-item">
                        <h4>${check.displayName}</h4>
                        ${check.display.summary}
                        <details>
                          <summary>View Details</summary>
                          ${check.display.detailed}
                        </details>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
            )
            .join("")}
        </div>
      </body>
    </html>
  `;
}
