// Data models for Tenant Provisioning

export interface Tenant {
  id: string;
  cooperativeId: string;
  namespace: string;
  config: Record<string, any>;
  roles: string[];
  status: TenantStatus;
  createdAt: string;
  updatedAt: string;
}

export type TenantStatus =
  | 'provisioning'
  | 'active'
  | 'suspended'
  | 'inactive';
