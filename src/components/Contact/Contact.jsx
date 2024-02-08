import React from 'react'
import './Contact.css'
import Topic from '../MainTopics/Topic'
import { Button } from 'react-scroll'
function Contact() {
    return (
        <div className='containers contact-container'>
            <div className='contact-content'>
                <div className='contact-header'>
                    <Topic subHeader='Get in touch' mainHeader='Contact me' />
                </div>
                <div className='form'>
                    <div className='form-content'>
                        <div className='details'>
                            <label className='lable'>Name</label>
                            <input type='name' className='inputs' />
                        </div>
                        <div className='details'>
                            <label className='lable'>Email</label>
                            <input type='name' className='inputs' />
                        </div>
                        <div className='details'>
                            <label className='lable'>Message</label>
                            <textarea className='textarea'></textarea>
                        </div>
                        <Button className='btn submit'>submit</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact