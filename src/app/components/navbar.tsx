"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LogIn,
  LogOut,
  House,
  Sparkles,
  User,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
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

  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
  };

  const loggingout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      return;
    }

    setUser(null);
    setIsOpen(false);
    setProfileOpen(false);

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
        <div className="hidden md:flex items-center space-x-5">

          {/* Home */}
          <Link
            href="/"
            className="flex items-center gap-1 text-pink-300 hover:text-white"
          >
            <House className="size-5" />
            Home
          </Link>

          {!user ? (
            /* Login */
            <Link
              href="/login"
              className="flex items-center gap-1 text-pink-300 hover:text-white"
            >
              <LogIn className="size-5" />
              Login
            </Link>
          ) : (
            /* Profile Dropdown */
            <div className="relative">

              {/* Profile Button */}
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 text-pink-300 hover:text-white transition"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600">
                  <User className="size-4 text-white" />
                </div>

                <span>
                  {user?.user_metadata?.name || "User"}
                </span>

                <ChevronDown
                  className={`size-4 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-[#15131f] p-2 shadow-2xl z-50">

                  {/* Profile */}
                  <Link
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    <User className="size-5" />
                    Profile
                  </Link>

                  {/* Account Settings */}
                  <Link
                    href="/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    <Settings className="size-5" />
                    Account Settings
                  </Link>

                  {/* Divider */}
                  <div className="my-2 border-t border-white/10" />

                  {/* Logout */}
                  <button
                    onClick={loggingout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                  >
                    <LogOut className="size-5" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
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

          {/* Home */}
          <Link
            href="/"
            className="flex items-center text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <House className="size-5 mr-1" />
            Home
          </Link>

          {!user ? (
            /* Login */
            <Link
              href="/login"
              className="flex items-center text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="size-5 mr-1" />
              Login
            </Link>
          ) : (
            <>
              {/* Mobile Profile */}
              <Link
                href="/profile"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <User className="size-5 mr-1" />
                Profile
              </Link>

              {/* Mobile Settings */}
              <Link
                href="/settings"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="size-5 mr-1" />
                Account Settings
              </Link>

              {/* Mobile Logout */}
              <button
                className="flex items-center text-gray-300 hover:text-white"
                onClick={loggingout}
              >
                <LogOut className="size-5 mr-1" />
                Sign out
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
