import React from 'react'
import './Topic.css'

function Topic(props) {
    const subHeader = props.subHeader;
    const mainHeader = props.mainHeader;
    return (
        <div className='topic'>
            <span className='sub-header '>{subHeader}</span>
            <span className='stroke-header' >{mainHeader}</span>
        </div>
    )
}

export default Topic