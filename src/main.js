"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main entry for API server
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var member_routes_1 = require("./modules/members/member.routes");
var kyc_routes_1 = require("./modules/members/kyc.routes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Membership & KYC routes
app.use('/api/members', member_routes_1.default);
app.use('/api/members/kyc', kyc_routes_1.default);
app.get('/api/health', function (_req, res) { return res.json({ status: 'ok' }); });
app.listen(PORT, function () {
    console.log("API server running on port ".concat(PORT));
});
