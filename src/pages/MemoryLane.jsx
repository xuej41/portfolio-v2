import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "./ProjectPage.css";

const MemoryLane = () => {
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
          <h1 className="project-title">Memory Lane</h1>
          <p className="project-subtitle">
            DeltaHacks Hackathon Project — Facial Recognition App for Alzheimer's Patients
          </p>
          <div className="project-tags">
            <span className="project-tag">Streamlit</span>
            <span className="project-tag">OpenCV</span>
            <span className="project-tag">MongoDB</span>
            <span className="project-tag">Python</span>
          </div>
        </header>

        {/* Hero Image/Video Section */}
        <section className="project-hero-media">
          <div className="media-placeholder">
            <img 
              src="/featured/memorylane.jpg" 
              alt="Memory Lane Project Hero" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2 className="section-heading">Project Overview</h2>
          <p className="section-text">
            Memory Lane is a facial recognition web application designed to assist Alzheimer's patients 
            with memory recall. The app allows caregivers to upload photos of family members and friends, 
            which the patient can then identify using real-time facial recognition. Built during the 
            DeltaHacks hackathon and deployed to Streamlit Cloud for easy accessibility.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="project-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="project-features-grid">
            <div className="feature-card">
              <h3>👁️ Instant Facial Recognition</h3>
              <p>Real-time face detection and recognition using OpenCV and deep learning models.</p>
            </div>
            <div className="feature-card">
              <h3>💾 Database Storage</h3>
              <p>Secure MongoDB database for storing facial data and personal information.</p>
            </div>
            <div className="feature-card">
              <h3>🖥️ Easy Web Interface</h3>
              <p>User-friendly Streamlit interface accessible from any device with a camera.</p>
            </div>
            <div className="feature-card">
              <h3>☁️ Cloud Deployed</h3>
              <p>Deployed to Streamlit Cloud for easy access without installation.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="project-section">
          <h2 className="section-heading">Gallery</h2>
          <ImageCarousel images={[
            { src: "/featured/memorylane.jpg", alt: "Memory Lane Image 1" },
            { src: "/featured/memorylane.jpg", alt: "Memory Lane Image 2" },
            { src: "/featured/memorylane.jpg", alt: "Memory Lane Image 3" },
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
                <li>Streamlit web framework</li>
                <li>Real-time camera feed</li>
                <li>Responsive UI design</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Python processing</li>
                <li>OpenCV face detection</li>
                <li>Face recognition library</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB Atlas</li>
                <li>Face encoding storage</li>
                <li>User profile management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="project-section">
          <h2 className="section-heading">Project Links</h2>
          <div className="project-links">
            <a 
              href="https://devpost.com/software/memory-lane-dhke7c" 
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

export default MemoryLane;
