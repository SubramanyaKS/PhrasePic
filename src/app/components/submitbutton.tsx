import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface Props{
    title:string,

}

const Submitbutton = ({title}:Props) => {
  return (
    <div className='flex justify-center'>
      <button
        type="submit"
        className="w-full px-5 py-2.5 text-center inline-flex items-center justify-center bg-white hover:tracking-widest font-semibold text-pink-600 py-2 rounded-3xl hover:text-white hover:bg-pink-400 transition duration-300"
      >
        {title} <PaperAirplaneIcon className="size-6 text-pink-600" />
      </button>
      
    </div>
  )
}

export default Submitbutton