import { Link } from "react-router-dom"
import "./CTA.css"

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Call to Action</h2>
          <p className="cta-description">
            Let's collaborate and bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact btn
            </Link>
            <a href="https://www.joshx.tech/resume.pdf" target="_blank" className="btn btn-outline">
              View my Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
