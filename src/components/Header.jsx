
import React from 'react'
import './Header.css'

import { Typewriter } from 'react-simple-typewriter';

import image1 from '../assets/image1.png'
import SocialMedia from './SocialMedia/SocialMedia'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faBloggerB } from '@fortawesome/free-brands-svg-icons'




function Header() {
    return (
        <div className='containers Header'>
            <div className='left-side'>
                <div className='content'>

                    <div className='blur'></div>
                    <span className='header-topic-1'>
                        Hey,
                    </span>
                    <span className='name'>
                        I am Pasindu <span className='last-name'>Sathsara</span>
                    </span>
                    <span className='proffesion'>
                        <Typewriter
                            cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={100}
                            words={[
                                'Web Developer',
                                'Software Developer',

                            ]}
                        />
                    </span>
                    <span className='brief-description'>
                        This is Pasindu Sathsara Web developer, Software Developer located in <br /> Sri Lanka. Looking for working
                        around the globe.
                    </span>
                    <div className='social-medias'>
                        <SocialMedia icon={faGithub} link="https://github.com/SathsaraPSF" />
                        <SocialMedia icon={faLinkedinIn} link="https://www.linkedin.com/in/pasindusathsara/" />
                        <SocialMedia icon={faBehance} link="https://www.behance.net/pasindusathsara1999" />
                        <SocialMedia icon={faBloggerB} link="https://sathsaraprogramming.blogspot.com/" />

                    </div>

                </div>

            </div>

            <div className='right-side'>
                <img src={image1} alt='my-image' className='image1' />
            </div>
            <div className='scroll-indicator'>
                <div className='text'>
                    <span className='verticle-text'>Scroll down</span>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faForward} className='forward-arrow' />
                </div>

            </div>
        </div>
    )
}

export default Header