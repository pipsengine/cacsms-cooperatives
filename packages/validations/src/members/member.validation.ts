// Validation rules for Membership & KYC Module
import { Member } from '@cacsms/types/members';

export function validateMember(member: Partial<Member>): string[] {
  const errors: string[] = [];
  if (!member.fullName || member.fullName.length < 3) errors.push('Full name is required and must be at least 3 characters.');
  if (!member.phoneNumbers || member.phoneNumbers.length === 0) errors.push('At least one phone number is required.');
  if (!member.category) errors.push('Membership category is required.');
  if (!member.status) errors.push('Membership status is required.');
  // Add more validation as needed
  return errors;
}
