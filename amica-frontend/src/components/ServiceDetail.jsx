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
          Leads that <span className="text-primary">convert</span> — not just
          traffic.
        </>
      ),
      description:
        "Deploy AI-powered campaigns that identify, engage, and qualify your ideal customers with precision targeting and automated follow-ups that actually work.",
      heroImage: null,
      features: [
        {
          icon: "ads_click",
          title: "AI-assisted Google & social ads",
          description:
            "Smart campaign optimization that continuously learns and improves ROI across all your paid channels.",
        },
        {
          icon: "trending_up",
          title: "Conversion-optimised funnels",
          description:
            "Data-driven landing pages and conversion paths designed to turn visitors into qualified leads.",
        },
        {
          icon: "search",
          title: "SEO with AI keyword intelligence",
          description:
            "Advanced keyword research and content optimization powered by AI to dominate search rankings.",
        },
        {
          icon: "verified",
          title: "Lead quality scoring & tracking",
          description:
            "Intelligent lead scoring that helps your team focus on prospects most likely to convert.",
        },
        {
          icon: "hub",
          title: "Multi-channel attribution",
          description:
            "Complete visibility into which marketing touchpoints drive real revenue for your business.",
        },
      ],
      workflow: {
        description: "A systematic approach to generating qualified leads.",
        steps: [
          {
            icon: "radar",
            title: "Attract",
            description:
              "AI identifies and targets your ideal customer profile.",
          },
          {
            icon: "person_search",
            title: "Engage",
            description:
              "Personalized messaging captures attention and interest.",
          },
          {
            icon: "fact_check",
            title: "Qualify",
            description:
              "Automated scoring ensures only quality leads reach your team.",
          },
          {
            icon: "handshake",
            title: "Convert",
            description: "Smart nurturing and follow-ups close the deal.",
          },
        ],
      },
      primaryCTA: "Get More Qualified Leads",
      //   secondaryCTA: "Schedule a Strategy Call",
    },

    "ai-automation": {
      serviceName: "AI Automation & CRM Systems",
      badge: "Intelligent Automation",
      tagline: (
        <>
          Automate the work your team{" "}
          <span className="text-primary">shouldn't be doing</span>.
        </>
      ),
      description:
        "Eliminate repetitive tasks and streamline operations with intelligent workflows that integrate seamlessly with your existing CRM and business systems.",
      heroImage: null,
      features: [
        {
          icon: "integration_instructions",
          title: "CRM setup (HubSpot, Zoho, custom)",
          description:
            "Complete CRM implementation and configuration tailored to your sales process and workflows.",
        },
        {
          icon: "send",
          title: "Automated follow-ups (email / WhatsApp*)",
          description:
            "Smart follow-up sequences that engage prospects at the right time with the right message.",
        },
        {
          icon: "calendar_today",
          title: "Booking & scheduling systems",
          description:
            "Automated appointment scheduling that syncs with your calendar and sends reminders.",
        },
        {
          icon: "timeline",
          title: "Pipeline automation & reporting",
          description:
            "Real-time pipeline updates and automated reporting dashboards for better visibility.",
        },
        {
          icon: "settings_suggest",
          title: "Internal workflow optimisation",
          description:
            "Streamline internal processes and eliminate bottlenecks with intelligent automation.",
        },
      ],
      workflow: {
        description: "How automation transforms your operations.",
        steps: [
          {
            icon: "input",
            title: "Capture",
            description: "Data flows in from multiple channels automatically.",
          },
          {
            icon: "psychology",
            title: "Process",
            description: "AI routes, enriches, and categorizes information.",
          },
          {
            icon: "sync",
            title: "Sync",
            description: "Updates flow to your CRM and team in real-time.",
          },
          {
            icon: "notifications_active",
            title: "Act",
            description:
              "Automated follow-ups and notifications keep things moving.",
          },
        ],
      },
      primaryCTA: "Automate My Business",
      //   secondaryCTA: "Book a Discovery Call",
    },

    "ai-virtual-assistants": {
      serviceName: "AI Virtual Assistants & AI Agents",
      badge: "24/7 Intelligence",
      tagline: (
        <>
          24/7 intelligent <span className="text-primary">digital staff</span>.
        </>
      ),
      description:
        "Deploy custom-trained AI assistants that handle customer support, qualify leads, and automate repetitive tasks—available around the clock in multiple languages.",
      heroImage: null,
      features: [
        {
          icon: "chat",
          title: "Website AI chat assistants",
          description:
            "Intelligent chatbots trained on your business that provide instant, accurate responses to customer queries.",
        },
        {
          icon: "person_search",
          title: "Lead qualification agents",
          description:
            "AI agents that ask the right questions, assess prospect fit, and route qualified leads to your sales team.",
        },
        {
          icon: "support_agent",
          title: "Customer support automation",
          description:
            "Handle 80% of routine inquiries automatically while maintaining your brand voice and service quality.",
        },
        {
          icon: "translate",
          title: "Multilingual AI agents (UK / EU / UAE)",
          description:
            "Serve customers in English, Italian, Arabic, and more—with perfect fluency and cultural awareness.",
        },
        {
          icon: "swap_horiz",
          title: "Human handover when required",
          description:
            "Seamless escalation to human agents for complex issues, with full context transfer.",
        },
      ],
      workflow: {
        description: "How AI assistants handle customer interactions.",
        steps: [
          {
            icon: "forum",
            title: "Initial Contact",
            description:
              "Customer reaches out via chat, email, or social media.",
          },
          {
            icon: "psychology",
            title: "AI Processing",
            description: "AI analyzes query, intent, and customer history.",
          },
          {
            icon: "check_circle",
            title: "Response",
            description:
              "Instant, accurate answer or action based on training.",
          },
          {
            icon: "people",
            title: "Handover",
            description:
              "Complex issues escalated to humans with full context.",
          },
        ],
      },
      additionalNote: "Ethical. Transparent. Controlled.",
      primaryCTA: "Deploy an AI Assistant",
      //   secondaryCTA: "View Demo",
    },

    "websites-custom-software": {
      serviceName: "Websites, Web Portals & Custom Software",
      badge: "Built to Scale",
      tagline: (
        <>
          Engineered for <span className="text-primary">performance</span>.
        </>
      ),
      description:
        "Fast, secure, and conversion-focused digital platforms — designed around your business processes, not templates.",
      heroImage: null,
      features: [
        {
          icon: "web",
          title: "High-performance business websites",
          description:
            "Lightning-fast, conversion-optimized websites that turn visitors into customers.",
        },
        {
          icon: "dashboard",
          title: "Secure client portals & dashboards",
          description:
            "Custom portals with role-based access, data visualization, and seamless integrations.",
        },
        {
          icon: "integration_instructions",
          title: "Custom software & system integrations",
          description:
            "Bespoke solutions that connect your tools and automate your unique workflows.",
        },
        {
          icon: "cloud_done",
          title: "SaaS & marketplace platforms",
          description:
            "Scalable platforms built for growth with payment processing, user management, and more.",
        },
        {
          icon: "verified_user",
          title: "Role-based access control & security hardening",
          description:
            "Enterprise-grade security with granular permissions and compliance-ready architecture.",
        },
      ],
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

    "seo-content-social": {
      serviceName: "SEO, Content & Social Media Systems",
      badge: "Organic Growth",
      tagline: (
        <>
          Visibility that <span className="text-primary">compounds</span>.
        </>
      ),
      description:
        "Build sustainable organic reach with AI-assisted content strategies, technical SEO, and social media systems that work together.",
      heroImage: null,
      features: [
        {
          icon: "search",
          title: "Technical & on-page SEO",
          description:
            "Complete technical optimization and on-page SEO to ensure search engines can find and rank your content.",
        },
        {
          icon: "article",
          title: "AI-assisted content strategy",
          description:
            "Data-driven content planning and creation powered by AI to rank for high-value keywords.",
        },
        {
          icon: "share",
          title: "Social media frameworks",
          description:
            "Systematic approach to social media that builds engaged communities and drives traffic.",
        },
        {
          icon: "autorenew",
          title: "Content repurposing systems",
          description:
            "Turn one piece of content into multiple formats to maximize reach and efficiency.",
        },
        {
          icon: "workspace_premium",
          title: "Authority & trust building",
          description:
            "Strategic link building and brand mentions that establish your authority in your industry.",
        },
      ],
      workflow: {
        description: "Our systematic approach to organic growth.",
        steps: [
          {
            icon: "analytics",
            title: "Research",
            description: "Keyword research and competitor analysis.",
          },
          {
            icon: "edit",
            title: "Create",
            description: "AI-assisted content creation and optimization.",
          },
          {
            icon: "cloud_upload",
            title: "Publish",
            description: "Strategic publishing across owned channels.",
          },
          {
            icon: "trending_up",
            title: "Amplify",
            description: "Social distribution and authority building.",
          },
        ],
      },
      primaryCTA: "Grow My Online Presence",
      //   secondaryCTA: "Get SEO Audit",
    },

    "responsible-ai-compliance": {
      serviceName: "Responsible AI & Digital Compliance",
      badge: "Ethical AI",
      tagline: (
        <>
          AI done <span className="text-primary">right</span>.
        </>
      ),
      description:
        "Navigate the complexities of AI implementation with confidence. We help you build ethical, compliant, and transparent AI systems that protect your business and your customers.",
      heroImage: null,
      features: [
        {
          icon: "policy",
          title: "AI usage policies",
          description:
            "Clear, practical policies that guide responsible AI implementation across your organization.",
        },
        {
          icon: "verified_user",
          title: "Consent-aware automation",
          description:
            "Systems designed with privacy by default, respecting user consent and data preferences.",
        },
        {
          icon: "gavel",
          title: "GDPR & data best-practice guidance",
          description:
            "Expert guidance on compliance requirements and data protection best practices.",
        },
        {
          icon: "health_and_safety",
          title: "Regulated-industry awareness",
          description:
            "Specialized knowledge for healthcare, finance, legal, and other regulated sectors.",
        },
        {
          icon: "balance",
          title: "Ethical AI frameworks",
          description:
            "Implementation frameworks that prioritize fairness, transparency, and accountability.",
        },
      ],
      additionalNote: "Guidance, not legal certification.",
      primaryCTA: "Discuss Compliance & AI",
      //   secondaryCTA: "Schedule Consultation",
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
                {service.secondaryCTA && (
                  <Button variant="secondary" size="xl">
                    {service.secondaryCTA}
                  </Button>
                )}
              </Link>
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

        {/* Feature Grid: What's Included */}
        <section className="bg-white dark:bg-background-dark/50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                What's Included
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

        {/* Additional Note (for compliance service) */}
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
