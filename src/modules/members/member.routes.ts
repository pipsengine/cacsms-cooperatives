// Member routes for Membership & KYC Module
import { Router } from 'express';
import {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  changeMemberStatus
} from './member.controller';

const router = Router();

router.get('/', getMembers);
router.get('/:id', getMemberById);
router.post('/', createMember);
router.put('/:id', updateMember);
router.patch('/:id/status', changeMemberStatus);

export default router;
