import React from 'react';
import { OnboardingWizard } from '../../components/onboarding/OnboardingWizard';

export default function RegisterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Institutional Setup</h1>
        <p className="text-slate-500 font-medium mt-3 max-w-xl mx-auto">
          Deploy a secure, isolated workspace for your cooperative. This wizard will configure your namespace, administrator accounts, and operational parameters.
        </p>
      </div>
      <OnboardingWizard />
    </div>
  );
}
