import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { isValidEmail, isValidPassword } from "../utils/validate";
import { createClient } from "@/lib/supabase/client";


export const useSignup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase= createClient();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { const { name, value } = event.target; setData((prev) => ({ ...prev, [name]: value, })); if (error) { setError(""); } };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    setError("");
    if (!data.name || !data.email || !data.password) {
      setError('All Fields are required');
      return;
    }
    if (!isValidEmail(data.email)) {
      setError('Invalid Email');
      return;
    }
    if (!isValidPassword(data.password)) {
      setError('Password should contain atleast one uppercase one number and one special character')
      return;
    }
    setLoading(true);

      try {
        const { data: authData, error } = await supabase.auth.signUp({ email: data.email, password: data.password, options: { data: { name: data.name, }, }, });
        if (error) {  setError(error.message); return; }
        if (!authData.user) { setError("Registration failed"); return; } setData({ name: "", email: "", password: "", });
       router.push("/login");

      } catch (error) { console.error(error); setError("Something went wrong"); } finally { setLoading(false); }
    

  };
  return { data, handleChange, handleSubmit, error };
}