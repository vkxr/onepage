/* ── One-page website for Veyber Services Pvt Ltd ── */
import Image from "next/image";

const services = [
  {
    label: "ECOMMERCE",
    title: "E-commerce Development",
    subtitle: "Build high-performance online stores that convert visitors into customers.",
    items: [
      "Shopify / WooCommerce Development",
      "Custom eCommerce Websites",
      "Payment Gateway Integration",
      "Mobile-Optimized Stores",
    ],
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&auto=format&fit=crop&q=80",
  },
  {
    label: "MARKETPLACE",
    title: "E-commerce Account Management",
    subtitle: "We manage and optimise your selling platforms for maximum growth.",
    items: [
      "Amazon / Flipkart Account Management",
      "Product Listing Optimization",
      "Sales & Performance Tracking",
      "Order & Inventory Management",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80",
  },
  {
    label: "SOCIAL MEDIA",
    title: "Social Media Handling",
    subtitle: "Strengthen your brand presence across all major platforms.",
    items: [
      "Content Creation & Posting",
      "Audience Engagement",
      "Brand Strategy",
      "Growth Campaigns",
    ],
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&auto=format&fit=crop&q=80",
  },
  {
    label: "DIGITAL MARKETING",
    title: "Digital Marketing Services",
    subtitle: "Drive targeted traffic, leads, and sales with proven strategies.",
    items: [
      "SEO (Search Engine Optimization)",
      "Google Ads & PPC Campaigns",
      "Social Media Marketing",
      "Lead Generation Campaigns",
    ],
    img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1400&auto=format&fit=crop&q=80",
  },
  {
    label: "CONSULTANCY",
    title: "Business Consultancy",
    subtitle: "Make smarter decisions with expert guidance and market insights.",
    items: [
      "Business Growth Strategy",
      "Market Research & Analysis",
      "Revenue Optimization",
      "Startup Consulting",
    ],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=80",
  },
];

const whyCards = [
  {
    label: "RESULTS",
    title: "Result-Driven Approach",
    desc: "We focus on measurable growth, not just promises. Every strategy is tied to real, trackable business outcomes.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
  },
  {
    label: "DATA",
    title: "Data-Based Strategies",
    desc: "Every decision is backed by insights and analytics. We let the numbers guide execution for maximum ROI.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
  },
  {
    label: "LOCAL",
    title: "Gujarat Expertise + Global Vision",
    desc: "We understand the local Gujarat market while delivering global-level digital solutions for modern growth.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
  },
  {
    label: "SCALABLE",
    title: "Fast & Scalable Solutions",
    desc: "Inspired by modern digital platforms, we build systems designed to scale quickly without missing a beat.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop&q=80",
  },
  {
    label: "SUPPORT",
    title: "Dedicated Support",
    desc: "We work as your growth partner, not just a service provider. Your success drives everything we do.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
  },
  {
    label: "ALL-IN-ONE",
    title: "All-in-One Digital Solutions",
    desc: "From development to marketing — everything under one roof for seamless, integrated execution.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
  },
];

const processSteps = [
  {
    step: "Step one",
    title: "Initial\nConsultation",
    desc: "Reach out through phone, WhatsApp, or our website. We understand your goals and current challenges.",
    cta: "Get started",
    side: "right",
  },
  {
    step: "Step two",
    title: "Strategy\n& Audit",
    desc: "Our experts analyse your current digital presence and craft a tailored growth strategy for your business.",
    cta: "Continue",
    side: "left",
  },
  {
    step: "Step three",
    title: "Transparent\nProposal",
    desc: "You receive a clear scope with transparent pricing — no hidden costs, no surprises before we proceed.",
    cta: "Approve",
    side: "right",
  },
  {
    step: "Step four",
    title: "Expert\nExecution",
    desc: "We execute the strategy using proven techniques, cutting-edge tools, and dedicated ongoing support.",
    cta: "Complete",
    side: "left",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered", sub: "Across Gujarat & India" },
  { value: "3X", label: "Average Revenue Growth", sub: "For our eCommerce clients" },
  { value: "50+", label: "Brands Transformed", sub: "From startups to enterprises" },
];

const contactDetails = [
  { icon: "location_on", label: "Location", value: "Gujarat, India" },
  { icon: "call", label: "Call Us", value: "+91 6355183655" },
  { icon: "mail", label: "Email", value: "info@veyber.co.in" },
  { icon: "language", label: "Website", value: "veyber.co.in" },
];

/* ── PAGE ── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════ NAV ════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 bg-[#111]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="Veyber" className="h-6 sm:h-7" />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {(["About", "Services", "Why Us", "Contact"] as const).map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-white/55 hover:text-white transition-colors text-sm font-medium"
              >
                {l}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex group relative items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg,#ffffff 0%,#e0e0e0 100%)", color: "#111111", boxShadow: "0 2px 16px rgba(255,255,255,0.15)" }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />
            <span className="relative z-10">Get Free Consultation</span>
            <span className="relative z-10 w-5 h-5 rounded-full bg-black/10 flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>arrow_forward</span>
            </span>
          </a>
          <button className="md:hidden text-white p-1" aria-label="Open menu">
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>menu</span>
          </button>
        </div>
      </nav>

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="relative h-screen min-h-[560px] sm:min-h-[640px] flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&auto=format&fit=crop&q=80"
          alt="Digital marketing and eCommerce growth strategy — Veyber Services Pvt Ltd, Gujarat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-5 sm:gap-7">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/70"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Digital Growth Partner · Gujarat, India
          </div>

          {/* Headline */}
          <h1 className="font-black font-headline text-white text-center" style={{ letterSpacing: "-0.025em" }}>
            <span className="block" style={{ fontSize: "clamp(2.25rem, 7.5vw, 5.75rem)", lineHeight: 1.0 }}>
              Scale Your Digital Empire
            </span>
            <span className="block text-white/50 font-bold mt-2 sm:mt-3" style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.6rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              with Expert Solutions Across Gujarat
            </span>
          </h1>

          {/* Thin rule */}
          <div className="w-14 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />

          {/* Subtext */}
          <p className="text-white/55 text-base sm:text-lg md:text-xl max-w-xl mx-auto text-center" style={{ lineHeight: 1.8 }}>
            We help businesses grow faster, smarter, and more profitably with powerful{" "}
            <span className="text-white/85 font-semibold">eCommerce</span>,{" "}
            <span className="text-white/85 font-semibold">digital marketing</span>, and{" "}
            <span className="text-white/85 font-semibold">business consultancy</span>{" "}
            solutions tailored for modern growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-1 w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_45px_rgba(255,255,255,0.3)]"
              style={{ background: "linear-gradient(135deg,#ffffff 0%,#e8e8e8 100%)", color: "#111111" }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
              <span className="relative z-10">Start Your Growth Journey</span>
              <span className="relative z-10 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_forward</span>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.35)", backdropFilter: "blur(8px)" }}
            >
              <span className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <span className="material-symbols-outlined text-white" style={{ fontSize: "14px" }}>call</span>
              </span>
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/35">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined text-sm animate-bounce-subtle">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ════════════════════════ STATS — light ════════════════════════ */}
      <section className="bg-[#d5daf0] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-20 items-end">
            {/* Left: headline */}
            <div className="space-y-4 sm:space-y-5">
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "#111111", opacity: 0.45 }}
              >
                Proven Track Record
              </p>
              <h2
                className="font-headline text-[#111111] leading-[1.15] tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 800 }}
              >
                Why Gujarat<br />trusts us
              </h2>
            </div>

            {/* Right: description + CTAs */}
            <div className="space-y-6 sm:space-y-8 pb-2">
              <p
                className="text-base sm:text-lg leading-[1.85] font-medium"
                style={{ color: "#111111", opacity: 0.65 }}
              >
                Years of reliable service, hundreds of satisfied businesses,
                and a commitment to quality that never wavers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-85 active:scale-95"
                  style={{ background: "#111111" }}
                >
                  Learn more
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-[#111111]/70 hover:text-[#111111] transition-all duration-200"
                >
                  Our services
                  <span className="w-7 h-7 rounded-full flex items-center justify-center bg-[#111]/8 border border-[#111]/12">
                    <span className="material-symbols-outlined text-[#111111]" style={{ fontSize: "14px" }}>arrow_forward</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#e8ecf6] rounded-2xl sm:rounded-3xl p-6 sm:p-9 flex flex-col gap-4 sm:gap-6"
                style={{ border: "1px solid rgba(17,17,17,0.07)", boxShadow: "0 2px 20px rgba(17,17,17,0.04)" }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#111111", opacity: 0.55 }}
                >
                  {s.label}
                </p>
                <div style={{ height: "1px", background: "rgba(17,17,17,0.08)" }} />
                <div className="flex justify-between items-end gap-4">
                  <span
                    className="font-black font-headline text-[#111111] tracking-tighter leading-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  >
                    {s.value}
                  </span>
                  <p
                    className="text-xs text-right leading-[1.6] max-w-[120px] font-medium"
                    style={{ color: "#111111", opacity: 0.5 }}
                  >
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════ ABOUT — dark ════════════════════════ */}
      <section id="about" className="bg-[#111111] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-white/45 text-xs font-bold tracking-[0.2em] uppercase mb-8 sm:mb-14">WHO WE ARE</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Copy */}
            <div className="space-y-6 sm:space-y-7">
              <h2
                className="font-headline text-white leading-[1.15] tracking-tighter"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", fontWeight: 800 }}
              >
                Built on<br />integrity<br />and expertise
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-[1.85]">
                At Veyber Services Pvt Ltd, we don&apos;t just offer services — we build scalable growth
                systems that drive real business results. We are a results-driven digital solutions
                company helping businesses across Gujarat transform their online presence and maximise
                profitability.
              </p>
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-[1.85]">
                From startups to established enterprises, we empower brands with innovative solutions
                in eCommerce, digital marketing, and business consulting.
              </p>
              <ul className="space-y-3 sm:space-y-3.5 pt-1">
                {[
                  "Transparent pricing with no surprises",
                  "Data-driven strategies backed by analytics",
                  "Dedicated account support from day one",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/75 text-sm">
                    <span className="material-symbols-outlined text-white/50 flex-shrink-0" style={{ fontSize: "16px" }}>
                      radio_button_checked
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 pt-3">
                <a href="#services" className="btn-white">Explore more</a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80"
                alt="Veyber team collaborating on digital marketing and eCommerce growth strategy in Gujarat"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#111]/15" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ SERVICES — very dark ════════════════════════ */}
      <section id="services" className="bg-[#0d0d0d] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase">WHAT WE DO</p>
            <h2
              className="font-headline text-white leading-[1.15] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800 }}
            >
              Complete digital<br />growth solutions
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              We provide end-to-end services designed to help your business grow in today&apos;s
              competitive digital world.
            </p>
          </div>

          {/* Hero service card (full width) */}
          <div className="photo-card relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 h-[320px] sm:h-[380px] md:h-[440px] cursor-pointer">
            <Image
              src={services[0].img}
              alt={services[0].title}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <p className="text-white/65 text-xs font-bold tracking-widest uppercase">SERVICE</p>
              <div className="space-y-3 sm:space-y-4 max-w-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-headline text-white leading-tight">
                  {services[0].title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{services[0].subtitle}</p>
                <ul className="space-y-1 hidden sm:block">
                  {services[0].items.map((item) => (
                    <li key={item} className="text-white/75 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                  <a href="#contact" className="btn-white text-xs px-5 py-2">Explore</a>
                  <a href="#contact" className="inline-flex items-center gap-1 text-white/45 hover:text-white transition-colors text-xs font-semibold">
                    Get started <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2-col grid for remaining services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.slice(1).map((s) => (
              <div key={s.title} className="photo-card relative rounded-xl sm:rounded-2xl overflow-hidden h-[260px] sm:h-[280px] md:h-[300px] cursor-pointer">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
                <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                  <p className="text-white/65 text-xs font-bold tracking-widest uppercase">{s.label}</p>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black font-headline text-white leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed">{s.subtitle}</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="#contact" className="inline-flex items-center gap-1 px-4 py-1.5 bg-white/10 border border-white/15 text-white font-semibold rounded-full text-xs hover:bg-white/20 transition-all">
                        Explore
                      </a>
                      <a href="#contact" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all">
                        <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY CHOOSE US — dark ════════════════════════ */}
      <section id="why-us" className="bg-[#111111] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase">ADVANTAGES</p>
            <h2
              className="font-headline text-white leading-[1.15] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 800 }}
            >
              Why choose<br />Veyber Services?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              Speed, reliability, and expertise in every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {whyCards.map((card) => (
              <div key={card.title} className="photo-card relative rounded-xl sm:rounded-2xl overflow-hidden h-[260px] sm:h-[280px] cursor-pointer">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
                <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between">
                  <p className="text-white text-[10px] font-bold tracking-widest uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>{card.label}</p>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black font-headline text-white leading-tight">{card.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed">{card.desc}</p>
                    <a href="#contact" className="inline-flex items-center gap-1 text-white/40 hover:text-white transition-colors text-xs font-semibold pt-1">
                      Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ PROCESS — deepest dark ════════════════════════ */}
      <section className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-5">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase">OUR PROCESS</p>
            <h2
              className="font-headline text-white leading-[1.15] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800 }}
            >
              From enquiry<br />to growth
            </h2>
            <p className="text-white/70 text-base sm:text-lg">Four simple steps to transform your business.</p>
            <a href="#contact" className="inline-flex btn-outline mt-2">Learn more</a>
          </div>

          {/* Staggered steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center timeline line */}
            <div
              className="absolute top-0 bottom-0 hidden lg:block"
              style={{ left: "50%", transform: "translateX(-50%)", width: "1px", background: "rgba(255,255,255,0.08)" }}
            />

            <div className="space-y-4 sm:space-y-6">
              {processSteps.map((s) => {
                const isRight = s.side === "right";
                return (
                  <div key={s.step} className={`flex ${isRight ? "lg:justify-start" : "lg:justify-end"} relative`}>
                    {/* Timeline dot */}
                    <div
                      className="absolute top-1/2 hidden lg:block"
                      style={{
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.25)",
                      }}
                    />
                    {/* Card */}
                    <div
                      className={`w-full lg:w-[47%] bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 space-y-3 sm:space-y-4
                        ${isRight ? "lg:mr-[3%]" : "lg:ml-[3%]"}`}
                    >
                      <p className="text-white/55 text-sm font-bold">{s.step}</p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-headline text-white leading-tight whitespace-pre-line">
                        {s.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                      <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                        <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 bg-white/12 border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/15 transition-all">
                          {s.cta}
                        </a>
                        <a href="#contact" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all">
                          <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CTA BANNER — photo bg ════════════════════════ */}
      <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
          alt="Ready to grow your business with Veyber Services — digital marketing and eCommerce experts in Gujarat"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.80) 100%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <p className="text-white/55 text-xs font-bold tracking-widest uppercase">START NOW</p>

          <h2
            className="font-headline text-white leading-[1.15] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800 }}
          >
            Ready to grow your<br />business?
          </h2>

          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Get in touch today and let us handle your digital growth while you focus on what you do best.
            Fast, reliable, and result-driven.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <a
              href="tel:+916355183655"
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg,#ffffff 0%,#e8e8e8 100%)", color: "#111111", boxShadow: "0 4px 24px rgba(255,255,255,0.2)" }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
              <span className="relative z-10 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>call</span>
              </span>
              <span className="relative z-10">Call Now</span>
            </a>

            <a
              href="https://wa.me/916355183655"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "rgba(37,211,102,0.15)", border: "1.5px solid rgba(37,211,102,0.45)", backdropFilter: "blur(8px)" }}
            >
              <span className="w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(37,211,102,0.2)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT — light ════════════════════════ */}
      <section id="contact" className="bg-[#d5daf0] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: info */}
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[#111]/55 text-xs font-bold tracking-widest uppercase">GET IN TOUCH</p>
                <h2
                  className="font-headline text-[#111] leading-[1.15] tracking-tighter"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", fontWeight: 800 }}
                >
                  Let&apos;s grow your<br />business together
                </h2>
              </div>
              <p className="text-[#111]/70 text-base sm:text-lg leading-relaxed max-w-md">
                Ready to scale with expert digital solutions? Fill out the form and our team will get back
                to you within 24 hours.
              </p>

              <div className="space-y-4 sm:space-y-5">
                {contactDetails.map((d) => (
                  <div key={d.label} className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="flex-shrink-0 rounded-full bg-[#111]/10"
                      style={{ width: 36, height: 36, display: "grid", placeItems: "center" }}
                    >
                      <span className="material-symbols-outlined text-[#111]/60" style={{ fontSize: 16, lineHeight: 1, display: "block" }}>
                        {d.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#111]/55 text-[10px] font-bold uppercase tracking-widest" style={{ lineHeight: 1, marginBottom: 4 }}>{d.label}</p>
                      <p className="text-[#111] font-semibold text-sm" style={{ lineHeight: 1 }}>{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+916355183655" className="btn-dark">Talk to Expert</a>
                <a href="mailto:info@veyber.co.in" className="inline-flex items-center gap-1 text-[#111]/65 hover:text-[#111] transition-colors text-sm font-semibold">
                  Send Email <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#e8ecf6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-[#111]/5">
              <h3 className="text-xl sm:text-2xl font-black font-headline text-[#111] mb-1">
                Get a Free Consultation Today!
              </h3>
              <p className="text-[#111]/60 text-sm mb-6 sm:mb-8">Our team will respond within 24 hours.</p>

              <form className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#dde2f2] rounded-xl px-4 py-3 text-[#111] placeholder:text-[#111]/40 outline-none focus:ring-2 focus:ring-[#111]/25 text-sm border-0"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-[#dde2f2] rounded-xl px-4 py-3 text-[#111] placeholder:text-[#111]/40 outline-none focus:ring-2 focus:ring-[#111]/25 text-sm border-0"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-[#dde2f2] rounded-xl px-4 py-3 text-[#111] placeholder:text-[#111]/40 outline-none focus:ring-2 focus:ring-[#111]/25 text-sm border-0"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Service Interested</label>
                    <select className="w-full bg-[#dde2f2] rounded-xl px-4 py-3 text-[#111] outline-none focus:ring-2 focus:ring-[#111]/15 text-sm border-0 appearance-none">
                      <option value="">Select a Service</option>
                      <option>E-commerce Development</option>
                      <option>E-commerce Account Management</option>
                      <option>Social Media Handling</option>
                      <option>Digital Marketing Services</option>
                      <option>Business Consultancy</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-[#dde2f2] rounded-xl px-4 py-3 text-[#111] placeholder:text-[#111]/40 outline-none focus:ring-2 focus:ring-[#111]/25 resize-none text-sm border-0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[#111] text-white font-black rounded-xl hover:bg-[#2a2a2a] transition-all text-sm uppercase tracking-widest"
                >
                  Get Free Consultation →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="bg-[#111111] pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-white/8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
              <div>
                <img src="/logo.png" alt="Veyber" className="h-7 sm:h-8" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Expert digital solutions for businesses across Gujarat. Grow faster, smarter, more profitably.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 sm:mb-5">Our Services</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {services.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="text-white/55 text-xs sm:text-sm hover:text-white transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 sm:mb-5">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Our Process", href: "#process" },
                  { label: "Contact Us", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/55 text-xs sm:text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 sm:mb-5">Contact Us</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {contactDetails.map((d) => (
                  <li key={d.label} className="flex items-center gap-2 sm:gap-2.5 text-white/60 text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-white/45 flex-shrink-0" style={{ fontSize: "14px", lineHeight: 1 }}>{d.icon}</span>
                    {d.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="py-8 sm:py-12 border-b border-white/8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h4 className="text-white font-black text-lg sm:text-xl font-headline mb-1">Newsletter</h4>
                <p className="text-white/35 text-xs sm:text-sm">
                  Get digital marketing tips, industry insights, and exclusive offers.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-white placeholder:text-white/25 outline-none focus:border-white/25 text-sm transition-colors"
                />
                <button className="btn-white whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-white/22 text-[10px] sm:text-xs">
            <p>© 2025 Veyber · Crafted with passion in Gujarat, India</p>
            <p className="text-center">Digital Marketing · eCommerce Development · Business Consultancy · Gujarat</p>
          </div>
        </div>
      </footer>

      {/* ════════════════════════ FLOATING WHATSAPP ════════════════════════ */}
      <a
        href="https://wa.me/916355183655?text=Hi%20Veyber%2C%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-16 right-5 sm:bottom-20 sm:right-7 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
          style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 sm:w-10 sm:h-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
    </>
  );
}
