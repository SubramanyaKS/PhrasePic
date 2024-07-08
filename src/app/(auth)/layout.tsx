import React from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center items-center">
            <div className="w-full max-w-md pink-shadow border border-pink-600 p-8 mt-16 rounded-lg shadow-2xl">
                {children}
            </div>  
        </main>
    );
}
