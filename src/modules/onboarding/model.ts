// Data models for Onboarding Workflow

export interface Onboarding {
  id: string;
  cooperativeId: string;
  step: string;
  status: OnboardingStatus;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export type OnboardingStatus =
  | 'draft'
  | 'in_progress'
  | 'completed'
  | 'interrupted'
  | 'rejected';
