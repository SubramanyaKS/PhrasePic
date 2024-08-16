import React from 'react'
import { ButtonProps } from '../utils/types'


const Button:React.FC<ButtonProps> = ({title,OnClick}) => {
  return (
    // "generate-button py-4 px-6 mt-4 rounded-full text-white bg-gradient-to-l from-pink-500 to-blue-700 hover:from-purple-500 hover:to-blue-500
    <button id="btn" className="bg-white btn hover:tracking-widest text-pink-600 font-semibold py-2 px-6 rounded-full shadow-2xl hover:bg-pink-600 hover:text-white transition duration-300 " onClick={OnClick}>
        {title}
    </button>
  )
}

export default Button