"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Loader2, Heart, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// ---------------------------------------------------------------------------
// 1. ISOLATED FORM COMPONENT
// ---------------------------------------------------------------------------
const ContactForm = ({ itemVariants }) => {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Full Name *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all bg-slate-50 focus:bg-white text-slate-800 placeholder:text-slate-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Phone Number *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all bg-slate-50 focus:bg-white text-slate-800 placeholder:text-slate-400"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            required
            placeholder="john@example.com"
            className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all bg-slate-50 focus:bg-white text-slate-800 placeholder:text-slate-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Message *</label>
        <textarea
          rows="4"
          required
          placeholder="How can we help you?"
          className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all bg-slate-50 focus:bg-white resize-none text-slate-800 placeholder:text-slate-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </motion.div>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-red-600/30"
      >
        {loading ? (
          <><Loader2 className="animate-spin" size={22} /> Sending Message...</>
        ) : (
          <><Send size={22} /> Send Message</>
        )}
      </motion.button>

      {submitted && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="flex items-center gap-3 text-emerald-700 bg-emerald-50 p-5 rounded-2xl mt-4 border border-emerald-200 shadow-sm"
        >
          <CheckCircle size={24} className="shrink-0 text-emerald-600" />
          <span className="font-medium text-sm md:text-base">Thank you! Your message has been sent successfully. Our team will contact you shortly.</span>
        </motion.div>
      )}
    </form>
  );
};

// ---------------------------------------------------------------------------
// 2. MAIN PAGE COMPONENT
// ---------------------------------------------------------------------------
export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans overflow-hidden pb-16 md:pb-24">
      
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 motion-safe:animate-[pulse_15s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: "url('/uploads/am-bg-2.jpg')" }} 
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-slate-50"></div>
        </div>

        <motion.div 
          style={{ willChange: "transform, opacity" }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-[20%] text-red-500 hidden md:block z-10"
        >
          <Sparkles size={32} />
        </motion.div>
        
        <motion.div 
          style={{ willChange: "transform, opacity" }}
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[20%] text-red-400 hidden md:block z-10"
        >
          <Heart size={40} />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-600/20 backdrop-blur-md text-red-400 text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase">
              We'd Love To Hear From You
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Have questions about finding your perfect match? Our dedicated team is here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full inline-block"></span>
                Contact Information
              </h2>
              <div className="space-y-8">
                
                {/* Updated Address 1 */}
                <div className="flex items-start gap-5 group">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Noida Office</p>
                    <p className="text-slate-600 mt-1.5 leading-relaxed">UG-10, The Aaranya Hotmart, Sector 119<br/>Noida, Uttar Pradesh - 201304</p>
                  </div>
                </div>

                {/* Updated Address 2 */}
                <div className="flex items-start gap-5 group">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Delhi Office</p>
                    <p className="text-slate-600 mt-1.5 leading-relaxed">B-68, BK Dutt Colony<br/>New Delhi - 110003</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Phone</p>
                    <p className="text-slate-600 mt-1.5">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Email</p>
                    <a href="mailto:hello@am-matrimony.com" className="text-red-600 hover:text-red-700 hover:underline mt-1.5 block font-medium transition-colors">
                      hello@am-matrimony.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Business Hours</p>
                    <p className="text-slate-600 mt-1.5">Mon – Sat: 10:00 AM – 7:00 PM</p>
                    <p className="text-red-500 font-medium text-sm mt-1">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-red-600 rounded-full inline-block"></span>
                Connect With Us
              </h2>
              {/* Updated Social Links */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61590506096779" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-blue-600/30">
                  <FaFacebookF size={22} />
                </a>
                <a href="https://www.instagram.com/anm_matrimony/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white p-4 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-pink-500/30">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.youtube.com/channel/UC3JR8u0Rbq8xIA6SKxhBzNg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-red-600 text-white p-4 rounded-2xl hover:bg-red-700 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-red-600/30">
                  <FaYoutube size={22} />
                </a>
                <a href="https://x.com/AnM_MATRIMONY" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-black text-white p-4 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-gray-500/30">
                  <FaTwitter size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white shadow-2xl shadow-slate-200/50 rounded-3xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-red-50 blur-3xl -z-10"></div>

              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Send a Message</h2>
                <p className="text-slate-500 font-medium">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <ContactForm itemVariants={itemVariants} />
              
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-slate-100 h-[280px] md:h-[320px] relative group p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100 flex items-center justify-center">
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b34fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[30%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 absolute inset-0 z-10"
                  ></iframe>
                ) : (
                  <Loader2 className="animate-spin text-red-500" size={32} />
                )}
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-900/5 rounded-2xl z-20"></div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}