"use client"
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
  reverse = false,
  animationDelay = 0,
}) => {
  const [projectRef, projectVisible] = useScrollAnimation()

  return (
    <div
      ref={projectRef}
      className={`featured-project-card hover-border ${reverse ? "reverse" : ""} scroll-animate ${animationDelay > 0 ? `scroll-animate-delay-${animationDelay}` : ""} ${projectVisible ? "visible" : ""}`}
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
          <a href={liveUrl} className="featured-project-link" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={githubUrl} className="featured-project-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="featured-project-visual">
        <div className="featured-project-image">
          <img src={imageSrc || "/placeholder.svg"} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard