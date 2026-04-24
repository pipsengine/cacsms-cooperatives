// Step 7: Default Settings & Module Activation
import React, { useState } from 'react';

export default function SettingsAndModulesStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    enableLoans: initialData.enableLoans || false,
    enableWelfare: initialData.enableWelfare || false,
    enableMultiBranch: initialData.enableMultiBranch || false,
    localCurrency: initialData.localCurrency || 'NGN',
    approvalWorkflow: initialData.approvalWorkflow || '',
  });

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  }

  function handleNext() {
    onNext(form);
  }

  return (
    <div>
      <h2>Settings & Module Activation</h2>
      <div>
        <label>
          <input type="checkbox" name="enableLoans" checked={form.enableLoans} onChange={handleChange} />
          Enable Loans Module
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="enableWelfare" checked={form.enableWelfare} onChange={handleChange} />
          Enable Welfare Module
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="enableMultiBranch" checked={form.enableMultiBranch} onChange={handleChange} />
          Enable Multi-Branch Support
        </label>
      </div>
      <div>
        <label>Local Currency</label>
        <select name="localCurrency" value={form.localCurrency} onChange={handleChange}>
          <option value="NGN">NGN</option>
          <option value="GHS">GHS</option>
          <option value="KES">KES</option>
        </select>
      </div>
      <div>
        <label>Approval Workflow</label>
        <input name="approvalWorkflow" value={form.approvalWorkflow} onChange={handleChange} />
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
