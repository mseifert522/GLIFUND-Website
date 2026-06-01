/* ============================================================
   MERIDIAN WEALTH — Navbar Component
   Dark navy background, gold accents, Outfit font
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Offerings", href: "/offerings" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 22, 40, 0.97)"
          : "linear-gradient(to bottom, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0) 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: "80px" }}>
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "white",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                GREAT LAKES
              </span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  color: "rgba(200,169,110,0.9)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Investment Fund
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="nav-link">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://glifportal.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                transition: "color 0.2s",
                padding: "0.5rem 0.75rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,169,110,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              Investor Login
            </a>
            <Link href="/offerings">
              <span className="btn-gold" style={{ padding: "0.6rem 1.4rem", fontSize: "0.72rem" }}>
                <span>Invest Now</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10, 22, 40, 0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(200,169,110,0.15)",
          }}
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    display: "block",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://glifportal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-white"
                style={{ justifyContent: "center" }}
              >
                Investor Login
              </a>
              <Link href="/offerings">
                <span className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Invest Now</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
