/* ============================================================
   MERIDIAN WEALTH — Offerings Page
   Bond terms, APY, 6-step process, webinar registration
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DETROIT_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480921173/BsGhCQV5Nup6wYyZYZFUG7/hero-skyline-49YaQctim7edbra9QfxGNT.webp";
const ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480921173/BsGhCQV5Nup6wYyZYZFUG7/offerings-abstract_78dab461.jpg";

const bondTerms = [
  { months: 12, label: "Short-Term", rate: "9.5%", highlight: false },
  { months: 17, label: "Standard", rate: "10.5%", highlight: false },
  { months: 25, label: "Growth", rate: "11.5%", highlight: true },
  { months: 43, label: "Long-Term", rate: "13.5%", highlight: false },
];

const steps = [
  { num: "01", title: "Register Securely", desc: "Complete your accredited investor registration through our secure portal — takes approximately 5 minutes." },
  { num: "02", title: "Review Documents", desc: "Review and e-sign your investment documents with full transparency on terms, rates, and obligations." },
  { num: "03", title: "Fund Your Investment", desc: "Wire funds or authorize us to ACH directly into our operating account. Minimum investment of $25,000." },
  { num: "04", title: "Receive Your Certificate", desc: "Receive a certified copy of your bond certificate confirming your investment and its terms." },
  { num: "05", title: "Earn Payments", desc: "Monthly or quarterly interest payments begin as scheduled, deposited directly to your account." },
  { num: "06", title: "Stay Informed", desc: "Receive regular investor updates via our secure portal or email, keeping you informed at every stage." },
];

export default function Offerings() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.008 80)" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section
        className="relative"
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "5rem",
          backgroundImage: `url(${DETROIT_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.82)" }} />
        <div className="container relative z-10">
          <div className="section-label mb-3" style={{ color: "rgba(200,169,110,0.8)" }}>Investment Offerings</div>
          <span className="gold-rule" />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              maxWidth: "600px",
            }}
          >
            Bond Investments.<br />
            <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Earn Consistent Returns.</em>
          </h1>
        </div>
      </section>

      {/* ── BOND OFFERINGS ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="text-center mb-14 fade-in-up">
            <div className="section-label mb-4" style={{ display: "inline-block" }}>Bond Offerings</div>
            <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.165 0.048 253)",
                marginBottom: "1rem",
              }}
            >
              Exclusively for Accredited Investors
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                color: "oklch(0.45 0.02 253)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Choose the bond term that aligns with your investment horizon. All offerings deliver steady passive income through monthly or quarterly distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bondTerms.map(({ months, label, rate, highlight }, i) => (
              <div
                key={months}
                className="fade-in-up"
                style={{
                  padding: "2.5rem 2rem",
                  background: highlight ? "oklch(0.165 0.048 253)" : "white",
                  border: highlight ? "none" : "1px solid oklch(0.88 0.01 253)",
                  position: "relative",
                  transition: "all 0.3s ease",
                  animationDelay: `${i * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  if (!highlight) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,0.5)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,22,40,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!highlight) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.88 0.01 253)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }
                }}
              >
                {highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(200,169,110,0.9)",
                      color: "oklch(0.165 0.048 253)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1rem",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: highlight ? "rgba(200,169,110,0.8)" : "oklch(0.5 0.025 253)",
                    marginBottom: "1rem",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: highlight ? "white" : "oklch(0.165 0.048 253)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {months}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: highlight ? "rgba(255,255,255,0.5)" : "oklch(0.5 0.025 253)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Months
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: highlight ? "rgba(200,169,110,0.3)" : "oklch(0.88 0.01 253)",
                    marginBottom: "1.5rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "rgba(200,169,110,0.9)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {rate}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.72rem",
                    color: highlight ? "rgba(255,255,255,0.45)" : "oklch(0.55 0.02 253)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "1.75rem",
                  }}
                >
                  Annual Yield
                </div>
                <ul className="flex flex-col gap-2 mb-6">
                  {["Monthly or quarterly payments", "Secure bond certificate", "Investor portal access"].map((f) => (
                    <li key={f} className="flex gap-2 items-start">
                      <CheckCircle2 size={13} style={{ color: "rgba(200,169,110,0.8)", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: highlight ? "rgba(255,255,255,0.6)" : "oklch(0.45 0.02 253)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <span
                    className={highlight ? "btn-gold" : "btn-ghost-gold"}
                    style={{ width: "100%", justifyContent: "center", fontSize: "0.75rem" }}
                  >
                    <span>Get Started</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            className="fade-in-up mt-10"
            style={{
              padding: "1.5rem 2rem",
              background: "oklch(0.93 0.01 80)",
              borderLeft: "3px solid rgba(200,169,110,0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                color: "oklch(0.45 0.02 253)",
                lineHeight: 1.75,
              }}
            >
              <strong>Disclaimer:</strong> Interest rates are dependent on investment amount and terms. There is a $25,000 minimum investment. This offering is exclusively for accredited investors — individuals or entities who meet specific financial criteria such as a net worth over $1 million (excluding primary residence) or earning over $200,000 annually ($300,000 for joint income). Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section
        className="relative"
        style={{
          padding: "8rem 0",
          backgroundImage: `url(${ABSTRACT})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.9)" }} />
        <div className="container relative z-10">
          <div className="text-center mb-14 fade-in-up">
            <div className="section-label mb-4" style={{ color: "rgba(200,169,110,0.8)" }}>How It Works</div>
            <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              The Investment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="fade-in-up glass-card p-7"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="step-number">{num}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
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

      {/* ── WEBINAR CTA ── */}
      <section style={{ padding: "7rem 0", background: "oklch(0.97 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="section-label mb-4">Free Informational Webinar</div>
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
                Join Our Free<br />
                <em style={{ fontStyle: "italic" }}>Investor Presentation</em>
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
                Join our presentation to see how we deliver stable, long-term returns through our investment process. Our team will walk you through the fund structure, bond offerings, and how to qualify as an accredited investor.
              </p>
              <Link href="/contact">
                <span className="btn-gold">
                  <span>Register for Webinar</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
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
                <select className="form-input-dark" defaultValue="">
                  <option value="" disabled>Select Session Time *</option>
                  <option value="morning">Morning EST</option>
                  <option value="noon">Noon EST</option>
                  <option value="afternoon">Afternoon EST</option>
                </select>
                <button type="submit" className="btn-gold" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
                  <span>Register Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
