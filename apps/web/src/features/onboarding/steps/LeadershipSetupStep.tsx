// Step 4: Leadership Setup
import React, { useState } from 'react';

export default function LeadershipSetupStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    leaders: initialData.leaders || [{ name: '', designation: '', email: '', phone: '' }],
  });
  const [errors, setErrors] = useState({});

  function handleLeaderChange(idx, e) {
    const updated = form.leaders.map((l, i) => i === idx ? { ...l, [e.target.name]: e.target.value } : l);
    setForm({ ...form, leaders: updated });
  }

  function addLeader() {
    setForm({ ...form, leaders: [...form.leaders, { name: '', designation: '', email: '', phone: '' }] });
  }

  function validate() {
    const errs = {};
    form.leaders.forEach((l, i) => {
      if (!l.name) errs[`name${i}`] = 'Name required';
      if (!l.designation) errs[`designation${i}`] = 'Designation required';
    });
    return errs;
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
      <h2>Leadership Setup</h2>
      {form.leaders.map((leader, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
          <label>Name *</label>
          <input name="name" value={leader.name} onChange={e => handleLeaderChange(idx, e)} />
          {errors[`name${idx}`] && <span>{errors[`name${idx}`]}</span>}
          <label>Designation *</label>
          <input name="designation" value={leader.designation} onChange={e => handleLeaderChange(idx, e)} />
          {errors[`designation${idx}`] && <span>{errors[`designation${idx}`]}</span>}
          <label>Email</label>
          <input name="email" value={leader.email} onChange={e => handleLeaderChange(idx, e)} />
          <label>Phone</label>
          <input name="phone" value={leader.phone} onChange={e => handleLeaderChange(idx, e)} />
        </div>
      ))}
      <button type="button" onClick={addLeader}>Add Leader</button>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
