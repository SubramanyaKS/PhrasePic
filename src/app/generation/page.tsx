import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import GenerationClient from "./GenerationClient";

export default async function GenerationPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <GenerationClient />;
}