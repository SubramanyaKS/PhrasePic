'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Button from './components/button';

export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();

  const moveToGenerate = () => {
    if (session) {
      router.push('/generation');
    } else {
      router.push('/login');
    }
  };

  return (
    <main>
      <section className="hero text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className=" drop-shadow-2xl text-4xl md:text-6xl  bg-gradient-to-r from-pink-900 to-pink-500 bg-clip-text text-transparent font-bold mb-4 p-2 z-10">Transform Your Words into Stunning Images</h1>
         <p className="text-lg md:text-xl mb-8">
            Unleash your creativity with our powerful text-to-image generator. Simply type your text and watch it come to life as a beautiful image. Perfect for social media, presentations, and more!
          </p>
          <Button title="Get Started" OnClick={moveToGenerate}/>
        </div>
      </section>
    </main>
  );
}
