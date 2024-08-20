 'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../assets/user.png';
import { useProfile } from '@/app/hooks/useProfile';
import Button from '@/app/components/button';
import Heading from '@/app/components/heading';

const page = () => {
  const {userEmail1,userName,moveBack} = useProfile();
  
  return (
    <div>
      <Heading title="Profile Page"/>
      <div>
        <div  className='flex justify-center'>
          <Image className='rounded-full' src={img} height={100} width={100} alt='user' />
        </div>
        <p className='text-white font-bold py-2'>Name:{userName}</p>
        <p className='text-white font-bold py-2'>Email:{userEmail1}</p>
      </div>
      <div className='flex justify-center py-2 px-2'>
        <Button title="Back" OnClick={moveBack} />
      </div>
    </div>
  )
}

export default page