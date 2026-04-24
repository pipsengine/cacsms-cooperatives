// KYC Document routes for Membership & KYC Module
import { Router } from 'express';
import {
  getKycDocuments,
  uploadKycDocument,
  updateKycDocumentStatus
} from './kyc.controller';

const router = Router();

router.get('/:memberId', getKycDocuments);
router.post('/', uploadKycDocument);
router.patch('/:docId/status', updateKycDocumentStatus);

export default router;
