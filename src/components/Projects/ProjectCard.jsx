import React from 'react'
import './Project.css'
import { motion } from "framer-motion";

function ProjectCard(props) {
    return (
        <motion.div
            className='project-1'
            whileHover={{
                scale: 1.1,
                originX: 0,
                color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <div className='image'>
                <img src={props.img} className='project-img' />
            </div>
            <div className='see-more-button'>
                <button className='project-button btn'><a className="button-a" href={props.link}>see more</a></button>
            </div>
        </motion.div>
    )
}

export default ProjectCard