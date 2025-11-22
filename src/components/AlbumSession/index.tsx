import React from "react";
import "./album-session.css";

interface AlbumSessionProps {
  images: string[];
}

function AlbumSession({ images = [] }: AlbumSessionProps) {
  return (
    <div className="album-session">
      {images.map((img, index) => (
        <div className="album-item" key={index}>
          <img
            src={img}
            alt={`album-${index}`}
            className="album-image"
          />
        </div>
      ))}
    </div>
  );
}

export default AlbumSession;
