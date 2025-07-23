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
            <Link to="/projects" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
