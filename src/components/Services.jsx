import React, { useState, useEffect, useRef } from 'react'
import Footer from './Footer'
import { gsap } from 'gsap'
import { useParams } from "react-router-dom"
import Modal from './Modal_VVI'
import Modal_drone from './Modal_drone'
import Modal_gallery from './Modal_gallery'
import pictoCom from '../assets/images/fonds/picto_com.svg'
import pictoTour from '../assets/images/fonds/picto_tour.svg'
import pictoImmo from '../assets/images/fonds/picto_immo.svg'
import pictoBtp from '../assets/images/fonds/picto_btp.svg'
import pictoEnt from '../assets/images/fonds/picto_ent.svg'
import pictoRestau from '../assets/images/fonds/picto_restau.svg'
import pictoCult from '../assets/images/fonds/picto_cult.svg'

const Services = () => {

    const params = useParams()
    console.log(params);


    const [openModal1, setOpenModal1] = useState(false)

    const [openModal2, setOpenModal2] = useState(false)

    const [openModal3, setOpenModal3] = useState(false)

    document.body.style.overflowY = (openModal1 || openModal2 || openModal3) ? "hidden" : "auto";

    const SlideInRight = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 500,
            },
            {
                opacity: 1,
                x: 0,
                delay: delay || 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                }
            }
        )
    }

    const SlideInLeft = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -500,
            },
            {
                opacity: 1,
                x: 0,
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
                delay: delay || 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                }
            }
        )
    }

    const SlideInUp = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: " bottom center",
                }
            }
        )
    }

    const SlideInDown = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: " bottom center",
                }
            }
        )
    }

    useEffect(() => {
        SlideInLeft('#vvi');
    }, [])

    useEffect(() => {
        SlideInRight('#drone');
    }, [])

    useEffect(() => {
        SlideInLeft('#photo');
    }, [])

    useEffect(() => {
        SlideInDown('#title');
    }, [])


    return (
        <main id="services" name="services" className='w-screen h-full flex flex-col justify-center items-center'>
            <section className='w-full h-full flex flex-col mt-20 pb-24 bg-bottom bg-no-repeat '>
                <div id="title" className='flex w-full h-20 lg:py-20 mb-12 lg:my-12 justify-center items-center'>
                    <h1 className='xl:text-5xl 2xl:text-6xl uppercase font-bold text-pink-600'>Découvrez les services offerts par NEOMETRIS</h1>
                </div>
                {/* VISITE VIRTUELLE IMMERSIVE */}
                <div id='vvi' name='VVI' className='w-11/12 lg:w-9/12 h-[175px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-24 '>
                    <div className='w-full h-5/6 flex justify-between bg-zinc-900 rounded-r-full shadow-xl shadow-gray-500 relative'>
                        <div className='w-1/4 lg:w-1/3 h-[150px] lg:h-[450px] bg-[url("assets/images/camera.png")] bg-center bg-contain bg-no-repeat 2xl:ml-32 md:ml-24 sm:ml-12 absolute bottom-0'></div>
                        <div className="w-2/3 lg:w-2/3 h-full lg:mt-0 text-center flex flex-col justify-evenly items-center absolute right-6 lg:right-0 ">
                            <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs lg:text-4xl uppercase mx-auto my-2'>visite virtuelle immersive</h3>
                            <p className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-sm lg:text-lg 2xl:text-xl mx-auto'>En tant qu'experts en capture 3D, notre objectif est de créer votre jumeau numérique avec une précision maximale et une qualité exceptionnelle, tout en respectant votre identité visuelle.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button onClick={() => setOpenModal1(true)} className='text-[0.6rem] lg:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>Visitez un espace</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={openModal1} onClose={() => setOpenModal1(false)} />


                {/* VUE AERIENNE */}
                <div className='flex justify-end'>
                    <div id='drone' name='drone' className='w-11/12 lg:w-9/12 h-[175px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-24 '>
                        <div className='w-full h-5/6 flex justify-between bg-zinc-900 rounded-l-full shadow-xl shadow-gray-500 relative'>
                            <div className='order-2 w-1/3 h-[150px] lg:h-[450px] bg-[url("assets/images/drone.png")] bg-center bg-contain bg-no-repeat 2xl:mr-32 md:mr-24 sm:mr-12 absolute bottom-0 right-2 lg:right-0 '></div>
                            <div className="order-1 w-2/3 h-full text-center flex flex-col justify-evenly items-center absolute left-6 lg:left-0 ">
                                <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs lg:text-4xl uppercase mx-auto lg:my-2'>prise de vue aérienne</h3>
                                <p className=' w-full max-w-[180px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-sm lg:text-lg 2xl:text-xl mx-auto'>Prenez de la hauteur !Obtenez une vue aérienne avec nos photos et vidéos prises en toute sécurité et en respectant les réglementations. Nous sommes agréés par la DGAC - Direction Générale de l’Aviation Civile - et intervenons dans tous les secteurs.</p>
                                <div className='w-2/3 flex justify-center items-center mx-auto'>
                                    <button onClick={() => setOpenModal2(true)} className='text-[0.6rem] lg:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>Vidéo démo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal_drone open={openModal2} onClose={() => setOpenModal2(false)} />

                {/* PHOTOGRAPHIE */}
                <div id='photo' name='photo' className='w-9/12 h-[230px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-24'>
                    <div className='w-full h-5/6 flex justify-between bg-zinc-900 rounded-r-full shadow-xl shadow-gray-500 relative'>
                        <div className='w-1/3 h-[220px] lg:h-[380px] 2xl:h-[400px] bg-[url("assets/images/a-photo.png")] bg-center bg-contain bg-no-repeat 2xl:ml-32 md:ml-24 sm:ml-12 absolute bottom-0 left-4 lg:left-0 '></div>
                        <div className="w-2/3 lg:w-2/3 h-full lg:mt-0 text-center flex flex-col justify-evenly items-center absolute right-6 lg:right-0 ">
                            <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs lg:text-4xl uppercase mx-auto my-2'>photographie</h3>
                            <p className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-sm lg:text-lg 2xl:text-xl mx-auto'>La première impression est primordiale !<br></br> Sublimez votre image avec des photographies professionnelles de qualité.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button onClick={() => setOpenModal3(true)} className='text-[0.6rem] lg:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150 '>Galerie</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal_gallery open={openModal3} onClose={() => setOpenModal3(false)} />
            </section>
        </main>

    )
}

export default Services