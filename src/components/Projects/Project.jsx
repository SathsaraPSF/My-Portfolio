import React from 'react'
import './Project.css'
import Topic from '../MainTopics/Topic'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import ProjectCard from './ProjectCard'

function Project() {

    return (
        <div className='containers project-container' id='projects'>
            <div className='project-header'>
                <div className='header-postion'>
                    <Topic subHeader='Showcasing my ' mainHeader='Projects' />
                </div>
            </div>
            <div className='projects'>
                <div className='project-content'>
                    <ProjectCard img={img3} link="https://github.com/SathsaraPSF/My-Portfolio" />
                    <ProjectCard img={img5} link="https://github.com/SathsaraPSF/AT-DIGITAL-FRONTEND" />
                    <ProjectCard img={img6} link="https://github.com/SathsaraPSF/Simple-note-taking-application--frontend" />
                    <ProjectCard img={img1} link="https://github.com/SathsaraPSF/MyToDoList" />
                    <ProjectCard img={img2} link="https://github.com/SathsaraPSF/SPCreations-Web-Site" />
                    <ProjectCard img={img4} link="https://github.com/Gold-Diggers-Team/AgroPest-Mobile-Application" />
                </div>
            </div>
        </div>
    )
}

export default Project