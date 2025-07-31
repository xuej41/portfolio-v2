import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import FeaturedProjectCard from "../components/FeaturedProjectCard"
import AdditionalProjectCard from "../components/AdditionalProjectCard"
import "./Projects.css"

const Projects = () => {
  const location = useLocation();
  const [featuredSectionRef, featuredSectionVisible] = useScrollAnimation()
  const [additionalSectionRef, additionalSectionVisible] = useScrollAnimation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the '#' from the hash
      if (element) {

        element.scrollIntoView({ behavior: "smooth" }); // Used to just be this one line inside if (element)

        const offset = 300; // Smaller = scrolls past more
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

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
              id="sumobot-v2"
              title="Sumobot V2"
              description="Fully autonomous robotic battle bot designed for competitive environments. Features advanced sensors, real-time decision-making, and robust construction for optimal performance."
              features={[
                "Dual ultrasonic sensors + TOF sensor",
                "Dual IR sensors for line detection",
                "Arduino Nano + motor driver + DC motors with Steelies",
              ]}
              imageSrc="/src/assets/featured/sumobot-v2.jpg?height=300&width=400"
              technologies={[]} //"React", "Node.js", "MongoDB", "Stripe"
              liveUrl="https://github.com/xuej41/arduino-projects/tree/main/sumobot-v2"
              githubUrl="#"
              reverse={false}
              animationDelay={0}
            />

            {/* Project 2 */}
            <FeaturedProjectCard
              id="national-bidders"
              title="National Bidders of Canada"
              description="QHacks hackathon project - Dynamic live auction platform. Live cross-platform bids, list items, user authentication."
              features={[
                "Real-time bids and inventory tracking",
                "Admin dashboard with analytics",
                "Secure user authentication and payment processing",
                "AI Chatbot Assistant",
              ]}
              imageSrc="/src/assets/featured/nbc2.png"
              technologies={["Next.js", "Typescript", "Tailwind CSS", "PostgreSQL"]}
              liveUrl="https://github.com/xuej41/nationalbiddersofcanada"
              githubUrl="#"
              reverse={true}
              animationDelay={1}
            />

            {/* Project 3 */}
            <FeaturedProjectCard
              id="memory-lane"
              title="Memory Lane"
              description="Deltahacks hackathon project - Facial recognition web app to assist Alzheimer's patients with memory recall. Deployed to Streamlit Cloud."
              features={[
                "Instant Facial recognition",
                "Database storage and retrieval",
                "Easy to use web interface",
              ]}
              imageSrc="/src/assets/featured/memorylane2.PNG"
              technologies={["React", "WebSocket", "Node.js", "MongoDB"]}
              // liveUrl="#"
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
              title="Git Tissues Task Management App"
              description="Collaborative project management tool with real-time updates and team coordination features. Streamlines workflow with intuitive drag-and-drop interface and progress tracking."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "Socket.io", "Express", "PostgreSQL"]}
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
              title="PlanetPal Waste Management Assistant"
              description="Modern messaging platform with instant communication capabilities. Built with advanced features for seamless waste management efficiency and engagement."
              imageSrc="/placeholder.svg?height=200&width=300"
              technologies={["React", "WebSocket", "Node.js", "MongoDB"]}
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
