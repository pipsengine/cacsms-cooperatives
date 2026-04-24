// Step 8: Review & Submit
import React from 'react';

export default function ReviewAndSubmitStep({ allData, onBack, onSubmit, submitting, error }) {
  return (
    <div>
      <h2>Review & Submit</h2>
      <div style={{ marginBottom: 16 }}>
        <h3>Cooperative Identity</h3>
        <pre>{JSON.stringify(allData.identity, null, 2)}</pre>
        <h3>Organization Details</h3>
        <pre>{JSON.stringify(allData.organization, null, 2)}</pre>
        <h3>Legal Details</h3>
        <pre>{JSON.stringify(allData.legal, null, 2)}</pre>
        <h3>Leadership</h3>
        <pre>{JSON.stringify(allData.leadership, null, 2)}</pre>
        <h3>Admin User</h3>
        <pre>{JSON.stringify(allData.admin, null, 2)}</pre>
        <h3>Subscription</h3>
        <pre>{JSON.stringify(allData.subscription, null, 2)}</pre>
        <h3>Settings & Modules</h3>
        <pre>{JSON.stringify(allData.settings, null, 2)}</pre>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={onSubmit} disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Registration'}
      </button>
    </div>
  );
}
