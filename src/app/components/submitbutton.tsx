import React from 'react'

interface Props{
    title:string,

}

const Submitbutton = ({title}:Props) => {
  return (
    <button
            type="submit"
            className="w-full bg-white font-semibold text-pink-600 py-2 rounded-3xl hover:text-white hover:bg-pink-300 transition duration-300"
          >
            {title}
    </button>
  )
}

export default Submitbutton