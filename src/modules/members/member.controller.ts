// Member controller for Membership & KYC Module
import { Member } from './member.model';
import { Request, Response } from 'express';

// Placeholder in-memory store (replace with DB integration)
const members: Member[] = [];

export const getMembers = (req: Request, res: Response) => {
  res.json(members);
};

export const getMemberById = (req: Request, res: Response) => {
  const member = members.find(m => m.id === req.params.id);
  if (!member) return res.status(404).json({ error: 'Member not found' });
  res.json(member);
};

export const createMember = (req: Request, res: Response) => {
  // TODO: Add validation and duplicate detection
  const member: Member = req.body;
  members.push(member);
  res.status(201).json(member);
};

export const updateMember = (req: Request, res: Response) => {
  const idx = members.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Member not found' });
  members[idx] = { ...members[idx], ...req.body, updatedAt: new Date().toISOString() };
  res.json(members[idx]);
};

export const changeMemberStatus = (req: Request, res: Response) => {
  const idx = members.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Member not found' });
  members[idx].status = req.body.status;
  members[idx].lifecycleHistory.push({
    action: req.body.action,
    reason: req.body.reason,
    effectiveDate: req.body.effectiveDate,
    performedBy: req.body.performedBy,
    createdAt: new Date().toISOString()
  });
  res.json(members[idx]);
};
