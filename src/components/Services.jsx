import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useParams } from "react-router-dom"
import Modal from './ModalVisit'
import ModalDrone from './ModalDrone'
import ModalGallery from './ModalGallery'

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
                <div id="title" className='flex w-11/12 h-20 lg:py-20 lg:my-12 justify-center items-center mx-auto'>
                    <h1 className='text-3xl xl:text-5xl 2xl:text-6xl uppercase font-bold text-pink-600 text-center'>Découvrez les services offerts par NEOMETRIS</h1>
                </div>
                {/* VISITE VIRTUELLE IMMERSIVE */}
                <section id='vvi' name='VVI' className='w-11/12 lg:w-9/12 h-[120px] md:h-[175px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-12 lg:mt-24 '>
                    <div className='w-full h-56 md:h-80 lg:h-96 xl:h-5/6 flex justify-between bg-zinc-900 rounded-r-full shadow-xl shadow-gray-500 relative'>
                        <div className='w-1/4 lg:w-1/3 h-[150px] lg:h-[280px] xl:h-[350px] 2xl:h-[500px] bg-[url("assets/images/camera.png")] bg-center bg-contain bg-no-repeat 2xl:ml-32 md:ml-24 sm:ml-12 absolute bottom-0'></div>
                        <div className="w-2/3 lg:w-2/3 h-full lg:mt-0 text-center flex flex-col justify-evenly items-center absolute right-6 lg:right-0 ">
                            <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs md:text-base lg:text-sm xl:text-3xl 2xl:text-4xl uppercase mx-auto my-2'>visite virtuelle immersive</h3>
                            <p className='w-full max-w-[700px] md:max-w-[300px] xl:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-[0.4rem] md:text-xs xl:text-base 2xl:text-xl mx-auto'>En tant qu'experts en capture 3D, notre objectif est de créer votre jumeau numérique avec une précision maximale et une qualité exceptionnelle, tout en respectant votre identité visuelle.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button onClick={() => setOpenModal1(true)} className='text-[0.5rem] md:text-[0.6rem] xl:text-base 2xl:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>Visitez un espace</button>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal open={openModal1} onClose={() => setOpenModal1(false)} />


                {/* VUE AERIENNE */}
                <section className='flex justify-end'>
                    <div id='drone' name='drone' className='w-11/12 lg:w-9/12 h-[120px] md:h-[175px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-24 '>
                        <div className='w-full h-60 md:h-80 lg:h-96 xl:h-5/6 flex justify-between bg-zinc-900 rounded-l-full shadow-xl shadow-gray-500 relative'>
                            <div className='order-2 w-1/3 h-[150px] md:h-[220px] lg:h-[250px] xl:h-[450px] 2xl:h-[400px] bg-[url("assets/images/drone.png")] bg-center bg-contain bg-no-repeat 2xl:mr-32 xl:mr-20 lg:mr-8 md:mr-8 sm:mr-12 absolute bottom-0 right-2 lg:right-0 '></div>
                            <div className="order-1 w-2/3 h-full text-center flex flex-col justify-evenly items-center absolute left-6 lg:left-0 ">
                                <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs md:text-base lg:text-sm xl:text-3xl 2xl:text-4xl uppercase mx-auto my-2'>prise de vue aérienne</h3>
                                <p className=' w-full max-w-[180px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-[0.4rem] text-xs md:text-xs lg:text-xs xl:text-base 2xl:text-xl mx-auto leading-normal '>Prenez de la hauteur !Obtenez une vue aérienne avec nos photos et vidéos prises en toute sécurité et en respectant les réglementations. Nous sommes agréés par la DGAC - Direction Générale de l’Aviation Civile - et intervenons dans tous les secteurs.</p>
                                <div className='w-2/3 flex justify-center items-center mx-auto'>
                                    <button onClick={() => setOpenModal2(true)} className='text-[0.5rem] md:text-[0.6rem] xl:text-base 2xl:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>Vidéo démo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalDrone open={openModal2} onClose={() => setOpenModal2(false)} />

                {/* PHOTOGRAPHIE */}
                <section id='photo' name='photo' className='w-11/12 h-[120px] md:h-[175px] xl:h-[350px] 2xl:h-[400px] flex flex-col mt-24'>
                    <div className='w-full h-60 md:h-80 lg:h-96 xl:h-5/6 flex justify-between bg-zinc-900 rounded-r-full shadow-xl shadow-gray-500 relative'>
                        <div className='w-1/3 h-[150px] md:h-[220px] lg:h-[280px] xl:h-[380px] 2xl:h-[400px] bg-[url("assets/images/a-photo.png")] bg-center bg-contain bg-no-repeat 2xl:ml-32 lg:ml-12 md:ml-2 sm:ml-12 absolute bottom-0 left-4 lg:left-0 '></div>
                        <div className="w-2/3 lg:w-2/3 h-full lg:mt-0 text-center flex flex-col justify-evenly items-center absolute right-6 lg:right-0 ">
                            <h3 className='w-full max-w-[700px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px] text-pink-600 text-xs md:text-base lg:text-sm xl:text-3xl 2xl:text-4xl uppercase mx-auto my-2'>photographie</h3>
                            <p className='w-full max-w-[200px] md:max-w-[300px] lg:max-w-[300px] xl:max-w-[500px] 2xl:max-w-[700px] text-gray-300 text-[0.4rem] text-xs md:text-xs lg:text-xs xl:text-base 2xl:text-xl mx-auto leading-normal'>La première impression est primordiale !<br></br> Sublimez votre image avec des photographies professionnelles de qualité.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button onClick={() => setOpenModal3(true)} className='text-[0.5rem] md:text-[0.6rem] xl:text-base 2xl:text-xl text-pink-600 border rounded-3xl py-1 px-3 lg:py-2 lg:px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150 '>Galerie</button>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalGallery open={openModal3} onClose={() => setOpenModal3(false)} />
            </section>
        </main>

    )
}

export default Services