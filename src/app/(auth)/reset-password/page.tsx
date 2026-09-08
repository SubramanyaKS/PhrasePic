'use client';

import { useEffect, useState } from 'react';
import Submitbutton from '../../components/submitbutton';
import InputFeild from '../../components/inputfeild';
import { useResetPassword } from '@/app/hooks/useResetPassword';

const ResetPassword = () => {
  const {
    newPassword,
    confirmPassword,
    handleSubmit,
    setNewPassword,
    setConfirmPassword,
    message,
    ready,
    submitting,
  } = useResetPassword();

  return (
    <div>
      <h2 className="text-2xl text-white font-bold mb-6 text-center">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit}>
        <InputFeild
          type="password"
          id="password"
          name="password"
          title="New Password"
          value={newPassword}
          OnChange={(e) =>
            setNewPassword((e.target as HTMLInputElement).value)
          }
        />

        <InputFeild
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          title="Confirm Password"
          value={confirmPassword}
          OnChange={(e) =>
            setConfirmPassword((e.target as HTMLInputElement).value)
          }
        />

        <Submitbutton title={submitting ? "Updating..." : "Reset Password"} />
      </form>

      {message && (
        <p className="text-center text-white mt-3">
          {message}
        </p>
      )}
    </div>
  );
};

export default ResetPassword;
