"use client"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./../pages/Projects.css" // Import Projects.css for styling

const FeaturedProjectCard = ({
  id,
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
      id={id}
      ref={projectRef}
      className={`featured-project-card ${reverse ? "reverse" : ""} scroll-animate ${animationDelay > 0 ? `scroll-animate-delay-${animationDelay}` : ""} ${projectVisible ? "visible" : ""}`}
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
            View Project
            {/* svg of external link icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"style={{ marginLeft: '5px', verticalAlign: 'text-top'}}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          {/* <a href={githubUrl} className="featured-project-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> */}
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