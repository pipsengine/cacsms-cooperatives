import React, { useEffect, useState } from 'react';

export function ArrearsWidget() {
  const [arrears, setArrears] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contributions/report/arrears/member-1')
      .then(res => res.json())
      .then(setArrears);
  }, []);

  if (!arrears) return <div>Loading arrears...</div>;

  return (
    <div style={{ margin: '16px 0' }}>
      <h2>Arrears</h2>
      <div>Total Due: {arrears.totalDue}</div>
      <div>Total Paid: {arrears.totalPaid}</div>
      <div>Outstanding: {arrears.outstanding}</div>
      <div>Penalty: {arrears.penalty}</div>
    </div>
  );
}
