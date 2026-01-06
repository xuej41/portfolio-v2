import { Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./Features.css"

const ProjectCard = ({ id, title, description, features, imageSrc, reverse = false, animationDelay = 0 }) => {
  const [projectRef, projectVisible] = useScrollAnimation()

  return (
    <div
      ref={projectRef}
      className={`feature-project-card ${reverse ? "reverse" : ""} scroll-animate ${animationDelay > 0 ? `scroll-animate-delay-${animationDelay}` : ""} ${projectVisible ? "visible" : ""}`}
    >
      <div className="feature-project-content">
        <h3 className="feature-project-title">{title}</h3>
        <p className="feature-project-description">{description}</p>
        <ul className="feature-project-features">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link to={`/projects#${id}`} className="btn btn-primary">
            View Project
        </Link>
      </div>
      <div className="feature-project-visual">
        <div className="feature-project-image">
          <img src={imageSrc || "/placeholder.svg"} alt={title} />
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Featured Projects</h2>
          <p className="features-description">
            Showcase of recent work and technical expertise.
          </p>
        </div>

        <div className="features-grid">
          {/* Project 1 */}
          <ProjectCard
              id="chessmate"
              title="ChessMate"
              description="🏆 Winner @ Hack the North 2025 — Autonomous AI-Powered Robotic Chessboard. Features autonomous piece movement, voice-controlled interaction, and remote AI coaching, all integrated through a web platform."
              features={[
                "Dual-axis gantry powered by Arduino and stepper motors/drivers",
                "Piece tracking with OpenCV and movement logic with Python",
                "Stockfish-powered chess engine logic with real-time gameplay",
                "Agentic AI coaching, voice commands, and web app integration",
              ]}
              imageSrc="/featured/chessmate3.jpg?height=300&width=400"
              reverse={false}
              animationDelay={0}
            />
          {/* Project 2 */}
          <ProjectCard
            id="memory-lane"
            title="Memory Lane"
            description="Deltahacks hackathon project - Facial recognition web app to assist Alzheimer's patients with memory recall. Deployed to Streamlit Cloud."
            features={[
              "Instant Facial recognition",
              "Database storage and retrieval",
              "Easy to use web interface",
            ]}
            imageSrc="/featured/memorylane2.PNG?height=300&width=400"
            reverse={true}
            animationDelay={1}
          />
          {/* Project 3 */}
            <ProjectCard
              id="sumobot-v2"
              title="Sumobot V2"
              description="Fully autonomous robotic battle bot designed for competitive environments. Features advanced sensors, real-time decision-making, and robust construction for optimal performance."
              features={[
                "Dual ultrasonic sensors + TOF sensor",
                "Dual IR sensors for line detection",
                "Arduino Nano + motor driver + DC motors with Steelies",
              ]}
              imageSrc="/featured/sumobot-v2.jpg?height=300&width=400"
              reverse={false}
              animationDelay={2}
            />
          {/* Project 4 */}
          <ProjectCard
            id="national-bidders"
            title="National Bidders of Canada"
            description="QHacks hackathon project - Dynamic live auction platform. Live cross-platform bids, list items, user authentication."
            features={[
              "Real-time bids and inventory tracking",
              "Admin dashboard with analytics",
              "Secure user authentication and payment processing",
              "AI Chatbot Assistant",
            ]}
            imageSrc="/featured/nbc.png"
            reverse={true}
            animationDelay={3}
          />
        </div>

        <div className="features-cta">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
