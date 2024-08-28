'use client';
import React from 'react';
import Button from './components/button';
import { constants } from './utils/constant';
import Image from 'next/image';
import generatedimage from './assets/generated-image.png';
import { useHome } from './hooks/useHome';

export default function Home() {
 const {moveToGenerate} = useHome();

  return (
    <main>
      <section className="hero text-white py-20">
        <div className="container mx-auto text-center m-20 ">
          <h1 className=" drop-shadow-2xl text-4xl md:text-6xl bg-pink-500 bg-clip-text text-transparent font-bold mb-4 p-2 z-10">{constants.heading}</h1>
         <p className="text-lg md:text-xl mb-8">
           {constants.subheadline}
          </p>
          <Button title="Get Started" OnClick={moveToGenerate}/>
        </div>
       
        <div className="relative py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className='text-2xl md:text-4xl mb-4 text-pink-500'>{constants.heading1}</h2>
              <p className='text-lg md:text-xl mb-8'>{constants.text1}</p>
              {/* <Button title="Explore Collection" OnClick={() => { router.push('/login'); }} /> */}
            </div>


            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image src={generatedimage} height={150} width={350} alt="generated image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
