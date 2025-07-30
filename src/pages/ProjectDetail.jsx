"use client"

import { useParams, Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./ProjectDetail.css"

// Project data - in a real app, this would come from an API or database
const projectsData = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-stack e-commerce solution with modern features",
    description:
      "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, payment processing, inventory management, and an admin dashboard for complete store management.",
    longDescription: `This e-commerce platform represents a complete solution for online retail businesses. Built with modern web technologies, it provides a seamless shopping experience for customers while offering powerful management tools for administrators.

The platform features a responsive design that works perfectly across all devices, from desktop computers to mobile phones. The user interface is intuitive and clean, making it easy for customers to browse products, add items to their cart, and complete purchases.

On the backend, the system is built with Node.js and Express, providing a robust and scalable foundation. The database architecture is designed to handle high traffic loads while maintaining data integrity and security.`,
    heroImage: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT", "Tailwind CSS"],
    features: [
      "Secure user authentication and authorization",
      "Real-time inventory tracking and management",
      "Integrated payment processing with Stripe",
      "Comprehensive admin dashboard with analytics",
      "Mobile-responsive design",
      "Product search and filtering",
      "Shopping cart and wishlist functionality",
      "Order tracking and history",
    ],
    challenges: [
      {
        title: "Payment Security",
        description:
          "Implementing secure payment processing while maintaining a smooth user experience required careful integration with Stripe's API and proper handling of sensitive data.",
      },
      {
        title: "Real-time Inventory",
        description:
          "Managing inventory across multiple concurrent users required implementing real-time updates and conflict resolution to prevent overselling.",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimizing the platform for high traffic loads involved implementing caching strategies, database indexing, and efficient API design.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    duration: "3 months",
    role: "Full-stack Developer",
    teamSize: "Solo Project",
  },
  "task-management": {
    id: "task-management",
    title: "Task Management App",
    subtitle: "Collaborative project management with real-time features",
    description:
      "A collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking.",
    longDescription: `This task management application was designed to solve the common problems teams face when coordinating projects and tracking progress. Built with real-time collaboration in mind, it allows team members to work together seamlessly regardless of their location.

The application features an intuitive drag-and-drop interface that makes it easy to organize tasks, update statuses, and manage project timelines. Real-time updates ensure that all team members are always working with the most current information.

The backend infrastructure is built to handle multiple concurrent users and real-time data synchronization, ensuring that changes made by one user are immediately reflected for all other users viewing the same project.`,
    heroImage: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Node.js", "Material-UI"],
    features: [
      "Real-time collaboration and updates",
      "Drag & drop task management interface",
      "Progress tracking and analytics",
      "Team notifications and messaging",
      "Project timeline visualization",
      "File attachment support",
      "User role management",
      "Custom project templates",
    ],
    challenges: [
      {
        title: "Real-time Synchronization",
        description:
          "Implementing real-time updates across multiple users required careful handling of WebSocket connections and conflict resolution.",
      },
      {
        title: "Data Consistency",
        description:
          "Ensuring data consistency when multiple users are editing the same project simultaneously required implementing proper locking mechanisms.",
      },
      {
        title: "User Experience",
        description:
          "Creating an intuitive drag-and-drop interface that works smoothly across different devices and browsers required extensive testing and optimization.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/username/task-management",
    duration: "2 months",
    role: "Full-stack Developer",
    teamSize: "2 developers",
  },
  "chat-application": {
    id: "chat-application",
    title: "Real-Time Chat Application",
    subtitle: "Modern messaging platform for teams and communities",
    description:
      "Modern messaging platform with instant communication capabilities. Built for teams and communities with advanced features for seamless collaboration and engagement.",
    longDescription: `This real-time chat application was developed to provide teams and communities with a modern, feature-rich communication platform. The application supports instant messaging, file sharing, and group conversations, making it perfect for both professional and casual use.

The user interface is designed with modern chat applications in mind, featuring a clean and intuitive design that users will find familiar and easy to navigate. The application supports both one-on-one conversations and group chats, with advanced features like message threading and reactions.

Built with WebSocket technology, the application provides truly real-time communication with minimal latency. The backend is designed to scale efficiently, supporting thousands of concurrent users while maintaining excellent performance.`,
    heroImage: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "WebSocket", "Node.js", "MongoDB", "Express", "Socket.io"],
    features: [
      "Instant message delivery",
      "File sharing capabilities",
      "Group chat functionality",
      "Online status indicators",
      "Message threading and replies",
      "Emoji reactions and custom emojis",
      "Voice and video calling",
      "Message search and history",
    ],
    challenges: [
      {
        title: "Message Delivery",
        description:
          "Ensuring reliable message delivery even with unstable network connections required implementing message queuing and retry mechanisms.",
      },
      {
        title: "File Handling",
        description:
          "Supporting various file types and sizes while maintaining good performance required implementing efficient file upload and storage solutions.",
      },
      {
        title: "Scalability",
        description:
          "Designing the system to handle thousands of concurrent users required careful architecture planning and load balancing strategies.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://chat-demo.example.com",
    githubUrl: "https://github.com/username/chat-application",
    duration: "4 months",
    role: "Lead Developer",
    teamSize: "3 developers",
  },
}

const ProjectDetail = () => {
  const { projectId } = useParams()
  const [headerRef, headerVisible] = useScrollAnimation()
  const [overviewRef, overviewVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()
  const [challengesRef, challengesVisible] = useScrollAnimation()
  const [galleryRef, galleryVisible] = useScrollAnimation()

  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-container">
          <div ref={headerRef} className={`project-header scroll-animate ${headerVisible ? "visible" : ""}`}>
            <Link to="/projects" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Projects
            </Link>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{project.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role:</span>
                <span className="meta-value">{project.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Team:</span>
                <span className="meta-value">{project.teamSize}</span>
              </div>
            </div>
            <div className="project-links">
              <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
          <div className="project-hero-image">
            <img src={project.heroImage || "/placeholder.svg"} alt={project.title} />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="project-overview">
        <div className="project-container">
          <div ref={overviewRef} className={`overview-content scroll-animate ${overviewVisible ? "visible" : ""}`}>
            <h2>Project Overview</h2>
            <p className="overview-description">{project.description}</p>
            <div className="overview-details">
              <p>{project.longDescription}</p>
            </div>
            <div className="technologies-section">
              <h3>Technologies Used</h3>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="project-features">
        <div className="project-container">
          <div ref={featuresRef} className={`features-content scroll-animate ${featuresVisible ? "visible" : ""}`}>
            <h2>Key Features</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">✓</div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="project-challenges">
        <div className="project-container">
          <div
            ref={challengesRef}
            className={`challenges-content scroll-animate ${challengesVisible ? "visible" : ""}`}
          >
            <h2>Challenges & Solutions</h2>
            <div className="challenges-grid">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="challenge-card">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="project-gallery">
        <div className="project-container">
          <div ref={galleryRef} className={`gallery-content scroll-animate ${galleryVisible ? "visible" : ""}`}>
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image || "/placeholder.svg"} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta">
        <div className="project-container">
          <div className="cta-content">
            <h2>Interested in Similar Work?</h2>
            <p>Let's discuss how I can help bring your project ideas to life.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail