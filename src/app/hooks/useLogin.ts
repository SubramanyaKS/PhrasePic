import { useRouter } from 'next/navigation';
import React, { useEffect,useState} from 'react';
import {useSession,signIn} from 'next-auth/react';
import { isValidEmail, isValidPassword } from '../utils/validate';

export const useLogin=()=>{
  const [data,setData] = useState({email:"",password:""});
  const [error,setError] = useState('');
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session?.status==='authenticated'){
      router.replace('/generation');
    }},[router,session])

    const handleChange =  async (event:any) => {
      const { name,value} = event.target;
      setData({ ...data, [name]: value });
    };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    if(!data.email || !data.password){
      setError("All Fields are required");
    }
    if(!isValidEmail(data.email)){
      setError('Invalid Email');
    }
    if(!isValidPassword(data.password)){
      setError('Password should contain atleast one uppercase one number and one special character')
    }
      const email=data.email
      const password=data.password;
      const resp = await signIn('credentials',{email,password,redirect:false});
      if(resp?.error){
        setError('Invalid Credentials');
        if(resp?.url){
          router.replace(resp?.url)
        }
      }
    }
      return {data,handleChange,handleSubmit,error};
}