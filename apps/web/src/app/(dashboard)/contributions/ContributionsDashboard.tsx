import React from 'react';
import { ContributionsTable } from './ContributionsTable';
import { ComplianceWidget } from './ComplianceWidget';
import { ArrearsWidget } from './ArrearsWidget';
import { MemberAnalysisWidget } from './MemberAnalysisWidget';

export default function ContributionsDashboard() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Contributions & Savings Dashboard</h1>
      <ComplianceWidget />
      <ArrearsWidget />
      <MemberAnalysisWidget />
      <ContributionsTable />
    </div>
  );
}
