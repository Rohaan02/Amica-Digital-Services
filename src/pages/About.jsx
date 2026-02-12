import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  const philosophyPoints = [
    {
      icon: "settings_suggest",
      title: "Operational First",
      description:
        "We analyze your workflows before writing a single line of code, ensuring technology fits your business—not the other way around.",
    },
    {
      icon: "psychology",
      title: "AI Integration",
      description:
        "We treat AI as a core utility, focusing on practical automation that solves real-world bottlenecks in your daily operations.",
    },
    {
      icon: "layers",
      title: "Scalable Architecture",
      description:
        "Every solution is built with tomorrow in mind. We create elastic digital environments that grow as your company expands.",
    },
    {
      icon: "verified_user",
      title: "Data Integrity",
      description:
        "Security and accuracy are non-negotiable. We maintain rigorous standards to protect your most valuable digital assets.",
    },
  ];

  const industries = [
    {
      icon: "medical_services",
      label: "Healthcare",
      description:
        "Navigating HIPAA compliance and complex patient data workflows with ease.",
    },
    {
      icon: "gavel",
      label: "Law",
      description:
        "Streamlining discovery and document management through AI-powered automation.",
    },
    {
      icon: "cloud_done",
      label: "SaaS",
      description:
        "Building and scaling product infrastructure for the next generation of software leaders.",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Operational Excellence
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-navy-deep dark:text-white leading-[1.1] mb-8">
              Built for the <span className="text-primary">AI-first</span>{" "}
              future.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Amica was founded by operational experts who believe that
              technology should be an accelerator, not a hurdle. We bridge the
              gap between complex business logic and cutting-edge digital
              implementation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" icon="arrow_forward">
                Learn Our Process
              </Button>
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <div className="w-full h-[500px] bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                  <span className="material-icons text-xl">check_circle</span>
                </div>
                <span className="text-sm font-bold">AI Implementation</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                98% of our deployments result in immediate operational
                efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Our Philosophy"
            description="We don't just build software; we architect the operational backbone of your future organization."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons">{point.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Background & Industries */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-64 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-48 bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-48 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-64 bg-slate-300 dark:bg-slate-700"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-deep dark:text-white mb-6">
                Built on Proven Experience
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our founders didn't start in a garage; they started in the
                high-stakes corridors of regulated industries. This operational
                DNA is what makes Amica different. We understand the nuances of
                compliance, the criticality of uptime, and the necessity of
                precision.
              </p>
              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                      <span className="material-icons text-primary">
                        {industry.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-deep dark:text-white">
                        {industry.label}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="material-icons text-primary text-5xl mb-8">
            format_quote
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-10 italic">
            "Our mission is to bridge the gap between legacy operations and
            future technology by delivering AI-driven solutions that are as
            reliable as they are revolutionary."
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-[2rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
              <span className="material-icons text-[20rem]">groups</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Ready to transform your operations?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Join dozens of companies that have scaled their digital
                capabilities with Amica's operational-first approach. Let's
                build your AI-first future together.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-10 py-5 bg-white text-primary font-extrabold rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                  Meet With Our Team
                </button>
                <button className="px-10 py-5 bg-navy-deep/30 text-white font-extrabold rounded-xl border border-white/20 hover:bg-navy-deep/50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
