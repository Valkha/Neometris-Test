import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Gallery_popup = ({ clickedImg, handleRotationRight, handleRotationLeft, setClickedImg }) => {

    const onClose = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    }

    return (
        <div onClick={onClose} className='dismiss w-full h-screen fixed top-0 left-0 right-0 flex justify-center items-center bg-black-rgba z-50'>
            <div className='w-full flex justify-center items-center mt-12'>

                <picture className='relative border-2' >
                    <FontAwesomeIcon className='dismiss absolute top-0 right-0 p-2 cursor-pointer lg:translate-x-[85%] lg:-translate-y-[85%] -translate-y-[100%] hover:text-amber-500 duration-150 w-12 h-12 text-gray-50' icon={faCircleXmark} />
                    <img src={clickedImg} alt="bigger picture" />
                </picture>
                <div onClick={handleRotationRight} className='flex justify-between absolute lg:top-1/2 bottom-40 left-24 lg:left-96 w-12 h-12 z-50'>
                    <FontAwesomeIcon className='hover:text-amber-500 duration-150 w-12 h-12 text-gray-50 text-xl' icon={faArrowLeftLong} />
                </div>
                <div onClick={handleRotationLeft} className='flex justify-between absolute lg:top-1/2 bottom-40 right-24 lg:right-96 w-12 h-12 z-50'>
                    <FontAwesomeIcon className='hover:text-amber-500 duration-150 w-12 h-12 text-gray-50 text-xl' icon={faArrowRightLong} />
                </div>
            </div>
        </div>
    )
}


export default Gallery_popup