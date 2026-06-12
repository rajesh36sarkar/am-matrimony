"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import {
  Shield,
  Lock,
  Users,
  MapPin,
  Heart,
  ChevronRight,
  Play,
  Calendar,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Home() {
  const { user } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const profilesRef = useRef(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("isProfilePublic", "==", true),
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProfiles(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  const stats = [
    { label: "Members Registered", value: "50,000+", icon: Users },
    { label: "Successful Matches", value: "10,000+", icon: Heart },
    { label: "Years of Trust", value: "15+", icon: Shield },
  ];

  const features = [
    {
      title: "Verified Profiles",
      desc: "100% manual verification for absolute authenticity.",
      icon: Shield,
    },
    {
      title: "Privacy First",
      desc: "Your data is encrypted and never shared without consent.",
      icon: Lock,
    },
    {
      title: "Pan India Reach",
      desc: "Connecting hearts across all communities and regions.",
      icon: MapPin,
    },
    {
      title: "Family Support",
      desc: "Dedicated assistance managers for families.",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: "Priya S.",
      location: "Mumbai",
      quote:
        "Found my soulmate within 3 months on A&M Matrimony! Highly recommend.",
      image: "/placeholder.jpg",
    },
    {
      name: "Ramesh K.",
      location: "Delhi",
      quote:
        "Excellent service, dedicated support, and completely genuine profiles.",
      image: "/placeholder.jpg",
    },
    {
      name: "Anjali M.",
      location: "Bangalore",
      quote:
        "A beautifully professional and secure platform for modern families.",
      image: "/placeholder.jpg",
    },
  ];

  const scrollToProfiles = () => {
    const yOffset = -80;
    const element = profilesRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Animation Variants for cleaner staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Added object-[30%_center] for mobile shift and md:object-center to keep desktop perfect
          className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-0">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Sparkles size={16} className="text-yellow-400" />
              <span>Welcome to A&M Matrimony</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Begin Your <span className="text-primary-300">Forever</span>{" "}
              Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light"
            >
              Join India's most trusted matrimony platform. Find your perfect
              life partner with our personalized, family-first matchmaking.
            </motion.p>

            {/* Bullet points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {[
                "100% verified profiles with photo ID checks",
                "Privacy-first approach – your data is never shared",
                "Dedicated relationship managers available 24/7",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-200 bg-black/20 w-fit px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5"
                >
                  <CheckCircle size={18} className="text-green-400 shrink-0" />
                  <span className="text-sm md:text-base font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProfiles}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]"
              >
                <Play size={20} /> View Matches
              </button>
              <Link
                href="/register"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all text-center"
              >
                Register for Free
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Overlapping Hero for Modern UI) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center pt-6 md:pt-0 first:pt-0"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <stat.icon size={32} className="text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Profiles Section */}
      <section ref={profilesRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Your <span className="text-primary">Potential Matches</span>
            </h2>
            <p className="text-lg text-gray-600">
              Browse through verified profiles of like-minded individuals
              curated exclusively for A&M members.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
                >
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-200 rounded-xl w-full mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : profiles.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
              <Users size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 font-medium">
                No public profiles available yet.
              </p>
              <p className="text-gray-400 mt-2">
                Be the first to register and find your match!
              </p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {profiles.map((profile) => (
                <motion.div
                  key={profile.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={profile.photoURL || "/avatar-placeholder.png"}
                      alt={profile.fullName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/avatar-placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {profile.religion && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md shadow-sm rounded-full px-3 py-1.5 text-xs font-bold text-primary">
                        {profile.religion}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 truncate mb-1">
                      {profile.fullName}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                      {profile.religion || "Not specified"} •{" "}
                      {profile.caste || "Not specified"}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span className="font-medium">
                          {profile.age || "25"} yrs
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-medium truncate">
                          {profile.location || "India"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={user ? `/profile/${profile.id}` : "/login"}
                        className="block w-full"
                      >
                        <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold py-3 rounded-xl transition-colors">
                          {user ? "View Full Profile" : "Login to View Details"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {profiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/register"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                Not seeing your perfect match? Register now{" "}
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Trust <span className="text-primary">A&M</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from couples who found their happily ever after with us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-white text-primary border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              Read All Success Stories <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
