import React from "react";
import "./home.css";

export function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <h2>ProfessionalHub</h2>
            </div>
            <div className="nav-menu">
              <a href="#" className="nav-link">
                Services <span className="dropdown-arrow">▼</span>
              </a>
              <a href="#" className="nav-link">
                Explore <span className="dropdown-arrow">▼</span>
              </a>
              <a href="#" className="nav-link">
                Become a Seller
              </a>
              <a href="#" className="nav-link">
                Sign up
              </a>
              <button className="join-btn">Login</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Our freelancers
                <br />
                will take it from here
              </h1>

              <div className="search-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search for any service..."
                    className="search-input"
                  />
                  <button className="search-btn" aria-label="Search">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="service-tags">
                <a href="#" className="service-tag">
                  website development →
                </a>
                <a href="#" className="service-tag">
                  architecture &amp; interior design →
                </a>
                <a href="#" className="service-tag">
                  UGC videos →
                </a>
                <a href="#" className="service-tag">
                  video editing →
                </a>
                <a href="#" className="service-tag">
                  web coding <span className="new-badge">NEW</span> →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why choose FreelanceHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Professional Quality</h3>
              <p>
                Access to top-tier freelancers with verified skills and
                portfolios
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>
                Get your projects completed quickly with our efficient workflow
                system
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Payments</h3>
              <p>
                Protected transactions with money-back guarantee for peace of
                mind
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock customer support to help you every step of the
                way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Popular Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
                alt="Web Development"
              />
              <div className="service-info">
                <h3>Web Development</h3>
                <p>Custom websites and applications</p>
                <span className="service-price">Starting at $25</span>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
                alt="Graphic Design"
              />
              <div className="service-info">
                <h3>Graphic Design</h3>
                <p>Logos, branding, and visual identity</p>
                <span className="service-price">Starting at $15</span>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
                alt="Video Editing"
              />
              <div className="service-info">
                <h3>Video Editing</h3>
                <p>Professional video production</p>
                <span className="service-price">Starting at $30</span>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=250&fit=crop"
                alt="Content Writing"
              />
              <div className="service-info">
                <h3>Content Writing</h3>
                <p>Engaging copy and articles</p>
                <span className="service-price">Starting at $10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>
              Join thousands of satisfied clients who have found their perfect
              freelancer
            </p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>FreelanceHub</h3>
              <p>Connecting businesses with talented freelancers worldwide</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Writing</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Trust & Safety</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
