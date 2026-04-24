// Main Registration Wizard UI
import React, { useState } from 'react';
import CooperativeIdentityStep from './steps/CooperativeIdentityStep';
import OrganizationDetailsStep from './steps/OrganizationDetailsStep';
import LegalDetailsStep from './steps/LegalDetailsStep';
import LeadershipSetupStep from './steps/LeadershipSetupStep';
import AdminUserStep from './steps/AdminUserStep';
import SubscriptionSetupStep from './steps/SubscriptionSetupStep';
import SettingsAndModulesStep from './steps/SettingsAndModulesStep';
import ReviewAndSubmitStep from './steps/ReviewAndSubmitStep';

const steps = [
  'Cooperative Identity',
  'Organization Details',
  'Legal Details',
  'Leadership',
  'Admin User',
  'Subscription',
  'Settings',
  'Review',
];

export default function RegistrationWizard() {
  const [step, setStep] = useState(0);
  const [allData, setAllData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleNext(data) {
    const keys = [
      'identity',
      'organization',
      'legal',
      'leadership',
      'admin',
      'subscription',
      'settings',
    ];
    setAllData(prev => ({ ...prev, [keys[step]]: data }));
    setStep(s => s + 1);
  }

  function handleBack() {
    setStep(s => Math.max(0, s - 1));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError('');
    try {
      // TODO: Replace with actual API call
      await new Promise(res => setTimeout(res, 1200));
      alert('Registration submitted!');
      setStep(0);
      setAllData({});
    } catch (e) {
      setError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1>Register a New Cooperative</h1>
      <div style={{ margin: '16px 0' }}>
        {steps.map((label, idx) => (
          <span key={label} style={{
            fontWeight: idx === step ? 'bold' : 'normal',
            color: idx === step ? '#0070f3' : '#888',
            marginRight: 8,
          }}>{label}{idx < steps.length - 1 && ' > '}</span>
        ))}
      </div>
      {step === 0 && (
        <CooperativeIdentityStep
          onNext={data => handleNext(data)}
          initialData={allData.identity}
        />
      )}
      {step === 1 && (
        <OrganizationDetailsStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.organization}
        />
      )}
      {step === 2 && (
        <LegalDetailsStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.legal}
        />
      )}
      {step === 3 && (
        <LeadershipSetupStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.leadership}
        />
      )}
      {step === 4 && (
        <AdminUserStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.admin}
        />
      )}
      {step === 5 && (
        <SubscriptionSetupStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.subscription}
        />
      )}
      {step === 6 && (
        <SettingsAndModulesStep
          onNext={data => handleNext(data)}
          onBack={handleBack}
          initialData={allData.settings}
        />
      )}
      {step === 7 && (
        <ReviewAndSubmitStep
          allData={allData}
          onBack={handleBack}
          onSubmit={handleSubmit}
          submitting={submitting}
          error={error}
        />
      )}
    </div>
  );
}
