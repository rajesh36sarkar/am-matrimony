"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Loader2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        submittedAt: serverTimestamp(),
        read: false,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error saving enquiry:", error);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-16 md:pb-24">
      {/* Hero Header */}
      <div className="bg-primary pt-20 pb-16 px-4 text-center text-white rounded-b-[2rem] shadow-md mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Have questions about finding your perfect match? We're here to help you every step of the way.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column - Contact Info & Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            {/* Contact Details Card */}
            <motion.div variants={itemVariants} className="bg-white shadow-lg shadow-gray-200/50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Head Office</p>
                    <p className="text-gray-600 mt-1 leading-relaxed">123 Matrimony Street, Nayapalli<br/>Bhubaneswar, Odisha - 751001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:hello@am-matrimony.com" className="text-primary hover:underline mt-1 block">
                      hello@am-matrimony.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600 mt-1">Mon – Sat: 10:00 AM – 7:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div variants={itemVariants} className="bg-white shadow-lg shadow-gray-200/50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h2>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="bg-blue-600 text-white p-3.5 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white p-3.5 rounded-full hover:-translate-y-1 transition-all shadow-md">
                  <FaInstagram size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="bg-red-600 text-white p-3.5 rounded-full hover:bg-red-700 hover:-translate-y-1 transition-all shadow-md">
                  <FaYoutube size={20} />
                </a>
                <a href="#" aria-label="WhatsApp" className="bg-green-500 text-white p-3.5 rounded-full hover:bg-green-600 hover:-translate-y-1 transition-all shadow-md">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form & Map (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            {/* Form */}
            <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-6 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-500">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can we help you?"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(var(--primary-rgb),0.39)]"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={20} /> Sending...</>
                  ) : (
                    <><Send size={20} /> Send Message</>
                  )}
                </button>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl mt-4 border border-emerald-100"
                  >
                    <CheckCircle size={20} className="shrink-0" />
                    <span className="font-medium text-sm md:text-base">Thank you! Your message has been sent successfully. Our team will contact you soon.</span>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Map Integration */}
            <div className="bg-white shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden border border-gray-100 h-[250px] md:h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b34fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}