"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogIn, UserPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function AuthPopup() {
  const { user, signInWithGoogle } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on auth pages (login, register, dashboard, etc.)
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/dashboard";

  useEffect(() => {
    if (user || isAuthPage) return;

    // Check if user has dismissed the popup in this session
    const dismissed = sessionStorage.getItem("authPopupDismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000); // 30 seconds – adjust as needed

    return () => clearTimeout(timer);
  }, [user, isAuthPage]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("authPopupDismissed", "true");
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image src="/am-logo.png" alt="Logo" width={32} height={32} className="bg-white rounded-full p-1" />
                  <span className="font-bold">A&M Matrimony</span>
                </div>
                <button onClick={handleClose} className="text-white/80 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">Ready to find your match?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of happy couples who found their life partner on A&M Matrimony.
                </p>

                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition shadow-md mb-4"
                >
                  <FcGoogle size={24} />
                  Sign in with Google
                </button>

                <div className="relative flex items-center my-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="mx-4 text-gray-400 text-sm">or</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => { router.push("/login"); handleClose(); }}
                    className="flex-1 btn-secondary flex items-center justify-center gap-2"
                  >
                    <LogIn size={18} /> Login
                  </button>
                  <button
                    onClick={() => { router.push("/register"); handleClose(); }}
                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                  >
                    <UserPlus size={18} /> Register
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}