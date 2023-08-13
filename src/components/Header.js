import React from 'react'
import Logo from '../assets/images/ailogo.png';

function Header() {
  return (
    <div className='relative flex flex-col gap-3 justify-center items-center pt-3'>
      <button className='absolute text-xs md:text-lg left-2 md:left-12 top-2 md:top-10 bg-s-blue text-white px-10 py-2 rounded-3xl'>
        بازگشت
      </button>
      <img src={Logo} alt="snjab" className='w-24 md:w-52'/>
      <p className='md:text-3xl text-xl text-gray-700 font-semibold'> هوش مصنوعی سنجـاب</p>
      <p className='text-xs text-gray-500 font-bold'>نسخه: SNJAB-AI-3.5-TURBO</p>
    </div>
  )
}

export default Header
