// API Controller for Notifications

import { NotificationService } from './service';

const notificationService = new NotificationService();

export const NotificationController = {
  async send(req, res) {
    // TODO: Validate input, call service, handle errors
    res.status(501).json({ message: 'Not implemented' });
  },
  async list(req, res) {
    // TODO: List notifications
    res.status(501).json({ message: 'Not implemented' });
  },
};
