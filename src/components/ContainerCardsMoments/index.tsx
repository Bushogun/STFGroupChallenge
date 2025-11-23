import { useState } from "react";
import CardMoments from "./CardsMoments";
import "./container-cards-moments.css";

interface CardMomentsData {
  title: string;
  image: string;
  description?: string;
  AvailabilityDate?: string;
}

interface ContainerCardsProps {
  items: CardMomentsData[];
  isMobile?: boolean;
}

export default function ContainerMomentsCards({ items, isMobile }: ContainerCardsProps) {
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
            <CardMoments
              key={i}
              title={item.title}
              image={item.image}
              description={item.description}
              AvailabilityDate={item.AvailabilityDate}
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
