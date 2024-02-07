import React from 'react'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Experience() {
    return (
        <div className='containers experience-containers' id='experience'>
            <div className='experience-content'>
                <div className='experience-header'>
                    <span className='sub-header'>Explore my</span>
                    <span className='stroke-header '>Experience</span>
                </div>
                <div className='experiences box-design'>
                    <div className='detail-container'>
                        <div className='top-side'>
                            <span className='position'>Technical Assistant </span>
                            <span className='date'>2021 April - 2021 September</span>
                            <span className='place'>The Open University Of Sri Lanka</span>
                            <hr className='hr' />
                        </div>
                        <div className='bottoms-side'>
                            <div className='work-experience'>
                                <FontAwesomeIcon icon={faCheckCircle} className='icon' />
                                Manage Department web site
                            </div>
                            <div className='work-experience'>
                                <FontAwesomeIcon icon={faCheckCircle} className='icon' />
                                Assisted staff with photocopying and other various clerical tasks.
                            </div>
                            <div className='work-experience'>
                                <FontAwesomeIcon icon={faCheckCircle} className='icon' />
                                Answered phones and transferred callers to requested personnel or voicemail.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience