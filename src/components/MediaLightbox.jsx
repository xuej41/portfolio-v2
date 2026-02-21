import { useState, useEffect } from "react";
import "./ImageCarousel.css"; // Reuse lightbox styles

const MediaLightbox = ({ src, alt = "", type = "image", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Clickable wrapper */}
      <div className="media-lightbox-trigger" onClick={openLightbox}>
        {children || (
          type === "video" ? (
            <video autoPlay loop muted playsInline>
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img src={src} alt={alt} />
          )
        )}
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            {type === "video" ? (
              <video
                autoPlay
                loop
                controls
                playsInline
                className="lightbox-image"
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <img src={src} alt={alt} className="lightbox-image" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaLightbox;
