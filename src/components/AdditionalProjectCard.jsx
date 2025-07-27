"use client"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./../pages/Projects.css" // Import Projects.css for styling

const AdditionalProjectCard = ({
  title,
  description,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  animationDelay = 0,
}) => {
  const [projectRef, projectVisible] = useScrollAnimation()

  return (
    <div
      ref={projectRef}
      className={`project-card scroll-animate ${animationDelay > 0 ? `scroll-animate-delay-${animationDelay}` : ""} ${projectVisible ? "visible" : ""}`}
    >
      <div className="project-image">
        <img src={imageSrc || "/placeholder.svg"} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdditionalProjectCard