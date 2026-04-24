// Step 3: Legal Details Capture
import React, { useState } from 'react';

export default function LegalDetailsStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    registrationDocs: initialData.registrationDocs || '',
    constitution: initialData.constitution || '',
    byeLaws: initialData.byeLaws || '',
    officerIds: initialData.officerIds || '',
    proofOfAddress: initialData.proofOfAddress || '',
    regulatoryDocs: initialData.regulatoryDocs || '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.registrationDocs) errs.registrationDocs = 'Registration certificate is required';
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
      <h2>Legal Details & Documents</h2>
      <div>
        <label>Registration Certificate *</label>
        <input name="registrationDocs" value={form.registrationDocs} onChange={handleChange} />
        {errors.registrationDocs && <span>{errors.registrationDocs}</span>}
      </div>
      <div>
        <label>Constitution</label>
        <input name="constitution" value={form.constitution} onChange={handleChange} />
      </div>
      <div>
        <label>Bye-Laws</label>
        <input name="byeLaws" value={form.byeLaws} onChange={handleChange} />
      </div>
      <div>
        <label>Officer Identity Documents</label>
        <input name="officerIds" value={form.officerIds} onChange={handleChange} />
      </div>
      <div>
        <label>Proof of Address</label>
        <input name="proofOfAddress" value={form.proofOfAddress} onChange={handleChange} />
      </div>
      <div>
        <label>Regulatory/Legal Docs</label>
        <input name="regulatoryDocs" value={form.regulatoryDocs} onChange={handleChange} />
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
