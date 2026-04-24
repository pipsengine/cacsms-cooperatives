import React, { useEffect, useState } from 'react';

export function ComplianceWidget() {
  const [compliance, setCompliance] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contributions/report/compliance/member-1')
      .then(res => res.json())
      .then(setCompliance);
  }, []);

  if (!compliance) return <div>Loading compliance...</div>;

  return (
    <div style={{ margin: '16px 0' }}>
      <h2>Compliance</h2>
      <div>Compliance Rate: {(compliance.complianceRate * 100).toFixed(2)}%</div>
      <div>Paid: {compliance.paid} / {compliance.total}</div>
      <div>Overdue: {compliance.overdue}</div>
    </div>
  );
}
