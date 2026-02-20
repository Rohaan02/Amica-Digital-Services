import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

const ServiceDetail = () => {
  const { slug } = useParams();

  // All service data in one object
  const servicesData = {
    "ai-lead-generation": {
      serviceName: "AI Lead Generation & Growth Marketing",
      badge: "Intelligent Growth",
      tagline: (
        <>
          Leads That <span className="text-primary">Convert</span> – Not Just
          Traffic
        </>
      ),
      description: (
        <>
          In 2026, traffic is easy. Conversion is not. <br />
          Most businesses are running ads, posting content, and hoping something
          works. But hope is not a strategy.
        </>
      ),
      heroImage: null,
      features: [
        {
          icon: "person_search",
          title: "Identify high-intent audiences",
          description:
            "AI-powered targeting that finds people actively searching for solutions like yours.",
        },
        {
          icon: "ads_click",
          title: "Engage with precision targeting",
          description:
            "Reach the right people at the right time with messaging that resonates.",
        },
        {
          icon: "verified",
          title: "Qualify them automatically",
          description:
            "Intelligent scoring separates ready-to-buy leads from browsers.",
        },
        {
          icon: "route",
          title: "Route to your team ready to convert",
          description:
            "Pre-qualified leads delivered directly to your sales team with full context.",
        },
      ],
      whatWeOffer: {
        title: "What Makes Us Different?",
        subtitle: "We don't just 'run ads.' We build an integrated system:",
        items: [
          "AI-assisted Google & Meta campaigns",
          "Conversion-optimised landing funnels",
          "Lead scoring & behaviour tracking",
          "Automated follow-up sequences",
          "CRM integration",
          "Revenue attribution tracking",
        ],
      },
      forWhom: [
        {
          title: "For healthcare providers, this means:",
          points: [
            "Fewer unqualified enquiries",
            "Faster patient or staff acquisition",
            "Measurable ROI",
          ],
        },
        {
          title: "For service businesses:",
          points: [
            "Predictable lead flow",
            "Automated follow-ups",
            "Higher close rates",
          ],
        },
      ],
      primaryCTA: "Get More Qualified Leads",
    },

    "ai-automation": {
      serviceName: "AI Automation & CRM Systems",
      badge: "AI Automation & CRM Systems",
      tagline: (
        <>
          Stop Managing Tasks.{" "}
          <span className="text-primary">Start Running a System</span>.
        </>
      ),
      description:
        "In UK healthcare and service sectors, the biggest challenge in 2026 is  not demand — it's operational overload.",
      heroImage: null,
      features: [
        {
          icon: "autorenew",
          title: "End-to-end enquiry automation",
          description:
            "Automatically capture, respond to, nurture, and convert enquiries without manual follow-up.",
        },
        {
          icon: "event_available",
          title: "Automated appointment booking",
          description:
            "Enable clients to view real-time availability and schedule appointments instantly.",
        },
        {
          icon: "device_hub",
          title: "CRM pipeline design",
          description:
            "Custom-built sales pipelines that track, organise, and optimise every opportunity.",
        },
        {
          icon: "person_add_alt_1",
          title: "Staff onboarding workflows",
          description:
            "Automate contracts, document collection, task assignments, and compliance steps for new hires.",
        },
        {
          icon: "school",
          title: "Training tracking systems",
          description:
            "Monitor staff certifications, course progress, and ongoing training requirements in one system.",
        },
        {
          icon: "psychology",
          title: "AI-powered reminders and notifications",
          description:
            "Smart, behaviour-based alerts and follow-ups to keep prospects and teams on track.",
        },
        {
          icon: "rule",
          title: "Lead qualification & routing logic",
          description:
            "Automatically score, segment, and assign leads to the right team member based on predefined criteria.",
        },
      ],
      whatWeOffer: {
        title: "We design intelligent automation systems",
        subtitle: "Using AI, CRM architecture, and workflow engineering.",
        items: [
          "Manual follow-ups.",
          "Slow onboarding.",
          "Compliance paperwork.",
          "Staff admin.",
          "Missed enquiries.",
        ],
      },
      benefits: {
        title: "Our automation reduces:",
        items: [
          "Admin workload",
          "Response times",
          "Human error",
          "Compliance risk",
        ],
        footer: "Built by operators who understand what delays actually cost.",
      },
      primaryCTA: "Automate My Business",
    },

    "ai-virtual-assistants": {
      serviceName: "AI Virtual Assistants & Intelligent Agents",
      badge: "24/7 Intelligence",
      tagline: (
        <>
          24/7 Digital Staff That{" "}
          <span className="text-primary">Work Without Burnout</span>
        </>
      ),
      description:
        "Healthcare businesses, clinics, and agencies lose revenue simply because nobody responds fast enough.",
      heroImage: null,
      features: [
        {
          icon: "chat",
          title: "Answer FAQs instantly",
          description: "Provide immediate responses to common questions 24/7.",
        },
        {
          icon: "person_search",
          title: "Pre-qualify patients or job candidates",
          description:
            "Filter and assess prospects before they reach your team.",
        },
        {
          icon: "description",
          title: "Collect required documents",
          description:
            "Automatically gather forms, certifications, and paperwork.",
        },
        {
          icon: "calendar_today",
          title: "Book appointments",
          description: "Schedule meetings directly without human intervention.",
        },
        {
          icon: "swap_horiz",
          title: "Human handover controls",
          description:
            "Seamlessly transfer complex cases to your team with full context.",
        },
      ],
      deployment: {
        title: "We deploy assistants across:",
        channels: [
          "Website chat",
          "WhatsApp",
          "Email",
          "Social media messaging",
          "Internal operations",
        ],
      },
      additionalNote:
        "Designed with responsible AI principles and human handover controls. This is not hype AI. It's structured, controlled automation built for real businesses.",
      primaryCTA: "Deploy an AI Assistant",
    },

    "seo-content-social": {
      serviceName: "SEO & Content Systems",
      badge: "Organic Growth",
      tagline: (
        <>
          Visibility That{" "}
          <span className="text-primary">Compounds Over Time</span>
        </>
      ),
      description:
        "Most SEO agencies chase keywords. We build authority systems. Using AI-enhanced keyword intelligence and structured content strategies.",
      heroImage: null,
      features: [
        {
          icon: "search",
          title: "Identify high-value search opportunities",
          description:
            "Find keywords your competitors are missing that drive real business.",
        },
        {
          icon: "web",
          title: "Build conversion-focused landing pages",
          description:
            "Pages designed to rank and convert visitors into customers.",
        },
        {
          icon: "article",
          title: "Develop trust-building content",
          description: "Establish authority and credibility in your industry.",
        },
        {
          icon: "speed",
          title: "Optimise technical performance",
          description: "Fast, mobile-friendly sites that search engines love.",
        },
        {
          icon: "analytics",
          title: "Track ranking and engagement impact",
          description: "Measure exactly what's working and what's not.",
        },
      ],
      forWhom: [
        {
          title: "For UK healthcare providers:",
          points: [
            "Local visibility",
            "Trust signals",
            "Authority positioning",
            "Reputation strength",
          ],
        },
        {
          title: "For other sectors:",
          points: [
            "Sustainable inbound traffic",
            "Lower ad dependency",
            "Long-term brand equity",
          ],
        },
      ],
      primaryCTA: "Grow My Online Presence",
    },

    "websites-custom-software": {
      serviceName: "Web & Custom Software",
      badge: "Built to Scale",
      tagline: (
        <>
          Engineered for <span className="text-primary">Performance</span>
        </>
      ),
      description:
        "Your website is not just a brochure. It is your conversion engine.",
      heroImage: null,
      features: [
        {
          icon: "web",
          title: "High-performance business websites",
          description:
            "Fast, conversion-focused sites that turn visitors into customers.",
        },
        {
          icon: "lock",
          title: "Secure client portals",
          description:
            "Protected access for clients to view documents, data, and resources.",
        },
        {
          icon: "dashboard",
          title: "Staff dashboards",
          description:
            "Internal tools that give your team visibility and control.",
        },
        {
          icon: "code",
          title: "Custom software tools",
          description:
            "Bespoke solutions built around your unique business processes.",
        },
        {
          icon: "cloud_done",
          title: "SaaS & Marketplace systems",
          description:
            "Scalable platforms with payments, user management, and more.",
        },
      ],
      builtWith: {
        title: "All built with:",
        items: [
          "Scalable backend architecture",
          "Secure authentication",
          "Role-based access controls",
          "Automation integrations",
          "API connectivity",
        ],
        footer:
          "For healthcare clients, security and compliance awareness is embedded from the start.",
      },
      pricingPackages: [
        {
          title: "Business Websites",
          price: "£950",
          features: [
            "Conversion-focused design",
            "CMS setup",
            "Performance optimisation",
            "Analytics & tracking",
          ],
        },
        {
          title: "Client Portals & Dashboards",
          price: "£2,500",
          features: [
            "Secure login & user roles",
            "Data dashboards",
            "CRM or system integrations",
            "Access & permission controls",
          ],
        },
        {
          title: "Custom Software & Integrations",
          price: "£4,500",
          features: [
            "Bespoke functionality",
            "API integrations",
            "Workflow automation",
            "Scalability & security planning",
          ],
          highlighted: true,
        },
        {
          title: "SaaS & Marketplace Support",
          price: "£7,500+",
          description: "Project-based or retainer.",
          features: [
            "Platform architecture",
            "Feature development",
            "Optimisation & scaling",
            "Ongoing technical support",
          ],
        },
      ],
      pricingNote:
        "We do not offer 'one-size-fits-all' development. Final pricing is confirmed after a technical discovery session.",
      primaryCTA: "Request a Technical Discovery Call",
      secondaryCTA: "Get a Project Cost Estimate",
    },

    "responsible-ai-compliance": {
      serviceName: "Responsible AI & Compliance",
      badge: "Ethical AI",
      tagline: (
        <>
          AI Done <span className="text-primary">Properly</span> – Not
          Recklessly
        </>
      ),
      description:
        "2026 UK businesses face: Data sensitivity. Compliance pressure. AI misuse risks. Reputational damage concerns. We help organisations adopt AI responsibly.",
      heroImage: null,
      features: [
        {
          icon: "policy",
          title: "AI usage frameworks",
          description:
            "Clear policies on when and how to deploy AI in your business.",
        },
        {
          icon: "security",
          title: "Data handling best practice guidance",
          description:
            "Protect customer and staff information with proper protocols.",
        },
        {
          icon: "verified_user",
          title: "Consent-aware automation",
          description:
            "Systems that respect user preferences and privacy choices.",
        },
        {
          icon: "admin_panel_settings",
          title: "Role-based system controls",
          description: "Granular permissions ensure only authorized access.",
        },
        {
          icon: "support_agent",
          title: "Human override safeguards",
          description:
            "Always maintain human decision-making where it matters.",
        },
      ],
      additionalNote:
        "We are not just technologists. We understand operational and regulatory realities.",
      primaryCTA: "Discuss Compliance & AI",
    },
  };

  // Get the service data based on the URL slug
  const service = servicesData[slug];

  // If service doesn't exist, redirect to services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-accent dark:text-gray-200">
      <Navigation />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link
              className="hover:text-primary transition-colors"
              to="/services"
            >
              Services
            </Link>
            <span className="material-icons text-sm">chevron_right</span>
            <span className="text-primary font-semibold">
              {service.serviceName}
            </span>
          </nav>
        </div>

        {/* Hero Split */}
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {service.badge && (
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                {service.badge}
              </span>
            )}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8">
              {service.tagline}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us">
                <Button variant="primary" size="xl">
                  {service.primaryCTA}
                </Button>
              </Link>
              {service.secondaryCTA && (
                <Link to="/contact-us">
                  <Button variant="secondary" size="xl">
                    {service.secondaryCTA}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {service.heroImage ? (
                <img
                  alt={service.serviceName}
                  className="w-full h-[500px] object-cover"
                  src={service.heroImage}
                />
              ) : (
                <div className="w-full h-[500px] bg-slate-300 dark:bg-slate-700"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* What We Offer / What Makes Us Different */}
        {service.whatWeOffer && (
          <section className="bg-primary/5 dark:bg-primary/10 py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {service.whatWeOffer.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {service.whatWeOffer.subtitle}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.whatWeOffer.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Feature Grid: What's Included */}
        <section className="bg-white dark:bg-background-dark/50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                What We Build
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to transform your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-background-light dark:bg-slate-800/50 rounded-xl border border-primary/5 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        {service.forWhom && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                {service.forWhom.map((segment, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {segment.title}
                    </h3>
                    <ul className="space-y-3">
                      {segment.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="material-icons text-primary text-sm">
                            arrow_forward
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deployment Channels */}
        {service.deployment && (
          <section className="py-16 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {service.deployment.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {service.deployment.channels.map((channel, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-full font-semibold"
                  >
                    {channel}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {service.benefits && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {service.benefits.title}
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {service.benefits.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                  >
                    <span className="material-icons text-primary text-3xl mb-2">
                      trending_down
                    </span>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg italic text-slate-600 dark:text-slate-400">
                {service.benefits.footer}
              </p>
            </div>
          </section>
        )}

        {/* Built With Section */}
        {service.builtWith && (
          <section className="py-16 bg-primary/5 dark:bg-primary/10">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {service.builtWith.title}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                {service.builtWith.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-slate-600 dark:text-slate-400 mt-6">
                {service.builtWith.footer}
              </p>
            </div>
          </section>
        )}

        {/* Pricing Section (Optional - for websites service) */}
        {service.pricingPackages && (
          <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">
                    Pricing Guide
                  </span>
                  <div className="w-8 h-px bg-primary"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  Indicative Investment
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Every project is different. The figures below are guides only
                  and depend on scope, integrations, and complexity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {service.pricingPackages.map((pkg, index) => (
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
                    <h3 className="text-xl font-bold mb-2 min-h-16">
                      {pkg.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-slate-400 text-sm font-medium">
                        from
                      </span>
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.description && (
                      <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                        {pkg.description}
                      </p>
                    )}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
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

              {service.pricingNote && (
                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-6 max-w-3xl mx-auto mb-12">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-amber-600 dark:text-amber-500 text-sm mt-0.5">
                      info
                    </span>
                    <div>
                      <h5 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">
                        Important Note
                      </h5>
                      <p className="text-xs text-amber-800 dark:text-amber-300">
                        {service.pricingNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Additional Note */}
        {service.additionalNote && (
          <section className="py-12 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-blue-600 dark:text-blue-400">
                    info
                  </span>
                  <p className="text-sm text-blue-900 dark:text-blue-200 italic font-semibold">
                    {service.additionalNote}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
