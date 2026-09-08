import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isValidPassword } from "../utils/validate";

const supabase = createClient();

export const useResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Supabase restores the recovery session from the email link before updating the password.
    let mounted = true;

    const loadRecoverySession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!mounted) return;

      setReady(Boolean(session));
      if (!session) {
        setMessage("This password reset link is invalid or has expired.");
      }
    };

    loadRecoverySession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setReady(Boolean(session));
        setMessage("");
      }

      if (event === "SIGNED_OUT") {
        setReady(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");

    if (!ready || submitting) {
      setMessage("This password reset link is invalid or has expired.");
      return;
    }

    if (!isValidPassword(newPassword)) {
      setMessage(
        "Password should contain at least one uppercase letter, one number, and one special character"
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New Password and Confirm Password do not match!");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error(error);
        setMessage("Unable to update the password. The reset link may have expired.");
        return;
      }

      setMessage("Password updated successfully.");
      await supabase.auth.signOut();
      router.replace("/login");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    message,
    ready,
    submitting,
    handleSubmit,
  };
};