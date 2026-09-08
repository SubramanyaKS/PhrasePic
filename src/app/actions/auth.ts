"use server";

import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function forgotPassword(formData: FormData) {
  const email = formData.get("email")?.toString().trim();

  if (!email) {
    return { error: "Email is required." };
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!origin) {
    return { error: "Unable to process the request." };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  });

  if (error) {
    console.error("Password reset error:", error);
  }

  return {
    success:
      "If an account exists with this email, a password reset link has been sent.",
  };
}