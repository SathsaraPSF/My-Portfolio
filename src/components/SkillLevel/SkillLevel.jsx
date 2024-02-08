import React from 'react'
import './SkillLevels.css'

function SkillLevel(props) {
    const language = props.language;
    const level = props.level;
    let style;
    let dotStyle;

    console.log({ language, level })

    switch (language) {
        case "Java":
            style = { backgroundColor: '#C69749', width: `${level}%`, }
            dotStyle = { backgroundColor: '#C69749' }
            break;
        case "Python":
            style = { backgroundColor: '#306998', width: `${level}%` }
            dotStyle = { backgroundColor: '#306998' }
            break;
        case "JavaScript":
            style = { backgroundColor: '#FCAE2D', width: `${level}%` }
            dotStyle = { backgroundColor: '#FCAE2D' }
            break;
        case "SQL":
            style = { backgroundColor: '#00758F', width: `${level}%` }
            dotStyle = { backgroundColor: '#00758F' }
            break;
        case "ReactJs":
            style = { backgroundColor: '#7CC5D9', width: `${level}%` }
            dotStyle = { backgroundColor: '#7CC5D9' }
            break;
        case "Sass":
            style = { backgroundColor: '#CC6699', width: `${level}%` }
            dotStyle = { backgroundColor: '#CC6699' }
            break;
        case "Css":
            style = { backgroundColor: '#264DE4', width: `${level}%` }
            dotStyle = { backgroundColor: '#264DE4' }
            break;
        case "Tailwind css":
            style = { backgroundColor: '#B43297', width: `${level}%` }
            dotStyle = { backgroundColor: '#B43297' }
            break;
        case "html":
            style = { backgroundColor: '#F16529', width: `${level}%` }
            dotStyle = { backgroundColor: '#F16529' }
            break;
        case "React native":
            style = { backgroundColor: '#FCAE2D', width: `${level}%` }
            dotStyle = { backgroundColor: '#FCAE2D' }
            break;
        case "Android":
            style = { backgroundColor: '#3DDC84', width: `${level}%` }
            dotStyle = { backgroundColor: '#3DDC84' }
            break;
        case "flutter":
            style = { backgroundColor: '#41B6D0', width: `${level}%` }
            dotStyle = { backgroundColor: '#41B6D0' }

    }
    return (
        <div className='skill-level-container'>
            <div className='skill-level-content'>
                <div className='lable'>
                    <span className='language'>{language}</span>
                    <span className='expert-level'> {level}%</span>
                </div>

                <div className='progress'>
                    <div className='progress-line'>
                        <div style={style} className='level-line'>
                            <div style={dotStyle} className='dot'> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillLevel