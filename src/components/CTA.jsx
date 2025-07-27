import { Link } from "react-router-dom"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./CTA.css"

const CTA = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section className="cta">
      <div className="cta-container">
        <Link to="/contact" ref={ctaRef} className={`cta-content scroll-animate ${ctaVisible ? "visible" : ""}`}>
          <h2 className="cta-title">Let's Connect.</h2>
          <p className="cta-description">Click here to get in touch and chat about cool stuff.</p>
        </Link>
      </div>
    </section>
  )
}

export default CTA
