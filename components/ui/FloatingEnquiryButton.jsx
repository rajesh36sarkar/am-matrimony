"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingEnquiryButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 font-semibold"
      >
        <FaWhatsapp size={22} />
        <span>Chat with us</span>
      </a>
    </motion.div>
  );
}