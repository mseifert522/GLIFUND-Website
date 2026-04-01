/* ============================================================
   MERIDIAN WEALTH — About Page
   Company story, mission, vision, philosophy
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DETROIT_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480921173/BsGhCQV5Nup6wYyZYZFUG7/hero-skyline-49YaQctim7edbra9QfxGNT.webp";
const BOARDROOM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480921173/BsGhCQV5Nup6wYyZYZFUG7/about-boardroom_ede388e9.jpg";
const ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663480921173/BsGhCQV5Nup6wYyZYZFUG7/offerings-abstract_78dab461.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "To provide accredited investors with a secure, lower-risk investment avenue through structured bond offerings — generating steady income while maintaining the stability and integrity of our capital management practices.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To become a leading private investment fund in the Midwest, recognized for our dedication to responsible capital management and exceptional service — creating a community of investors who feel empowered and confident in their financial decisions.",
  },
  {
    icon: BookOpen,
    title: "Philosophy",
    desc: "We believe that informed decisions lead to successful investments. Our philosophy combines careful research with a commitment to ethical practices, prioritizing the security of our investors through meticulous project selection.",
  },
];

export default function About() {
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
          <div className="section-label mb-3" style={{ color: "rgba(200,169,110,0.8)" }}>About the Fund</div>
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
            A Trusted Partner<br />
            <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>in Private Capital</em>
          </h1>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="section-label mb-4">Our Journey</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  color: "oklch(0.165 0.048 253)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                From Humble Beginnings<br />
                <em style={{ fontStyle: "italic" }}>to Trusted Partner</em>
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
                At the Great Lakes Investment Fund, our journey has been defined by stability, strategic growth, and a commitment to creating lasting value. What began as a focused vision has evolved into a trusted investment platform built on integrity, disciplined management, and a long-term approach.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 253)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                Our mission is to provide our investors with a secure, lower-risk investment avenue through structured bond offerings. We aim to generate steady income while focusing on the stability and integrity of our capital management practices.
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
                We remain dedicated to identifying meaningful opportunities that support both investor success and broader economic impact across Michigan and the Great Lakes region.
              </p>
              <Link href="/contact">
                <span className="btn-gold">
                  <span>Get in Touch</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-1.5rem",
                  right: "-1.5rem",
                  left: "1.5rem",
                  bottom: "1.5rem",
                  border: "1px solid rgba(200,169,110,0.3)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <img
                src={BOARDROOM}
                alt="Executive boardroom"
                style={{ width: "100%", height: "440px", objectFit: "cover", position: "relative", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / PHILOSOPHY ── */}
      <section style={{ padding: "8rem 0", background: "oklch(0.97 0.008 80)" }}>
        <div className="container">
          <div className="text-center mb-14 fade-in-up">
            <div className="section-label mb-4" style={{ display: "inline-block" }}>Our Foundation</div>
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
              What Guides Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="fade-in-up"
                style={{
                  padding: "2.5rem",
                  background: "white",
                  border: "1px solid oklch(0.88 0.01 253)",
                  transition: "all 0.3s ease",
                  animationDelay: `${i * 120}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,0.4)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,22,40,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.88 0.01 253)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "oklch(0.165 0.048 253)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Icon size={20} style={{ color: "rgba(200,169,110,0.9)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "oklch(0.165 0.048 253)",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.45 0.02 253)",
                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="section-label mb-4" style={{ color: "rgba(200,169,110,0.8)" }}>Leadership</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Managed by<br />
                <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Seifert Capital Partners</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                The Great Lakes Investment Fund is sponsored and operated by Seifert Capital Partners Inc. Our vertically integrated model ensures that all key functions — investment management, underwriting, oversight, and execution — are handled internally, allowing for greater efficiency and accountability.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Our long-term vision is to expand the fund thoughtfully and continue providing our investors with dependable returns well into the future, while maintaining the highest standards of transparency and integrity.
              </p>
              <Link href="/contact">
                <span className="btn-ghost-white">
                  <span>Contact Our Team</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(200,169,110,0.15)",
                      border: "1px solid rgba(200,169,110,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: "rgba(200,169,110,0.9)",
                      fontSize: "1.4rem",
                      flexShrink: 0,
                    }}
                  >
                    JS
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        fontSize: "1.2rem",
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
                        textTransform: "uppercase",
                      }}
                    >
                      Founder & Managing Partner
                    </div>
                  </div>
                </div>
                <blockquote
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.65,
                    borderLeft: "3px solid rgba(200,169,110,0.6)",
                    paddingLeft: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  "Commitment to transparency and integrity leads to sustainable investment practices. Investing with the Great Lakes Investment Fund means embracing stability and long-term growth."
                </blockquote>
                <div className="flex gap-6">
                  {[
                    { value: "51+", label: "Projects" },
                    { value: "$8M+", label: "Deployed" },
                    { value: "13.5%", label: "Max APY" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: "rgba(200,169,110,0.9)",
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.7rem",
                          color: "rgba(255,255,255,0.4)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 0", background: "white" }}>
        <div className="container text-center fade-in-up">
          <div className="section-label mb-4" style={{ display: "inline-block" }}>Ready to Begin?</div>
          <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
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
            Invest with Confidence
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              color: "oklch(0.45 0.02 253)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Join a growing community of accredited investors who trust the Great Lakes Investment Fund for consistent, reliable returns.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/offerings">
              <span className="btn-gold">
                <span>View Offerings</span>
                <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-ghost-gold">
                <span>Contact Us</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
