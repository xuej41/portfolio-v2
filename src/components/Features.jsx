import { Link } from "react-router-dom"
import "./Features.css"

const Features = () => {
  const projects = [
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
      mockup: (
        <div className="feature-project-image">
          <img src="/placeholder.svg?height=300&width=400" alt="E-Commerce Platform" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Git Tissues Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking.",
      features: ["Real-time collaboration", "Drag & drop interface", "Progress tracking"],
      mockup: (
        <div className="feature-project-image">
          <img src="/placeholder.svg?height=300&width=400" alt="Task Management App" />
        </div>
      ),
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
      mockup: (
        <div className="feature-project-image">
          <img src="/placeholder.svg?height=300&width=400" alt="Real-Time Chat Application" />
        </div>
      ),
    },
  ]

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Featured Projects</h2>
          <p className="features-description">
            Showcase of recent work demonstrating technical expertise and creative problem-solving across various
            domains and technologies.
          </p>
        </div>
        <div className="features-grid">
          {projects.map((project) => (
            <div key={project.id} className={`feature-project-card ${project.reverse ? "reverse" : ""}`}>
              <div className="feature-project-content">
                <h3 className="feature-project-title">{project.title}</h3>
                <p className="feature-project-description">{project.description}</p>
                <ul className="feature-project-features">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-project-visual">{project.mockup}</div>
            </div>
          ))}
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
