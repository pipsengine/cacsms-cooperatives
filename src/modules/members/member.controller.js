"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeMemberStatus = exports.updateMember = exports.createMember = exports.getMemberById = exports.getMembers = void 0;
// Placeholder in-memory store (replace with DB integration)
var members = [];
var getMembers = function (req, res) {
    res.json(members);
};
exports.getMembers = getMembers;
var getMemberById = function (req, res) {
    var member = members.find(function (m) { return m.id === req.params.id; });
    if (!member)
        return res.status(404).json({ error: 'Member not found' });
    res.json(member);
};
exports.getMemberById = getMemberById;
var createMember = function (req, res) {
    // TODO: Add validation and duplicate detection
    var member = req.body;
    members.push(member);
    res.status(201).json(member);
};
exports.createMember = createMember;
var updateMember = function (req, res) {
    var idx = members.findIndex(function (m) { return m.id === req.params.id; });
    if (idx === -1)
        return res.status(404).json({ error: 'Member not found' });
    members[idx] = __assign(__assign(__assign({}, members[idx]), req.body), { updatedAt: new Date().toISOString() });
    res.json(members[idx]);
};
exports.updateMember = updateMember;
var changeMemberStatus = function (req, res) {
    var idx = members.findIndex(function (m) { return m.id === req.params.id; });
    if (idx === -1)
        return res.status(404).json({ error: 'Member not found' });
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
exports.changeMemberStatus = changeMemberStatus;
