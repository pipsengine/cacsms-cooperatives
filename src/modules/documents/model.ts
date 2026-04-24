// Data models for Document Management

export interface Document {
  id: string;
  cooperativeId: string;
  type: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
  status: DocumentStatus;
}

export type DocumentStatus = 'pending' | 'approved' | 'rejected';
