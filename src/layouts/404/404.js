import React from 'react';
import { Link } from 'react-router-dom'
import './404.css'
import img from '../../images/404-page.png'

function NotFound() {
    return (
        <main className="not-found" style={{ backgroundImage: `url(${img})` }}>
            <section className="not-found-content">
                <Link to="/">بازگشت به خانه</Link>
            </section>
        </main>
    )
}

export default NotFound
