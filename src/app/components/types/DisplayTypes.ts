export type DisplayFieldType = 'string' | 'date' | 'array' | 'object' | 'status' | 'table' | 'object-array';

export interface DisplayField {
  key: string;
  displayName: string;
  type: DisplayFieldType;
  component?: string;
  properties?: DisplayField[];
  format?: string;
  nestedConfig?: {
    type: DisplayFieldType;
    fields?: DisplayField[];
  };
}

export interface DisplayConfig {
  displayName: string;
  displayData: DisplayField[];
  displayDate?: boolean;
} 