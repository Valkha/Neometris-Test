import React from 'react'
import LogoMatterport from '../assets/images/matterport_logo.png'
import LogoNeometris from '../assets/images/logo-neo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div id="footer" className='w-full h-full lg:h-96 bg-zinc-900 flex justify-center items-center'>
                <div className='w-full lg:w-2/3 flex md:flex-row flex-col h-full justify-evenly items-center'>
                    <div className='flex w-full lg:w-1/3 h-full items-center justify-evenly flex-col p-2'>
                        <img src={LogoMatterport} alt="logo Matterport" className='w-64 lg:w-96' />
                        <img src={LogoNeometris} alt="logo Matterport" className='w-64 lg:w-96' />
                        <p className=' text-gray-50 my-4'>&copy; 2022 NEOMETRIS - Tous droits réservés.</p>
                    </div>
                    <div className='flex flex-col w-auto px-auto h-full lg:justify-center p-2'>
                        <h4 className='px-6 py-4 text-gray-50 text-3xl'>Pages</h4>
                        <div className='text-md'>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Accueil</a>
                            </div>
                            <div>
                                <a href="services" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Services</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Commerce</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Tourisme</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Immobilier</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Evenementiel</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Architecture & BTP</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Entreprises</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Restauration</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Culture</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Mentions légales</a>
                            </div>
                            <div>
                                <a href="#" className='px-6 text-gray-50 hover:text-gray-500 duration-150'>Conditions d'utilisation</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center h-full lg:w-1/3 text-3xl my-6 lg:my-0'>
                        <h4 className='px-6 py-4 text-gray-50 text-3xl'>Suivez-nous</h4>
                        <div className='flex w-full justify-evenly items-center'>

                            <a href='https://www.instagram.com/neometris/?hl=fr' target="blank" className=' text-white p-2 text-5xl'>
                                <FontAwesomeIcon icon={faInstagram} className='hover:text-amber-500 hover:scale-105 duration-150' />
                            </a>
                            <a href='https://www.linkedin.com/company/neometris/about/' target="blank" className=' text-white p-2 text-5xl'>
                                <FontAwesomeIcon icon={faLinkedin} className='hover:text-blue-700 hover:scale-105 duration-150' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer