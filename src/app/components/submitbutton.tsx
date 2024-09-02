import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ButtonProps } from '../utils/types'


const Submitbutton = ({title}:ButtonProps) => {
  return (
    <div className='flex justify-center'>
      <button
        type="submit"
        className="w-full px-5 text-center inline-flex items-center justify-center bg-white hover:tracking-widest font-semibold text-pink-600 py-2 rounded-3xl hover:text-white hover:bg-pink-400 transition duration-300"
      >
        {title} <PaperAirplaneIcon className="size-6 text-pink-600" />
      </button>
      
    </div>
  )
}

export default Submitbutton