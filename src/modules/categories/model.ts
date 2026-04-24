// Data models for Cooperative Categories

export interface CooperativeCategory {
  id: string;
  name: string;
  description?: string;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}
