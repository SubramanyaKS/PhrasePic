import React from 'react'

interface Props{
    title:string,

}

const Submitbutton = ({title}:Props) => {
  return (
    <button
            type="submit"
            className="w-full bg-white font-semibold text-blue-700 py-2 rounded-3xl hover:bg-green-300 transition duration-300"
          >
            {title}
    </button>
  )
}

export default Submitbutton