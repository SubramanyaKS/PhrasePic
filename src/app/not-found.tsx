'use client';
import React from 'react'
import Button from './components/button'
import { useRouter } from 'next/navigation';
import { constants } from './utils/constant';

const NotFound = () => {
    const router = useRouter();
  return (
    <main className="flex flex-1 items-center justify-center text-center text-white">
      <div className="m-12">
        <h2 className="m-4 bg-gradient-to-r from-pink-900 via-pink-500 to-indigo-500 text-9xl font-bold text-transparent bg-clip-text drop-shadow">{constants.errorcode}</h2>
        <h2 className="m-4 text-5xl text-pink-500">{constants.errorheadline}</h2>
        <p className="m-4 text-xl">{constants.errormessage}</p>
        <Button OnClick={() => router.replace('/')} title="Home" />
      </div>
    </main>
  )
}

export default NotFound