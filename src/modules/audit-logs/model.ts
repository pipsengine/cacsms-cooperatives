// Data models for Audit Logging

export interface AuditLog {
  id: string;
  entity: string;
  entityId: string;
  action: string;
  performedBy: string;
  timestamp: string;
  details: Record<string, any>;
}
