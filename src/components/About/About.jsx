import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className='containers about-container'>

            <div className='containt'>
                <div className='containt-left' >
                    <div className='header'>
                        <span className='sub-header '>Take time to know</span>
                        <span className='stroke-header' >About me</span>
                    </div>
                    Hi there! I'm Pasindu Sathsara, an enthusiastic undergraduate student at The Open University of Sri Lanka, currently in my third year of studying Software Engineering. I'm deeply passionate about technology and software development, and I'm excited to share my journey and projects with you.
                </div>
                <div className='containt-right'>
                    <div className='box box-design'>
                        <div className='item-header'>
                            Basic info
                        </div>
                        <div className='item'>
                            <FontAwesomeIcon icon={faCakeCandles} className='icon' />
                            1999 November 08
                        </div>
                        <div className='item'>
                            <FontAwesomeIcon icon={faPhone} className='icon' />
                            0772253533
                        </div>
                        <div className='item'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            sathsara.psf99@gmail.com
                        </div>
                        <div className='item'>
                            <FontAwesomeIcon icon={faLocationDot} className='icon' />
                            104/10/1/A, Kaudupitiya,
                            Gampola
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About