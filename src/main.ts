// Main entry for API server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import memberRoutes from './modules/members/member.routes';
import kycRoutes from './modules/members/kyc.routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Membership & KYC routes
app.use('/api/members', memberRoutes);
app.use('/api/members/kyc', kycRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
