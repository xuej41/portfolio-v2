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
              View Project
                {/* svg of external link icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"style={{ marginLeft: '5px', verticalAlign: 'text-top'}}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            {/* <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a> */}
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