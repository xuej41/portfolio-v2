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
              imageSrc="/featured/sumobot-v2.jpg?height=300&width=400"
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
              imageSrc="/featured/nbc2.png"
              technologies={["Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Supabase"]}
              liveUrl="https://devpost.com/software/national-bidders-of-canada"
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
              imageSrc="/featured/memorylane2.PNG"
              technologies={["Streamlit", "OpenCV", "MongoDB", "Python"]}
              liveUrl="https://devpost.com/software/memory-lane-dhke7c"
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
              description="ConUHacks hackathon project - Collaborative project management tool to sort Git Issues using AI GitHub profile analysis. Streamlines workflow with intuitive drag-and-drop interface and progress tracking."
              imageSrc="/moreprojects/GitTissues2.png?height=200&width=300"
              technologies={["Next.js", "Express.js", "GraphQL", "React", "OpenAI", "Postman"]}
              liveUrl="https://devpost.com/software/git-tissues"
              githubUrl="#"
              animationDelay={0}
            />

            {/* Project 5 */}
            <AdditionalProjectCard
              title="Chroot Arch Linux using Live USB"
              description="YouTube video project - Using Arch's Chroot feature to fix bootloader and package issues through a live usb."
              imageSrc="/moreprojects/chroot_video.PNG?height=200&width=300"
              technologies={["Bash", "Grub", "Chroot", "SDDM", "Live USB"]}
              liveUrl="https://www.youtube.com/watch?v=t-bdztED6Sg"
              githubUrl="#"
              animationDelay={2}
            />

            {/* Project 6 */}
            <AdditionalProjectCard
              title="PlanetPal Waste Management Assistant"
              description="TerraHacks hackathon project - Personal waste management assistant web app. Instant communication capabilities, built with advanced features for efficiency and engagement."
              imageSrc="/moreprojects/PlanetPal.PNG?height=200&width=300"
              technologies={["HTML+CSS", "Javascript", "React", "Node.js", "OpenAI"]}
              liveUrl="https://devpost.com/software/planetpal-thq27l"
              githubUrl="#"
              animationDelay={1}
            />

            {/* Project 7 */}
            <AdditionalProjectCard
              title="Cry of Fear on Arch Linux"
              description="YouTube video project - Running Cry of Fear on Arch Linux through Steam Proton."
              imageSrc="/moreprojects/cof_video.jpg?height=200&width=300"
              technologies={["Proton", "Steam", "Linux", "Compositor"]}
              liveUrl="https://www.youtube.com/watch?v=_ps8ADqXLXI"
              githubUrl="#"
              animationDelay={2}
            />

            {/* Project 8 */}
            <AdditionalProjectCard
              title="Sumobot"
              description="McMaster Sumobot Competition - Building an autonomous miniature battlebot using Arduino and CAD."
              imageSrc="/moreprojects/sumobot.jpg?height=200&width=300"
              technologies={["C++", "Arduino", "Solidworks", "3D Print"]}
              liveUrl="https://github.com/xuej41/arduino-projects/tree/main/sumobot"
              githubUrl="#"
              animationDelay={0}
            />

            {/* Project 9 */}
            <AdditionalProjectCard
              title="Portfolio Website"
              description="Personal Portfolio Website, designed and built by me. Deployed to Vercel with a custom domain."
              imageSrc="/moreprojects/portfolio-v2.PNG?height=200&width=300"
              technologies={["Vite", "React", "Javascript", "HTML+CSS", "Node.js"]}
              liveUrl="https://github.com/xuej41/portfolio-v2"
              githubUrl="#"
              animationDelay={1}
            />

            {/* Project 10 */}
            <AdditionalProjectCard
              title="Legacy Portfolio Website"
              description="Leagacy Portfolio Website, designed and built by me. Deployed to Vercel."
              imageSrc="/moreprojects/portfolio.PNG?height=200&width=300"
              technologies={["HTML", "CSS", "Javascript", "Vercel"]}
              liveUrl="https://github.com/xuej41/portfolio"
              githubUrl="#"
              animationDelay={1}
            />

            {/* Project 11 */}
            <AdditionalProjectCard
              title="ATM Finder"
              description="YRHacks hackathon project - Shows the nearest ATMs and other amenities on a map."
              imageSrc="/moreprojects/ATMFinder.png?height=200&width=300"
              technologies={["React", "Node.js", "HTML+CSS", "Javascript"]}
              liveUrl="https://devpost.com/software/atm-finder-3a25tf"
              githubUrl="#"
              animationDelay={2}
            />

            {/* Project 12 */}
            <AdditionalProjectCard
              title="Banana"
              description="🍌 A webpage all about bananas, no seriously."
              imageSrc="/moreprojects/banana.PNG?height=200&width=300"
              technologies={["HTML", "CSS", "Markdown"]}
              liveUrl="https://github.com/xuej41/banana-landing-page"
              githubUrl="#"
              animationDelay={0}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
