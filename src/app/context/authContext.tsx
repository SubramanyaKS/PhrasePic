'use client'

import { SessionProvider } from "next-auth/react";
import { AuthProps } from "../utils/types";

export const AuthProvider=({children,session}:AuthProps)=>{
  return(
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}