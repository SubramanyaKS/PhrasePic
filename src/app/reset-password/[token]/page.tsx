'use client';

import Submitbutton from '../../components/submitbutton';
import InputFeild from '../../components/inputfeild';
import { useResetPassword } from '@/app/hooks/useResetPassword';

const ResetPassword = ({ params }: { params: { token: string } }) => {
  const { newPassword, handleSubmit, setNewPassword, message } = useResetPassword(params.token);

  return (
    <div className="w-full pink-shadow max-w-md border border-pink-600  p-8 mt-16 rounded-lg shadow-2xl">
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
