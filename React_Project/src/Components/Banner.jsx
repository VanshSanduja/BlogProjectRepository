import React from 'react'
import bannerImage from '../Images/banner-image.jpg';

function Banner() {
  return (
    <div className='h-[400px] flex flex-row justify-center items-center md:px-32 px-5 bg-cover bg-no-repeat' style={{backgroundImage: `url(${bannerImage})`}}></div>
  )
}

export default Banner