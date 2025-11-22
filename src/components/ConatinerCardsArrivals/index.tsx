import { useState } from "react";
import CardArrivals from "./CardArrivals";
import "./container-cards-arrivals.css";

interface CardData {
  title: string;
  image: string;
  hotspots?: { x: number; y: number }[];
}

interface ContainerCardsProps {
  items: CardData[];
  isMobile?: boolean;
}

export default function ContainerCards({ items, isMobile = false }: ContainerCardsProps) {
    const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < items.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

 return (
    <div className={`cards-container ${isMobile ? "mobile" : ""}`}>

      {isMobile && current > 0 && (
        <button className="nav-btn left" onClick={prev}>
          ‹
        </button>
      )}

      <div
        className={isMobile ? "mobile-carousel" : "cards-grid"}
        style={
          isMobile
            ? { transform: `translateX(-${current * 100}%)` }
            : {}
        }
      >
        {items.map((item, i) => (
          <div key={i} className={isMobile ? "mobile-item" : ""}>
            <CardArrivals
              title={item.title}
              image={item.image}
              hotspots={item.hotspots}
            />
          </div>
        ))}
      </div>

      {isMobile && current < items.length - 1 && (
        <button className="nav-btn right" onClick={next}>
          ›
        </button>
      )}
    </div>
  );
}