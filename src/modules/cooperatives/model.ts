// Data models for Cooperative Registration and Setup

export interface Cooperative {
  id: string;
  name: string;
  shortName?: string;
  registrationNumber?: string;
  category: string;
  yearEstablished?: number;
  dateOfRegistration?: string;
  state: string;
  lga: string;
  address: string;
  mailingAddress?: string;
  branches?: Branch[];
  email: string;
  phoneNumbers: string[];
  logoUrl?: string;
  sealUrl?: string;
  website?: string;
  taxId?: string;
  customFields?: Record<string, any>;
  documents: CooperativeDocument[];
  status: CooperativeStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  lga: string;
  state: string;
}

export interface CooperativeDocument {
  id: string;
  type: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

export type CooperativeStatus =
  | 'draft'
  | 'submitted'
  | 'under_review'
  | 'queried'
  | 'approved'
  | 'rejected'
  | 'suspended'
  | 'inactive'
  | 'active';
