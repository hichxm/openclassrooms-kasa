import LeftArrow from './../assets/arrow-left.svg'
import RightArrow from './../assets/arrow-right.svg'

import './Carousel.scss'
import {useEffect, useRef, useState} from "react";

export default function Carousel({images = []}) {
    const slidesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        goToSlide(currentIndex);
    }, [currentIndex])

    const nextSlide = (event) => {
        event.preventDefault();

        let index = currentIndex;

        if(index >= images.length - 2) {
            index = -1;
        } else {
            index = index + 1;
        }

        setCurrentIndex(index)
    }

    const prevSlide = (event) => {
        event.preventDefault();

        let index = currentIndex;

        if(currentIndex <= -1) {
            index = images.length - 2;
        } else {
            index = index - 1;
        }

        setCurrentIndex(index);
    }

    const goToSlide = (slide) => {
        slidesRef.current.style.transform = `translateX(-${(slide + 1) * 100}%)`;
    }

    return <div className="carousel">
        {/* Carousel */}
        <div className="slides" ref={slidesRef}>
            {images.map((image, index) => <img
                key={image}
                src={image}
                style={{ '--slide': index }}
                className="slide" alt=""/>)}
        </div>

        {/* Arrow */}
        <div className="arrows">
            <a href="#" onClick={prevSlide} className="left-arrow">
                <img src={LeftArrow} alt=""/>
            </a>

            <a href="#" onClick={nextSlide} className="right-arrow">
                <img src={RightArrow} alt=""/>
            </a>
        </div>

        <div className="counter">
            <span>{currentIndex + 2}/{images.length}</span>
        </div>
    </div>
}