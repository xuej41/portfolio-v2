import "./About.css"
import Stats from "../components/Stats"

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <p>
                Hello! I'm Josh, a passionate Computer Engineering student studying at McMaster University.
              </p>
              <p>
                I'm based in Markham, Ontario, Canada.
              </p>
              <p>
              I love to learn about the fascinating world of technology, hardware and software alike. I'm very hands-on, and enjoy tinkering with things in my free time.
              </p>
            </div>

            {/* <div className="about-section">
              <h2>What I Do</h2>
              <ul className="about-list">
                <li>Full-stack web application development</li>
                <li>Responsive and mobile-first design</li>
                <li>API design and development</li>
                <li>Database design and optimization</li>
                <li>Performance optimization</li>
                <li>Code review and mentoring</li>
              </ul>
            </div> */}
          </div>

          {/* <div className="about-image">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/placeholder.svg?height=300&width=300" alt="Profile" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <Stats />
      </div>
    </div>
  )
}

export default About
