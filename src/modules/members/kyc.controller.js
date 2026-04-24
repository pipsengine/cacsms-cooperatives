"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKycDocumentStatus = exports.uploadKycDocument = exports.getKycDocuments = void 0;
// Placeholder in-memory store (replace with DB integration)
var kycDocuments = [];
var getKycDocuments = function (req, res) {
    var memberId = req.params.memberId;
    var docs = kycDocuments.filter(function (doc) { return doc.memberId === memberId; });
    res.json(docs);
};
exports.getKycDocuments = getKycDocuments;
var uploadKycDocument = function (req, res) {
    // TODO: Add file upload handling, validation, and status tracking
    var doc = req.body;
    kycDocuments.push(doc);
    res.status(201).json(doc);
};
exports.uploadKycDocument = uploadKycDocument;
var updateKycDocumentStatus = function (req, res) {
    var docId = req.params.docId;
    var idx = kycDocuments.findIndex(function (doc) { return doc.id === docId; });
    if (idx === -1)
        return res.status(404).json({ error: 'Document not found' });
    kycDocuments[idx].status = req.body.status;
    kycDocuments[idx].verifiedBy = req.body.verifiedBy;
    kycDocuments[idx].verifiedAt = new Date().toISOString();
    res.json(kycDocuments[idx]);
};
exports.updateKycDocumentStatus = updateKycDocumentStatus;
