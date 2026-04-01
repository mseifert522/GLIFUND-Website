/* ============================================================
   MERIDIAN WEALTH — Footer Component
   Deep navy, gold accents, institutional feel
   ============================================================ */
import { Link } from "wouter";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.1 0.04 253)",
        borderTop: "1px solid rgba(200,169,110,0.2)",
      }}
    >
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "white",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                GREAT LAKES
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  color: "rgba(200,169,110,0.8)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                Investment Fund
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: "340px",
                marginBottom: "1.5rem",
              }}
            >
              A private capital fund offering accredited investors access to income-generating opportunities through structured bond offerings. Managed by Seifert Capital Partners Inc.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,169,110,0.6)";
                    e.currentTarget.style.color = "rgba(200,169,110,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label mb-5" style={{ color: "rgba(200,169,110,0.7)" }}>
              Navigation
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Offerings", href: "/offerings" },
                { label: "About Us", href: "/about" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.5)",
                        transition: "color 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,169,110,0.9)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="section-label mb-5" style={{ color: "rgba(200,169,110,0.7)" }}>
              Contact
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={14} style={{ color: "rgba(200,169,110,0.7)", marginTop: "3px", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  850 Stephenson Highway<br />Suite 115<br />Troy, MI 48083
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} style={{ color: "rgba(200,169,110,0.7)", flexShrink: 0 }} />
                <a
                  href="mailto:invest@glinvestmentfund.com"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,169,110,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  invest@glinvestmentfund.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} style={{ color: "rgba(200,169,110,0.7)", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Troy, Michigan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.5rem 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            <strong style={{ color: "rgba(255,255,255,0.4)" }}>Important Disclosure:</strong> The Great Lakes Investment Fund is offered exclusively to accredited investors under SEC Regulation D, Rule 506(c). This is not an offer to sell or solicitation of an offer to buy securities. Past performance is not indicative of future results. All investments involve risk, including the potential loss of principal.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              © 2026 Great Lakes Investment Fund. Managed by Seifert Capital Partners Inc. All rights reserved.
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,169,110,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                Terms of Use
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,169,110,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
