import React from 'react'
import './Skills.css'
import SkillLevel from '../SkillLevel/SkillLevel'

function Skills() {

    return (
        <div className='containers skills-container'>
            <div className='skills-header'>
                <span className='sub-header'>Empower my potential</span>
                <span className='stroke-header '>Skills</span>
            </div>
            <div className='skills'>
                <div className='skill-set-1 skill-set'>
                    <div className='box-design skill-content-box'>
                        <SkillLevel language='Java' level='80' />
                        <SkillLevel language='Python' level='60' />
                        <SkillLevel language='JavaScript' level='70' />
                        <SkillLevel language='SQL' level='80' />
                        <SkillLevel language='ReactJs' level='70' />
                        <SkillLevel language='Sass' level='60' />
                    </div>
                </div>
                <div className='skill-set-2 skill-set'>
                    <div className='box-design skill-content-box'>
                        <SkillLevel language='Css' level='80' />
                        <SkillLevel language='Tailwind css' level='50' />
                        <SkillLevel language='html' level='80' />
                        <SkillLevel language='React native' level='55' />
                        <SkillLevel language='Android' level='65' />
                        <SkillLevel language='flutter' level='50' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills