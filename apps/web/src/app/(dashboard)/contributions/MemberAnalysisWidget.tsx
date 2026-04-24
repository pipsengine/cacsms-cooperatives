import React, { useEffect, useState } from 'react';

export function MemberAnalysisWidget() {
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contributions/report/analysis/member-1')
      .then(res => res.json())
      .then(setAnalysis);
  }, []);

  if (!analysis) return <div>Loading member analysis...</div>;

  return (
    <div style={{ margin: '16px 0' }}>
      <h2>Member Analysis</h2>
      <div>Total Obligations: {analysis.stats?.totalObligations}</div>
      <div>Total Paid: {analysis.stats?.totalPaid}</div>
      <div>Total Overdue: {analysis.stats?.totalOverdue}</div>
      <div>Total Penalties: {analysis.stats?.totalPenalties}</div>
      <div>Total Waivers: {analysis.stats?.totalWaivers}</div>
      <div>Total Savings: {analysis.stats?.totalSavings}</div>
      <div>Total Arrears: {analysis.stats?.totalArrears}</div>
    </div>
  );
}
