import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const About = () => {



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

    useEffect(() => {
        SlideInLeft('#presentation');
    }, [])

    return (
        <div name='about' className='w-full h-full bg-[url("assets/images/fonds/body2.png")] flex flex-col justify-center items-center'>
            <div className='w-full h-screen flex justify-between items-end'>
                <div id="presentation" className='w-[700px] max-w-[700px] h-[600px] mb-24 ml-12'>
                    <div className='w-full h-1/6 bg-gradient-to-r from-purple-800 to-orange-400 flex justify-center items-center '>
                        <h4 className=' text-5xl text-gray-100 uppercase tracking-widest'>présentation</h4>
                    </div>
                    <div className='w-full h-5/6 bg-zinc-800'>
                        <p className='text-2xl text-gray-100 tracking-wide p-4 text-justify text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem delectus praesentium vero corporis facere illo consequuntur, maiores quae quisquam nesciunt sunt placeat officiis eius consequatur odio magni id voluptate dolorem laudantium quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='text-2xl text-gray-100 tracking-wide p-4 text-justify'>Eveniet, adipisci atque saepe eaque, iste blanditiis impedit hic accusamus quaerat, quisquam voluptas ratione. Corrupti nostrum nihil eligendi reiciendis pariatur ducimus accusamus ea molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad perferendis neque quis, vitae quam explicabo dicta doloribus asperiores molestias. Laborum, cupiditate sequi.</p>
                    </div>
                </div>
                <div className='w-[700px] max-w-[700px] h-[500px] bg-zinc-800 mb-32'></div>
            </div>
        </div>
    )
}

export default About