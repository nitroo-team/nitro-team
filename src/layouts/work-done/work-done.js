import React from 'react'
import './work-done.css';


function WorkDone() {
    const data = [
        { text: "پروژه های انجام شده", number: 34 },
        { text: "پروژه های در حال انجام", number: 4 },
        { text: "اپلیکیشن های ساخته شده", number: 7 }
    ]

    function putWork() {
        return data.map(({ text, number }, i) => {
            const top = 90 / data.length * i + 5;
            return <div key={i} className={`work-data ${i % 2 === 0 ? "work-data-left" : "work-data-right"}`} style={{ top: `${top}%` }}>
                <p>{text}</p>
                <span>{number}</span>
            </div>
        })
    }

    return (
        <main className="page">
            <div className="l-line"></div>
            {putWork()}
        </main>
    )
}

export default WorkDone;
