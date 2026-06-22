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

  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/dashboard";

  useEffect(() => {
    if (user || isAuthPage) return;

    const dismissed = sessionStorage.getItem("authPopupDismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src="/am-logo.png" alt="Logo" width={32} height={32} className="bg-white rounded-full p-1 w-auto h-auto" />
                <span className="font-bold">A&M Matrimony</span>
              </div>
              <button onClick={handleClose} className="text-white/80 hover:text-white transition-colors">
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
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition shadow-sm hover:shadow-md mb-4"
              >
                <FcGoogle size={24} />
                Sign in with Google
              </button>

              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-4 text-gray-400 text-sm font-medium">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => { router.push("/login"); handleClose(); }}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2 py-3 rounded-xl"
                >
                  <LogIn size={18} /> Login
                </button>
                <button
                  onClick={() => { router.push("/register"); handleClose(); }}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 rounded-xl"
                >
                  <UserPlus size={18} /> Register
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}