import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { isValidEmail, isValidPassword } from '../utils/validate';
import { createClient } from '@/lib/supabase/client';

export const useLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value, })); // Clear error when user starts typing 
    if (error) { setError(""); }
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setError(""); // Validation 
    if (!data.email || !data.password) {
      setError("All fields are required");
      return;
    }
    if (!isValidEmail(data.email)) {
      setError("Invalid email");
      console.log("1");
      return;
    }
    // if (!isValidPassword(data.password)) {
    //   setError("Password should contain at least one uppercase letter, one number and one special character"); return;
    //   return;
    // }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: data.email, password: data.password, }); 
      if (error) { console.log(error);setError("Invalid credentials"); return; } // Login successful 
      router.replace("/generation"); router.refresh();
    } catch (err) { console.error(err); setError("Something went wrong. Please try again."); } finally { setLoading(false); }
  };
  return { data, handleChange, handleSubmit, error,loading };
}