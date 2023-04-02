import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import emailjs from '@emailjs/browser'
import Sophie from '../assets/images/sophie_bailleul.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faEnvelope, faPerson } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'neometris_template', form.current, 'LAaerqJF9_7WVZi29')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const sended = {

    }

    const SlideInRight = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 500,
                scale: 0.5,
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                delay: delay || 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                }
            }
        )
    }

    const ZoomInCenter = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                scale: 0.1,
            },
            {
                opacity: 1,
                scale: 1,
                delay: delay || 0.5,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                }
            }
        )
    }



    return (
        <div id="contact" name='contact' className='w-full h-full lg:h-screen lg:pt-12 flex justify-center items-center bg-[url("assets/images/fonds/bg_mp.png")] bg-no-repeat bg-cover bg-center'>
            <div className='w-full h-full flex flex-col justify-center items-center '>
                <div className='p-6 mt-8 w-4/5 lg:w-1/3 h-fit text-center rounded-2xl flex flex-col lg:flex-row justify-between items-center'>
                    <img src={Sophie} className='w-24 m-4 lg:w-40 rounded-full border-4' alt="photo de la fondatrice de Néometris, Sophie Bailleul" />
                    <div className='w-full h-fit text-gray-50 text-lg lg:text-xl'>
                        <div className='flex w-full justify-start items-center pl-4'>
                            <p className='uppercase text-lg'><span className='text-2xl lg:text-3xl'>Sophie Bailleul</span><br></br> Fondatrice de Neometris</p>
                        </div>
                        <div className='flex justify-center lg:justify-start items-center'>
                            <FontAwesomeIcon icon={faMobileScreenButton} className='p-4' />
                            <p>07.83.69.03.68</p>
                        </div>
                        <div className='flex justify-center lg:justify-start items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='p-4' />
                            <p>sophie@neometris.com</p>
                        </div>
                    </div>
                </div>

                <div id="form" className='mb-12 flex flex-col w-4/5 lg:w-1/3 rounded-br-3xl rounded-bl-md rounded-tl-3xl bg-white rounded-tr-md h-fit justify-center'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center px-2 lg:w-full mt-12 '>
                        <div className='flex'>
                            <h3 className='text-zinc-900 font-bold text-2xl lg:text-4xl tracking-widest mx-auto mb-4 uppercase'>Contactez-nous</h3>
                        </div>
                        <input className='w-2/3 my-2 p-2 h-6 text-gray-900 bg-gray-100 border rounded-xl' type="text" placeholder='Nom' name='name' />
                        <input className='w-3/4 my-2 p-2 h-6 text-gray-900 bg-gray-100 border rounded-xl' type="email" placeholder='Email' name='email' />
                        <input className='w-3/4 my-2 p-2 h-6 text-gray-900 bg-gray-100 border rounded-xl' type="subject" placeholder='Sujet' name='subject' />
                        <textarea className=' w-4/5 my-2 p-2 text-gray-900 bg-gray-100 border rounded-xl resize-none' name='message' rows="5" placeholder="Message"></textarea>
                        <input type="submit" value="Envoyer" className='text-gray-100 bg-pink-600 font-bold border-2 border-gray-300 rounded-3xl px-4 py-3 w-1/3 mb-6 mt-6 flex justify-center tracking-widest items-center hover:bg-pink-500 hover:border-transparent duration-150 cursor-pointer'></input>
                        <p className='hidden'>Votre message a bien été envoyé !</p>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact