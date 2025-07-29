"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // For mobile
  const location = useLocation()

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      // Scroll to the top if already on the same route
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => handleLinkClick("/")}>
          <span className="logo-text">Josh</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={`nav-link ${isActive("/") ? "active" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${isActive("/projects") ? "active" : ""}`}
          onClick={() => handleLinkClick("/projects")}
        >
          Projects
        </Link> 
        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          onClick={() => handleLinkClick("/contact")}
        >
          Contact
        </Link>
        <a href="/files/resume.pdf" target="_blank" className="nav-link" rel="noopener noreferrer">
            Resume
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
