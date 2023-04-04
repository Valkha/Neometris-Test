import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Modal_vvi = ({ open, onClose }) => {
    if (!open) return null
    else document.body.style.overflowY = "hidden"
    return (
        <div onClick={onClose} className='bg-black-rgba w-full h-screen fixed top-0 left-0 right-0 flex justify-center items-center z-50'>
            <div className=" w-full lg:w-4/5 h-full flex justify-center items-center z-50">
                <FontAwesomeIcon onClick={onClose} className='dismiss absolute top-2 right-4 p-2 cursor-pointer hover:text-amber-500 duration-150 w-12 h-12 text-gray-50' icon={faCircleXmark} />
                <iframe className='w-full h-[90vh]' src="https://my.matterport.com/show/?m=my-matterport-id"
                    allowFullScreen
                    title="Matterport Model"
                    aria-label="Matterport 3D model viewer"
                    frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default Modal_vvi;