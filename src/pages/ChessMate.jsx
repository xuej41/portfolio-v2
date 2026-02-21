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
              src="/featuredprojects/chessmate/coverimage.jpg" 
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
          <h2 className="section-heading">Features</h2>
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
          <h2 className="section-heading">Gantry Build Process</h2>
          <div className="build-timeline">
            {/* Step 1 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Design & Planning</h3>
                <p className="build-step-description">
                  Started with conceptual designs for the idea, and designs for the gantry system. We decided on a 3-DoF gantry under the chessboard, which would be able to move the master magnet along the XY plane, and a servo to move the magnet up and down (Z).
                </p>
                <p className="build-step-description">
                  Parts used for the gantry:
                </p>
                <ul className="build-step-description">
                    <li>1x Creality 42-40 NEMA 17 stepper motor</li>
                    <li>1x Usongshine Aliexpress stepper motor</li>
                    <li>2x DRV8825 stepper motor drivers</li>
                    <li>1x Arduino Uno</li>
                    <li>2x Creality end stop switches</li>
                    {/* <li>Range of motion: 60cm x 60cm x 10cm</li>
                    <li>Positioning accuracy: ±1mm</li>
                    <li>Max speed: 20cm/s</li> */}
                </ul>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/gantry_conceptual.jpg" alt="Conceptual Drawing" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">Building the X Axis</h3>
                <p className="build-step-description">
                  I decided to repurpose an old Creality 3D printer's belt-drive gantry system for the X axis movement mechanism. Unfortunately, we a gantry double the size to accomodate for our extra-large chessboard. So I had to completely dissassemble the gantry frame, extend it with a side piece, and buy a new belt double the length of the original, doubling the length of the X axis.
                </p>
                <p className="build-step-description">
                  Luckily, the gantry came with a Creality stepper motor and end stop switch, so apart from rebuilding the frame, the X axis was easy to build.
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/gantry0_1.jpg" alt="Hardware assembly 1" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/gantry0_2.jpg" alt="Hardware assembly 1" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/gantryframe1.jpg" alt="Hardware assembly 2" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/gantryframe2.jpg" alt="Hardware demo" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Building the Y Axis</h3>
                <p className="build-step-description">
                  For the Y axis, I decided to use a rack and pinion system. The idea was simple: a stepper motor with a pinion gear would drive a long rack gear attached to the X axis.
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/rackpinionsingle.jpg" alt="Computer vision setup" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/rackpinionmultiple.jpg" alt="Computer vision setup" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                {/* <h3 className="build-step-title">Software & AI Integration</h3> */}
                <p className="build-step-description">
                  After printing the rack and pinion gears came the hard part, which was assembling the track for the stepper motor to slide across with minimal friction.
                  I had to 3D print custom mounts for the stepper motor that would support its weight and provide enough range of motion.
                </p>
                <p className="build-step-description">
                  The initial test with the stepper motor went well. At 12V, the motor + driver only consumed ~300mA!
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/videos/gantry2.MOV" type="video" alt="Computer vision setup" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/videos/gantry3.MOV" type="video" alt="Computer vision setup" />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Combining Both Axes</h3>
                <p className="build-step-description">
                  After building both axes, I had to combine them into a single gantry system. This involved carefully aligning the X and Y axes and securing them together with nuts, bolts and washers in between. I made sure to drill the mounting holes extra wide so that I could adjust if the axes were not perfectly perpendicular.
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/attachxy.jpg" alt="Computer vision setup" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featuredprojects/chessmate/attachxy2.jpg" alt="Computer vision setup" />
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">First Gantry Demo</h3>
                <p className="build-step-description">
                  The first gantry demo was a huge milestone for the project. It was the first time we saw the gantry move autonomously, and it was a great proof of concept for the piece movement mechanism. We were able to control the gantry with simple Python commands sent to the Arduino via PySerial. 
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/videos/firstgantrydemo.MP4" type="video" alt="First Gantry Demo" />
                </div>
              </div>
            </div>

            <p>
              More to come...
            </p>

          </div>
        </section>

        {/* Gallery Section */}
        <section className="project-section">
          <h2 className="section-heading">Gallery</h2>
          <ImageCarousel images={[
            { src: "/featuredprojects/chessmate/cardimage.jpg", alt: "ChessMate Image 1" },
            { src: "/featuredprojects/chessmate/coverimage.jpg", alt: "ChessMate Image 2" },
            // { src: "/public/videos/wave_1.mp4", alt: "ChessMate Image 3", type: "video" },
            { src: "/featuredprojects/chessmate/onstage_josh.jpg", alt: "ChessMate Image 3" },
            { src: "/featuredprojects/chessmate/onstage_neel.jpg", alt: "ChessMate Image 4" },
            { src: "/featuredprojects/chessmate/stage.jpg", alt: "ChessMate Image 5" },
            { src: "/featuredprojects/chessmate/onstage_josh2.jpg", alt: "ChessMate Image 6" },
            { src: "/featuredprojects/chessmate/onstage_josh3.jpg", alt: "ChessMate Image 7" }
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
                <li>Arduino Uno microcontroller</li>
                <li>Stepper motors and drivers</li>
                <li>3-DoF gantry system</li>
                <li>Electromagnet and Servo</li>
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
