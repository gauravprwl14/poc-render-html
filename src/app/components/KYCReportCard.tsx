// @ts-nocheck

"use client";

import { useState } from "react";
import { VerificationTable } from "./VerificationTable";
import { getStatusColor, getDisplayName, formatDate } from "./utils/kycUtils";
import type {
  KYCReportCardProps,
  VerificationSectionProps,
  Verification,
} from "./types/KYCReportTypes";
import { displayConfig } from "../lib/KYCReports/types/displayConfig";
import ts from "typescript";

export default function KYCReportCard({
  kycReport,
  checkType,
}: KYCReportCardProps) {
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const getVerificationConfig = (verificationType: string) => {
    const configKey = verificationType;
    return (
      displayConfig as Record<string, typeof displayConfig.tinVerification>
    )[configKey];
  };

  const renderVerificationItem = (
    verification: Verification,
    config: typeof displayConfig.tinVerification
  ) => {
    const isExpanded = expandedSections[verification.id];
    const attributes = verification.data.attributes as Record<string, unknown>;

    const getDateDisplay = () => {
      if (!config.displayDate) return null;

      return (
        <div className="text-sm text-gray-500">
          {attributes.completed_at && (
            <div>
              Completed: {formatDate(attributes.completed_at as string)}
            </div>
          )}
          {attributes.submitted_at && (
            <div>
              Submitted: {formatDate(attributes.submitted_at as string)}
            </div>
          )}
          {attributes["created-at"] && (
            <div>Created: {formatDate(attributes["created-at"] as string)}</div>
          )}
        </div>
      );
    };

    return (
      <div
        key={verification.id}
        className="border rounded-lg mb-4 overflow-hidden"
      >
        {/* Verification header */}
        <div
          className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          onClick={() =>
            setExpandedSections((prev) => ({
              ...prev,
              [verification.id]: !prev[verification.id],
            }))
          }
        >
          <div
            className={`w-2 h-2 rounded-full ${
              getStatusColor(verification.status).dot
            }`}
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <span className="font-medium">{config.displayName}</span>
              {getDateDisplay()}
            </div>
          </div>
          {/* Expand/collapse button */}
          <button
            className={`transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="p-4 border-t">
            <VerificationTable verification={verification} config={config} />
          </div>
        )}
      </div>
    );
  };

  const renderSection = ({
    title,
    verifications,
    config,
    key,
  }: VerificationSectionProps) => {
    if (!verifications?.length) return null;

    return (
      <div className="mb-6" key={key}>
        <h3 className="text-lg font-semibold mb-4 px-4">{title}</h3>
        <div className="space-y-4">
          {verifications.map((v) => renderVerificationItem(v, config))}
        </div>
      </div>
    );
  };

  const currentCheck = kycReport.checks[checkType];
  if (!currentCheck) {
    return (
      <div className="border-2 rounded-lg shadow-sm border-gray-200 bg-gray-50 p-4">
        <div className="text-gray-500">
          No data available for {getDisplayName(checkType)}
        </div>
      </div>
    );
  }

  const colors = getStatusColor(currentCheck.status);

  return (
    <div
      className={`border-2 rounded-lg shadow-sm ${colors.border} ${colors.bg}`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsMainExpanded(!isMainExpanded)}
      >
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
            <h2 className="text-xl font-semibold">
              {getDisplayName(checkType)}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className={`text-sm ${colors.text}`}>
              {currentCheck.message}
            </span>

            <div className="flex gap-3 ml-auto">
              {Object.entries(currentCheck.checks).map(([key, checks]) => {
                const config = getVerificationConfig(key);
                return (
                  <div key={key} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        getStatusColor(checks[0]?.status || "FAILED").dot
                      }`}
                    />
                    <span className="text-xs text-gray-600">
                      {getDisplayName(key, config)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <button className="text-blue-500 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className={`transform transition-transform duration-200 ${
              isMainExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isMainExpanded ? "max-h-[5000px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-gray-200 bg-white rounded-b-lg p-4">
          {Object.entries(currentCheck.checks).map(([key, verifications]) => {
            const config = getVerificationConfig(key);
            return renderSection({
              title: getDisplayName(key, config),
              verifications,
              key,
              config: config ?? {
                displayName: getDisplayName(key),
                displayData: [],
                displayDate: false,
              },
            });
          })}
        </div>
      </div>
    </div>
  );
}
