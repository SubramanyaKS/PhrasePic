'use client'

import Link from 'next/link';
import React from 'react';
import Submitbutton from '../components/submitbutton';
import InputFeild from '../components/inputfeild';
import { useLogin } from '../hooks/useLogin';

const pages = () => {
  const {data,handleChange,handleSubmit,error} = useLogin();
  
  return (
    <div className="w-full max-w-md pink-shadow border border-pink-600 p-8 mt-16 rounded-lg shadow-2xl">
    <h2 className="text-2xl text-white font-bold mb-6 text-center">Login</h2>
    <form onSubmit={handleSubmit}>
      <InputFeild value={data.email} title="Email" name="email"  OnChange={handleChange} id="email" type="email"/>
      <InputFeild value={data.password} title="Password" name="password"  OnChange={handleChange} id="password" type="password"/>
      <div className='text-white text-end mb-4'><Link href='/forgot-password'>forgot password?</Link></div>
      <Submitbutton title="Login"/>
      <p className='text-white text-center mt-2'>Don't have account? <Link className='text-pink-700 font-semibold' href="/signup">Register</Link></p>
      {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}
    </form>
  </div>

  )
}

export default pages;