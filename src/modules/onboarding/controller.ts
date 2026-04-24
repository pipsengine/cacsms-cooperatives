// API Controller for Onboarding Workflow

import { OnboardingService } from './service';

const onboardingService = new OnboardingService();

export const OnboardingController = {
  async start(req, res) {
    // TODO: Validate input, call service, handle errors
    res.status(501).json({ message: 'Not implemented' });
  },
  async update(req, res) {
    // TODO: Validate input, call service, handle errors
    res.status(501).json({ message: 'Not implemented' });
  },
  async get(req, res) {
    // TODO: Fetch onboarding by ID
    res.status(501).json({ message: 'Not implemented' });
  },
  async list(req, res) {
    // TODO: List onboardings
    res.status(501).json({ message: 'Not implemented' });
  },
};
