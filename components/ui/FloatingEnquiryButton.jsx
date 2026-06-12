"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingEnquiryButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/enquiry"
        className="bg-secondary text-gray-900 px-5 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition flex items-center space-x-2 font-semibold"
      >
        <MessageCircle size={20} />
        <span>Enquiry</span>
      </Link>
    </motion.div>
  );
}