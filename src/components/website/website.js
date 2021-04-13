import React from 'react';
import './website.css'
import { Link } from 'react-router-dom';

function Website(props) {
    return (
        <Link to={props.link} className="website-link" style={{animationDelay : `${props.delay || 0}s`}}>
            <div className="website-img">
                <img src={props.img} alt={props.name} />
                <h4>{props.name}</h4>
            </div>
        </Link>
    )
}

export default Website
