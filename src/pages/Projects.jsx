import { useScrollAnimation } from "../hooks/useScrollAnimation"
import FeaturedProjectCard from "../components/FeaturedProjectCard"
import AdditionalProjectCard from "../components/AdditionalProjectCard"
import "./Projects.css"

const Projects = () => {
  const [featuredSectionRef, featuredSectionVisible] = useScrollAnimation()
  const [additionalSectionRef, additionalSectionVisible] = useScrollAnimation()

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A showcase of all my work and technical expertise.</p>
        </div>

        {/* Featured Projects Section */}
        <div
          ref={featuredSectionRef}
          className={`featured-projects-section scroll-animate ${featuredSectionVisible ? "visible" : ""}`}
>
          {/* <h2 className="section-title">Featured Projects</h2> Kinda don't need to say Featured Projects since this is the only section */} 
          <div className="featured-projects-grid">
            {/* Project 1 */}
            <FeaturedProjectCard
              title="National Bidders of Canada E-Commerce Platform"
              description="Full-stack e-commerce solution built with Next, React, and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard for comprehensive store management."
              features={[
                "Real-time bids and inventory tracking",
                "Admin dashboard with analytics",
                "Mobile-responsive design",
              ]}
              imageSrc="/placeholder.svg?height=300&width=400"
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              liveUrl="#"
              githubUrl="#"
              reverse={false}
              animationDelay={0}
            />

            {/* Project 2 */}
            <FeaturedProjectCard
              title="Git Tissues Task Management App"
              description="Collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking."
              features={["Real-time collaboration", "Drag & drop interface", "Progress tracking"]}
              imageSrc="/placeholder.svg?height=300&width=400"
              technologies={["React", "Socket.io", "Express", "PostgreSQL"]}
              liveUrl="#"
              githubUrl="#"
              reverse={true}
              animationDelay={1}
            />

            {/* Project 3 */}
            <FeaturedProjectCard
              title="PlanetPal Real-Time Waste Management Assistant"
              description="Modern messaging platform with instant communication capabilities. Built with advanced features for seamless waste management efficiency and engagement."
              features={[
                "Instant message delivery",
                "Online status indicators",
              ]}
              imageSrc="/placeholder.svg?height=300&width=400"
              technologies={["React", "WebSocket", "Node.js", "MongoDB"]}
              liveUrl="#"
              githubUrl="#"
              reverse={false}
              animationDelay={2}
            />
          </div>
        </div>

        {/* Additional Projects Section */}
        <div
          ref={additionalSectionRef}
          className={`additional-projects-section scroll-animate ${additionalSectionVisible ? "visible" : ""}`}
        >
          <h2 className="section-title">More Projects</h2>
          <div className="projects-grid">
            {/* Project 4 */}
            <AdditionalProjectCard
              title="Other Hackathon Project"
              description="Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Chart.js", "Weather API", "CSS3"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={0}
            />

            {/* Project 5 */}
            <AdditionalProjectCard
              title="Chroot Arch Linux using Live USB"
              description="Analytics dashboard for social media metrics with data visualization, reporting features, and automated insights."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "D3.js", "Python", "FastAPI"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={4}
            />

            {/* Project 6 */}
            <AdditionalProjectCard
              title="Other Hackathon Project"
              description="Community-driven recipe sharing platform with user profiles, recipe ratings, and advanced search functionality."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Firebase", "Algolia", "Tailwind"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={2}
            />

            {/* Project 7 */}
            <AdditionalProjectCard
              title="Cry of Fear on Arch Linux"
              description="Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Vite", "CSS3", "React Router"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={4}
            />

            {/* Project 8 */}
            <AdditionalProjectCard
              title="Portfolio Website"
              description="Personal finance management application with budget tracking, expense categorization, and financial insights."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Chart.js", "LocalStorage", "CSS3"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={0}
            />

            {/* Project 9 */}
            <AdditionalProjectCard
              title="Legacy Portfolio Website"
              description="Full-featured blogging platform with markdown support, user authentication, and content management system."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Node.js", "MongoDB", "Markdown"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={3}
            />

            {/* Project 10 */}
            <AdditionalProjectCard
              title="Recipe Sharing Platform"
              description="Full-featured blogging platform with markdown support, user authentication, and content management system."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Node.js", "MongoDB", "Markdown"]}
              liveUrl="#"
              githubUrl="#"
              animationDelay={1}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
