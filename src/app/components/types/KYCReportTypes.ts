export interface VerificationData {
  type: string;
  id: string;
  attributes: VerificationAttributes;
  relationships: Record<string, unknown>;
  display: {
    summary: string;
    detailed: string;
  };
}

export interface VerificationAttributes extends Record<string, unknown> {
  checks?: VerificationCheck[];
  "created-at"?: string;
  submitted_at?: string;
  completed_at?: string;
}

export interface VerificationCheck {
  name: string;
  status: string;
  requirement: string;
}

export interface Verification {
  id: string;
  status: string;
  statusColor: string;
  displayName: string;
  description: string;
  data: VerificationData;
}

export interface Check {
  checks: Record<string, Verification[]>;
  status: string;
  message: string;
}

export interface KYCReport {
  naoUserId: string;
  checks: Record<string, Check>;
  status: string;
}

export interface KYCReportCardProps {
  kycReport: KYCReport;
  checkType: string;
}

export interface VerificationSectionProps {
  title: string;
  key: string;
  verifications: Verification[];
  config: typeof displayConfig.tinVerification;
} 