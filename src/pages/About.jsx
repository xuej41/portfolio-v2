import "./About.css"

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "HTML/CSS",
    "Express.js",
  ]

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Passionate developer with a love for creating digital experiences</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <h2>My Story</h2>
              <p>
                I'm a full-stack developer with over 3 years of experience in building web applications. My journey
                started with curiosity about how websites work, and it has evolved into a passion for creating
                innovative digital solutions.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, particularly React, and have extensive experience with
                backend technologies like Node.js and Python. I'm always eager to learn new technologies and tackle
                challenging problems.
              </p>
            </div>

            <div className="about-section">
              <h2>What I Do</h2>
              <ul className="about-list">
                <li>Full-stack web application development</li>
                <li>Responsive and mobile-first design</li>
                <li>API design and development</li>
                <li>Database design and optimization</li>
                <li>Performance optimization</li>
                <li>Code review and mentoring</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/placeholder.svg?height=300&width=300" alt="Profile" />
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
