'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, MapPin, FileCheck, UserPlus, 
  CheckCircle2, ArrowRight, ArrowLeft, UploadCloud,
  Banknote, ShieldCheck, Download
} from 'lucide-react';
import Link from 'next/link';

// Zod Schemas for each step
const cooperativeIdentitySchema = z.object({
  legalName: z.string().min(5, "Legal name must be at least 5 characters"),
  shortName: z.string().min(2, "Short name is required"),
  category: z.string().min(1, "Please select a category"),
  registrationNumber: z.string().optional(),
  yearEstablished: z.string().regex(/^(19|20)\d{2}$/, "Must be a valid year (e.g. 2015)")
});

const contactLocationSchema = z.object({
  officialEmail: z.string().email("Valid email is required"),
  officialPhone: z.string().min(10, "Valid phone number required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "LGA is required"),
  address: z.string().min(10, "Please provide a complete physical address")
});

const adminUserSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  adminEmail: z.string().email("Valid email required"),
  password: z.string().min(8, "Password must be at least 8 characters")
});

type StepConfig = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: StepConfig[] = [
  { id: 'identity', title: 'Cooperative Identity', description: 'Legal name and structure', icon: Building2 },
  { id: 'contact', title: 'Location & Contact', description: 'Address and communications', icon: MapPin },
  { id: 'admin', title: 'Primary Admin Entry', description: 'First workspace user', icon: UserPlus },
  { id: 'documents', title: 'Documentation', description: 'Upload legal certificates', icon: FileCheck },
  { id: 'review', title: 'Review & Submit', description: 'Finalize tenant setup', icon: ShieldCheck }
];

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Combined data state to accumulate answers
  const [formData, setFormData] = useState<any>({
    documents: []
  });

  const identityForm = useForm({ resolver: zodResolver(cooperativeIdentitySchema) });
  const contactForm = useForm({ resolver: zodResolver(contactLocationSchema) });
  const adminForm = useForm({ resolver: zodResolver(adminUserSchema) });

  const handleNext = async (stepData: any) => {
    setFormData((prev: any) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleIdentitySubmit = identityForm.handleSubmit(handleNext);
  const handleContactSubmit = contactForm.handleSubmit(handleNext);
  const handleAdminSubmit = adminForm.handleSubmit(handleNext);

  const finalSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call for tenant provisioning
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 border border-emerald-100 shadow-xl text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Tenant Provisioned!</h2>
          <p className="text-slate-600 font-medium mb-8">
            The workspace for <strong className="text-slate-900">{formData.legalName}</strong> has been successfully staged. It is currently placed in <strong>Pending Verification</strong> status for Admin review.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full text-left font-medium text-sm text-slate-700 mb-8 space-y-2">
             <div className="flex justify-between"><span>Tenant ID:</span><span className="font-bold">TEN-8492-BX</span></div>
             <div className="flex justify-between"><span>Primary Admin:</span><span className="font-bold">{formData.adminEmail}</span></div>
             <div className="flex justify-between"><span>Status:</span><span className="font-bold text-amber-600">Awaiting CACSMS Approval</span></div>
          </div>
          <Link href="/dashboard" className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:bg-blue-700 transition-colors w-full">
            Proceed to Sandbox Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.form key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleIdentitySubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Legal Cooperative Name *</label>
              <input {...identityForm.register('legalName')} placeholder="e.g. Progressive Staff Cooperative Society Ltd" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
              {identityForm.formState.errors.legalName && <p className="text-red-500 text-xs mt-1 font-semibold">{identityForm.formState.errors.legalName.message as string}</p>}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Short Name / Acronym *</label>
                <input {...identityForm.register('shortName')} placeholder="e.g. PROGS Coop" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {identityForm.formState.errors.shortName && <p className="text-red-500 text-xs mt-1 font-semibold">{identityForm.formState.errors.shortName.message as string}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Year Established *</label>
                <input {...identityForm.register('yearEstablished')} placeholder="YYYY" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {identityForm.formState.errors.yearEstablished && <p className="text-red-500 text-xs mt-1 font-semibold">{identityForm.formState.errors.yearEstablished.message as string}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Category *</label>
                <select {...identityForm.register('category')} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-white">
                  <option value="">Select category...</option>
                  <option value="multipurpose">Multipurpose Cooperative</option>
                  <option value="thrift">Thrift & Credit Society</option>
                  <option value="workers">Workers' Cooperative</option>
                  <option value="farmers">Farmers' Cooperative</option>
                </select>
                {identityForm.formState.errors.category && <p className="text-red-500 text-xs mt-1 font-semibold">{identityForm.formState.errors.category.message as string}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Registration No (Optional)</label>
                <input {...identityForm.register('registrationNumber')} placeholder="e.g. LS/12345" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>
            <div className="pt-6 flex justify-end">
               <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors">
                 Next Step <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </motion.form>
        );
      
      case 1:
        return (
          <motion.form key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Official Email *</label>
                <input {...contactForm.register('officialEmail')} type="email" placeholder="contact@coop.org" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {contactForm.formState.errors.officialEmail && <p className="text-red-500 text-xs mt-1 font-semibold">{contactForm.formState.errors.officialEmail.message as string}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Official Phone *</label>
                <input {...contactForm.register('officialPhone')} placeholder="+234..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {contactForm.formState.errors.officialPhone && <p className="text-red-500 text-xs mt-1 font-semibold">{contactForm.formState.errors.officialPhone.message as string}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">State *</label>
                <select {...contactForm.register('state')} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-white">
                  <option value="">Select State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">FCT Abuja</option>
                  <option value="Rivers">Rivers</option>
                </select>
                {contactForm.formState.errors.state && <p className="text-red-500 text-xs mt-1 font-semibold">{contactForm.formState.errors.state.message as string}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Local Govt Area *</label>
                <input {...contactForm.register('lga')} placeholder="E.g. Ikeja" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {contactForm.formState.errors.lga && <p className="text-red-500 text-xs mt-1 font-semibold">{contactForm.formState.errors.lga.message as string}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Physical HQ Address *</label>
              <textarea {...contactForm.register('address')} rows={3} placeholder="Full street address..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none" />
              {contactForm.formState.errors.address && <p className="text-red-500 text-xs mt-1 font-semibold">{contactForm.formState.errors.address.message as string}</p>}
            </div>
            <div className="pt-6 flex justify-between">
               <button type="button" onClick={() => setCurrentStep(prev => prev - 1)} className="text-slate-600 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
               <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors">
                 Next Step <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </motion.form>
        );

      case 2:
        return (
          <motion.form key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleAdminSubmit} className="space-y-5">
            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm font-medium flex gap-3 border border-blue-100">
               <div>This user will become the primary System Administrator for this Cooperative's tenant workspace. They will receive an activation link.</div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin First Name *</label>
                <input {...adminForm.register('firstName')} placeholder="John" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {adminForm.formState.errors.firstName && <p className="text-red-500 text-xs mt-1 font-semibold">{adminForm.formState.errors.firstName.message as string}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin Last Name *</label>
                <input {...adminForm.register('lastName')} placeholder="Doe" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
                {adminForm.formState.errors.lastName && <p className="text-red-500 text-xs mt-1 font-semibold">{adminForm.formState.errors.lastName.message as string}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin Login Email *</label>
              <input {...adminForm.register('adminEmail')} type="email" placeholder="admin@coop.org" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
              {adminForm.formState.errors.adminEmail && <p className="text-red-500 text-xs mt-1 font-semibold">{adminForm.formState.errors.adminEmail.message as string}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Secure Password *</label>
              <input {...adminForm.register('password')} type="password" placeholder="Min 8 characters" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" />
              {adminForm.formState.errors.password && <p className="text-red-500 text-xs mt-1 font-semibold">{adminForm.formState.errors.password.message as string}</p>}
            </div>
            
            <div className="pt-6 flex justify-between">
               <button type="button" onClick={() => setCurrentStep(prev => prev - 1)} className="text-slate-600 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
               <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors">
                 Next Step <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </motion.form>
        );

      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer group flex flex-col items-center">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6 text-blue-600" />
               </div>
               <h4 className="text-sm font-bold text-slate-900 mb-1">Upload Registration Certificate</h4>
               <p className="text-xs text-slate-500 font-medium mb-4">PDF, JPG, PNG (Max 5MB)</p>
               <button className="text-xs bg-white border border-slate-200 px-4 py-2 rounded-lg font-bold shadow-sm">Select File</button>
            </div>

            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer group flex flex-col items-center">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6 text-blue-600" />
               </div>
               <h4 className="text-sm font-bold text-slate-900 mb-1">Upload Cooperative Bye-Laws (Optional)</h4>
               <p className="text-xs text-slate-500 font-medium mb-4">PDF Format (Max 10MB)</p>
               <button className="text-xs bg-white border border-slate-200 px-4 py-2 rounded-lg font-bold shadow-sm">Select File</button>
            </div>

            <div className="pt-6 flex justify-between">
               <button type="button" onClick={() => setCurrentStep(prev => prev - 1)} className="text-slate-600 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
               <button type="button" onClick={() => setCurrentStep(prev => prev + 1)} className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors">
                 Next Step <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
               <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Organization</div>
                 <div className="text-base font-bold text-slate-900">{formData.legalName} ({formData.shortName})</div>
                 <div className="text-sm font-medium text-slate-600">Category: {formData.category} • Est. {formData.yearEstablished}</div>
               </div>
               <hr className="border-slate-200" />
               <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact & HQ</div>
                 <div className="text-sm font-medium text-slate-800">{formData.officialEmail} • {formData.officialPhone}</div>
                 <div className="text-sm font-medium text-slate-600 mt-1">{formData.address}, {formData.lga}, {formData.state}</div>
               </div>
               <hr className="border-slate-200" />
               <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Administrator</div>
                 <div className="text-sm font-medium text-slate-800">{formData.firstName} {formData.lastName}</div>
                 <div className="text-sm font-medium text-slate-600">{formData.adminEmail}</div>
               </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-4 border border-blue-100 rounded-xl">
               <input type="checkbox" className="mt-1 shrink-0 bg-white" />
               <p className="text-xs text-blue-800 font-medium leading-relaxed">
                 I confirm that all provided details are accurate. I understand that this cooperative will be placed in a staging environment pending official platform authorization and KYC verification.
               </p>
            </div>

            <div className="pt-6 flex justify-between">
               <button type="button" onClick={() => setCurrentStep(prev => prev - 1)} className="text-slate-600 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
               <button type="button" onClick={finalSubmit} disabled={isSubmitting} className="bg-slate-900 text-white font-bold px-8 py-2.5 rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70 shadow-lg">
                 {isSubmitting ? 'Provisioning Tenant...' : 'Initialize Staging Tenant'}
               </button>
            </div>
          </motion.div>
        );

      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Sidebar Steps */}
      <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm sticky top-6">
         <h2 className="text-lg font-bold text-slate-900 mb-6">Onboarding Progress</h2>
         <div className="space-y-6">
           {steps.map((step, index) => {
             const isCompleted = index < currentStep;
             const isActive = index === currentStep;
             const isUpcoming = index > currentStep;
             
             return (
               <div key={step.id} className="flex gap-4 relative">
                 {/* Connecting line */}
                 {index !== steps.length - 1 && (
                   <div className={"absolute left-5 top-10 w-0.5 h-full -ml-px " + (isCompleted ? "bg-blue-600" : "bg-slate-100")} />
                 )}
                 
                 {/* Icon circle */}
                 <div className={"w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 z-10 bg-white transition-colors " + 
                   (isCompleted ? "border-blue-600 text-blue-600" : 
                    isActive ? "border-blue-600 text-blue-600 ring-4 ring-blue-50" : 
                    "border-slate-200 text-slate-400")}
                 >
                   {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <step.icon className="w-4 h-4" />}
                 </div>
                 
                 {/* Text */}
                 <div className={"pb-2 " + (isActive ? "pt-2" : "pt-2.5")}>
                   <div className={"text-sm font-bold " + (isActive ? "text-slate-900" : isCompleted ? "text-slate-700" : "text-slate-400")}>
                     {step.title}
                   </div>
                   {isActive && (
                     <div className="text-xs font-medium text-slate-500 mt-1">{step.description}</div>
                   )}
                 </div>
               </div>
             )
           })}
         </div>
      </div>

      {/* Main Form Area */}
      <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm min-h-[600px] flex flex-col">
         <div className="mb-8">
           <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step {currentStep + 1} of {steps.length}</div>
           <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{steps[currentStep].title}</h1>
           <p className="text-sm font-medium text-slate-500 mt-2">{steps[currentStep].description}</p>
         </div>
         
         <div className="flex-1 relative">
           <AnimatePresence mode="wait">
             {renderStepContent()}
           </AnimatePresence>
         </div>
      </div>
    </div>
  );
}
