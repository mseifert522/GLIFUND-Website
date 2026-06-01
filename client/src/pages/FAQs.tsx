/* ============================================================
   MERIDIAN WEALTH — FAQs Page
   Comprehensive investor FAQ with accordion
   ============================================================ */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DETROIT_HERO = "/assets/hero-skyline.webp";

const faqCategories = [
  {
    category: "About the Fund",
    faqs: [
      {
        q: "What is the Great Lakes Investment Fund?",
        a: "The Great Lakes Investment Fund offers accredited investors access to income-generating opportunities through structured bond offerings. We focus on building long-term relationships with investors who value consistent returns and a disciplined approach to capital management. The fund typically allocates capital to development ventures managed by Seifert Capital, the fund's sponsor and operator. Bond terms range from 18 to 60 months, providing flexibility while delivering reliable income.",
      },
      {
        q: "How does the fund generate returns?",
        a: "The fund generates returns by investing in carefully selected ventures strategically managed and overseen by Seifert Capital Partners. Each capital deployment is structured to target strong returns, typically ranging from 19% to 45%, with certain high-performing projects exceeding expectations. Returns are realized either through the resale of assets or through refinancing with long-term institutional lenders. Regardless of the exit strategy, bondholders are paid through structured interest income collected by the fund.",
      },
      {
        q: "Who manages the Great Lakes Investment Fund?",
        a: "The Great Lakes Investment Fund is sponsored and operated by Seifert Capital Partners Inc. Our vertically integrated model ensures that all key functions — investment management, underwriting, oversight, and execution — are handled internally, allowing for greater efficiency and accountability.",
      },
    ],
  },
  {
    category: "Investor Eligibility",
    faqs: [
      {
        q: "Who can invest in the Great Lakes Investment Fund?",
        a: "The Great Lakes Investment Fund is offered exclusively to accredited investors under SEC Regulation D, Rule 506(c). To qualify, individuals must meet certain financial or professional criteria — such as a net worth over $1 million (excluding primary residence), annual income exceeding $200,000 individually or $300,000 jointly, or hold specific financial licenses (Series 7, 65, or 82). Entities may also qualify based on assets, structure, or registration status.",
      },
      {
        q: "How do I verify my accredited investor status?",
        a: "Accredited investor status is verified through a third-party verification process during onboarding. You may be asked to provide documentation such as tax returns, bank statements, brokerage statements, or a letter from a licensed professional (CPA, attorney, or financial advisor) confirming your status.",
      },
      {
        q: "Can international investors participate?",
        a: "At this time, the Great Lakes Investment Fund primarily serves U.S.-based accredited investors. International investors may be considered on a case-by-case basis. Please contact our team for more information regarding eligibility for non-U.S. residents.",
      },
    ],
  },
  {
    category: "Investment Terms",
    faqs: [
      {
        q: "What is the minimum investment amount?",
        a: "The minimum investment amount is $25,000. While the fund prefers investments in increments of $50,000 to $100,000, there is no obligation or pressure for investors to contribute more than the minimum required.",
      },
      {
        q: "What bond terms are available?",
        a: "We offer four bond term options: 12 months (9.5% APY), 17 months (10.5% APY), 25 months (11.5% APY), and 43 months (13.5% APY). Longer terms generally offer higher annual yields. Interest rates may vary based on investment amount and specific terms negotiated at the time of investment.",
      },
      {
        q: "How and when are interest payments made?",
        a: "Interest payments are made either monthly or quarterly, depending on the terms of your bond agreement. Payments are deposited directly to your designated bank account. You will receive a payment schedule at the time of investment confirming all future payment dates.",
      },
      {
        q: "Is my investment liquid?",
        a: "This investment is not liquid like publicly traded securities. We work with investors who have a strong financial foundation and do not require immediate access to their capital. Bondholders are expected to maintain their investment for the full duration of the bond term as outlined in the agreement.",
      },
    ],
  },
  {
    category: "Risk & Security",
    faqs: [
      {
        q: "What are the risks associated with this investment?",
        a: "As with any private investment, there are inherent risks. These include market risk, project execution risk, and the illiquid nature of the investment. However, we mitigate these risks through rigorous due diligence, diversified project selection, and conservative underwriting standards. Past performance is not indicative of future results.",
      },
      {
        q: "How is my investment protected?",
        a: "Investor capital is deployed into carefully vetted projects with clear exit strategies. Bond agreements are legally binding documents that outline the terms, interest rates, and repayment schedule. The fund maintains transparency through regular investor updates and a dedicated investor portal.",
      },
      {
        q: "Is the fund registered with the SEC?",
        a: "The Great Lakes Investment Fund operates under SEC Regulation D, Rule 506(c), which is an exemption from full SEC registration. This exemption allows the fund to raise capital from accredited investors without registering the securities offering with the SEC. All offerings are conducted in full compliance with applicable securities laws.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How do I get started as an investor?",
        a: "The process begins with a brief consultation with our investment team. After verifying your accredited investor status, you will review and sign the bond agreement, fund your investment via wire transfer or ACH, and receive your certified bond certificate. The entire process typically takes 3–5 business days.",
      },
      {
        q: "What documentation do I need to provide?",
        a: "You will need to provide a government-issued photo ID, documentation verifying your accredited investor status (tax returns, financial statements, or a professional letter), and banking information for investment funding and interest payments.",
      },
      {
        q: "Can I invest through an LLC, trust, or other entity?",
        a: "Yes. Investments can be made through various entity structures including LLCs, trusts, corporations, and self-directed IRAs. Entity investors must also meet accreditation requirements. Please consult with our team for specific documentation requirements for entity investments.",
      },
    ],
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
            lineHeight: 1.85,
            paddingBottom: "1.5rem",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
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
          <div className="section-label mb-3" style={{ color: "rgba(200,169,110,0.8)" }}>Investor Resources</div>
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
            Frequently Asked<br />
            <em style={{ fontStyle: "italic", color: "rgba(200,169,110,0.9)" }}>Questions</em>
          </h1>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section style={{ padding: "8rem 0", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky sidebar nav */}
            <div className="lg:col-span-1 fade-in-up">
              <div
                style={{
                  position: "sticky",
                  top: "100px",
                }}
              >
                <div className="section-label mb-4">Categories</div>
                <span className="gold-rule" />
                <ul className="flex flex-col gap-2">
                  {faqCategories.map(({ category }) => (
                    <li key={category}>
                      <a
                        href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.85rem",
                          color: "oklch(0.45 0.02 253)",
                          transition: "color 0.2s",
                          display: "block",
                          padding: "0.4rem 0",
                          borderLeft: "2px solid transparent",
                          paddingLeft: "0.75rem",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.165 0.048 253)";
                          (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "rgba(200,169,110,0.7)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.45 0.02 253)";
                          (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "transparent";
                        }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: "2.5rem",
                    padding: "1.5rem",
                    background: "oklch(0.165 0.048 253)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    Still have questions? Our investment team is ready to help.
                  </p>
                  <Link href="/contact">
                    <span className="btn-gold" style={{ fontSize: "0.72rem", padding: "0.65rem 1.25rem" }}>
                      <span>Contact Us</span>
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="lg:col-span-3 fade-in-up" style={{ animationDelay: "0.15s" }}>
              {faqCategories.map(({ category, faqs }) => (
                <div
                  key={category}
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                  style={{ marginBottom: "3.5rem" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="gold-rule" style={{ marginBottom: 0, flexShrink: 0 }} />
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        color: "oklch(0.165 0.048 253)",
                      }}
                    >
                      {category}
                    </h2>
                  </div>
                  {faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          padding: "7rem 0",
          background: "oklch(0.165 0.048 253)",
          borderTop: "1px solid rgba(200,169,110,0.2)",
        }}
      >
        <div className="container text-center fade-in-up">
          <div className="section-label mb-4" style={{ color: "rgba(200,169,110,0.8)" }}>
            Ready to Invest?
          </div>
          <span className="gold-rule" style={{ margin: "0 auto 1.25rem" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Take the Next Step
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Schedule a consultation with our investment team to learn how the Great Lakes Investment Fund can work for your portfolio.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/offerings">
              <span className="btn-gold">
                <span>View Offerings</span>
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
      </section>

      <Footer />
    </div>
  );
}
