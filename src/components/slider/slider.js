import React, { useEffect, useState } from 'react'
import './slider.css';
import coffee_img from '../../images/example/coffee.PNG';
import coffee_img_2 from '../../images/example/coffee-2.PNG';
import example_1 from '../../images/example/example-1.PNG';
import example_2 from '../../images/example/example-2.PNG';
import example_3 from '../../images/example/example-3.PNG';
import example_4 from '../../images/example/example-4.PNG';
import example_5 from '../../images/example/example-5.PNG';



function Slider() {

    const timeSlider = 10;
    let slider = document.querySelector(".slider-content");
    let tally = document.querySelector(".count");
    let [index, setIndex] = useState(0);
    let [start, setStart] = useState(false);

    useEffect(() => {
        let timer;

        if (start) {
            timer = setInterval(() => {
                nextSlider();
                setTally();
            }, timeSlider * 1000)
        }

        return () => clearTimeout(timer)
    }, [start, index]);

    document.body.onload = (e) => {
        if (!start) {
            setStart(true)
        }
    }


    function counter(index, f, count) {
        index += f % count;
        if (index >= count) return index - count;
        else if (index < 0) return count - 1;
        return index;
    }

    function nextSlider() {
        setIndex(counter(index, +1, slider.children.length));
        const ps = slider.children[counter(index, -1, slider.children.length)];

        slider.children[index].classList.remove("hidden");
        slider.children[index].classList.add("animation");
        ps.classList.remove("animation");
        ps.classList.add("animation-end");

        setTimeout(() => {
            ps.classList.add("hidden")
            ps.classList.remove("animation-end")
        }, 1000);
    }

    function prevSlider() {
        setIndex(counter(index, -1, slider.children.length));
        const np = slider.children[counter(index, +1, slider.children.length)];

        slider.children[index].classList.remove("hidden");
        slider.children[index].classList.add("animation");
        np.classList.remove("animation");
        np.classList.add("animation-end");
        setTimeout(() => {
            np.classList.remove("animation-end");
            np.classList.add("hidden");
        }, 1000);
    }

    function setTally() {
        const tallyChildren = tally.children;
        for (let i = 0; i < tallyChildren.length; i++) {
            const ch = tallyChildren[i];
            ch.classList.remove("active-slider");
            if (i === index) ch.classList.add("active-slider");
        }
    }

    return (
        <div className="slider">
            <button onClick={() => {
                prevSlider();
                setTally();
            }} id="prev"></button>
            <button onClick={() => {
                nextSlider();
                setTally();
            }} id="next"></button>
            <div className="slider-content">
                <div className="clip animation">
                    <img src={coffee_img} alt="coffee"/>
                </div>
                <div className="clip hidden">
                    <img src={example_1} alt="example-1" />
                </div>
                <div className="clip hidden">
                    <img src={example_2} alt="example-1" />
                </div><div className="clip hidden">
                    <img src={example_3} alt="example-1" />
                </div><div className="clip hidden">
                    <img src={example_4} alt="example-1" />
                </div><div className="clip hidden">
                    <img src={example_5} alt="example-1" />
                </div>
            </div>
            <div className="count">
                <span className="tally active-slider"></span>
                <span className="tally"></span>
                <span className="tally"></span>
                <span className="tally"></span>
                <span className="tally"></span>
                <span className="tally"></span>
            </div>
        </div>
    )
}

export default Slider
