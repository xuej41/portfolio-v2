"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const words = ["Web Developer.", "Computer Engineer.", "Mechanic.", "Hardware Enthusiast."]
  const typingSpeed = 150
  const deletingSpeed = 50
  const delayBetweenWords = 1500

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (isWaiting) {
          // Finished waiting, start deleting
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          // Delete one character
          if (charIndex > 0) {
            setCharIndex(charIndex - 1)
            setDisplayedText(currentWord.substring(0, charIndex - 1))
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setWordIndex((wordIndex + 1) % words.length)
            setCharIndex(0)
            setDisplayedText("")
          }
        } else {
          // Type one character
          if (charIndex < currentWord.length) {
            setCharIndex(charIndex + 1)
            setDisplayedText(currentWord.substring(0, charIndex + 1))
          } else {
            // Finished typing, start waiting
            setIsWaiting(true)
          }
        }
      },
      isWaiting ? delayBetweenWords : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isWaiting, wordIndex])

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
            I'm a{" "}
            <span className="typewriter-text">
            {displayedText}
            <span className="typewriter-cursor">|</span>
              </span>
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
