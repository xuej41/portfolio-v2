"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Portfolio</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <a href="https://joshx.tech/resume.pdf" target="_blank" className="btn btn-primary nav-cta">
            View my Resume
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
