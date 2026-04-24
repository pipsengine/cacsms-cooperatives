"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Member routes for Membership & KYC Module
var express_1 = require("express");
var member_controller_1 = require("./member.controller");
var router = (0, express_1.Router)();
router.get('/', member_controller_1.getMembers);
router.get('/:id', member_controller_1.getMemberById);
router.post('/', member_controller_1.createMember);
router.put('/:id', member_controller_1.updateMember);
router.patch('/:id/status', member_controller_1.changeMemberStatus);
exports.default = router;
