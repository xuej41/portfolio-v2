import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "./ProjectPage.css";

const NationalBidders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <div className="project-container">
        {/* Header Section */}
        <header className="project-header">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
          <h1 className="project-title">National Bidders of Canada</h1>
          <p className="project-subtitle">
            QHacks Hackathon Project — Dynamic Live Auction Platform
          </p>
          <div className="project-tags">
            <span className="project-tag">Next.js</span>
            <span className="project-tag">TypeScript</span>
            <span className="project-tag">Tailwind CSS</span>
            <span className="project-tag">PostgreSQL</span>
            <span className="project-tag">Supabase</span>
          </div>
        </header>

        {/* Hero Image/Video Section */}
        <section className="project-hero-media">
          <div className="media-placeholder">
            <img 
              src="/featuredprojects/nbc2.jpg" 
              alt="National Bidders of Canada Project Hero" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2 className="section-heading">Project Overview</h2>
          <p className="section-text">
            National Bidders of Canada is a dynamic live auction platform built during the QHacks hackathon. 
            The platform enables real-time cross-platform bidding, item listing, and user authentication. 
            Features include an admin dashboard with analytics, secure payment processing, and an AI chatbot 
            assistant to help users navigate the platform.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="project-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="project-features-grid">
            <div className="feature-card">
              <h3>⚡ Real-Time Bidding</h3>
              <p>Live cross-platform bids with instant updates and inventory tracking.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Admin Dashboard</h3>
              <p>Comprehensive analytics and management tools for auction administrators.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure Authentication</h3>
              <p>User authentication and secure payment processing integration.</p>
            </div>
            <div className="feature-card">
              <h3>🤖 AI Chatbot Assistant</h3>
              <p>Intelligent assistant to help users navigate and find items.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="project-section">
          <h2 className="section-heading">Gallery</h2>
          <ImageCarousel images={[
            { src: "/featuredprojects/nbc2.jpg", alt: "National Bidders Image 1" },
            { src: "/featuredprojects/nbc2.jpg", alt: "National Bidders Image 2" },
            { src: "/featuredprojects/nbc2.jpg", alt: "National Bidders Image 3" },
          ]} />
        </section>

        {/* Video Section */}
        <section className="project-section">
          <h2 className="section-heading">Demo Video</h2>
          <div className="video-container">
            <div className="video-placeholder">
              {/* Replace with actual video embed */}
              <p>Video embed placeholder</p>
              <p className="video-hint">Add your YouTube/Vimeo embed or video file here</p>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="project-section">
          <h2 className="section-heading">Technical Details</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>Next.js framework</li>
                <li>TypeScript</li>
                <li>Tailwind CSS styling</li>
                <li>Real-time WebSocket updates</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Supabase backend</li>
                <li>PostgreSQL database</li>
                <li>RESTful API endpoints</li>
                <li>Real-time subscriptions</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Features</h3>
              <ul>
                <li>User authentication</li>
                <li>Payment integration</li>
                <li>AI chatbot (OpenAI)</li>
                <li>Admin analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="project-section">
          <h2 className="section-heading">Project Links</h2>
          <div className="project-links">
            <a 
              href="https://devpost.com/software/national-bidders-of-canada" 
              className="project-link-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Devpost
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NationalBidders;
