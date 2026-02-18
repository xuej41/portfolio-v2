import { useState, useEffect, useRef, useCallback } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images = [] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(null);
  const initializedRef = useRef(false);
  const speedRef = useRef(0.5); // pixels per frame

  // Duplicate images for seamless loop
  const extendedImages = [...images, ...images, ...images];

  const animate = useCallback(() => {
    if (!trackRef.current || isPaused || lightboxOpen) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    // Get width of one full set of images
    const singleSetWidth = trackRef.current.scrollWidth / 3;

    // Initialize position to start at the middle set
    if (!initializedRef.current) {
      positionRef.current = -singleSetWidth;
      initializedRef.current = true;
    }

    positionRef.current -= speedRef.current;

    // Wrap around seamlessly in both directions
    if (positionRef.current <= -singleSetWidth * 2) {
      positionRef.current += singleSetWidth;
    } else if (positionRef.current >= 0) {
      positionRef.current -= singleSetWidth;
    }

    trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, lightboxOpen]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const slideLeft = () => {
    positionRef.current += 320;
  };

  const slideRight = () => {
    positionRef.current -= 320;
  };

  const openLightbox = (index) => {
    // Map extended index back to original
    setLightboxIndex(index % images.length);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="carousel-wrapper">
        <button className="carousel-btn carousel-btn-left" onClick={slideLeft} aria-label="Slide left">
          ‹
        </button>

        <div
          className="carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-track" ref={trackRef}>
            {extendedImages.map((img, index) => (
              <div
                key={index}
                className="carousel-slide"
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.alt || `Image ${(index % images.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn carousel-btn-right" onClick={slideRight} aria-label="Slide right">
          ›
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={lightboxPrev} aria-label="Previous">
              ‹
            </button>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt || `Image ${lightboxIndex + 1}`}
              className="lightbox-image"
            />
            <button className="lightbox-nav lightbox-next" onClick={lightboxNext} aria-label="Next">
              ›
            </button>
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
