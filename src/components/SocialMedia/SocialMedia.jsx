import React from 'react'
import './SocialMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMedia(props) {
    return (
        <div className='container'>
            <a href={props.link}><FontAwesomeIcon icon={props.icon} /></a>
        </div>
    )
}

export default SocialMedia