import { useEffect, useRef } from "react";
import "./dynamic-slider.css";

export default function DynamicSlider() {
    const carouselRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    useEffect(() => {
        const carouselDom = carouselRef.current;
        const nextDom = nextRef.current;
        const prevDom = prevRef.current;

        let SliderDom = carouselDom.querySelector(".carousel .list");
        let thumbnailBorderDom = carouselDom.querySelector(".carousel .thumbnail");
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        let timeRunning = 3000;
        let timeAutoNext = 7000;
        let runTimeOut;

        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        function showSlider(type) {
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

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove("next");
                carouselDom.classList.remove("prev");
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }

        nextDom.onclick = () => showSlider("next");
        prevDom.onclick = () => showSlider("prev");

        return () => {
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list">
                {/* ---- ITEM 1 ---- */}
                <div className="item">
                    <img src="https://i.postimg.cc/vTKH81yk/img1.jpg" />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                {/* ---- ITEM 2 ---- */}
                <div className="item">
                    <img src="https://i.postimg.cc/zD2fFQh7/img2.jpg" />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                {/* ---- ITEM 3 ---- */}
                <div className="item">
                    <img src="https://i.postimg.cc/gkw2SKqW/img3.jpg" />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                {/* ---- ITEM 4 ---- */}
                <div className="item">
                    <img src="https://i.postimg.cc/6qqpNrkC/img4.jpg" />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="thumbnail">
                <div className="item">
                    <img src="https://i.postimg.cc/vTKH81yk/img1.jpg" />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://i.postimg.cc/zD2fFQh7/img2.jpg" />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://i.postimg.cc/gkw2SKqW/img3.jpg" />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://i.postimg.cc/6qqpNrkC/img4.jpg" />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <button id="prev" ref={prevRef}>
                    &lt;
                </button>
                <button id="next" ref={nextRef}>
                    &gt;
                </button>
            </div>

            <div className="time"></div>
        </div>
    );
}
