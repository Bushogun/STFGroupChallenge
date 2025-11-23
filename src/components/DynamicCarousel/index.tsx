import { useEffect, useState, useRef } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import "./dynamic-carousel.css";

interface DynamicCarouselProps {
    images: string[];
    titles: string[];
    description?: string[];
    interval?: number;
}

export default function DynamicCarousel({ images, titles, description, interval = 3000 }: DynamicCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [manualImage, setManualImage] = useState<string | null>(null);
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

  const handleNext = () => {
        setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // const goNext = () => {
    //     setManualImage(null);
    //     setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    // };

    const handleThumbnailClick = (img: string, index: number) => {
        setManualImage(img);

        setTimeout(() => {
            setManualImage(null);
            setCurrent(index);
        }, 350); 
    };

    return (
        <div style={{ paddingTop: "70px" }}>
        <div className="carousel">
            <div className="carousel-info-box">
                <h2 className="carousel-main-title">{titles[current]}</h2>
                <p className="carousel-description">{description?.[current]}</p>
            </div>

            <div className="carousel-thumbnails-container">
                <button className="thumb-next-btn" onClick={handleNext}>
                    <RightCircleOutlined />
                </button>

                <div className="thumbnails-scroll">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={`thumbnail ${current === i ? "active-thumb" : ""}`}
                            onClick={() => handleThumbnailClick(img, i)}
                        />
                    ))}
                </div>
            </div>

            {manualImage && (
                <div className="manual-image-anim"
                style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    <img src={manualImage} />
                </div>
            )}

            {/* --- CAROUSEL SLIDES --- */}
            <div
                className="carousel-inner"
                //anim del cover
            >
                {images.map((img, i) => (
                    <div className="carousel-item" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
