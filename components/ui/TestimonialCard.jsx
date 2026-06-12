"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ name, location, quote, image }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover"
    >
      <div className="flex items-center mb-4">
        <img
          src={image || "/avatar-placeholder.png"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </motion.div>
  );
}