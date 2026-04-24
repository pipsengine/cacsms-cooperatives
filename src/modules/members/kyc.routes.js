"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// KYC Document routes for Membership & KYC Module
var express_1 = require("express");
var kyc_controller_1 = require("./kyc.controller");
var router = (0, express_1.Router)();
router.get('/:memberId', kyc_controller_1.getKycDocuments);
router.post('/', kyc_controller_1.uploadKycDocument);
router.patch('/:docId/status', kyc_controller_1.updateKycDocumentStatus);
exports.default = router;
