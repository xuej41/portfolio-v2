"use client"
import { Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./../pages/Projects.css" // Import Projects.css for styling

const FeaturedProjectCard = ({
  title,
  description,
  features,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  projectId, // Add projectId prop
  reverse = false,
  animationDelay = 0,
}) => {
  const [projectRef, projectVisible] = useScrollAnimation()

  const handleExternalLinkClick = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Link
      to={`/projects/${projectId}`}
      ref={projectRef}
      className={`featured-project-card-link ${reverse ? "reverse" : ""} scroll-animate ${animationDelay > 0 ? `scroll-animate-delay-${animationDelay}` : ""} ${projectVisible ? "visible" : ""}`}
    >
      <div className="featured-project-content">
        <h3 className="featured-project-title">{title}</h3>
        <p className="featured-project-description">{description}</p>
        <ul className="featured-project-features">
          {features.map((feature, index) => (
            <li key={index} className="featured-feature-item">
              <span className="featured-feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="featured-project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="featured-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="featured-project-links">
          <span className="featured-project-link-text">View Details</span>
          <button className="featured-project-link-external" onClick={(e) => handleExternalLinkClick(e, liveUrl)}>
            Live Demo
          </button>
          <button className="featured-project-link-external" onClick={(e) => handleExternalLinkClick(e, githubUrl)}>
            GitHub
          </button>
        </div>
      </div>
      <div className="featured-project-visual">
        <div className="featured-project-image">
          <img src={imageSrc || "/placeholder.svg"} alt={title} />
        </div>
      </div>
    </Link>
  )
}

export default FeaturedProjectCard