'use client';

import { useEffect, useState } from 'react';
import Submitbutton from '../../../components/submitbutton';
import InputFeild from '../../../components/inputfeild';
import { useResetPassword } from '@/app/hooks/useResetPassword';

const ResetPassword = ({ params }: { params: Promise<{ token: string }> }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    params.then(({ token: routeToken }) => setToken(routeToken));
  }, [params]);

  const { newPassword, handleSubmit, setNewPassword, message } = useResetPassword(token);

  return (
    <div>
      <h2 className="text-2xl text-white font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <InputFeild
          type="password"
          id="password"
          name="password"
          title="New Password"
          value={newPassword}
          OnChange={(e) => setNewPassword((e.target as HTMLInputElement).value)}
        />
        <Submitbutton title="Reset Password" />
      </form>
      {message && <p className='text-center text-white'>{message}</p>}
    </div>
  );
};

export default ResetPassword;
