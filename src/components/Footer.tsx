export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-intro">
              <h2 className="footer-title">
                What's new at
                <br />
                Graybook AI
              </h2>
              <p className="footer-description">
                New products, new tools, new features, service updates, and more
                as they are announced! Find it here, try, experiment, and
                innovate faster!
              </p>
              <div className="quote">
                <svg
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0H21.5L14.5 38H0L11.5 0Z"
                    fill="#D9D9D9"
                  ></path>
                  <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9"></path>
                </svg>
              </div>

              <div className="newsletter-section">
                <p className="newsletter-label">
                  Get started now, try our product
                </p>
                <div className="email-signup">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    className="email-input"
                  />
                  <button className="submit-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="social-section">
                <p className="social-label">Follow us</p>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="trust-card">
              <h3 className="trust-title">Why you should trust us?</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon orange">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">474</div>
                    <div className="stat-label">Active users</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon purple">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">476</div>
                    <div className="stat-label">Prompts</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon green">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">316</div>
                    <div className="stat-label">Products</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon yellow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">79</div>
                    <div className="stat-label">Blogs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links-row">
          <div className="categories-section">
            <h3 className="section-title">Categories</h3>
            <div className="categories-grid">
              <div className="category-column">
                <a href="#" className="category-link">
                  Artists
                </a>
                <a href="#" className="category-link">
                  Content Creator
                </a>
                <a href="#" className="category-link">
                  Fashion Designers
                </a>
                <a href="#" className="category-link">
                  Interior Designer
                </a>
                <a href="#" className="category-link">
                  Marketer
                </a>
                <a href="#" className="category-link">
                  Scientist
                </a>
                <a href="#" className="category-link">
                  Software Engineer
                </a>
              </div>
              <div className="category-column">
                <a href="#" className="category-link">
                  Chef
                </a>
                <a href="#" className="category-link">
                  Educators
                </a>
                <a href="#" className="category-link">
                  Financial Analysts
                </a>
                <a href="#" className="category-link">
                  Job Seekers
                </a>
                <a href="#" className="category-link">
                  Musician
                </a>
                <a href="#" className="category-link">
                  Search
                </a>
                <a href="#" className="category-link">
                  Writers
                </a>
              </div>
              <div className="category-column">
                <a href="#" className="category-link">
                  Civil Engineers
                </a>
                <a href="#" className="category-link">
                  Entrepreneur
                </a>
                <a href="#" className="category-link">
                  Fitness Instructor
                </a>
                <a href="#" className="category-link">
                  Lawyers
                </a>
                <a href="#" className="category-link">
                  Photographer
                </a>
                <a href="#" className="category-link">
                  Social Media Specialist
                </a>
              </div>
            </div>
          </div>

          <div className="links-section">
            <h3 className="section-title">Quick Links</h3>
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              Professions
            </a>
            <a href="#" className="footer-link">
              Products
            </a>
            <a href="#" className="footer-link">
              Prompts
            </a>
            <a href="#" className="footer-link">
              Creators
            </a>
            <a href="#" className="footer-link">
              Leaderboard
            </a>
            <a href="#" className="footer-link">
              Become a creator
            </a>
          </div>

          <div className="links-section">
            <h3 className="section-title">Support</h3>
            <a href="#" className="footer-link">
              Help centre
            </a>
            <a href="#" className="footer-link">
              Account information
            </a>
            <a href="#" className="footer-link">
              About us
            </a>
            <a href="#" className="footer-link">
              Contact us
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">
              © 2024 Graybook Copyright and rights reserved
            </p>
            <p className="made-with">Made with ❤️ by DesignDot</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="legal-link">
              Terms and Conditions
            </a>
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
