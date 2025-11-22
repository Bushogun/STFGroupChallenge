import { useEffect, useState, useRef } from "react";
import "./carousel.css";

interface CarouselProps {
    images: string[];
    titles: string[];
    interval?: number;
    isMobile?: boolean;
}

export default function Carousel({ images, titles, interval = 3000, isMobile = false }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(() => {
            setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, interval);

        return () => resetTimeout();
    }, [current, images.length, interval]);

    const goToSlide = (index: number) => setCurrent(index);

    return (
        <div
            className="carousel"
            style={{
                height: isMobile ? "85vh" : "550px",
            }}
        >

            {!isMobile && (
                <div className="carousel-titles-overlay">
                    {titles.map((title, i) => (
                        <span
                            key={i}
                            className={`carousel-title ${current === i ? "active" : ""}`}
                            onClick={() => goToSlide(i)}
                        >
                            {title}
                        </span>
                    ))}
                </div>
            )}

            {isMobile && (
                <div className="carousel-dots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${current === i ? "active" : ""}`}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
            )}

            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div className="carousel-item" key={i}>
                        <img
                            src={img}
                            alt={`slide-${i}`}
                            style={{
                                height: isMobile ? "100vh" : "550px",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
