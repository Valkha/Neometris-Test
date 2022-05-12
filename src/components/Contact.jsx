import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import emailjs from '@emailjs/browser'

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

    useEffect(() => {
        SlideInRight('#form');
    }, [])

    return (
        <div name='contact' className='w-full h-screen bg-[url("assets/images/fonds/body9.png")] bg-no-repeat bg-cover bg-center flex justify-between items-center p-4'>
            <div className='pb-6 max-w-[1000px]'>
                <p className='text-5xl font-bold inline border-b-4 border-amber-500 text-black'>En ce moment:</p>
                <p className='pt-8 text-black font-bold text-3xl'>Pour toute souscription à une prestation de type annale, bondage, ou cuckold, la fellation est offerte, alors profitez en !</p>
            </div>

            <div id="form" className=' flex bg-[url("assets/images/contact-form-bg.png")] bg-cover bg-no-repeat bg-center w-2/6 rounded-bl-3xl'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[700px] px-24 w-full h-[600px]'>
                    <div className='flex'>
                        <h3 className='text-gray-300 text-2xl mx-auto mb-4 mt-32 uppercase'>Formulaire de Contact</h3>
                    </div>
                    <input className='my-2 p-2 text-gray-300 bg-transparent border rounded' type="text" placeholder='Nom' name='name' />
                    <input className='my-2 p-2 text-gray-300 bg-transparent border rounded' type="email" placeholder='Email' name='email' />
                    <input className='my-2 p-2 text-gray-300 bg-transparent border rounded' type="subject" placeholder='Sujet' name='subject' />
                    <textarea className='my-2 p-2 text-gray-300 bg-transparent border rounde8 resize-none' name='message' rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="Envoyer" className='text-pink-600 bg-transparent font-bold border-2 border-gray-300 rounded-3xl px-4 py-3 mx-auto mb-16 mt-6 flex items-center hover:text-gray-300 hover:bg-pink-600 hover:border-transparent duration-150 cursor-pointer'></input>
                    <p className='hidden'>Votre message a bien été envoyé !</p>
                </form>
            </div>

        </div >
    )
}

export default Contact