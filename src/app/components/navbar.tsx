"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, LogOut, House, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const loggingout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      return;
    }

    setUser(null);
    setIsOpen(false);

    router.replace("/login");
    router.refresh();
  };

  if (loading) {
    return null;
  }

  return (
    <nav className="bg-[#09080f] shadow-2xl p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/10">
            <Sparkles size={18} />
          </div>

          <span className="text-xl font-bold">
            Phrase<span className="text-pink-500">Pic</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">

          <Link
            href="/"
            className="flex text-pink-300 hover:text-white"
          >
            <House className="size-5" />
            Home
          </Link>

          {!user ? (
            <Link
              href="/login"
              className="flex text-pink-300 hover:text-white"
            >
              <LogIn className="size-5" />
              Login
            </Link>
          ) : (
            <button
              className="flex text-pink-300 hover:text-white"
              onClick={loggingout}
            >
              <LogOut className="size-5" />
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="menu"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">

          <Link
            href="/"
            className="flex text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <House className="size-5 mr-1" />
            Home
          </Link>

          <br />

          {!user ? (
            <Link
              href="/login"
              className="flex text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="size-5 mr-1" />
              Login
            </Link>
          ) : (
            <button
              className="flex text-gray-300 hover:text-white"
              onClick={loggingout}
            >
              <LogOut className="size-5 mr-1" />
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;