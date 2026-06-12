"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-primary p-6 text-center">
          <Image
            src="/am-logo.png"
            alt="A&M Matrimony"
            width={80}
            height={80}
            className="mx-auto bg-white rounded-full p-2"
          />
          <h1 className="text-2xl font-bold text-white mt-3">Welcome Back!</h1>
          <p className="text-white/80 text-sm">Sign in to continue your journey</p>
        </div>

        <div className="p-6 sm:p-8">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition shadow-md"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-primary font-semibold hover:underline">
                Register now
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}