/* ============================================================
   MERIDIAN WEALTH — Home Page
   Detroit skyline hero, stats band, investment sections, FAQ
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp, Shield, TrendingUp, Award, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DETROIT_HERO = "/assets/hero-skyline.webp";
const BOARDROOM = "/assets/about-boardroom.jpg";
const HANDSHAKE = "/assets/team-handshake.jpg";
const ABSTRACT = "/assets/offerings-abstract.jpg";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, prefix = "", suffix = "", delay = 0 }: {
  value: number; label: string; prefix?: string; suffix?: string; delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-card fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
          fontWeight: 700,
          color: "oklch(0.165 0.048 253)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "oklch(0.5 0.025 253)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What is the Great Lakes Investment Fund?",
    a: "The Great Lakes Investment Fund offers accredited investors access to income-generating opportunities through structured bond offerings. We focus on building long-term relationships with investors who value consistent returns and a disciplined approach to capital management. The fund typically allocates capital to development ventures managed by Seifert Capital, the fund's sponsor and operator. Bond terms range from 18 to 60 months, providing flexibility while delivering reliable income.",
  },
  {
    q: "How does the fund generate returns?",
    a: "The fund generates returns by investing in carefully selected ventures strategically managed and overseen by Seifert Capital Partners. Each capital deployment is structured to target strong returns, typically ranging from 19% to 45%, with certain high-performing projects exceeding expectations. Returns are realized either through the resale of assets or through refinancing with long-term institutional lenders. Regardless of the exit strategy, bondholders are paid through structured interest income collected by the fund.",
  },
  {
    q: "Who can invest in the Great Lakes Investment Fund?",
    a: "The Great Lakes Investment Fund is offered exclusively to accredited investors under SEC Regulation D, Rule 506(c). To qualify, individuals must meet certain financial or professional criteria — such as a net worth over $1 million (excluding primary residence), annual income exceeding $200,000 individually or $300,000 jointly, or hold specific financial licenses (Series 7, 65, or 82). Entities may also qualify based on assets, structure, or registration status.",
  },
  {
    q: "What is the minimum investment amount?",
    a: "The minimum investment amount is $25,000. While the fund prefers investments in increments of $50,000 to $100,000, there is no obligation or pressure for investors to contribute more than the minimum required.",
  },
  {
    q: "Is my investment liquid?",
    a: "This investment is not liquid like publicly traded securities. We work with investors who have a strong financial foundation and do not require immediate access to their capital. Bondholders are expected to maintain their investment for the full duration of the bond term as outlined in the agreement.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        style={{ background: "none", border: "none" }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            fontWeight: 500,
            color: "oklch(0.165 0.048 253)",
          }}
        >
          {q}
        </span>
        <span style={{ color: "oklch(0.72 0.095 75)", flexShrink: 0 }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: "oklch(0.4 0.02 253)",
            lineHeight: 1.8,
            paddingBottom: "1.5rem",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.008 80)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative noise-overlay"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "8rem",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${DETROIT_HERO})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.2) 100%), linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.1) 50%)",
          }}
        />

        {/* Content */}
        <div className="container relative z-10">
          <div style={{ maxWidth: "680px" }}>
            <div className="section-label animate-slide-in-left" style={{ color: "rgba(200,169,110,0.85)", marginBottom: "1.25rem" }}>
              Detroit, Michigan · Est. 2020
            </div>
            <span className="gold-rule animate-slide-in-left animate-delay-200" />
            <h1
              className="animate-slide-in-left animate-delay-200"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Vision.<br />
              <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Capital.</em><br />
              Results.
            </h1>
            <p
              className="animate-slide-in-left animate-delay-400"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "500px",
              }}
            >
              Leading the way in private capital — creating wealth, fueling innovation, and supporting resilient growth across the Great Lakes region.
            </p>
            <div className="flex flex-wrap gap-3 animate-slide-in-left animate-delay-600">
              <Link href="/offerings">
                <span className="btn-gold">
                  <span>Explore Offerings</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
              <Link href="/contact">
                <span className="btn-ghost-white">
                  <span>Schedule a Call</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 animate-bounce"
          style={{ transform: "translateX(-50%)" }}
        >
          <ChevronDown size={20} style={{ color: "rgba(200,169,110,0.6)" }} />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: "white", borderBottom: "1px solid oklch(0.88 0.01 253)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderLeft: "1px solid oklch(0.88 0.01 253)" }}>
            <StatCard value={51} label="Projects Completed" delay={0} />
            <StatCard value={8} label="Million+ Deployed" prefix="$" suffix="M+" delay={100} />
            <StatCard value={13} label="Max APY Returns" suffix=".5%" delay={200} />
            <StatCard value={25} label="Min. Investment" prefix="$" suffix="K" delay={300} />
          </div>
        </div>
      </section>

      {/* ── ACCREDITED INVESTOR NOTICE ── */}
      <section
        style={{
          background: "oklch(0.165 0.048 253)",
          padding: "1rem 0",
          borderBottom: "1px solid rgba(200,169,110,0.2)",
        }}
      >
        <div className="container flex items-center justify-center gap-3">
          <Shield size={14} style={{ color: "rgba(200,169,110,0.8)", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              textAlign: "center",
            }}
          >
            Exclusively for Accredited Investors · SEC Regulation D, Rule 506(c) · Not a Public Offering
          </span>
        </div>
      </section>

      {/* ── INVESTMENT SECTION ── */}
      <section style={{ padding: "8rem 0", background: "oklch(0.97 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative fade-in-up order-2 lg:order-1">
              <div
                style={{
                  position: "absolute",
                  top: "-1.5rem",
                  left: "-1.5rem",
                  right: "1.5rem",
                  bottom: "1.5rem",
                  border: "1px solid rgba(200,169,110,0.3)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <img
                src={BOARDROOM}
                alt="Executive boardroom"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
            {/* Text */}
            <div className="fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="section-label mb-4">Our Approach</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.165 0.048 253)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Disciplined Capital.<br />
                <em style={{ fontStyle: "italic" }}>Dependable Returns.</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 253)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                We invest in projects that create value and generate reliable returns. Our decisions are based on data, experience, and strong partnerships. The goal is simple: make smart investments and deliver results for our investors.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 253)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                The Great Lakes Investment Fund strategically deploys capital across a diverse range of opportunities. Our integrated approach allows us to identify high-quality investments backed by disciplined oversight and a focus on delivering strong, consistent returns.
              </p>
              <Link href="/offerings">
                <span className="btn-gold">
                  <span>View Our Offerings</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GLIF ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="text-center mb-14 fade-in-up">
            <div className="section-label mb-4" style={{ display: "inline-block" }}>Why Invest With Us</div>
            <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.165 0.048 253)",
                lineHeight: 1.2,
              }}
            >
              Built on Integrity.<br />Driven by Performance.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "SEC Compliant",
                desc: "All offerings are structured under SEC Regulation D, Rule 506(c), providing a transparent and compliant investment framework.",
                delay: 0,
              },
              {
                icon: TrendingUp,
                title: "Strong Returns",
                desc: "Target APY of 9.5%–13.5% with project-level returns ranging from 19% to 45%, backed by rigorous due diligence.",
                delay: 100,
              },
              {
                icon: Award,
                title: "Proven Track Record",
                desc: "Over 51 completed projects and $8M+ in deployed capital, demonstrating consistent execution and investor satisfaction.",
                delay: 200,
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                desc: "Bond terms ranging from 12 to 43 months with monthly or quarterly payment options to suit your investment horizon.",
                delay: 300,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <div
                key={title}
                className="fade-in-up"
                style={{
                  padding: "2rem",
                  border: "1px solid oklch(0.88 0.01 253)",
                  transition: "all 0.3s ease",
                  animationDelay: `${delay}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,22,40,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.88 0.01 253)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "oklch(0.165 0.048 253)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={18} style={{ color: "rgba(200,169,110,0.9)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "oklch(0.165 0.048 253)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.875rem",
                    color: "oklch(0.45 0.02 253)",
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE GREAT LAKES STORY ── */}
      <section
        className="relative"
        style={{
          padding: "8rem 0",
          backgroundImage: `url(${ABSTRACT})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,22,40,0.88)",
          }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="section-label mb-4" style={{ color: "rgba(200,169,110,0.8)" }}>Our Story</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Building Foundations<br />
                <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>for the Future</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                At the Great Lakes Investment Fund, our journey has been defined by stability, strategic growth, and a commitment to creating lasting value. What began as a focused vision has evolved into a trusted investment platform built on integrity, disciplined management, and a long-term approach.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                We remain dedicated to identifying meaningful opportunities that support both investor success and broader economic impact across Michigan and the Great Lakes region.
              </p>
              <Link href="/about">
                <span className="btn-ghost-white">
                  <span>Our Full Story</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card p-8">
                <blockquote
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontStyle: "italic",
                    color: "white",
                    lineHeight: 1.6,
                    borderLeft: "3px solid rgba(200,169,110,0.7)",
                    paddingLeft: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  "Commitment to transparency and integrity leads to sustainable investment practices."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(200,169,110,0.2)",
                      border: "1px solid rgba(200,169,110,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: "rgba(200,169,110,0.9)",
                      fontSize: "1rem",
                    }}
                  >
                    JS
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "white",
                      }}
                    >
                      John Seifert
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(200,169,110,0.7)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Founder & Managing Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBINAR CTA ── */}
      <section style={{ padding: "8rem 0", background: "oklch(0.97 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="section-label mb-4">Free Webinar</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  color: "oklch(0.165 0.048 253)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Register for Our<br />
                <em style={{ fontStyle: "italic" }}>Investor Webinar</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 253)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                View our presentation to see how we deliver stable, long-term returns through our strategic investments. Learn about our process, our track record, and how to get started as an accredited investor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <span className="btn-gold">
                    <span>Register Now</span>
                    <ArrowRight size={14} />
                  </span>
                </Link>
                <Link href="/offerings">
                  <span className="btn-ghost-gold">
                    <span>View Offerings</span>
                  </span>
                </Link>
              </div>
            </div>
            {/* Webinar registration form */}
            <div
              className="fade-in-up"
              style={{
                background: "oklch(0.165 0.048 253)",
                padding: "2.5rem",
                animationDelay: "0.2s",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                Webinar Registration
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "1.75rem",
                }}
              >
                Select your preferred session time below.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input className="form-input-dark" placeholder="First Name *" type="text" required />
                  <input className="form-input-dark" placeholder="Last Name *" type="text" required />
                </div>
                <input className="form-input-dark" placeholder="Email Address *" type="email" required />
                <input className="form-input-dark" placeholder="Phone Number" type="tel" />
                <select
                  className="form-input-dark"
                  defaultValue=""
                  style={{ cursor: "pointer" }}
                >
                  <option value="" disabled>Select Session Time *</option>
                  <option value="morning">Morning EST</option>
                  <option value="noon">Noon EST</option>
                  <option value="afternoon">Afternoon EST</option>
                </select>
                <button
                  type="submit"
                  className="btn-gold"
                  style={{ marginTop: "0.5rem", justifyContent: "center" }}
                >
                  <span>Register Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="fade-in-up">
              <div className="section-label mb-4">Investor FAQ</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "oklch(0.165 0.048 253)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.45 0.02 253)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Have more questions? Our team is available to walk you through every detail of the investment process.
              </p>
              <Link href="/contact">
                <span className="btn-gold">
                  <span>Contact Us</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="lg:col-span-2 fade-in-up" style={{ animationDelay: "0.2s" }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="relative"
        style={{
          padding: "7rem 0",
          backgroundImage: `url(${HANDSHAKE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,22,40,0.82)",
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="section-label mb-4" style={{ color: "rgba(200,169,110,0.8)" }}>
            Ready to Invest?
          </div>
          <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Generate Additional Income<br />
            <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Through Private Capital</em>
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            View our presentation to see how we deliver stable, long-term returns through our strategic investments. Minimum investment of $25,000.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/offerings">
              <span className="btn-gold">
                <span>Become an Investor</span>
                <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-ghost-white">
                <span>Schedule a Consultation</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
