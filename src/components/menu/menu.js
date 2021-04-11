import React, { useState } from 'react'
import './menu.css';
import { Link } from 'react-router-dom'
import logo from '../../images/min-logo.png'

function Menu(props) {

    let [showMenu, setShowMenu] = useState(false);

    return (
        <main className={`menu ${showMenu ? "show-menu" : ""}`}

            onMouseEnter={() => {
                setShowMenu(true)
            }}

            onMouseLeave={() => {
                setShowMenu(false)
            }}

        >
            <div className="icon-menu">
                <span onClick={() => setShowMenu(!showMenu)} className="icon"></span>
            </div>
            <div className="logo-menu">
                <img src={logo} alt="نیترو تیم" />
            </div>
            <span className="line"></span>
            <div className="conetent-menu">
                <ul>
                    <li><Link to="/" className="link"> <i className="fa fa-home"></i><p>خانه</p></Link></li>
                    <li><Link to="/" className="link"> <i className="fa fa-archive"></i><p>پروژه های انجام شده</p></Link></li>
                    <li><Link to="/" className="link"> <i className="fa fa-check-square-o"></i><p>طرح حای پیشنهادی</p></Link></li>
                    <li><Link to="/" className="link"> <i className="fa fa-street-view"></i><p>درباره ما</p></Link></li>
                </ul>
            </div>
        </main>

    )
}

export default Menu
