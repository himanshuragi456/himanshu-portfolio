import React, { useRef } from 'react'
import logo from "../static/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import "./scss/navbar.scss"

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link to="/" className="navbar__link">
                    <img alt='logo' src={logo} className="navbar__img" />
                </Link>
            </div>
            <div className="navbar__right">
                <ul className="navbar__list">
                    <li className="navbar__items" onClick={() => window.scrollTo(0, 700)}>
                        <p className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">01.</span>.about()</p>
                    </li>
                    <li className="navbar__items" onClick={() => window.scrollTo(0, 970)}>
                        <p className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">02.</span>.skills()</p>
                    </li>
                    <li className="navbar__items" onClick={() => window.scrollTo(0, 1470)}>
                        <p className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">03.</span>.work()</p>
                    </li>
                    <li className="navbar__items" onClick={() => navigate('/contact')}>
                        <p className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">04.</span>.contact()</p>
                    </li>
                </ul>
                <a href="https://docs.google.com/document/d/1H7sGOLvYHqLuFqNjwtSEXIA43aFtTpbc/edit?usp=sharing&ouid=117571935227360369447&rtpof=true&sd=true" target="_blank" rel='noreferrer' className="navbar__button">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar