import React, { useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
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

    return (
        <section id="activites" name="activites" className='w-full h-full flex flex-col bg-gray-100'>
            {/* ACTIVITES */}
            <div className=' w-full h-full lg:h-screen'>
                <div id="activités_titre" className=' w-full flex pt-12 justify-center'>
                    <h3 className='w-11/12 xl:w-7/12 text-xl lg:text-3xl 2xl:text-5xl text-black font-bold uppercase text-center py-3'>Découvrez les avantages propres à votre secteur d'activité</h3>
                </div>
                <div className='w-full h-full flex flex-col items-center '>

                    <div className='my-12 w-2/3 grid md:grid-cols-3 gap-1 text-center justify-center items-center bg-gray-200 rounded-3xl'>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoCom} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>COMMERCE</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoCult} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>E-COMMERCE</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoTour} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>TOURISME</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>EVENEMENTIEL</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoImmo} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>IMMOBILIER</h4>
                        </div>

                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoBtp} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>ARCHITECTURE & BTP</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoEnt} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>ENTREPRISES</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoRestau} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>RESTAURATION</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto my-6 hover:scale-105 duration-150 group cursor-pointer'>
                            <div className='w-20 h-20 md:h-20 md:w-20 2xl:w-28 2xl:h-28 bg-gradient-to-b from-pink-500 to-pink-800 rounded-3xl flex justify-center items-center drop-shadow-xl group-hover:shadow-gray-500 group-hover:shadow-xl duration-150'>
                                <img src={pictoCult} alt="" className='w-2/3'></img>
                            </div>
                            <h4 className='max-w-[250px] text-black font-bold mx-auto mt-6 text-md 2xl:text-2xl'>CULTURE</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services