import "./Slider.scss";
import { useState, useEffect, Fragment } from "react";
import Spinner from "./Spinner";

const Slider = (props) => {
    const images = props.name.slider;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [load, setLoad] = useState(true);

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const activeMini = {
        boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
        transform: "scale(1)",
    };

    const spinner = load ? <Spinner /> : null;

    images.map((image, index) => {
        // console.log(image.img);
        // console.log(index);
    });

    setInterval(goNext, 3000);


    return (
        <div className="full_book_slider">
            <div className="full_book_slider-right" onClick={goNext}></div>
            <div className="full_book_slider-left" onClick={goPrev}></div>
            <div
                className="full_book_slider-slider"
                style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
            >
                {images.map((image, index) => (
                    <div
                        className="full_book_slider-slider-slide"
                        key={index}
                        // style={{ backgroundImage: `url(${image.img})` }}
                    >
                        <div className="slider-wrapper">
                            <div className="slider-wrapper-left>">
                                <img src={image.img} className="img-slider"/>
                            </div>
                            <div className="slider-wrapper-right">
                                <div className="sld-title">{image.title}</div>
                                <div className="sld-text">{image.text1}</div>
                                <div className="sld-text">{image.text2}</div>
                                <button className="sld-btn">{image.subscription}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="full_book_slider-dots">
                {images.map((slide, index) => (
                    <Fragment key={index}>
                        {spinner}
                        <img
                            key={index}
                            src={slide.dotFull}
                            // src={slide.img}
                            alt="mini slide"
                            onLoad={() => setLoad(false)}
                            onClick={() => goToSlide(index)}
                            style={index === currentIndex ? activeMini : null}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Slider;