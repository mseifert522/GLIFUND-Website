/* ============================================================
   MERIDIAN WEALTH — Contact Page
   Contact form, location, webinar registration
   ============================================================ */
import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DETROIT_HERO = "/assets/hero-skyline.webp";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
          <div className="section-label mb-3" style={{ color: "rgba(200,169,110,0.8)" }}>Get in Touch</div>
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
            Start Your<br />
            <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Investment Journey</em>
          </h1>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="section-label mb-4">Contact Information</div>
              <span className="gold-rule" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 700,
                  color: "oklch(0.165 0.048 253)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Let's Start the Conversation
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.92rem",
                  color: "oklch(0.45 0.02 253)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                Explore stable, income-generating opportunities with our real estate bond offerings. Connect with our team to learn how you can grow your portfolio with confidence.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Office Address",
                    value: "850 Stephenson Highway, Suite 115\nTroy, MI 48083",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "invest@glinvestmentfund.com",
                  },
                  {
                    icon: Phone,
                    label: "Location",
                    value: "Troy, Michigan — Greater Detroit Area",
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: "Monday – Friday: 9:00 AM – 5:00 PM EST",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "oklch(0.165 0.048 253)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Icon size={16} style={{ color: "rgba(200,169,110,0.9)" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "oklch(0.5 0.025 253)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9rem",
                          color: "oklch(0.3 0.03 253)",
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accredited investor notice */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.25rem 1.5rem",
                  background: "oklch(0.93 0.01 80)",
                  borderLeft: "3px solid rgba(200,169,110,0.5)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.78rem",
                    color: "oklch(0.45 0.02 253)",
                    lineHeight: 1.7,
                  }}
                >
                  <strong style={{ color: "oklch(0.165 0.048 253)" }}>Accredited Investors Only.</strong> This offering is exclusively available to investors who meet SEC accreditation requirements under Regulation D, Rule 506(c).
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div
              className="lg:col-span-3 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "3rem",
                    background: "oklch(0.165 0.048 253)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(200,169,110,0.15)",
                      border: "1px solid rgba(200,169,110,0.4)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "white",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message Received
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                    }}
                  >
                    Thank you for reaching out. A member of our investment team will contact you within one business day.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    padding: "2.5rem",
                    background: "oklch(0.165 0.048 253)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.45)",
                      marginBottom: "2rem",
                    }}
                  >
                    Our investment team typically responds within one business day.
                  </p>
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.45)",
                          }}
                        >
                          First Name *
                        </label>
                        <input className="form-input-dark" placeholder="John" type="text" required />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.45)",
                          }}
                        >
                          Last Name *
                        </label>
                        <input className="form-input-dark" placeholder="Smith" type="text" required />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        Email Address *
                      </label>
                      <input className="form-input-dark" placeholder="john@example.com" type="email" required />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        Phone Number
                      </label>
                      <input className="form-input-dark" placeholder="(555) 000-0000" type="tel" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        className="form-input-dark"
                        placeholder="Tell us about your investment goals..."
                        rows={5}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-gold"
                      style={{ marginTop: "0.5rem", justifyContent: "center" }}
                    >
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
