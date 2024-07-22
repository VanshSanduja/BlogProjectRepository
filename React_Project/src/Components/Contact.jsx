import React from 'react'
import Images from '../Images/Book-Background.jpg';

function Contact() {
  return (
    <div className="h-screen w-full">
          <img
            src={Images}
            className="h-full w-full object-cover"
            alt="background"
          ></img>
    <div className='flex absolute justify-center items-center top-[50%] left-[50%] w-3 text-[#000]'>
        <h1 className='mx-5'>Contact</h1>
        <h1 className='mx-5'>Contact</h1>
        <h1 className='mx-5'>Contact</h1>
        <h1 className='mx-5'>Contact</h1>
        <h1 className='mx-5'>Contact</h1>
    </div>
    </div>
  )
}

export default Contact