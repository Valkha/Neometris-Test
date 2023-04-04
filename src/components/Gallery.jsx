import React, { useState } from 'react'
import data from '../data/images.json'
import GalleryPopUp from './GalleryPopUp'

function Gallery() {

    const [clickedImg, setClickedImg] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].link;
            setClickedImg(newUrl);
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <div className='cursor-pointer w-full h-full p-3 border-x bg-black grid grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-evenly overflow-auto '>
            {data.data.map((item, index) => (
                <div className='overflow-hidden w-full h-36 lg:h-80 ' >
                    <div key={index} className='hover:scale-125 w-full h-full transition ease-in-out delay-110'>
                        <picture className=''>
                            <source srcset={item.link} className=""></source>
                            <img onClick={() => handleClick(item, index)} src={item.link} alt={item.text} className=" w-full h-full" />
                        </picture>
                    </div>
                </div>
            ))}
            {clickedImg && (
                <GalleryPopUp clickedImg={clickedImg} handleRotationRight={handleRotationRight} handleRotationLeft={handleRotationLeft} setClickedImg={setClickedImg} />
            )}
        </div>
    );
}

export default Gallery