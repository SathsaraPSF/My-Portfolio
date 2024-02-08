import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className='containers footer'>
            <img src={logo} className='footer-logo' />
            <span className='footer-text'>Copyright ©️ 2024 by SathsaraPSF | All Rights Reserved.</span>
            <button className='btn footer-button'>  <FontAwesomeIcon icon={faArrowUp} className='icon' /></button>
        </div>
    )
}

export default Footer