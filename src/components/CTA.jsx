import { Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./CTA.css"

const CTA = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section className="cta">
      <div className="cta-container">
        <div ref={ctaRef} className={`cta-content scroll-animate ${ctaVisible ? "visible" : ""}`}>
          <h2 className="cta-title">Let's Connect.</h2>
          <p className="cta-description">
            Let's collaborate and bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact btn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
