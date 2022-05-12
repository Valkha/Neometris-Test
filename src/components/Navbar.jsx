import React, { useState, Fragment } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/images/logo-neometris.png'
import { Link } from 'react-scroll'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed top-0 left-0 w-full h-[80px] bg-gradient-to-r from-orange-400 to-purple-700 text-gray-300 z-40 flex '>
            <div className='w-full h-[78px] bg-black z-50 flex items-center justify-between lg:block lg:justify-center'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <img className='cursor-pointer w-20 m-4' src={Logo} alt="Logo Neometris" />
                        </Link>
                    </div>

                    {/* Menu */}
                    <ul className='hidden md:flex w-full justify-center mr-24'>
                        <li className='text-xl mx-4 rounded-lg hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-400 to-purple-700 duration-100'>
                            <Link to="home" spy={true} smooth={true} duration={500}>ACCUEIL</Link>
                        </li>
                        <li className='text-xl mx-4 rounded-lg hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-400 to-purple-700 duration-100'>
                            <Link to="about" spy={true} smooth={true} duration={500}>A PROPOS</Link>
                        </li>
                        <li className='text-xl mx-4 rounded-lg'>
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button className="uppercase hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-400 to-purple-700 duration-100">Services</Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y focus:outline-none">
                                        <div className='py-1'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="activités" className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}>
                                                        Domaines d'activité
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a name="activités" className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}>
                                                        Domaines d'activité
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a name="processus" className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}>
                                                        Processus de réalisation
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li className='text-xl mx-4 rounded-lg hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-400 to-purple-700 duration-100'>
                            <Link to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger */}
                <div onClick={handleClick} className='flex w-[50px] my-auto items-center md:hidden z-50 h-full'>
                    {!nav ? <FaBars size={35} /> : <FaTimes size={40} />}
                </div>

                {/* Menu mobile */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={0}>ACCUEIL</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={0}>A PROPOS</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="services" spy={true} smooth={true} duration={0}>SERVICES</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={0}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar