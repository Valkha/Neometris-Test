import React from 'react'
import Gallery from './Gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'


const Modal_gallery = ({ open, onClose }) => {
    if (!open) return null
    else document.body.style.overflowY = "hidden"



    return (
        <div className='bg-black-rgba w-full h-screen fixed top-0 left-0 right-0 flex justify-center z-50'>
            <div className=" w-full lg:w-4/5 lg:h-screen flex justify-center items-center z-50">
                <Gallery />
                <FontAwesomeIcon onClick={onClose} className='dismiss absolute top-0 right-4 p-2 cursor-pointer hover:text-amber-500 duration-150 w-12 h-12 text-gray-50' icon={faCircleXmark} />
            </div>
        </div >
    );
};

export default Modal_gallery;

