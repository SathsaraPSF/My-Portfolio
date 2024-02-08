import React from 'react'
import './Project.css'
import Topic from '../MainTopics/Topic'


function Project() {

    return (
        <div className='containers project-container'>
            <div className='project-header'>
                <div className='header-postion'>
                    <Topic subHeader='Showcasing my ' mainHeader='Projects' />
                </div>
            </div>
            <div className='projects'>
                <div className='project-content'>
                    <div className='project-1'></div>
                    <div className='project-1'></div>
                    <div className='project-1'></div>
                    <div className='project-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Project