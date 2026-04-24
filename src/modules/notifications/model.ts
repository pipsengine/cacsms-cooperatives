// Data models for Notifications

export interface Notification {
  id: string;
  recipientId: string;
  type: string;
  message: string;
  status: NotificationStatus;
  createdAt: string;
  readAt?: string;
}

export type NotificationStatus = 'pending' | 'sent' | 'read' | 'failed';
