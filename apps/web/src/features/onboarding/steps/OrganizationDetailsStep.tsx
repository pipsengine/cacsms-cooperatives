// Step 2: Organization Details Capture
import React, { useState } from 'react';

export default function OrganizationDetailsStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    mailingAddress: initialData.mailingAddress || '',
    branchPresence: initialData.branchPresence || '',
    officialPhone: initialData.officialPhone || '',
    logoUrl: initialData.logoUrl || '',
    sealUrl: initialData.sealUrl || '',
    taxId: initialData.taxId || '',
    customFields: initialData.customFields || '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.officialPhone) errs.officialPhone = 'Official phone is required';
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleNext() {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onNext(form);
    }
  }

  return (
    <div>
      <h2>Organization Details</h2>
      <div>
        <label>Mailing Address</label>
        <input name="mailingAddress" value={form.mailingAddress} onChange={handleChange} />
      </div>
      <div>
        <label>Branch/Chapter Presence</label>
        <input name="branchPresence" value={form.branchPresence} onChange={handleChange} />
      </div>
      <div>
        <label>Official Phone *</label>
        <input name="officialPhone" value={form.officialPhone} onChange={handleChange} />
        {errors.officialPhone && <span>{errors.officialPhone}</span>}
      </div>
      <div>
        <label>Logo URL</label>
        <input name="logoUrl" value={form.logoUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Seal URL</label>
        <input name="sealUrl" value={form.sealUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Tax ID</label>
        <input name="taxId" value={form.taxId} onChange={handleChange} />
      </div>
      <div>
        <label>Custom Fields</label>
        <input name="customFields" value={form.customFields} onChange={handleChange} />
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
