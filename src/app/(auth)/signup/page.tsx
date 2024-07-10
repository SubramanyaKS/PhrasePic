'use client'

import Link from 'next/link';
import React from 'react';
import Submitbutton from '../../components/submitbutton';
import InputFeild from '../../components/inputfeild';
import { useSignup } from '../../hooks/useSignup';

const page = () => {
  const {data,handleChange,handleSubmit,error} = useSignup(); 

  return (
    <div>
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputFeild value={data.name} name="name" title="Name"  OnChange={handleChange} id="name" type="text"/>
          <InputFeild value={data.email} name="email" title="Email"  OnChange={handleChange} id="email" type="email"/>
          <InputFeild value={data.password} name="password" title="Password"  OnChange={handleChange} id="password" type="password"/>
          <Submitbutton title="Signup"/>
          <p className='text-white text-center mt-2'>Already have account? <Link className='text-pink-700 font-semibold' href="/login"><b>Login</b></Link></p>
        {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}
        </form>
      </div>
  )
}

export default page