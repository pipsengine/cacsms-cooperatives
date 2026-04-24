// Types for Membership & KYC Module
export type MemberCategory =
  | 'Regular Member'
  | 'Executive Member'
  | 'Associate Member'
  | 'Staff Member'
  | 'Junior Member'
  | 'Honorary Member'
  | 'Investor Member'
  | 'Branch Officer'
  | 'Committee Member'
  | 'Other';

export type MemberStatus =
  | 'Draft'
  | 'Pending Verification'
  | 'Pending Approval'
  | 'Approved'
  | 'Active'
  | 'Suspended'
  | 'Inactive'
  | 'Withdrawn'
  | 'Deceased'
  | 'Retired'
  | 'Expelled'
  | 'Archived';

export interface KycDocument {
  id: string;
  memberId: string;
  type: string;
  fileUrl: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  expiryDate?: string;
  required: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
  uploadedAt: string;
  updatedAt: string;
}

export interface Beneficiary {
  name: string;
  relationship: string;
  contact: string;
  share?: number;
}

export interface CustomField {
  key: string;
  value: string;
  label?: string;
}

export interface MemberLifecycleAction {
  action: 'Onboard' | 'Suspend' | 'Reinstate' | 'Withdraw' | 'Retire' | 'Deceased' | 'Expel' | 'Archive';
  reason?: string;
  effectiveDate: string;
  performedBy: string;
  createdAt: string;
}
