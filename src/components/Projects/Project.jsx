import React from 'react'
import './Project.css'
import Topic from '../MainTopics/Topic'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

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

                    <div className='project-1'>
                        <div className='image'>
                            <img src={img1} className='project-img' />
                        </div>
                        <div className='see-more-button'>
                            <button className='project-button btn'>see more</button>
                        </div>
                    </div>

                    <div className='project-1'>
                        <div className='image'>
                            <img src={img2} className='project-img' />
                        </div>
                        <div className='see-more-button'>
                            <button className='project-button btn'>see more</button>
                        </div>
                    </div>

                    <div className='project-1'>
                        <div className='image'>
                            <img src={img3} className='project-img' />
                        </div>
                        <div className='see-more-button'>
                            <button className='project-button btn'>see more</button>
                        </div>
                    </div>

                    <div className='project-1'>
                        <div className='image'>
                            <img src={img4} className='project-img' />
                        </div>
                        <div className='see-more-button'>
                            <button className='project-button btn'>see more</button>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Project