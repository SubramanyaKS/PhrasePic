'use client'
import Link from 'next/link';
import { signOut,useSession } from 'next-auth/react';
import { useState } from 'react';

const Navbar = () => {
  const {data:session}=useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <nav className="bg-black shadow-2xl p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-500 text-xl font-bold">PhasePic</div>
        <div className="hidden md:flex space-x-4">
            <Link  href='/' className="text-pink-300 hover:text-white">
              Home
            </Link>
            {!session?(
           <Link  href={'/login'} className="text-pink-300 hover:text-white">
             LogIn
           </Link>):(
            <button className="text-pink-300" onClick={()=>signOut()}>LogOut</button>
           )}

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="menu" className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
           <Link  href='/' className="text-gray-300 hover:text-white">
              Home
            </Link>
            {!session?(
           <Link  href={'/login'} className="text-gray-300 hover:text-white">
             LogIn
           </Link>):(
            <button className="text-gray-300" onClick={()=>signOut()}>LogOut</button>
           )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;