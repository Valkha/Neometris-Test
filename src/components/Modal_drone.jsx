import React from 'react'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Modal_drone = ({ open, onClose }) => {
    if (!open) return null

    const internalSource = 'assets/videos/demo_drone.mp4';


    return (
        <div className='bg-black-rgba w-full h-2/3 lg:h-screen fixed top-0 left-0 right-0 flex justify-center items-center z-50'>
            <ReactPlayer url={internalSource} controls={true} playing={true} muted={true} width="90%" height="92vh" />
            <FontAwesomeIcon onClick={onClose} className='dismiss absolute top-0 right-4 p-2 cursor-pointer hover:text-amber-500 duration-150 w-12 h-12 text-gray-50' icon={faCircleXmark} />
        </div>
    );
};

export default Modal_drone;