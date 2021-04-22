import React, { useEffect, useState } from 'react'
import './slider.css';



function Slider(props) {

    let [index, setIndex] = useState(0);
    let [load, setLoad] = useState(false);
    let [timer, setTimer] = useState(null)

    useEffect(() => {
        let timer_;
        if (props.timer) {
            setTimer(props.timer)
        }
        if (timer && load) {
            timer_ = setInterval(() => {
                nextIndex()
            }, timer * 1000);
        }
        return () => {
            clearTimeout(timer_);
        }
    }, [index, load , timer])

    document.body.onload = () => {
        setLoad(true);
    }


    function getIndex(index, f, count = props.content.length) {
        index += f % count;
        if (index < 0) return count - 1;
        else if (index >= count) return index - count;
        return index
    }

    function nextIndex() {
        setIndex(getIndex(index, +1))
    }

    function prevIndex() {
        setIndex(getIndex(index, -1))
    }

    function getPlace(index, i, count) {
        let val = (i - index + 1) * 50;
        if (index === 0 && i === count - 1) val = 0;
        else if (i === 0 && index === count - 1) val = (count - index + 1) * 50;
        if (count === 1) return val = 50;
        return val;
    }

    function putItems() {
        const items = props.content || [];
        return items.map(({ img, text }, i) => {
            const place = getPlace(index, i, items.length);
            return <div onClick={() => setIndex(i)} key={i} className={`slider-part ${index === i ? 'big' : ""}`} style={{ left: `${place}%`, zIndex: `${(index === i) ? 7 : 5}` }}>
                <img src={img} alt={text || "img"} />
                <p style={{ opacity: `${index === i ? 1 : 0}` }}>{text || ""}</p>
            </div>
        }
        )
    }

    return (
        <section className="slider">
            <button onClick={() => nextIndex()} className="next"><i className="fa fa-caret-right"></i></button>
            <button onClick={() => prevIndex()} className="prev"><i className="fa fa-caret-left"></i></button>
            <section className="slider-content">
                {putItems()}
            </section>
        </section>
    )
}

export default Slider
