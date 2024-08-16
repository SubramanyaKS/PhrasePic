import React from 'react'
import { InputProps } from '../utils/types'


const InputFeild = ({title,name,OnChange,id,value,type}:InputProps) => {
  return (
    <div className="mb-4">
            <label className="block  text-pink-600 mb-2" htmlFor={id}>
              {title}
            </label>
            <input
              type={type}
              id={id}
              className="w-full bg-transparent text-white px-3 py-2 border-b rounded-lg focus:outline-none focus:border-pink-300 focus:bg-pink-500"
              value={value}
              onChange={OnChange}
              name={name}
              required
            />
          </div>
  )
}

export default InputFeild