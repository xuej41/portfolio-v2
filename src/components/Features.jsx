import { Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./Features.css"

const ProjectCard = ({ title, description, features, imageSrc, reverse = false, animationDelay = 0 }) => {
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
  const [headerRef, headerVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

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
            title="National Bidders of Canada E-Commerce Platform"
            description="Full-stack e-commerce solution built with Next, React, and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard for comprehensive store management."
            features={[
              "Real-time bids and inventory tracking",
              "Admin dashboard with analytics",
              "Mobile-responsive design",
            ]}
            imageSrc="/placeholder.svg?height=300&width=400"
            reverse={false}
            animationDelay={0}
          />

          {/* Project 2 */}
          <ProjectCard
            title="Git Tissues Task Management App"
            description="Collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking."
            features={["Real-time collaboration", "Drag & drop interface", "Progress tracking"]}
            imageSrc="/placeholder.svg?height=300&width=400"
            reverse={true}
            animationDelay={0}
          />

          {/* Project 3 */}
          <ProjectCard
            title="PlanetPal Real-Time Waste Management Assistant"
            description="Modern messaging platform with instant communication capabilities. Built with advanced features for seamless waste management efficiency and engagement."
            features={[
              "Instant message delivery",
              "Online status indicators",
            ]}
            imageSrc="/placeholder.svg?height=300&width=400"
            reverse={false}
            animationDelay={0}
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
