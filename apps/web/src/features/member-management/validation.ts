// UI validation for Membership & KYC Module
import { validateMember } from '@cacsms/validations/members/member.validation';
import { Member } from '@cacsms/types/members';

export function validateMemberForm(member: Partial<Member>): string[] {
  return validateMember(member);
}
