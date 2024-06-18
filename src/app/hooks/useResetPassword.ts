import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isValidPassword } from '../utils/validate';

export const useResetPassword = (token: string) => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPassword(newPassword)) {
      setMessage('Password should contain at least one uppercase letter, one number, and one special character');
      return;
    }

    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      router.push('/login');
    }
  };

  return {
    newPassword,
    setNewPassword,
    message,
    handleSubmit,
  };
};