import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import MediaLightbox from "../components/MediaLightbox";
import "./ProjectPage.css";

const ChessMate = () => {
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
          <h1 className="project-title">ChessMate</h1>
          <p className="project-subtitle">
            🏆 Winner @ Hack the North 2025 — Autonomous AI-Powered Robotic Chessboard
          </p>
          <div className="project-tags">
            <span className="project-tag">Python</span>
            <span className="project-tag">Arduino</span>
            <span className="project-tag">Next.js</span>
            <span className="project-tag">Groq</span>
            <span className="project-tag">OpenCV</span>
          </div>
        </header>

        {/* Hero Image/Video Section */}
        <section className="project-hero-media">
          <div className="media-placeholder">
            <img 
              src="/featuredprojects/chessmate4.jpg" 
              alt="ChessMate Project Hero" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2 className="section-heading">Project Overview</h2>
          <p className="section-text">
            ChessMate is an autonomous AI-powered robotic chessboard that features autonomous piece 
            movement, voice-controlled interaction, and remote AI coaching, all integrated through 
            a web platform. Built at Hack the North 2025, this project won first place for its 
            innovative approach to combining robotics, computer vision, and artificial intelligence.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="project-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="project-features-grid">
            <div className="feature-card">
              <h3>🤖 Autonomous Movement</h3>
              <p>3-DoF gantry powered by Arduino and stepper motors/drivers for precise piece movement.</p>
            </div>
            <div className="feature-card">
              <h3>👁️ Computer Vision</h3>
              <p>Piece tracking with OpenCV and movement logic implemented in Python.</p>
            </div>
            <div className="feature-card">
              <h3>♟️ Chess Engine</h3>
              <p>Stockfish-powered chess engine logic with real-time gameplay capabilities.</p>
            </div>
            <div className="feature-card">
              <h3>🎤 Voice Control</h3>
              <p>Agentic AI coaching, voice commands, and seamless web app integration.</p>
            </div>
          </div>
        </section>

        {/* Build Process Section */}
        <section className="project-section build-process">
          <h2 className="section-heading">Build Process</h2>
          <div className="build-timeline">
            {/* Step 1 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Design & Planning</h3>
                <p className="build-step-description">
                  Started with CAD designs for the gantry system. Calculated dimensions based on 
                  standard chessboard sizes and planned motor placement for optimal movement range.
                  {/* Add more details about your design process */}
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Design phase" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">Hardware Assembly</h3>
                <p className="build-step-description">
                  Assembled the 3-DoF gantry system with stepper motors and drivers. Connected 
                  Arduino Nano for motor control and integrated the electromagnet for piece manipulation.
                  {/* Add more details about hardware assembly */}
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Hardware assembly 1" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Hardware assembly 2" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/videos/wave_1.mp4" type="video" alt="Hardware demo" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Computer Vision Integration</h3>
                <p className="build-step-description">
                  Implemented OpenCV-based piece detection and tracking. Calibrated camera positioning 
                  for accurate board state recognition and move detection.
                  {/* Add more details about CV integration */}
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Computer vision setup" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">Software & AI Integration</h3>
                <p className="build-step-description">
                  Connected Stockfish chess engine for gameplay logic. Integrated Groq for AI coaching 
                  and voice command processing. Built Next.js web app for remote interaction.
                  {/* Add more details about software integration */}
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Software development" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate4.jpg" alt="Web app interface" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="project-section">
          <h2 className="section-heading">Challenges & Solutions</h2>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h3>⚠️ Challenge: Piece Detection Accuracy</h3>
              <p>Initial OpenCV setup struggled with lighting variations and similar-colored pieces.</p>
              <h4>✓ Solution</h4>
              <p>Implemented adaptive thresholding and added consistent LED lighting to the board enclosure.</p>
            </div>
            <div className="challenge-card">
              <h3>⚠️ Challenge: Gantry Precision</h3>
              <p>Stepper motor movement had slight positioning errors over multiple moves.</p>
              <h4>✓ Solution</h4>
              <p>Added calibration routine and limit switches for accurate home positioning between games.</p>
            </div>
            {/* Add more challenges as needed */}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="project-section">
          <h2 className="section-heading">Gallery</h2>
          <ImageCarousel images={[
            { src: "/featuredprojects/chessmate4.jpg", alt: "ChessMate Image 1" },
            { src: "/imgs/whitemode.jpg", alt: "ChessMate Image 2" },
            { src: "/public/videos/wave_1.mp4", alt: "ChessMate Image 3", type: "video" },
            { src: "/featuredprojects/chessmate4.jpg", alt: "ChessMate Image 3" },
            { src: "/featuredprojects/chessmate4.jpg", alt: "ChessMate Image 4" },
            { src: "/featuredprojects/chessmate4.jpg", alt: "ChessMate Image 5" },
            { src: "/featuredprojects/chessmate4.jpg", alt: "ChessMate Image 6" },
          ]} />
        </section>

        {/* Video Section */}
        <section className="project-section">
          <h2 className="section-heading">Demo Video</h2>
          <div className="video-container">
            <div className="video-placeholder">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JDlEdZKH69k" 
                title="ChessMate Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="project-section">
          <h2 className="section-heading">Technical Details</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>Hardware</h3>
              <ul>
                <li>Arduino Nano microcontroller</li>
                <li>Stepper motors and drivers</li>
                <li>3-DoF gantry system</li>
                <li>Electromagnet end effector</li>
                <li>Custom 3D printed components</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Software</h3>
              <ul>
                <li>Python for movement logic</li>
                <li>OpenCV for piece tracking</li>
                <li>Stockfish chess engine</li>
                <li>Next.js web application</li>
                <li>WebSocket real-time sync</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>AI & Integration</h3>
              <ul>
                <li>Groq for AI processing</li>
                <li>Voice command recognition</li>
                <li>Real-time game state sync</li>
                <li>Remote coaching capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="project-section">
          <h2 className="section-heading">Project Links</h2>
          <div className="project-links">
            <a 
              href="https://devpost.com/software/chessmate-nwygvq" 
              className="project-link-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Devpost
            </a>
            <a 
              href="https://github.com/o-bm/ChessMate" 
              className="project-link-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChessMate;
