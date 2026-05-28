'use client';

import React, { useState, useMemo } from "react";
import Container from "@/components/common/container";
import {
    Shield,
    MapPin,
    Bell,
    Database,
    Lock,
    Users,
    Clock,
    RefreshCw,
    Mail,
    BatteryCharging,
    Smartphone,
    Eye,
    Search,
    ChevronRight,
} from "lucide-react";

interface SectionContent {
    subtitle?: string;
    text?: string;
    bullets?: string[];
}

interface SectionPermission {
    icon: React.ReactNode;
    title: string;
    permission: string;
    desc: string;
}

interface PrivacySection {
    id: number;
    title: string;
    icon: React.ReactNode;
    content?: SectionContent[];
    permissions?: SectionPermission[];
    bullets?: string[];
    text?: string;
    contact?: {
        email: string;
        company: string;
    };
}

// Original data structure completely intact with official contact details
const privacySections: PrivacySection[] = [
    {
        id: 1,
        title: "Information We Collect",
        icon: <Database size={20} />,
        content: [
            {
                subtitle: "Location Information",
                text: "Our app collects location data to support delivery operations and provide real-time tracking features.",
                bullets: [
                    "Precise Location (GPS) – accurate live route tracking, delivery verification, and navigation assistance.",
                    "Approximate Location – lower battery/network usage when high precision is not required.",
                    "Background Location – uninterrupted active delivery tracking when the app is minimized or closed.",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Permissions We Use and Why",
        icon: <Shield size={20} />,
        permissions: [
            {
                icon: <Bell size={18} />,
                title: "Notifications",
                permission: "POST_NOTIFICATIONS",
                desc: "Order updates, delivery requests, and important system alerts.",
            },
            {
                icon: <MapPin size={18} />,
                title: "Precise Location",
                permission: "ACCESS_FINE_LOCATION",
                desc: "Real-time route tracking, navigation, and delivery verification.",
            },
            {
                icon: <MapPin size={18} />,
                title: "Approximate Location",
                permission: "ACCESS_COARSE_LOCATION",
                desc: "Battery-efficient positioning when high precision isn't necessary.",
            },
            {
                icon: <Eye size={18} />,
                title: "Background Location",
                permission: "ACCESS_BACKGROUND_LOCATION",
                desc: "Continued delivery tracking during active delivery sessions.",
            },
            {
                icon: <Smartphone size={18} />,
                title: "Foreground Services",
                permission: "FOREGROUND_SERVICE",
                desc: "Persistent active tracking and navigation support.",
            },
            {
                icon: <BatteryCharging size={18} />,
                title: "Battery Optimization",
                permission: "REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
                desc: "Prevents OS interruption during critical tracking operations.",
            },
            {
                icon: <Clock size={18} />,
                title: "Wake Lock",
                permission: "WAKE_LOCK",
                desc: "Keeps critical delivery tracking processes running reliably.",
            },
        ],
    },
    {
        id: 3,
        title: "How We Use Your Data",
        icon: <Users size={20} />,
        bullets: [
            "Facilitate delivery operations",
            "Track delivery progress in real time",
            "Improve route efficiency",
            "Verify successful deliveries",
            "Send operational notifications",
            "Maintain performance and reliability",
        ],
    },
    {
        id: 4,
        title: "Data Sharing",
        icon: <Users size={20} />,
        bullets: [
            "Delivery partners",
            "Logistics operators",
            "Service providers supporting app functionality",
            "Legal authorities when required by law",
        ],
    },
    {
        id: 5,
        title: "Data Retention",
        icon: <Clock size={20} />,
        bullets: [
            "Delivery fulfillment",
            "Operational analytics",
            "Legal compliance",
            "Dispute resolution",
            "Location data may be deleted or anonymized after operational use",
        ],
    },
    {
        id: 6,
        title: "Security",
        icon: <Lock size={20} />,
        text: "We implement reasonable technical and organizational safeguards to protect your information against unauthorized access, misuse, or disclosure. No platform can guarantee absolute security.",
    },
    {
        id: 7,
        title: "Your Choices",
        icon: <Shield size={20} />,
        bullets: [
            "Disable notifications",
            "Revoke location permissions",
            "Restrict background location access",
        ],
    },
    {
        id: 8,
        title: "Children's Privacy",
        icon: <Shield size={20} />,
        text: "Our app is not intended for children under 13 (or applicable age in your region), and we do not knowingly collect information from children.",
    },
    {
        id: 9,
        title: "Policy Updates",
        icon: <RefreshCw size={20} />,
        text: "We may update this Privacy Policy periodically. Changes will be posted with an updated effective date.",
    },
    {
        id: 10,
        title: "Contact Us",
        icon: <Mail size={20} />,
        contact: {
            email: "support@drydash.in",
            company: "Drydash Private Limited",
        },
    },
];

const SectionCard = ({ section }: { section: PrivacySection }) => {
    return (
        <section id={`section-${section.id}`} className="pp-card scroll-mt-10">
            <div className="pp-card-header">
                <div className="pp-icon-wrap">{section.icon}</div>
                <h2 className="pp-section-title">{section.title}</h2>
            </div>

            <div className="pp-card-body">
                {section.content &&
                    section.content.map((item, idx) => (
                        <div key={idx} className="pp-content-block">
                            {item.subtitle && <h4 className="pp-subheading">{item.subtitle}</h4>}
                            {item.text && <p className="pp-text">{item.text}</p>}
                            {item.bullets && (
                                <ul className="pp-list">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                {section.permissions && (
                    <div className="pp-permission-grid">
                        {section.permissions.map((perm, idx) => (
                            <div key={idx} className="pp-permission-card">
                                <div className="pp-permission-header">
                                    <div className="pp-permission-icon">{perm.icon}</div>
                                    <h4 className="pp-permission-title">{perm.title}</h4>
                                </div>
                                <p className="pp-text pp-permission-desc">{perm.desc}</p>
                                <div className="pp-permission-badge">
                                    <code>{perm.permission}</code>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {section.bullets && (
                    <ul className="pp-list">
                        {section.bullets.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}

                {section.text && <p className="pp-text">{section.text}</p>}

                {section.contact && (
                    <div className="pp-contact-box">
                        <div className="pp-contact-row">
                            <span className="pp-contact-label">Company</span>
                            <span className="pp-contact-value">
                                {section.contact.company}
                            </span>
                        </div>
                        <div className="pp-contact-row">
                            <span className="pp-contact-label">Email Support</span>
                            <span className="pp-contact-value">
                                <a href={`mailto:${section.contact.email}`}>
                                    {section.contact.email}
                                </a>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default function RiderPrivacyPolicy() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeSection, setActiveSection] = useState(1);

    const filteredSections = useMemo(() => {
        if (!searchQuery.trim()) return privacySections;
        return privacySections.filter(
            (section) =>
                section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (section.text &&
                    section.text.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (section.content &&
                    section.content.some(
                        (c) =>
                            (c.subtitle && c.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            (c.text && c.text.toLowerCase().includes(searchQuery.toLowerCase()))
                    ))
        );
    }, [searchQuery]);

    const scrollToSection = (id: number) => {
        setActiveSection(id);
        const element = document.getElementById(`section-${id}`);
        if (element) {
            const offset = 120; // Accounts for header heights
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="pp-wrapper">
            <style>{`
                .pp-wrapper {
                  background: transparent;
                  min-height: 100vh;
                  font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                  color: #ffffff;
                  line-height: 1.6;
                  letter-spacing: -0.01em;
                }
                /* Hero Header Styling */
                .pp-hero {
                  background: transparent;
                  padding: 80px 24px 40px;
                  text-align: center;
                }
                .pp-hero-container {
                  max-width: 768px;
                  margin: 0 auto;
                }
                .pp-hero-badge {
                  display: inline-flex;
                  align-items: center;
                  padding: 6px 12px;
                  border-radius: 999px;
                  background: rgba(69, 143, 131, 0.1);
                  border: 1px solid rgba(69, 143, 131, 0.2);
                  color: #458F83;
                  margin-bottom: 20px;
                  font-weight: 600;
                  font-size: 13px;
                  letter-spacing: 0.02em;
                }
                .pp-title {
                  font-size: 42px;
                  margin: 0 0 12px 0;
                  font-weight: 700;
                  letter-spacing: -0.03em;
                  color: #ffffff;
                }
                .pp-subtitle {
                  font-size: 14px;
                  color: #8a928e;
                  margin: 0 0 32px 0;
                  font-weight: 400;
                }
                /* Search Bar Component */
                .pp-search-container {
                  position: relative;
                  max-width: 480px;
                  margin: 0 auto;
                }
                .pp-search-icon {
                  position: absolute;
                  left: 16px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #8a928e;
                  pointer-events: none;
                }
                .pp-search-input {
                  width: 100%;
                  padding: 12px 16px 12px 48px;
                  background-color: rgba(26, 26, 26, 0.6);
                  backdrop-filter: blur(8px);
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  border-radius: 12px;
                  font-size: 15px;
                  color: #ffffff;
                  transition: all 0.2s ease;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                  box-sizing: border-box;
                }
                .pp-search-input:focus {
                  outline: none;
                  border-color: #458F83;
                  box-shadow: 0 0 0 3px rgba(69, 143, 131, 0.2);
                }
                .pp-search-input::placeholder {
                  color: rgba(255, 255, 255, 0.4);
                }
                /* Main Container Layout split */
                .pp-main-layout {
                  max-width: 1280px;
                  margin: 0 auto;
                  padding: 48px 24px;
                  display: grid;
                  grid-template-columns: 280px 1fr;
                  gap: 64px;
                }
                /* Sticky Sidebar Navigation */
                .pp-sidebar {
                  position: sticky;
                  top: 100px;
                  height: fit-content;
                  display: flex;
                  flex-direction: column;
                  gap: 6px;
                }
                .pp-sidebar-title {
                  font-size: 12px;
                  text-transform: uppercase;
                  font-weight: 600;
                  letter-spacing: 0.05em;
                  color: #8a928e;
                  margin-bottom: 12px;
                  padding-left: 12px;
                }
                .pp-nav-link {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 10px 12px;
                  border-radius: 8px;
                  color: #8a928e;
                  font-size: 14px;
                  font-weight: 500;
                  text-decoration: none;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  text-align: left;
                  transition: all 0.15s ease;
                }
                .pp-nav-link:hover {
                  color: #ffffff;
                  background-color: rgba(255, 255, 255, 0.05);
                }
                .pp-nav-link.active {
                  color: #458F83;
                  background-color: rgba(69, 143, 131, 0.1);
                  font-weight: 600;
                }
                .pp-nav-link .chevron {
                  opacity: 0;
                  transform: translateX(-4px);
                  transition: all 0.15s ease;
                  color: #458F83;
                }
                .pp-nav-link.active .chevron {
                  opacity: 1;
                  transform: translateX(0);
                }
                /* Content Stack layout */
                .pp-content-stack {
                  display: flex;
                  flex-direction: column;
                  gap: 40px;
                }
                /* Elevated SaaS Cards styling */
                .pp-card {
                  background: rgba(17, 17, 17, 0.8);
                  backdrop-filter: blur(12px);
                  padding: 40px;
                  border-radius: 16px;
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
                }
                .pp-card-header {
                  display: flex;
                  align-items: center;
                  gap: 16px;
                  margin-bottom: 28px;
                  padding-bottom: 20px;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .pp-icon-wrap {
                  width: 38px;
                  height: 38px;
                  border-radius: 10px;
                  background: rgba(69, 143, 131, 0.1);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #458F83;
                  border: 1px solid rgba(69, 143, 131, 0.2);
                }
                .pp-section-title {
                  margin: 0;
                  font-size: 22px;
                  font-weight: 600;
                  color: #ffffff;
                  letter-spacing: -0.02em;
                }
                .pp-content-block {
                  margin-bottom: 28px;
                }
                
                .pp-content-block:last-child {
                  margin-bottom: 0;
                }
                .pp-subheading {
                  font-size: 16px;
                  color: #ffffff;
                  margin: 0 0 10px 0;
                  font-weight: 600;
                }
                .pp-text {
                  font-size: 15px;
                  color: #8a928e;
                  margin: 0 0 16px 0;
                  line-height: 1.6;
                }
                /* Refined lists instead of loud dots */
                .pp-list {
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                .pp-list li {
                  position: relative;
                  padding-left: 20px;
                  margin-bottom: 10px;
                  color: #8a928e;
                  font-size: 15px;
                }
                .pp-list li::before {
                  content: "";
                  position: absolute;
                  left: 4px;
                  top: 10px;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: #458F83;
                }
                /* Fine-Tuned Permission Layout */
                .pp-permission-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                  gap: 16px;
                  margin-top: 20px;
                }
                .pp-permission-card {
                  padding: 20px;
                  border-radius: 12px;
                  background: rgba(26, 26, 26, 0.4);
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  display: flex;
                  flex-direction: column;
                  transition: transform 0.2s ease, border-color 0.2s ease;
                }
                .pp-permission-card:hover {
                  transform: translateY(-2px);
                  border-color: rgba(69, 143, 131, 0.3);
                }
                .pp-permission-header {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 8px;
                }
                .pp-permission-icon {
                  color: #458F83;
                  display: flex;
                }
                .pp-permission-title {
                  margin: 0;
                  font-size: 14px;
                  font-weight: 600;
                  color: #ffffff;
                }
                .pp-permission-desc {
                  font-size: 13px;
                  color: #8a928e;
                  margin-bottom: 16px;
                  flex-grow: 1;
                  line-height: 1.5;
                }
                .pp-permission-badge {
                  align-self: flex-start;
                }
                .pp-permission-badge code {
                  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                  font-size: 11px;
                  padding: 4px 8px;
                  background: rgba(69, 143, 131, 0.1);
                  color: #03D391;
                  border: 1px solid rgba(69, 143, 131, 0.2);
                  border-radius: 6px;
                  font-weight: 500;
                }
                /* Enterprise Contact Layout Box */
                .pp-contact-box {
                  background: rgba(26, 26, 26, 0.4);
                  border-radius: 12px;
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  padding: 8px 16px;
                  max-width: 450px;
                }
                .pp-contact-row {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 0;
                  font-size: 14px;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .pp-contact-row:last-child {
                  border-bottom: none;
                }
                .pp-contact-label {
                  color: #8a928e;
                  font-weight: 500;
                }
                .pp-contact-value {
                  color: #ffffff;
                  font-weight: 600;
                }
                .pp-contact-value a {
                  color: #458F83;
                  text-decoration: none;
                  transition: color 0.15s ease;
                }
                .pp-contact-value a:hover {
                  color: #03D391;
                  text-decoration: underline;
                }
                .pp-no-results {
                  text-align: center;
                  padding: 48px;
                  color: #8a928e;
                  background: rgba(17, 17, 17, 0.8);
                  border-radius: 16px;
                  border: 1px dashed rgba(255, 255, 255, 0.1);
                }
                /* Responsive Breakpoints Grid conversion */
                @media (max-width: 1024px) {
                  .pp-main-layout {
                    grid-template-columns: 1fr;
                    gap: 40px;
                  }
                  .pp-sidebar {
                    display: none;
                  }
                }
                @media (max-width: 640px) {
                  .pp-title { font-size: 32px; }
                  .pp-hero { padding: 60px 16px 40px; }
                  .pp-card { padding: 24px; }
                  .pp-main-layout { padding: 24px 16px; }
                }
            `}</style>

            <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pb-20">
                <Container>
                    <header className="pp-hero">
                        <div className="pp-hero-container">
                            <div className="pp-hero-badge">Rider Application</div>
                            <h1 className="pp-title font-sans">Rider Privacy Policy</h1>
                            <p className="pp-subtitle font-sans">Last Updated: May 28, 2026</p>

                            <div className="pp-search-container">
                                <Search size={18} className="pp-search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search policy parameters or keywords..."
                                    className="pp-search-input"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </header>

                    <div className="pp-main-layout">
                        <aside className="pp-sidebar">
                            <div className="pp-sidebar-title">Table of Contents</div>
                            {filteredSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`pp-nav-link ${activeSection === section.id ? "active" : ""
                                        }`}
                                >
                                    <span>{section.title}</span>
                                    <ChevronRight size={14} className="chevron" />
                                </button>
                            ))}
                        </aside>

                        <div className="pp-content-stack">
                            {filteredSections.length > 0 ? (
                                filteredSections.map((section) => (
                                    <SectionCard key={section.id} section={section} />
                                ))
                            ) : (
                                <div className="pp-no-results">
                                    <p>No sections matching &quot;{searchQuery}&quot; could be located.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
}