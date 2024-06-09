'use client';
import React from 'react'
import Button from './components/button'
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();
  return (
    <div  className="flex justify-center flex-col items-center text-center text-white">
        <div className='m-12 mb-44'>
        <h2 className=' m-4 text-9xl font-bold bg-gradient-to-r from-pink-900 via-pink-500 to-indigo-500 text-transparent bg-clip-text '>404</h2>
        <h2 className='text-pink-500 text-5xl m-4' >Oops! Page not found.</h2>
      <p className="text-xl m-4">The page you're looking for doesn't exist or has been moved.Please click below for Home page</p>
        <Button  OnClick={()=>router.replace('/')} title="Home"/>
        </div>
    </div>
  )
}

export default NotFound