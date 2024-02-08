import React, { useRef } from 'react'
import './Contact.css'
import Topic from '../MainTopics/Topic'
import emailjs from '@emailjs/browser';
import { Button } from 'react-scroll'
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_trfv4jg', 'template_61xqlo7', form.current, {
                publicKey: 'zE4lBLpfmyUkl7iK7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='containers contact-container' id='contact'>
            <div className='contact-content'>
                <div className='contact-header'>
                    <Topic subHeader='Get in touch' mainHeader='Contact me' />
                </div>
                <div className='form'>
                    <form className='form-content' ref={form} onSubmit={sendEmail}>
                        <div className='details'>
                            <label className='lable'>Name</label>
                            <input type='name' className='inputs' name="from_name" />
                        </div>
                        <div className='details'>
                            <label className='lable'>Email</label>
                            <input type='name' className='inputs' name="email" />
                        </div>
                        <div className='details'>
                            <label className='lable'>Message</label>
                            <textarea className='textarea' name="message" ></textarea>
                        </div>
                        <input type='submit' className='btn submit' value="Send" />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact