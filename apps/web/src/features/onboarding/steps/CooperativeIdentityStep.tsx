// Step 1: Cooperative Identity Capture
import React, { useState } from 'react';

export default function CooperativeIdentityStep({ onNext, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.name || '',
    shortName: initialData.shortName || '',
    registrationNumber: initialData.registrationNumber || '',
    category: initialData.category || '',
    yearEstablished: initialData.yearEstablished || '',
    dateOfRegistration: initialData.dateOfRegistration || '',
    state: initialData.state || '',
    lga: initialData.lga || '',
    address: initialData.address || '',
    email: initialData.email || '',
    phoneNumbers: initialData.phoneNumbers || '',
    website: initialData.website || '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.name) errs.name = 'Cooperative name is required';
    if (!form.category) errs.category = 'Category is required';
    if (!form.state) errs.state = 'State is required';
    if (!form.lga) errs.lga = 'LGA is required';
    if (!form.address) errs.address = 'Address is required';
    if (!form.email) errs.email = 'Email is required';
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
      <h2>Cooperative Identity</h2>
      <div>
        <label>Name *</label>
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Short Name</label>
        <input name="shortName" value={form.shortName} onChange={handleChange} />
      </div>
      <div>
        <label>Registration Number</label>
        <input name="registrationNumber" value={form.registrationNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Category *</label>
        <input name="category" value={form.category} onChange={handleChange} />
        {errors.category && <span>{errors.category}</span>}
      </div>
      <div>
        <label>Year Established</label>
        <input name="yearEstablished" value={form.yearEstablished} onChange={handleChange} />
      </div>
      <div>
        <label>Date of Registration</label>
        <input name="dateOfRegistration" value={form.dateOfRegistration} onChange={handleChange} />
      </div>
      <div>
        <label>State *</label>
        <input name="state" value={form.state} onChange={handleChange} />
        {errors.state && <span>{errors.state}</span>}
      </div>
      <div>
        <label>LGA *</label>
        <input name="lga" value={form.lga} onChange={handleChange} />
        {errors.lga && <span>{errors.lga}</span>}
      </div>
      <div>
        <label>Address *</label>
        <input name="address" value={form.address} onChange={handleChange} />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label>Email *</label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Phone Numbers</label>
        <input name="phoneNumbers" value={form.phoneNumbers} onChange={handleChange} />
      </div>
      <div>
        <label>Website</label>
        <input name="website" value={form.website} onChange={handleChange} />
      </div>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
