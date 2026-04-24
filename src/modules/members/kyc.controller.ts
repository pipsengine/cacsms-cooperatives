// KYC Document controller for Membership & KYC Module
import { Request, Response } from 'express';
import { KycDocument } from './types';

// Placeholder in-memory store (replace with DB integration)
const kycDocuments: KycDocument[] = [];

export const getKycDocuments = (req: Request, res: Response) => {
  const memberId = req.params.memberId;
  const docs = kycDocuments.filter(doc => doc.memberId === memberId);
  res.json(docs);
};

export const uploadKycDocument = (req: Request, res: Response) => {
  // TODO: Add file upload handling, validation, and status tracking
  const doc: KycDocument = req.body;
  kycDocuments.push(doc);
  res.status(201).json(doc);
};

export const updateKycDocumentStatus = (req: Request, res: Response) => {
  const docId = req.params.docId;
  const idx = kycDocuments.findIndex(doc => doc.id === docId);
  if (idx === -1) return res.status(404).json({ error: 'Document not found' });
  kycDocuments[idx].status = req.body.status;
  kycDocuments[idx].verifiedBy = req.body.verifiedBy;
  kycDocuments[idx].verifiedAt = new Date().toISOString();
  res.json(kycDocuments[idx]);
};
