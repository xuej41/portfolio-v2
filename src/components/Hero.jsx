import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-avatars">
              <div className="hero-avatar"></div>
              <div className="hero-avatar"></div>
              <div className="hero-avatar"></div>
            </div>
            Greetings huzz
          </div>

          <h1 className="hero-title">Hi, I'm Josh.</h1>

          <p className="hero-description">
            I'm a Computer Engineer, hardware enthusiast, web developer, mechanic
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn-secondary">
              Contact btn
            </Link>
            <Link to="/projects" className="hero-btn-primary">
              Projects btn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
