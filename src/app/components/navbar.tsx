'use client'
import Link from 'next/link';
import { signOut,useSession } from 'next-auth/react';
import { useState } from 'react';
import { LogIn,LogOut,House,Sparkles } from 'lucide-react';

const Navbar = () => {
  const {data:session}=useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <nav className="bg-[#09080f] shadow-2xl p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/10">
              <Sparkles size={18} />
            </div>

            <span className="text-xl font-bold">
              Phrase<span className="text-pink-500">Pic</span>
            </span>
          </Link>
        <div className="hidden md:flex space-x-4">
            <Link  href='/' className="flex text-pink-300 hover:text-white">
              <House className='size-5'/> Home
            </Link>
            {!session?(
           <Link  href={'/login'} className="flex text-pink-300 hover:text-white">
            <LogIn className='size-5'/> LogIn
           </Link>):(
            <button className="flex text-pink-300" onClick={()=>signOut()}><LogOut className='size-5'/>  LogOut</button>
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
            </Link><br/>
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