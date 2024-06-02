import React, { ChangeEventHandler } from 'react'

type Props={
    title:string,
    OnChange:ChangeEventHandler,
    id:string,
    value:string,
    type:string,


}

const InputFeild = ({title,OnChange,id,value,type}:Props) => {
  return (
    <div className="mb-4">
            <label className="block  text-pink-600 mb-2" htmlFor={id}>
              {title}
            </label>
            <input
              type={type}
              id={id}
              className="w-full bg-transparent text-white px-3 py-2 border-b rounded-lg focus:outline-none focus:border-pink-300"
              value={value}
              onChange={OnChange}
              required
            />
          </div>
  )
}

export default InputFeild