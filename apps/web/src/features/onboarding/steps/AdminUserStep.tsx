// Step 5: Primary Admin User Creation
import React, { useState } from 'react';

export default function AdminUserStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    adminName: initialData.adminName || '',
    adminEmail: initialData.adminEmail || '',
    adminPhone: initialData.adminPhone || '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.adminName) errs.adminName = 'Admin name is required';
    if (!form.adminEmail) errs.adminEmail = 'Admin email is required';
    if (!form.password) errs.password = 'Password is required';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
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
      <h2>Primary Admin User</h2>
      <div>
        <label>Name *</label>
        <input name="adminName" value={form.adminName} onChange={handleChange} />
        {errors.adminName && <span>{errors.adminName}</span>}
      </div>
      <div>
        <label>Email *</label>
        <input name="adminEmail" value={form.adminEmail} onChange={handleChange} />
        {errors.adminEmail && <span>{errors.adminEmail}</span>}
      </div>
      <div>
        <label>Phone</label>
        <input name="adminPhone" value={form.adminPhone} onChange={handleChange} />
      </div>
      <div>
        <label>Password *</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password *</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
