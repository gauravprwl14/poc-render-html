type ReportStatus = 'pending' | 'ready' | 'errored';

export type ReportAttributes = {
  status: ReportStatus;
  created_at: string;
  completed_at: string;
  redacted_at: string | null;
  report_template_version_name: string;
  has_match: boolean;
  is_continuous: boolean;
  is_recurring: boolean;
  tags: string[];
};
