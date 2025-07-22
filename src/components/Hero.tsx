export default function Hero() {
  return (
    <div className="layout2">
    <div className="container ">
      <div className="landing-container">
        <div className="content-section">
          <div className="tagline">AI-Powered Creative Platform</div>
          <h1 className="main-heading">
          Graybook - Where AI meets every <span className="highlight">profession.</span>
          </h1>
          <p className="description">
            Explore a world of AI-generated content, from stunning visuals to innovative prompts. Join our community of
            creators and discover the future of digital creativity.
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>
        <div className="visual-section-container">
          <div className="image-column">
            <div className="image-card image-card-1"></div>
            <div className="image-card image-card-2"></div>
          </div>
          <div className="image-column">
            <div className="image-card image-card-3"></div>
            <div className="image-card image-card-4"></div>
          </div>
          <div className="image-column">
            <div className="image-card image-card-5"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
