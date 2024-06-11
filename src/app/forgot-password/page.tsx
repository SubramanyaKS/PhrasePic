'use client';

import InputFeild from '../components/inputfeild';
import Submitbutton from '../components/submitbutton';
import { useForgot } from '../hooks/useForgot';

const page = () => {
  const {email,handleSubmit,message,setEmail} = useForgot();

  return (
    <div  className="w-full pink-shadow max-w-md border border-pink-600 p-8 mt-16 rounded-lg shadow-2xl">
      <h2 className="text-2xl text-white font-bold mb-6 text-center" >Forgot Password</h2>
      <form onSubmit={handleSubmit}>
      <InputFeild name="email" value={email} title="Email"  OnChange={(e) => setEmail((e.target as HTMLInputElement).value)} id="email" type="email"/>
      <Submitbutton title="Submit"/>
      </form>
      {message && <p className='text-center mt-2 text-white'>{message}</p>}
    </div>
  );
};

export default page;
