// Data models for Workflow Engine

export interface Workflow {
  id: string;
  name: string;
  steps: WorkflowStep[];
  status: WorkflowStatus;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowStep {
  id: string;
  name: string;
  order: number;
  status: WorkflowStepStatus;
  data: Record<string, any>;
}

export type WorkflowStatus = 'active' | 'inactive' | 'archived';
export type WorkflowStepStatus = 'pending' | 'in_progress' | 'completed' | 'failed';
