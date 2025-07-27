"use client"

import { useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import "./Contact.css"

const Contact = () => {

  const [contactRef, contactVisible] = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">I'm always open to new opportunities, collaborations, or just a friendly chat about technology and development.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <a
            ref={contactRef} className={`contact-item scroll-animate scroll-animate-delay-0 ${contactVisible ? "visible" : ""}`}
            href="https://github.com/xuej41"
            target="_blank"
            rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>Check out my projects and code</p>
              </div>
            </a>
            <a
            ref={contactRef} className={`contact-item scroll-animate scroll-animate-delay-1 ${contactVisible ? "visible" : ""}`}
            href="mailto:xuej41@mcmaster.ca"
            >
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160zm320-280L160-640v400h640v-400zm0-80 320-200H160zM160-640v-80 480z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>Send me an email with your thoughts</p>
              </div>
            </a>
            <a
            ref={contactRef} className={`contact-item contact-item-full-width scroll-animate scroll-animate-delay-2 ${contactVisible ? "visible" : ""}`}
            href="https://linkedin.com/in/joshuaxue"
            target="_blank"
            rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
              </div>
            </a>
          </div>

          <form ref={contactRef} className={`contact-form scroll-animate scroll-animate-delay-4 ${contactVisible ? "visible" : ""}`} onSubmit={handleSubmit}>
            <p>Send me a direct message</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
