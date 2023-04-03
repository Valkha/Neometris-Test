import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import bgCubes from '../assets/images/fonds/bg_cubes.png'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Home = () => {

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
                duration: 0.7,
            }
        )
    }



    useEffect(() => {
        SlideInRight('#cube');
    }, [])
    useEffect(() => {
        SlideInLeft('#neo-title, #vpd');
    }, [])

    return (
        <div id="home" name='home' className='w-full h-screen flex justify-evenly items-center bg-[url("assets/images/fonds/home_bg.png")] px-12 lg:px-32 md:pt-12 lg:pt-20'>
            <div className=' lg:w-1/2 h-full flex flex-col justify-center items-start lg:pl-12'>
                <div className='w-full flex flex-col justify-center items-center lg:items-start lg:mb-24 '>
                    <h1 id="neo-title" className='text-5xl md:text-4xl lg:text-5xl 2xl:text-8xl lg:text-center text-gray-100' >
                        <span className='font-bold text-white tracking-widest'>NEO</span>
                        <span className='tracking-widest'><span className='stroked'>METRIS</span></span><br></br>
                        <span className='stroked text-2xl md:text-3xl lg:text-5xl tracking-widest'> <span className='text-pink-500'>SUBLIME</span> VOTRE IMAGE</span>
                    </h1>
                </div>
                <div id="vpd" className='w-full flex flex-col justify-evenly md:items-start pt-12 md:pt-2 lg:py-0'>
                    <div className='flex h-full justify-center items-center my-2 lg:py-4'>
                        <h2 className='uppercase text-gray-50 text-xl lg:text-5xl h-full flex justify-center items-center'>Visite virtuelle immersive</h2>
                    </div>
                    <div className='flex h-full justify-center items-center my-2 lg:py-4'>
                        <h2 className='uppercase text-gray-50 text-xl lg:text-5xl h-full flex justify-center items-center'>Photographie</h2>
                    </div>
                    <div className='flex h-full justify-center items-center my-2 lg:py-4'>
                        <h2 className='uppercase text-gray-50 text-xl lg:text-5xl h-full flex justify-center items-center'>Drone</h2>
                    </div>
                </div>
            </div >
            <div id="cube" className='hidden w-2/3 h-full md:flex flex-col justify-center items-start z-10 py-auto'>
                <img src={bgCubes} className='w-full h-full m-6' />
            </div>
        </div >
    );
}

export default Home