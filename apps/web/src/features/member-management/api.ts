// API hooks for Membership & KYC Module
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as sdk from '@cacsms/sdk/members';
import { Member, KycDocument } from '@cacsms/types/members';

export function useMembers() {
  return useQuery<Member[]>(['members'], sdk.fetchMembers);
}

export function useMember(id: string) {
  return useQuery<Member>(['member', id], () => sdk.fetchMemberById(id), { enabled: !!id });
}

export function useCreateMember() {
  const queryClient = useQueryClient();
  return useMutation(sdk.createMember, {
    onSuccess: () => queryClient.invalidateQueries(['members'])
  });
}

export function useUpdateMember() {
  const queryClient = useQueryClient();
  return useMutation(({ id, updates }: { id: string, updates: Partial<Member> }) => sdk.updateMember(id, updates), {
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries(['member', id]);
      queryClient.invalidateQueries(['members']);
    }
  });
}

export function useChangeMemberStatus() {
  const queryClient = useQueryClient();
  return useMutation(({ id, status, action, reason, effectiveDate, performedBy }: any) => sdk.changeMemberStatus(id, status, action, reason, effectiveDate, performedBy), {
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries(['member', id]);
      queryClient.invalidateQueries(['members']);
    }
  });
}

export function useKycDocuments(memberId: string) {
  return useQuery<KycDocument[]>(['kyc-documents', memberId], () => sdk.fetchKycDocuments(memberId), { enabled: !!memberId });
}

export function useUploadKycDocument() {
  const queryClient = useQueryClient();
  return useMutation(sdk.uploadKycDocument, {
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries(['kyc-documents', variables.memberId]);
    }
  });
}

export function useUpdateKycDocumentStatus() {
  const queryClient = useQueryClient();
  return useMutation(({ docId, status, verifiedBy }: any) => sdk.updateKycDocumentStatus(docId, status, verifiedBy), {
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries(['kyc-documents', variables.memberId]);
    }
  });
}
