import React from 'react'
import './framework.css'
import { Link } from 'react-router-dom'

function Framework(props) {
    return (
        <Link to={props.link} className="framework-link" style={{animationDelay : `${props.delay}s`}}>
            <div className="framework-img">
                <img src={props.img} alt={props.name}/>
            </div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </Link>
    )
}

export default Framework
