import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import MediaLightbox from "../components/MediaLightbox";
import "./ProjectPage.css";

const SumobotV2 = () => {
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
          <h1 className="project-title">Autonomous Sumobot V2</h1>
          <p className="project-subtitle">
            Fully Autonomous Robotic Battle Bot for Competitive Environments
          </p>
          <div className="project-tags">
            <span className="project-tag">C++</span>
            <span className="project-tag">Arduino</span>
            <span className="project-tag">SolidWorks</span>
            <span className="project-tag">3D Printing</span>
          </div>
        </header>

        {/* Hero Image/Video Section */}
        <section className="project-hero-media">
          <div className="media-placeholder">
            <img 
              src="/featured/sumobot-v22.jpg" 
              alt="Sumobot V2 Project Hero" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2 className="section-heading">Project Overview</h2>
          <p className="section-text">
            The Autonomous Sumobot V2 is a fully autonomous robotic battle bot designed for competitive 
            sumo robot competitions. Building on lessons learned from V1, this iteration features advanced 
            sensors for 180° perception, real-time decision-making algorithms, and a robust custom-designed 
            chassis for optimal performance in the arena.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="project-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="project-features-grid">
            <div className="feature-card">
              <h3>📡 5-Sensor Array</h3>
              <p>Ultrasonic, TOF, and Infrared sensors providing 180° perception of the arena.</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Arduino Nano Control</h3>
              <p>Efficient microcontroller powering motor drivers, DC motors, and servo flaps.</p>
            </div>
            <div className="feature-card">
              <h3>🔧 Custom 3D Printed Chassis</h3>
              <p>Designed in SolidWorks and 3D printed for optimal weight distribution and durability.</p>
            </div>
            <div className="feature-card">
              <h3>🔋 6000mAh Battery Pack</h3>
              <p>High-capacity power system for extended competition runtime.</p>
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
                <h3 className="build-step-title">CAD Design</h3>
                <p className="build-step-description">
                  Designed the entire chassis in SolidWorks, optimizing for low center of gravity 
                  and maximum pushing power. Calculated motor torque requirements and battery placement 
                  for optimal weight distribution.
                  {/* Add more details about your CAD design process */}
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="CAD design phase" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">3D Printing & Assembly</h3>
                <p className="build-step-description">
                  Printed chassis components using PLA+ for durability. Assembled the mechanical 
                  structure including motor mounts, sensor brackets, and protective housing.
                  {/* Add more details about 3D printing */}
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="3D printing" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="Assembly" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Electronics Integration</h3>
                <p className="build-step-description">
                  Wired Arduino Nano to motor drivers, sensors, and servo motors. Created custom 
                  wiring harness for clean cable management and easy maintenance.
                  {/* Add more details about electronics */}
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="Electronics wiring" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="build-step reverse">
              <div className="build-step-content">
                <h3 className="build-step-title">Sensor Calibration & Programming</h3>
                <p className="build-step-description">
                  Calibrated all sensors for accurate distance measurement. Implemented autonomous 
                  combat logic with edge detection, opponent tracking, and aggressive attack patterns.
                  {/* Add more details about programming */}
                </p>
              </div>
              <div className="build-step-images multiple">
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="Sensor testing" />
                </div>
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="Programming" />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="build-step">
              <div className="build-step-content">
                <h3 className="build-step-title">Testing & Iteration</h3>
                <p className="build-step-description">
                  Extensive testing on practice rings to fine-tune sensor thresholds, motor speeds, 
                  and combat strategies. Made iterative improvements based on test results.
                  {/* Add more details about testing */}
                </p>
              </div>
              <div className="build-step-images">
                <div className="build-step-image">
                  <MediaLightbox src="/featured/sumobot-v22.jpg" alt="Testing phase" />
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
              <h3>⚠️ Challenge: Sensor Interference</h3>
              <p>Multiple ultrasonic sensors caused cross-talk and inaccurate readings.</p>
              <h4>✓ Solution</h4>
              <p>Implemented sequential sensor polling and added shielding between sensor modules.</p>
            </div>
            <div className="challenge-card">
              <h3>⚠️ Challenge: Weight Limit</h3>
              <p>Initial design exceeded the competition weight limit with the battery pack.</p>
              <h4>✓ Solution</h4>
              <p>Redesigned chassis with weight-saving cutouts and switched to lighter motor brackets.</p>
            </div>
            {/* Add more challenges as needed */}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="project-section">
          <h2 className="section-heading">Gallery</h2>
          <ImageCarousel images={[
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 1" },
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 2" },
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 3" },
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 4" },
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 5" },
            { src: "/featured/sumobot-v22.jpg", alt: "Sumobot V2 Image 6" },
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
              <h3>Hardware</h3>
              <ul>
                <li>Arduino Nano microcontroller</li>
                <li>L298N motor drivers</li>
                <li>High-torque DC motors</li>
                <li>Servo motors for flaps</li>
                <li>6000mAh LiPo battery</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Sensors</h3>
              <ul>
                <li>HC-SR04 ultrasonic sensors</li>
                <li>VL53L0X TOF sensors</li>
                <li>IR line sensors</li>
                <li>180° field of view</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Design</h3>
              <ul>
                <li>SolidWorks CAD design</li>
                <li>PLA+ 3D printed chassis</li>
                <li>Custom wiring harness</li>
                <li>Modular component design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="project-section">
          <h2 className="section-heading">Project Links</h2>
          <div className="project-links">
            <a 
              href="https://github.com/xuej41/arduino-projects/tree/main/sumobot-v2" 
              className="project-link-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SumobotV2;
