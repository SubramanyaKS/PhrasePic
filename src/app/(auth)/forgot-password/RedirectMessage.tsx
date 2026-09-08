import Button from '@/app/components/button'
import { Mail } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface RedirectProps {
    email: string
}

const RedirectMessage = ({ email }: RedirectProps) => {

    return (
        <div>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <Mail
                    className="h-8 w-8 text-red-400"
                    strokeWidth={1.8}
                />
            </div>

            <h2 className="text-2xl text-white font-bold mb-6 text-center">
                Check Email
            </h2>

            <p className="mx-auto ml-8 mt-3 text-sm leading-6 text-slate-400">
                We’ve sent a password reset link to your email address{" "}
                <strong>{email}</strong>. Click the link to reset your password.
            </p>

            <div className="flex justify-center m-8">
                <Link href="/login">
                    <Button title="Back to Login" />
                </Link>
            </div>
        </div>
    );
};

export default RedirectMessage;