import React, { useState, Fragment } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/images/logo-neo-white.png'
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from 'react-scroll/modules'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const isSpyEnabled = true;

    return (
        <header className='fixed top-0 left-0 w-full text-gray-300 z-40 flex '>
            <nav className='w-full h-16 md:h-14 2xl:h-20 bg-zinc-900 z-50 flex items-center justify-between lg:block lg:justify-center'>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <LinkScroll to="accueil" spy={isSpyEnabled} smooth={true} duration={500} >
                            <LinkRouter to="accueil" spy={isSpyEnabled} smooth={true}><img className='cursor-pointer w-24 lg:w-56 m-4 lg:pr-2' src={Logo} alt="Logo Neometris" /></LinkRouter>
                        </LinkScroll>
                    </div>

                    {/* Menu */}
                    <ul className='hidden md:flex w-full justify-center items-center lg:mx-12 xl:mr-24'>
                        <li className='uppercase text-sm lg:text-md xl:text-lg  lg:mx-4 rounded-2xl hover:font-bold hover:text-zinc-900 hover:bg-pink-500 hover:scale-105 duration-150'>
                            <LinkScroll to="accueil" spy={isSpyEnabled} smooth={true} duration={500}  >
                                <LinkRouter to="accueil" spy={isSpyEnabled} smooth={true} offset={0}>accueil</LinkRouter>
                            </LinkScroll>
                        </li>
                        <li className='uppercase text-sm lg:text-md xl:text-lg  lg:mx-4 rounded-2xl hover:font-bold hover:text-zinc-900 hover:bg-pink-500 hover:scale-105 duration-150'>
                            <LinkRouter to="services" duration={500}>services</LinkRouter>
                        </li>
                        <li className=''>
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button className="uppercase text-sm md:text-md lg:text-md xl:text-lg lg:px-4 rounded-2xl hover:font-bold hover:text-zinc-900 hover:bg-pink-500 hover:scale-105 duration-150">Votre activité ⏷</Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white divide-y focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Commerce
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Tourisme
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Immobilier
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Évènementiel
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Architecture & BTP
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Entreprises
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <LinkRouter to="Template" spy={true} smooth={true} duration={500} className={classNames(
                                                    active ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    Restauration
                                                </LinkRouter>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li className='uppercase text-sm md:text-md lg:text-md xl:text-lg lg:mx-4 rounded-2xl hover:font-bold hover:text-zinc-900 hover:bg-pink-500 hover:scale-105 duration-150'>
                            <LinkRouter to="about" spy={isSpyEnabled} smooth={true} duration={500}>pourquoi Neometris ?</LinkRouter>
                        </li>
                        <li className='uppercase text-sm md:text-md lg:text-md xl:text-lg lg:mx-4 rounded-2xl hover:font-bold hover:text-zinc-900 hover:bg-pink-500 hover:scale-105 duration-150'>
                            <LinkScroll to="contact" spy={isSpyEnabled} smooth={true} duration={500}>
                                <LinkRouter to="contact" spy={isSpyEnabled} smooth={true} offset={0}>contact</LinkRouter>
                            </LinkScroll>
                        </li>
                    </ul>
                </div>

                {/* Hamburger */}
                <div onClick={handleClick} className='flex w-[50px] my-auto items-center md:hidden z-50 h-full'>
                    {!nav ? <FaBars size={35} /> : <FaTimes size={40} />}
                </div>

                {/* Menu mobile */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                    <li className='py-12 text-3xl uppercase'>
                        <LinkScroll onClick={handleClick} to="accueil" spy={isSpyEnabled} smooth={true} duration={500}  >
                            <LinkRouter onClick={handleClick} to="accueil" spy={isSpyEnabled} smooth={true} offset={0}>accueil</LinkRouter>
                        </LinkScroll>
                    </li>
                    <li className='py-12 text-3xl text-center'>
                        <LinkRouter onClick={handleClick} to="services" spy={isSpyEnabled} smooth={true} duration={0}>SERVICES</LinkRouter>
                    </li>
                    <li className='py-12 text-3xl text-center'>
                        <LinkRouter onClick={handleClick} to="activites" spy={isSpyEnabled} smooth={true} duration={0}>VOTRE ACTIVITE</LinkRouter>
                    </li>
                    <li className='py-12 text-center text-3xl'>
                        <LinkRouter onClick={handleClick} to="about" spy={isSpyEnabled} smooth={true} duration={0}>POURQUOI NEOMETRIS?</LinkRouter>
                    </li>
                    <li className='py-12 text-3xl'>
                        <LinkScroll onClick={handleClick} to="contact" spy={isSpyEnabled} smooth={true} duration={500} >
                            <LinkRouter onClick={handleClick} to="contact" spy={isSpyEnabled} smooth={true} duration={0}>CONTACT</LinkRouter>
                        </LinkScroll>
                    </li>
                </ul>
            </nav>
        </header >

    )
}

export default Navbar