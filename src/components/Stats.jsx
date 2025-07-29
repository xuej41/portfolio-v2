"use client"

import { useState, useRef, useEffect } from "react"
import "./Stats.css"

const Stats = () => {
  const skills = [
    { name: "Git", image: "/skills/git.svg?height=60&width=60" },
    { name: "Python", image: "/skills/python.svg?height=60&width=60" },
    { name: "C/C++", image: "/skills/cpp.svg?height=60&width=60" },
    { name: "Arduino", image: "/skills/arduino.svg?height=60&width=60" },
    { name: "Linux", image: "/skills/linux.svg?height=60&width=60" },
    { name: "Docker", image: "/skills/docker.svg?height=60&width=60" },
    { name: "SQL", image: "/skills/sql.svg?height=60&width=60" },
    { name: "HTML", image: "/skills/html5.png?height=60&width=60" },
    { name: "CSS", image: "/skills/css3.png?height=60&width=60" },
    { name: "JavaScript", image: "/skills/js.svg?height=60&width=60" },
    { name: "React", image: "/skills/react.svg?height=60&width=60" },
    { name: "Vite", image: "/skills/vite.svg?height=50&width=50" },
    { name: "Next.js", image: "/skills/nextjs.svg?height=60&width=60" },
    { name: "Node.js", image: "/skills/nodejs.svg?height=60&width=60" },
  ]

  const [isPaused, setIsPaused] = useState(false)
  const [manualOffset, setManualOffset] = useState(0)
  const [animationOffset, setAnimationOffset] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const trackRef = useRef(null)
  const animationRef = useRef(null)

  // Triple the skills for seamless infinite scroll in both directions
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills]

  // Initial offset to start from the middle set of skills
  const initialOffset = -(skills.length * 120) // Start from the second set

  // Handle continuous animation
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      const animate = () => {
        setAnimationOffset((prev) => {
          const newOffset = prev - 1 // Adjust speed as needed
          // Reset when we've moved through one full set of skills
          const resetPoint = -(skills.length * 120) // 120px per skill (60px + 60px gap)
          return newOffset <= resetPoint ? 0 : newOffset
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, isTransitioning, skills.length])

  const handlePrevious = () => {
    if (isTransitioning) return // Prevent multiple clicks during transition

    setIsTransitioning(true)
    setManualOffset((prev) => {
      const newOffset = prev + 240 // Move right by one skill
      // If we've moved too far right, reset to maintain infinite scroll
      const maxOffset = skills.length * 240 // Maximum right offset
      return newOffset >= maxOffset ? newOffset - skills.length * 240 : newOffset
    })

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match CSS transition duration
  }

  const handleNext = () => {
    if (isTransitioning) return // Prevent multiple clicks during transition

    setIsTransitioning(true)
    setManualOffset((prev) => {
      const newOffset = prev - 240 // Move left by one skill
      // If we've moved too far left, reset to maintain infinite scroll
      const minOffset = -(skills.length * 240) // Minimum left offset
      return newOffset <= minOffset ? newOffset + skills.length * 240 : newOffset
    })

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match CSS transition duration
  }

  const totalOffset = initialOffset + animationOffset + manualOffset

  return (
    <section className="stats">
      <div className="stats-container">
        <button className="nav-arrow nav-arrow-left" onClick={handlePrevious} aria-label="Previous skills">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="skills-viewport">
          <div
            ref={trackRef}
            className={`skills-track ${isTransitioning ? "transitioning" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              transform: `translateX(${totalOffset}px)`,
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {/* What tha hell this is */}
                <img src={skill.image || "/src/assets/skills/js.svg"} alt={skill.name} className="skill-image" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-arrow nav-arrow-right" onClick={handleNext} aria-label="Next skills">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Stats
