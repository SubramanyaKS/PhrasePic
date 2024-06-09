import React from "react";

export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex justify-center items-center">
        {children}
      </main>
    );
  }
  