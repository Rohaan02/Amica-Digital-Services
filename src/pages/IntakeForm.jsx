import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      {/* Top Progress Header */}
      <header className="w-full bg-white dark:bg-background-dark/50 border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons text-white text-lg">
                  auto_awesome
                </span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
                AMICA<span className="text-primary">.AI</span>
              </span>
            </div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Step <span className="text-primary font-bold">{currentStep}</span>{" "}
              of {totalSteps}
            </div>
          </div>
          <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full progress-glow transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar/Context Area */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Let's design the right{" "}
                <span className="text-primary">AI growth system</span> for your
                business.
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Complete this initial assessment to help us tailor our AI
                solutions to your specific operational scale and technical
                needs.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">schedule</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Quick Process
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    This intake takes approximately 2-3 minutes to complete.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Secure & Confidential
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your information is encrypted and only used for your custom
                    proposal.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2">
              <div className="h-6 w-16 bg-slate-300 dark:bg-slate-700 rounded opacity-40"></div>
              <div className="h-6 w-16 bg-slate-300 dark:bg-slate-700 rounded opacity-40"></div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl form-card-shadow overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="mb-8 border-b border-primary/5 pb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      {currentStep}
                    </span>
                    Contact & Business Basics
                  </h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                  <FormInput
                    label="Company Name"
                    id="company"
                    placeholder="Acme Inc."
                    required
                  />
                  <FormInput
                    label="Work Email"
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                    required
                  />
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                  />
                  <FormInput
                    label="Country"
                    type="select"
                    id="country"
                    options={[
                      { value: "us", label: "United States" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "ca", label: "Canada" },
                      { value: "de", label: "Germany" },
                    ]}
                  />
                  <FormInput
                    label="Website URL"
                    type="url"
                    id="website"
                    placeholder="https://www.yourcompany.com"
                  />
                  <FormInput
                    label="Your Role / Title"
                    id="role"
                    placeholder="e.g. CTO, Operations Director, Founder"
                    className="md:col-span-2"
                  />
                </form>

                <div className="mt-12 flex items-center justify-between border-t border-primary/5 pt-8">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      currentStep === 1
                        ? "text-slate-300 dark:text-slate-700 cursor-not-allowed"
                        : "text-slate-500 dark:text-slate-400 hover:text-primary"
                    }`}
                  >
                    <span className="material-icons text-lg">arrow_back</span>
                    Back
                  </button>
                  <Button
                    onClick={handleNext}
                    variant="primary"
                    size="lg"
                    icon="arrow_forward"
                    className="transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-primary/5">
        <div className="text-sm text-slate-400 dark:text-slate-500">
          © 2024 Amica AI Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default IntakeForm;
