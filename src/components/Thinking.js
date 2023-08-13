import React from 'react'
import snjabLogo from '../assets/images/ai.png';

const Thinking = () => {
  return (
    <div className='message bg-gray-300 text-gray-600'>
      <div className='message__wrapper flex'>
        <div className="message__pic">
        <div className='avatar'>
            <div className='w-14 rounded-full'>
              <img className='w-22 h-22' src={snjabLogo} alt='profile pic' />
            </div>
          </div>
        </div>
        <div className='text-left flex items-center justify-start'>
          <div className="animate-pulse duration-500 text-md mr-3 text-gray-800">
            در حال فکر کردن ...
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thinking