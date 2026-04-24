// Member entity/model for Membership & KYC Module
import { KycDocument, MemberCategory, MemberStatus, MemberLifecycleAction, Beneficiary, CustomField } from './types';

export interface Member {
  id: string;
  cooperativeId: string;
  memberNumber: string;
  pin: string;
  fullName: string;
  gender?: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  phoneNumbers: string[];
  email?: string;
  address?: string;
  state?: string;
  lga?: string;
  branchId?: string;
  unit?: string;
  department?: string;
  occupation?: string;
  employer?: string;
  salary?: number;
  nextOfKin?: Beneficiary;
  beneficiaries?: Beneficiary[];
  emergencyContact?: string;
  accountPreferences?: Record<string, any>;
  customFields?: CustomField[];
  category: MemberCategory;
  status: MemberStatus;
  kycStatus: 'Pending' | 'Verified' | 'Queried';
  kycDocuments: KycDocument[];
  joinedAt: string;
  exitedAt?: string;
  lifecycleHistory: MemberLifecycleAction[];
  createdAt: string;
  updatedAt: string;
}
