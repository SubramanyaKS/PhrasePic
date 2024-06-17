import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { isValidEmail, isValidPassword } from "../utils/validate";

export const useSignup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = async (event: any) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    if (!data.name || !data.email || !data.password) {
      setError('All Fields are required');
    }
    if (!isValidEmail(data.email)) {
      setError('Invalid Email');
    }
    if (!isValidPassword(data.password)) {
      setError('Password should contain atleast one uppercase one number and one special character')
    }

    else {
      try {
        const email = data.email
        const name = data.name
        const password = data.password
        const responsexist = await fetch('/api/auth/userexist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const { user } = await responsexist.json();
        if (user) {
          setError('User Already Exist');
          return;
        }
        else {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });
          if (response.ok) {
            // alert('Registration successful');
            router.push('/login');
            setData({ name: "", email: "", password: "" })

          } else {
            setError('Registration failed');
          }

        }


      } catch (error) {
        setError("Something gone wrong");

      }
    }

  };
  return { data, handleChange, handleSubmit, error };
}