export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-intro">
              <h2 className="footer-title">What's new at<br/>
              Graybook AI</h2>
              <p className="footer-description">
              New products, new tools, new features, service updates, and more as they are announced! Find it here, try, experiment, and innovate faster!
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
            </div>

            <div className="newsletter-section">
              <div className="newsletter-label">Subscribe to our newsletter</div>
              <div className="email-signup">
                <input type="email" placeholder="Enter your email address" className="email-input" />
                <button className="submit-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="social-section">
              <div className="social-label">Follow us</div>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="trust-card">
              <h3 className="trust-title">Trusted by creators worldwide</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Active Creators</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">1M+</div>
                    <div className="stat-label">AI Creations</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">99%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon yellow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-links-row">
        <div className="categories-section">
            
            <div className="category">
              <div className="category-column">
                <h3 className="section-title">Categories</h3>
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
                <h3 className="section-title hidden "></h3>
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
                <h3 className="section-title hidden"></h3>
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

              <div className="category-column">
                <h3 className="section-title">Quick Links</h3>
                <a href="#" className="category-link">
                  Home
                </a>
                <a href="#" className="category-link">
                  Professions
                </a>
                <a href="#" className="category-link">
                  Products
                </a>
                <a href="#" className="category-link">
                  Prompts
                </a>
                <a href="#" className="category-link">
                  Creators
                </a>
                <a href="#" className="category-link">
                  Leaderboard
                </a>
                <a href="#" className="category-link">
                  Become a creator
                </a>
              </div>
              <div className="category-column">
                <h3 className="section-title">Support</h3>
                <a href="#" className="category-link">
                  Help centre
                </a>
                <a href="#" className="category-link">
                  Account information
                </a>
                <a href="#" className="category-link">
                  About us
                </a>
                <a href="#" className="category-link">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="copyright">© 2024 GrayBook. All rights reserved.</div>
            <div className="made-with">Made with ❤️ for creators worldwide</div>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <a href="#" className="legal-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
