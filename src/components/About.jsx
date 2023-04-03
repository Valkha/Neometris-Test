import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Target from '../assets/images/pictos/target.png'
import Speaker from '../assets/images/pictos/speaker.png'
import Stonks from '../assets/images/pictos/stonks.png'
import Activites from "../components/Activites.jsx"

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
        SlideInLeft('#presentation, #presentation2');
    }, [])

    useEffect(() => {
        SlideInRight('#pres-pic');
    }, [])

    return (
        <div name='about' className='w-full h-full flex flex-col justify-center items-center'>
            {/* Format VVI */}
            <section className='w-full h-full lg:h-screen pt-16 mt-0 flex flex-col justify-between items-center bg-gray-100 '>
                <div id="presentation" className='w-5/6 h-full flex flex-col lg:text-5xl'>
                    <h4 className=' w-full text-gray-800 text-2xl lg:text-3xl xl:text-4xl uppercase font-bold tracking-wider py-6 flex justify-center items-center text-center'>
                        Optez pour une solution de communication innovante !
                    </h4>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-full  h-full flex justify-center items-center'>
                            <p className='w-full lg:text-lg xl:text-2xl p-4 text-center text-pink-500'>La Visite Virtuelle Immersive permet de découvrir votre établissement depuis votre site web, réseaux sociaux, fiche Google, où grâce un QR code personnalisé sur vos cartes de visite, flyer…</p>

                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col my-8'>
                        <div className='lg:w-1/2 w-fullflex flex-col justify-center items-center bg-black text-gray-50 py-4 '>

                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col tracking-wide justify-center items-start lg:text-xl 2xl:text-2xl lg:px-4 xl:px-24'>
                            <div className='flex items-start my-1 h-1/6'>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Augmentez</span> la fréquentation de votre établissement</p>
                            </div>
                            <div className='flex items-start my-1  h-1/6'>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Rassurez</span>, familiarisez & séduisez</p>
                            </div>
                            <div className='flex items-start my-1 h-1/6'>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Valorisez</span> votre image & appuyez votre notoriété</p>
                            </div>
                            <div className='flex items-start my-1 h-1/6 '>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Précisez</span> votre offre & engagez une clientèle 100% qualifiée</p>
                            </div>
                            <div className='flex items-start my-1 h-1/6'>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Augmentez</span> votre visibilité & votre référencement</p>
                            </div>
                            <div className='flex items-start my-1 h-1/6'>
                                <FontAwesomeIcon icon={faCheck} className="text-pink-500 mr-4" />
                                <p className='uppercase'><span className='text-pink-500'>Compatible</span> et accessible depuis tout les écrans 7j/7, 24h/24</p>
                            </div>
                        </div>
                    </div>
                    <p className='w-full my-4 lg:text-lg xl:text-2xl text-center'>Commerce, architecture, rénovation, immobilier...<br></br> Découvrez vos avantages spécifiques à votre activité dans la rubrique
                        <Link className='bg-pink-500 border-2 border-black p-2 px-3 rounded-3xl mx-1 cursor-pointer hover:scale-105 hover:text-pink-500 hover:font-bold hover:bg-gray-100 duration-150' to="activites" spy={true} smooth={true} duration={500}>Votre activité</Link>
                    </p>
                </div>
            </section>
            {/* La technologie Matterport */}
            <section className='w-full h-full lg:h-screen flex flex-col items-center justify-center bg-[url("assets/images/fonds/bg_mp.png")] bg-no-repeat bg-cover bg-center'>
                <h3 className='text-2xl lg:text-4xl xl:-text-4xl 2xl:text-5xl text-gray-100 uppercase pt-20 md:pt-10 lg:pt-0 lg:pb-8'>la technologie Matterport&trade;</h3>
                <div className='w-full h-full lg:h-2/3 flex flex-col lg:flex-row justify-center items-center'>
                    <div className="w-full lg:w-1/2 h-2/3 p-8 lg:px-12 flex justify-center items-center">
                        <div className='w-full h-fit flex flex-col text-gray-100'>
                            <h5 className='text-xl lg:text-2xl xl;text-4xl py-8 uppercase mx-auto'><span className='text-rose-500 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Matterport&trade;</span> est à la fois la référence et le leader mondial en matière de visites virtuelles</h5>
                            <p className='lg:text-lg xl:text-xl p-auto'>Leur technologie haut de gamme, alliant rayons infrarouges et photographie à 360° permet de créer un jumeau numérique précis, mesurable et immersif d'un espace physique.</p>
                            <p className='lg:text-lg xl:text-xl p-auto py-2'>Initialement conçu pour l'immobilier, cet outils est de plus en plus utilisé en architecture, bâtiment, commerces, tourisme et dans les milieux culturels.</p>
                        </div>
                    </div>
                    <div className=" w-full lg:w-1/2 h-96 xl:h-full flex justify-center lg:justify-start items-center">
                        <div className="bg-gray-800 rounded-2xl hover:border-2 w-11/12 h-5/6 flex justify-center items-center text-gray-50 lg:text-7xl hover:scale-105 duration-150">
                            <iframe className='w-full h-full rounded-2xl' src='https://my.matterport.com/show/?m=iuFTUE3GSUk' frameborder='0' allowfullscreen="true" allow='xr-spatial-tracking'>

                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* Les chiffres clés */}
            <section className='w-full h-full lg:h-screen flex flex-col items-center justify-center px-6 pb-12 md:pb-0 lg:px-32 bg-gray-100'>
                <h4 className='w-full h-20 flex items-center justify-center font-bold text-2xl xl:text-4xl 2xl:text-5xl lg:my-20 uppercase'>La visite virtuelle immersive, c'est:</h4>
                <div className="w-full h-full flex flex-col md:flex-row items-center md:items-start">
                    <div className=" mx-6 w-full md:w-1/3 h-2/3 flex flex-col justify-center items-center text-gray-50">
                        <div className='w-full h-fit md:h-1/2 flex flex-col justify-center items-center'>
                            <img src={Speaker} alt="" className='my-4 w-24 md:w-20 lg:w-24 2xl:w-40' />
                            <div className='w-4/5 text-rose-500 font-bold text-lg xl:text-xl 2xl:text-3xl flex justify-center items-center'>
                                <span className=' flex justify-center items-center text-3xl lg:text-5xl'>+30%</span>
                                <p className='pl-4 text-md md:text-sm xl:text-2xl 2xl:text-3xl'> de référencement naturel !</p>
                            </div>
                        </div>
                        <div className='flex text-center items-center justify-center w-full mx-auto text-sm xl:text-xl mt-4'>
                            <p className='mt-6 text-black'>Les visiteurs passent en moyenne <span className='text-rose-500 font-bold'>6x plus de temps</span> sur un site web proposant une visite virtuelle, améliorant ainsi votre référencement sur Google.</p>
                        </div>
                    </div>
                    <div className="mx-6 w-full md:w-1/3 h-2/3 flex flex-col justify-center items-center text-gray-50">
                        <div className='w-full h-1/2 flex flex-col justify-center items-center'>
                            <img src={Target} alt="" className='my-4 w-24 md:w-20 lg:w-24 2xl:w-40' />
                            <div className='w-4/5 text-rose-500 font-bold text-lg xl:text-xl 2xl:text-3xl flex justify-center items-center'>
                                <span className='flex justify-center items-center text-3xl lg:text-5xl'>x2</span>
                                <p className='pl-4 text-md md:text-sm xl:text-2xl 2xl:text-3xl text-center'> + de probabilités d’une visite sur place</p>
                            </div>
                        </div>
                        <div className='flex text-center items-center justify-center mx-auto text-sm lg:text-xl mt-4'>
                            <p className='mt-6 text-black'>La Visite Virtuelle Immersive répond à la demande des internautes qui souhaitent obtenir <span className='text-rose-500 font-bold'>un maximum d’informations</span> avant de se déplacer. La majorité favorisera les établissements proposant une visite virtuelle</p>
                        </div>
                    </div>
                    <div className="mx-6 w-full md:w-1/3 h-2/3 flex flex-col justify-center items-center text-gray-50">
                        <div className='w-full h-1/2 flex flex-col justify-center items-center'>
                            <img src={Stonks} alt="" className='my-4 w-24 md:w-20 lg:w-24 2xl:w-40' />
                            <div className='flex flex-col items-center justify-center text-justify w-4/5 mx-auto text-xl mt-4'>
                                <div className='w-4/5 text-rose-500 font-bold lg:text-3xl flex justify-center items-center'>
                                    <span className='flex justify-center items-center text-md 2xl:text-4xl uppercase'>Augmenter :</span>
                                </div>
                            </div>
                            <ul className='mt-6 text-sm lg:text-xl text-center text-black'>
                                <li><p>- Votre chiffre d'affaire</p></li>
                                <li><p>- Votre visibilité en ligne</p></li>
                                <li><p>- Votre fréquentation & achats en ligne</p></li>
                                <li><p>- La satisfaction de vos clients</p></li>
                                <li><p>- L'intêret qui vous est porté sur les réseaux</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ACTIVITES */}
            <Activites></Activites>
            {/* PROCESSUS DE REALISATION */}
            <section className='w-full'>
                <div id="processus" name='process' className='w-full h-screen  flex flex-col bg-gray-100'>
                    <h4 className='w-full h-20 flex items-center justify-center font-bold text-3xl text-center xl:text-4xl 2xl:text-5xl uppercase'>Comment traitons-nous un projet?</h4>
                    <div className='w-full h-full flex flex-col md:flex-row md:justify-center items-center'>
                        <div id="proc-left" className='h-5/6 w-full md:w-1/3 md:mt-12 flex flex-col '>
                            <div className='w-full h-1/4 flex flex-col justify-center xl:justify-start '>
                                <h3 className='text-sm lg:text-2xl 2xl:text-3xl text-pink-500 uppercase font-bold flex justify-center md:justify-end'>étape 1: le plan</h3>
                                <div className='flex justify-center md:justify-end'>
                                    <p className='text-sm xl:text-xl 2xl:text-xl w-2/3 text-black text-center md:text-right my-2'>Découverte de votre activité, définition de vos besoins, proposition adaptée et devis.</p>
                                </div>
                            </div>
                            <div className='w-full h-1/4 hidden md:block'></div>
                            <div className='w-full h-1/4 flex flex-col justify-center'>
                                <h3 className='text-xl lg:text-2xl 2xl:text-3xl text-pink-500 uppercase font-bold flex justify-center md:justify-end'>étape 2: post production</h3>
                                <div className='flex justify-center md:justify-end'>
                                    <p className='text-sm xl:text-lg 2xl:text-xl w-2/3 text-black text-center md:text-right my-2'>Traitement de l'espace, retouches photo, création et insertion de contenu sur mesure.</p>
                                </div>
                            </div>
                            <div className='w-full h-1/4 hidden'></div>
                        </div>
                        <div id="proc-picto" className='hidden md:block w-1/3 lg:w-1/4 h-5/6 mt-8 mx-2 bg-[url("assets/images/fonds/proc-graph.png")] bg-no-repeat bg-center bg-contain'>
                        </div>
                        <div id="proc-right" className='w-full md:w-1/3 h-5/6 md:mt-12 flex flex-col'>
                            <div className='w-full h-1/4 hidden md:block'></div>
                            <div className='w-full h-1/4 flex flex-col justify-center items-center md:items-start'>
                                <h3 className='text-xl lg:text-2xl 2xl:text-3xl text-pink-500 uppercase font-bold justify-center lg:justify-start'>étape 3: reportage</h3>
                                <div className='flex justify-center md:justify-start'>
                                    <p className='text-sm xl:text-lg 2xl:text-xl w-2/3 text-black text-center md:text-left my-2'>Numérisation de votre espace, mise en scène, photos, vidéos.</p>
                                </div>
                            </div>
                            <div className='w-full h-1/4 hidden md:block'></div>
                            <div className='w-full h-1/4 flex flex-col justify-center items-center md:items-start'>
                                <h3 className='text-xl lg:text-2xl 2xl:text-3xl text-pink-500 uppercase font-bold justify-center lg:justify-start'>étape 4: livraison</h3>
                                <div className='flex justify-center md:justify-start'>
                                    <p className='text-sm xl:text-lg 2xl:text-xl w-2/3 text-black text-center md:text-left my-2'>Votre Visite virtuelle Immersive est prête à être diffusée sans modération !</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* CHOISIR NEOMETRIS */}
            <section className='h-full lg:h-screen w-full flex flex-col items-center justify-center pb-12 lg:pb-0 px-4 md:px-32 bg-[url("assets/images/fonds/home_bg.png")] bg-no-repeat bg-cover bg-center text-gray-100'>
                <div className='w-full h-full pt-20 flex flex-col items-center justify-center'>
                    <div>
                        <h2 className='uppercase text-center w-full text-3xl xl:text-4xl 2xl:text-6xl'>Choisir <span className='text-rose-500'>NEOMETRIS</span>, c'est ...</h2>
                    </div>
                    <div className=' h-full w-full md:w-2/3 flex flex-col items-center justify-evenly'>
                        <div className='flex flex-col items-center justify-center my-4'>
                            <h3 className='uppercase w-full text-xl xl:text-2xl 2xl:text-4xl p-4 text-center text-rose-500'>un interlocuteur unique de A à Z</h3>
                            <p className='text-center text-md 2xl:text-2xl'>Notre objectif est de vous offrir un service de qualité, grâce à une relation de proximité basée sur la confiance et la confidentialité</p>
                        </div>
                        <div className='flex flex-col items-center justify-center my-4'>
                            <h3 className='uppercase w-full text-xl xl:text-2xl 2xl:text-4xl p-4 text-center text-rose-500'>une proposition sur mesure & adaptée</h3>
                            <p className='text-center text-md 2xl:text-2xl'>Avec écoute, conseil et créativité, nous imaginons des solutions uniques, à votre image et qui répondront à vos objectifs</p>
                        </div>
                        <div className='flex flex-col items-center justify-center my-4'>
                            <h3 className='uppercase w-full text-xl xl:text-2xl 2xl:text-4xl p-4 text-center text-rose-500'>Pluricompétence & Partenariats</h3>
                            <p className='text-center text-md 2xl:text-2xl'>Le cas échéant, nous collaborerons avec les entreprises de votre choix, ou à votre demande, nous vous présenterons nos partenaires en communication, graphisme, management de réseaux, création et gestion de site web</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About