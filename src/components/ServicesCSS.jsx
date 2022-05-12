import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const Services = () => {

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
        SlideInLeft('#proc-left');
    }, [])

    useEffect(() => {
        SlideInRight('#proc-right');
    }, [])

    useEffect(() => {
        ZoomInCenter('#proc-picto');
    }, [])

    return (
        <div name='services' className='w-full h-full flex flex-col'>
            <div className=''>

            </div>
            <div className='flex flex-col mt-20 pb-96 bg-[url("assets/images/fonds/body6.png")] bg-bottom bg-no-repeat'>
                {/* VISITE VIRTUELLE IMMERSIVE */}
                <div id='vvi' name='VVI' className='w-11/12 h-[300px] lg:h-[400px] flex flex-col mt-24'>
                    <div className='w-full h-5/6 flex justify-between bg-black'>
                        <div className='w-1/3 h-[370px] lg:h-[470px] bg-[url("assets/images/camera.png")] bg-center bg-contain bg-no-repeat lg:ml-24 md:ml-12 sm:ml-6  absolute bottom-0 left-0 '></div>
                        <div className="w-2/3 h-fit lg:h-full mt-6 lg:mt-0 text-center flex flex-col justify-center items-center absolute right-0 ">
                            <h3 className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 lg:text-3xl uppercase mx-auto lg:my-2'>visite virtuelle immersive</h3>
                            <p className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 text-xs lg:text-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button className='text-pink-600 border rounded-3xl py-2 px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>PHOTOS</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/6 w-full bg-gradient-to-r from-orange-400 to-purple-800 '></div>
                </div>

                {/* VUE AERIENNE */}
                <div className='flex justify-end'>
                    <div id='drone' name='drone' className='w-11/12 h-[400px] flex flex-col mt-24'>
                        <div className='w-full h-5/6 flex justify-between bg-black'>
                            <div className=' order-2 w-1/3 h-[400px] lg:h-[470px] bg-[url("assets/images/drone.png")] bg-center bg-contain bg-no-repeat xl:mr-32 md:mr-24 sm:mr-12  absolute bottom-0 right-0 '></div>
                            <div className="order-1 w-2/3 h-full text-center flex flex-col justify-center items-center absolute left-0 ">
                                <h3 className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 lg:text-3xl uppercase mx-auto lg:my-2'>visite virtuelle immersive</h3>
                                <p className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 text-xs lg:text-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className='w-2/3 flex justify-center items-center mx-auto'>
                                    <button className='text-pink-600 border rounded-3xl py-2 px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>PHOTOS</button>
                                </div>
                            </div>
                        </div>
                        <div className='h-1/6 w-full bg-gradient-to-r from-orange-400 to-purple-800 '></div>
                    </div>
                </div>

                {/* PHOTOGRAPHIE */}
                <div id='photo' name='photo' className='w-11/12 h-[400px] flex flex-col mt-24'>
                    <div className='w-full h-5/6 flex justify-between bg-black'>
                        <div className='w-1/3 h-[370px] lg:h-[450px] bg-[url("assets/images/a-photo.png")] bg-center bg-contain bg-no-repeat xl:ml-32 md:ml-24 sm:ml-12  absolute bottom-0 left-0 '></div>
                        <div className="w-2/3 h-full text-center flex flex-col justify-center items-center absolute right-0 ">
                            <h3 className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 lg:text-3xl uppercase mx-auto lg:my-2'>visite virtuelle immersive</h3>
                            <p className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] text-gray-300 text-xs lg:text-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className='w-2/3 flex justify-center items-center mx-auto'>
                                <button className='text-pink-600 border rounded-3xl py-2 px-6 mx-auto my-4 hover:bg-pink-600 hover:text-gray-300 hover:border-transparent hover:scale-105 duration-150'>PHOTOS</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/6 w-full bg-gradient-to-r from-orange-400 to-purple-800 '></div>
                </div>
            </div>

            {/* DOMAINES D'ACTIVITES */}
            <div className=' w-full flex pt-2 justify-end bg-black'>
                <h3 className='w-7/12 text-5xl text-gray-300 uppercase py-3 border-b-2'>Domaines d'activité</h3>
            </div>
            <div name="activités" className='w-full h-full pt-20 flex flex-col bg-black'>

                <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-3 text-center justify-center py-8'>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-1.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>QR CODE</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-2.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>LIEN PERSONNALISES</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-3.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>LIEN D'ACHAT</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-4.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>ARTICLES ET PHOTOS</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-5.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>RESERVATION</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150'>
                        <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[url("assets/images/serv-6.png")] bg-cover bg-no-repeat bg-center cursor-pointer'>

                        </div>
                        <h4 className='max-w-[250px] text-gray-300 mx-auto mt-6 md:text-2xl'>MEILLEURES VENTES</h4>
                    </div>

                </div>
            </div>
            {/* PROCESSUS DE REALISATION */}
            <div name='process' className='w-full h-screen pt-20 flex flex-col bg-black'>
                <div className=' w-full flex mt-2 justify-start '>
                    <h3 className='w-7/12 text-5xl text-gray-300 uppercase py-3 border-b-2 flex justify-end'>processus de réalisation</h3>
                </div>
                <div className='w-full h-full flex justify-center'>
                    <div id="proc-left" className='h-5/6 w-1/3 mt-12 flex flex-col'>
                        <div className=' w-full h-1/4 flex flex-col '>
                            <h3 className='text-4xl text-orange-400 uppercase flex justify-end'>projet</h3>
                            <div className='flex justify-end'>
                                <p className='text-3xl w-2/3 text-gray-300 text-right my-2'>Découverte de votre activité, définition de vos besoins, proposition adaptée et devis.</p>
                            </div>
                        </div>
                        <div className='w-full h-1/4'></div>
                        <div className='w-full h-1/4'>
                            <h3 className='text-4xl text-pink-600 uppercase flex justify-end'>post production</h3>
                            <div className='flex justify-end'>
                                <p className='text-3xl w-2/3 text-gray-300 text-right my-2'>Numérisation de votre espace, mise en scène, photos, vidéos.</p>
                            </div>
                        </div>
                        <div className='w-full h-1/4'></div>
                    </div>
                    <div id="proc-picto" className='w-1/4 h-5/6 mt-8 bg-[url("assets/images/proc-graph.png")] bg-no-repeat bg-center bg-contain'>
                    </div>
                    <div id="proc-right" className=' w-1/3 h-5/6 mt-12 flex flex-col'>
                        <div className='w-full h-1/4'></div>
                        <div className='w-full h-1/4'>
                            <h3 className='text-4xl text-pink-400 uppercase'>reportage</h3>
                            <div className='flex'>
                                <p className='text-3xl w-2/3 text-gray-300 my-2'>Traitement de l'espace, retouches photo, création et insertion de contenu sur mesure.</p>
                            </div>
                        </div>
                        <div className='w-full h-1/4'></div>
                        <div className='w-full h-1/4'>
                            <h3 className='text-4xl text-fuchsia-800 uppercase'>livraison</h3>
                            <div className='flex'>
                                <p className='text-3xl w-2/3 text-gray-300 my-2'>Votre Visite virtuelle Immersive est prête à être diffusée sans modération !</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services