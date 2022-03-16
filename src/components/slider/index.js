import React, {useState, useEffect} from "react"
import slide1 from "../../img/slide1.jpg"
import slide2 from "../../img/slide2.jpg"
import slide3 from "../../img/slide3.jpg"
import "../../style/slider.css"

const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
]
export function Slider() {
const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((current) => {
            const res = current === img.length - 1 ? 0 : current + 1
            return res
        })
    }, 3000)
    return () => clearInterval()
}, [])
 
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
return (
    <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
)
}