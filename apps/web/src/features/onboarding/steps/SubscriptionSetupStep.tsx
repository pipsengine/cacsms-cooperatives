// Step 6: Subscription Plan Setup
import React, { useState } from 'react';

export default function SubscriptionSetupStep({ onNext, onBack, initialData = {} }) {
  const [form, setForm] = useState({
    plan: initialData.plan || '',
    billingCycle: initialData.billingCycle || '',
    paymentMethod: initialData.paymentMethod || '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.plan) errs.plan = 'Subscription plan is required';
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
      <h2>Subscription Plan Setup</h2>
      <div>
        <label>Plan *</label>
        <select name="plan" value={form.plan} onChange={handleChange}>
          <option value="">Select Plan</option>
          <option value="starter">Starter</option>
          <option value="growth">Growth</option>
          <option value="enterprise">Enterprise</option>
        </select>
        {errors.plan && <span>{errors.plan}</span>}
      </div>
      <div>
        <label>Billing Cycle</label>
        <select name="billingCycle" value={form.billingCycle} onChange={handleChange}>
          <option value="">Select Cycle</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label>Payment Method</label>
        <input name="paymentMethod" value={form.paymentMethod} onChange={handleChange} />
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
}
