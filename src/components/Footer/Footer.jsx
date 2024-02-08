import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className='containers footer'>
            <img src={logo} className='footer-logo' />
            <span className='footer-text'>Copyright ©️ 2024 by SathsaraPSF | All Rights Reserved.</span>
            <button className='btn footer-button '> <Link
                className='button-a'
                to="home"
                spy={true}
                smooth={true}
                duration={500} ><FontAwesomeIcon icon={faArrowUp} className='icon' /></Link>  </button>
        </div>
    )
}

export default Footer