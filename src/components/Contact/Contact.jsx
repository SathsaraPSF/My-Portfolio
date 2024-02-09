import React, { useRef } from 'react'
import './Contact.css'
import Topic from '../MainTopics/Topic'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
    const [formData, setFormData] = React.useState({
        from_name: "",
        email: "",
        message: ""
    })

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value

            }
        })
    }



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (formData.from_name.length === 0 && formData.email.length === 0 && formData.message.length === 0) {
            toast.warn('All the feilds are required! 🛑', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            emailjs
                .sendForm('service_trfv4jg', 'template_61xqlo7', form.current, {
                    publicKey: 'zE4lBLpfmyUkl7iK7',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success('Message send successful! 🚀', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }

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
                            <input type='name' className='inputs' name="from_name" value={formData.from_name} onChange={onHandleChange} />
                        </div>
                        <div className='details'>
                            <label className='lable'>Email</label>
                            <input type='name' className='inputs' name="email" value={formData.email} onChange={onHandleChange} />
                        </div>
                        <div className='details'>
                            <label className='lable'>Message</label>
                            <textarea className='textarea' name="message" value={formData.message} onChange={onHandleChange}></textarea>
                        </div>
                        <input type='submit' className='btn submit' value="Send" />

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact