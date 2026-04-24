'use client';
import React from 'react';
import { 
  Header, Hero, TrustStrip, PowerStatement, ProblemStatement, 
  Transformation, FeaturesOverview, Workflow, 
  Highlights, SocialProof, Pricing, FAQ, FinalCTA, Footer 
} from '@/apps/web/src/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PowerStatement />
        <ProblemStatement />
        <Transformation />
        <FeaturesOverview />
        <Workflow />
        <Highlights />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}