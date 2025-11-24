import { useEffect, useRef } from "react";
import "./dynamic-slider.css";

interface DynamicSliderProps {
    images: string[];
    titles: string[];
    description?: string[];
    interval?: number; 
    autoNext?: number;
}

export default function DynamicSlider({
    images,
    titles,
    description,
    interval = 30,
    autoNext = 7000,
}: DynamicSliderProps) {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const carouselDom = carouselRef.current!;
        const nextDom = nextRef.current!;

        const SliderDom = carouselDom.querySelector(".carousel .list")!;
        const thumbnailBorderDom = carouselDom.querySelector(".carousel .thumbnail")!;
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        let runTimeout: number;
        let runNextAuto: number = window.setTimeout(() => nextDom.click(), autoNext);

        function showSlider(type: "next" | "prev") {
            let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
            let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

            if (type === "next") {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add("next");
            } else {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(
                    thumbnailItemsDom[thumbnailItemsDom.length - 1]
                );
                carouselDom.classList.add("prev");
            }

            clearTimeout(runTimeout);
            runTimeout = window.setTimeout(() => {
                carouselDom.classList.remove("next");
                carouselDom.classList.remove("prev");
            }, interval);

            clearTimeout(runNextAuto);
            runNextAuto = window.setTimeout(() => nextDom.click(), autoNext);
        }

        nextDom.onclick = () => showSlider("next");

        return () => {
            clearTimeout(runNextAuto);
        };
    }, [images]);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list">
                {images.map((img, i) => (
                    <div className="item" key={i}>
                        <img src={img} />
                        <div className="content">
                            <div className="carousel-main-title">{titles[i]}</div>
                            <div className="carousel-description">{description?.[i]}</div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {images.map((img, i) => (
                    <div className="item" key={i}>
                        <img src={img} />
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="next" ref={nextRef}>
                    &gt;
                </button>
            </div>

            <div className="time"></div>
        </div>
    );
}
