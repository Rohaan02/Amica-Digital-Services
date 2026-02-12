import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const services = [
    {
      icon: "trending_up",
      title: "AI Lead Gen & Growth",
      description:
        "Supercharge your sales pipeline with autonomous prospecting systems. We build custom AI models that identify, qualify, and engage your ideal customers 24/7.",
      features: [
        "Hyper-personalized cold outreach",
        "Predictive lead scoring & behavior analysis",
        "Automated multi-channel follow-ups",
      ],
      image: null, // Placeholder
      imagePosition: "right",
    },
    {
      icon: "settings_suggest",
      title: "AI Automation & CRM",
      description:
        "Eliminate repetitive tasks and streamline your operations. We integrate intelligent workflows into your existing CRM to ensure no data is lost and every process is optimized.",
      features: [
        "Custom API & Zapier integrations",
        "Intelligent document processing (OCR)",
        "Dynamic CRM data enrichment",
      ],
      image: null,
      imagePosition: "left",
    },
    {
      icon: "smart_toy",
      title: "AI Virtual Assistants",
      description:
        "Custom-trained LLM agents that know your business inside and out. From customer support to internal knowledge bases, our assistants provide instant, accurate responses.",
      features: [
        "Private GPT instances with RAG",
        "Multilingual support (50+ languages)",
        "Sentiment analysis & human hand-off",
      ],
      image: null,
      imagePosition: "right",
    },
    {
      icon: "language",
      title: "SEO & Social Systems",
      description:
        "Dominate search results and social feeds with AI-assisted content distribution. We build systems that automate the creation and scheduling of high-ranking content.",
      features: [
        "Programmatic SEO for thousands of keywords",
        "AI-powered social media repurposing",
        "Competitor movement tracking",
      ],
      image: null,
      imagePosition: "left",
    },
  ];

  const softwarePackages = [
    {
      title: "Business Websites",
      price: "£950",
      description: "Best for professional service providers and startups.",
      features: ["Custom UI/UX Design", "Mobile Optimized", "CMS Integration"],
    },
    {
      title: "Portals",
      price: "£2,500",
      description: "Best for client management and internal dashboards.",
      features: [
        "Secure Auth Systems",
        "User Roles & Permissions",
        "Custom Databases",
      ],
    },
    {
      title: "Custom Software",
      price: "£4,500",
      description: "Best for workflow automation and unique operations.",
      features: [
        "AI Model Integration",
        "Third-party API Sync",
        "Advanced Reporting",
      ],
      highlighted: true,
    },
    {
      title: "SaaS Platforms",
      price: "£7,500",
      description: "Best for software products and subscription apps.",
      features: [
        "Payment Gateways (Stripe)",
        "Multi-tenant Architecture",
        "Scalable Infrastructure",
      ],
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 overflow-hidden mesh-gradient dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <SectionHeader
            badge="Innovative Digital Agency"
            title={
              <>
                Next-Generation Digital <br /> &{" "}
                <span className="text-primary">AI Services</span>
              </>
            }
            description="We provide end-to-end digital growth solutions, enhanced with AI automation, virtual assistants, and intelligent agents."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" variant="primary">
              View Pricing Guide
            </Button>
            <Button size="lg" variant="secondary">
              Our Process
            </Button>
          </div>
        </div>
      </header>

      {/* Service Blocks */}
      <main className="py-20 space-y-32">
        {services.map((service, index) => (
          <section key={index} className="max-w-7xl mx-auto px-6">
            <div
              className={`grid md:grid-cols-2 gap-16 items-center ${
                service.imagePosition === "left" ? "" : "md:grid-flow-dense"
              }`}
            >
              <div
                className={
                  service.imagePosition === "right" ? "order-2 md:order-1" : ""
                }
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="material-icons text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="lg">
                  {service.title.includes("Lead") && "Get More Qualified Leads"}
                  {service.title.includes("Automation") &&
                    "Automate My Business"}
                  {service.title.includes("Assistant") &&
                    "Deploy an AI Assistant"}
                  {service.title.includes("SEO") && "Scale My Visibility"}
                </Button>
              </div>

              <div
                className={`relative ${
                  service.imagePosition === "right" ? "order-1 md:order-2" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-primary/5 rounded-3xl ${
                    service.imagePosition === "left" ? "rotate-3" : "-rotate-3"
                  } scale-105`}
                ></div>
                <div className="relative rounded-3xl shadow-2xl w-full h-[400px] bg-slate-300 dark:bg-slate-700"></div>
              </div>
            </div>
          </section>
        ))}

        {/* Web & Custom Software Pricing */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Engineering Suite
                </span>
                <div className="w-8 h-px bg-primary"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                Web & Custom Software
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                High-end development tailored to your enterprise needs. From
                sleek business sites to complex SaaS platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {softwarePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl flex flex-col group ${
                    pkg.highlighted
                      ? "bg-white dark:bg-slate-800 border-2 border-primary/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:border-primary relative scale-105 z-10"
                      : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50"
                  } transition-all`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-slate-400 text-sm font-medium">
                      from
                    </span>
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="material-icons text-primary text-xs mt-0.5">
                          done
                        </span>
                        <span
                          className={pkg.highlighted ? "font-semibold" : ""}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <Button icon="calendar_today" iconPosition="left" size="lg">
                Request a Technical Discovery Call
              </Button>
              <Button
                variant="secondary"
                icon="calculate"
                iconPosition="left"
                size="lg"
              >
                Get a Project Cost Estimate
              </Button>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-icons text-white text-3xl">
                    verified_user
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-6">
                  Responsible AI & Compliance
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We don't just build fast; we build safe. All our solutions
                  adhere to strict data protection regulations and ethical AI
                  guidelines.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  {["GDPR Compliant", "99.9% Accuracy", "Encrypted Data"].map(
                    (badge, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                      >
                        <span className="material-icons text-primary text-sm">
                          verified
                        </span>
                        <span className="text-white text-sm font-bold">
                          {badge}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  View Our Ethics Charter
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "SOC2", subtitle: "Ready Architecture" },
                  { title: "ISO", subtitle: "27001 Standard" },
                  { title: "100%", subtitle: "Ownership" },
                  { title: "24/7", subtitle: "Monitoring" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center"
                  >
                    <div className="text-3xl font-extrabold text-white mb-2">
                      {stat.title}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                      {stat.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
