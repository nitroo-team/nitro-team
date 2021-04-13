import React, { useState } from 'react'
import './menu.css';
import { Link } from 'react-router-dom'
import logo from '../../images/min-logo.png'
import InstagramIcon from '@material-ui/icons/Instagram';

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
            <span className="line"></span>
            <div className="social-menu">
                <a rel="noreferrer" href="https://www.linkedin.com/in/nitro-team" target="_blank" className="linkedin hover-effect">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a rel="noreferrer" href="https://www.instagram.com/nitroo_team" className="instagram hover-effect">
                    <InstagramIcon />
                </a>
                <a rel="noreferrer" href="#" className="gmail hover-effect">
                    <i className="fa fa-google"></i>
                </a>
            </div>
        </main>

    )
}

export default Menu
