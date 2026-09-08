'use client';

import InputFeild from '../../components/inputfeild';
import Submitbutton from '../../components/submitbutton';
import { useForgot } from '../../hooks/useForgot';
import RedirectMessage from './RedirectMessage';

const ForgotPassword = () => {
  const {email,handleSubmit,message,setEmail,sent} = useForgot();

  return (
   <>
   {sent?<RedirectMessage email={email}/>:
    <div className='p-6 gap-6'>
      <h2 className="text-2xl text-white font-bold mb-6 text-center" >Forgot Password</h2>
      <form onSubmit={handleSubmit}>
      <InputFeild name="email" value={email} title="Email"  OnChange={(e) => setEmail((e.target as HTMLInputElement).value)} id="email" type="email"/>
     <div className='mt-8'>
       <Submitbutton title="Submit"/>
     </div>
      </form>
      {message && <p className='text-center mt-2 text-white'>{message}</p>}
    </div>}
   </>
  );
};

export default ForgotPassword;
