import "./Projects.css"

const Projects = () => {
  // Featured projects with wide layout (from home page)
  const featuredProjects = [
    {
      id: 1,
      title: "National Bidders of Canada E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next, React, and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard for comprehensive store management.",
      features: [
        "Real-time bids and inventory tracking",
        "Admin dashboard with analytics",
        "Mobile-responsive design",
      ],
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Git Tissues Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking.",
      features: ["Real-time collaboration", "Drag & drop interface", "Progress tracking"],
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      reverse: true,
    },
    {
      id: 3,
      title: "PlanetPal Real-Time Waste Management Assistant",
      description:
        "Modern messaging platform with instant communication capabilities. Built with advanced features for seamless waste management efficiency and engagement.",
      features: [
        "Instant message delivery",
        "Online status indicators",
      ],
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "WebSocket", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  // Additional projects with grid layout
  const additionalProjects = [
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description:
        "Community-driven recipe sharing platform with user profiles, recipe ratings, and advanced search functionality.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Firebase", "Algolia", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Vite", "CSS3", "React Router"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 8,
      title: "Expense Tracker",
      description:
        "Personal finance management application with budget tracking, expense categorization, and financial insights.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Chart.js", "LocalStorage", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "Blog Platform",
      description:
        "Full-featured blogging platform with markdown support, user authentication, and content management system.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Markdown"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A showcase of my recent work and technical expertise</p>
        </div>

        {/* Featured Projects Section */}
        <div className="featured-projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className={`featured-project-card ${project.reverse ? "reverse" : ""}`}>
                <div className="featured-project-content">
                  <h3 className="featured-project-title">{project.title}</h3>
                  <p className="featured-project-description">{project.description}</p>
                  <ul className="featured-project-features">
                    {project.features.map((feature, index) => (
                      <li key={index} className="featured-feature-item">
                        <span className="featured-feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="featured-project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="featured-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="featured-project-links">
                    <a
                      href={project.liveUrl}
                      className="featured-project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="featured-project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="featured-project-visual">
                  <div className="featured-project-image">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Projects Section */}
        <div className="additional-projects-section">
          <h2 className="section-title">More Projects</h2>
          <div className="projects-grid">
            {additionalProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
