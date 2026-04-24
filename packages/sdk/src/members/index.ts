// SDK for Membership & KYC Module
import axios from 'axios';
import { Member, KycDocument } from '@cacsms/types/members';

const API_BASE = '/api/members';

export const fetchMembers = async (): Promise<Member[]> => {
  const { data } = await axios.get(API_BASE);
  return data;
};

export const fetchMemberById = async (id: string): Promise<Member> => {
  const { data } = await axios.get(`${API_BASE}/${id}`);
  return data;
};

export const createMember = async (member: Partial<Member>): Promise<Member> => {
  const { data } = await axios.post(API_BASE, member);
  return data;
};

export const updateMember = async (id: string, updates: Partial<Member>): Promise<Member> => {
  const { data } = await axios.put(`${API_BASE}/${id}`, updates);
  return data;
};

export const changeMemberStatus = async (id: string, status: string, action: string, reason: string, effectiveDate: string, performedBy: string): Promise<Member> => {
  const { data } = await axios.patch(`${API_BASE}/${id}/status`, { status, action, reason, effectiveDate, performedBy });
  return data;
};

export const fetchKycDocuments = async (memberId: string): Promise<KycDocument[]> => {
  const { data } = await axios.get(`${API_BASE}/kyc/${memberId}`);
  return data;
};

export const uploadKycDocument = async (doc: Partial<KycDocument>): Promise<KycDocument> => {
  const { data } = await axios.post(`${API_BASE}/kyc`, doc);
  return data;
};

export const updateKycDocumentStatus = async (docId: string, status: string, verifiedBy: string): Promise<KycDocument> => {
  const { data } = await axios.patch(`${API_BASE}/kyc/${docId}/status`, { status, verifiedBy });
  return data;
};
