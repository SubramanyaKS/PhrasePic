import React from 'react'
import { TextProps } from '../utils/types'

const Heading = ({title}:TextProps) => {
  return (
      <h2 className="text-2xl text-white font-bold mb-6 text-center">{title}</h2>
  )
}

export default Heading