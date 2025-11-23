import React, { useState } from "react";
import "./album-session.css";

interface AlbumSessionProps {
  images: string[];
  isMobile?: boolean;
}

function AlbumSession({ images = [], isMobile = false }: AlbumSessionProps) {
  const pages = [];
  for (let i = 0; i < images.length; i += 4) {
    pages.push(images.slice(i, i + 4));
  }

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < pages.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className={`cards-container ${isMobile ? "mobile" : ""}`}>

      {isMobile && current > 0 && (
        <button className="nav-btn left" onClick={prev}>‹</button>
      )}

      <div
        className={isMobile ? "mobile-carousel" : "cards-grid"}
        style={
          isMobile
            ? { transform: `translateX(-${current * 100}%)` }
            : {}
        }
      >

        {isMobile ? (
          pages.map((group, pageIndex) => (
            <div className="mobile-page" key={pageIndex}>
              <div className="album-session mobile-grid">
                {group.map((img, index) => (
                  <div className="album-item" key={index}>
                    <img src={img} alt={`album-${index}`} className="album-image" />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="album-session">
            {images.map((img, index) => (
              <div className="album-item" key={index}>
                <img src={img} alt={`album-${index}`} className="album-image" />
              </div>
            ))}
          </div>
        )}

      </div>

      {isMobile && current < pages.length - 1 && (
        <button className="nav-btn right" onClick={next}>›</button>
      )}
    </div>
  );
}

export default AlbumSession;
