import React, { useEffect, useRef } from 'react'
import Neon from '../assets/images/neometris-neon.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Home = () => {

    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    {/* Animations */ }
    const SlideInRight = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 400,
            },
            {
                opacity: 1,
                x: 0,
            }
        )
    }

    const SlideInLeft = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -400,
            },
            {
                opacity: 1,
                x: 0,
            }
        )
    }

    const SlideInLeftSlow = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -400,
            },
            {
                opacity: 1,
                x: 0,
                delay: 0.5,
            }
        )
    }

    useEffect(() => {
        SlideInRight('#neon');
    }, [])
    useEffect(() => {
        SlideInLeftSlow('#neo-text');
    }, [])

    return (

        <div id="home" name='home' className='w-full h-screen flex flex-col justify-center items-center bg-black'>
            <Particles
                className='z-0 w-full h-full absolute'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 200,
                            enable: true,
                            opacity: 0.2,
                            width: 2,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                        container: {
                            value: "#home",
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className='z-10 w-full mx-2 px-8 flex justify-evenly items-center'>
                <div className='flex flex-col justify-center h-full max-w-[1000px] px-6'>
                    <h1 id="neo-title" className='text-2xl md:text-5xl 2xl:text-6xl text-gray-300 my-12' >
                        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-orange-400 tracking-widest'>NEO</span><span className='tracking-widest'>METRIS</span> sublime votre image.
                    </h1>
                    <p id="neo-text" className='text-gray-300 xl:text-2xl 2xl:text-3xl text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore autem similique deleniti excepturi illo at culpa nostrum odit, eveniet voluptatibus tempora dolores ipsam inventore accusamus suscipit beatae eaque doloremque consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis quidem sapiente corrupti vero cumque distinctio tenetur excepturi enim. Fuga ex atque numquam necessitatibus magni eos autem ipsam perspiciatis, nulla magnam fugit!</p>
                </div>
                <img id='neon' src={Neon} alt="" className='hidden md:block select-none md:w-[400px] 2xl:w-[700px]' />

            </div>
        </div>
    );
}

export default Home