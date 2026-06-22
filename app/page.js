"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  CheckCircle,
  Sparkles,
  Award,
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
          where("isProfilePublic", "==", true)
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

  // --- Home Data ---
  const stats = [
    { label: "Members Registered", value: "50,000+", icon: Users },
    { label: "Successful Matches", value: "10,000+", icon: Heart },
    { label: "Years of Trust", value: "15+", icon: Shield },
  ];

  const features = [
    { title: "Verified Profiles", desc: "100% manual verification for absolute authenticity.", icon: Shield },
    { title: "Privacy First", desc: "Your data is encrypted and never shared without consent.", icon: Lock },
    { title: "Pan India Reach", desc: "Connecting hearts across all communities and regions.", icon: MapPin },
    { title: "Family Support", desc: "Dedicated assistance managers for families.", icon: Users },
  ];

  const testimonials = [
    { name: "Priya S.", location: "Mumbai", quote: "Found my soulmate within 3 months on A&M Matrimony! Highly recommend.", image: "/avatar-placeholder.jpg" },
    { name: "Ramesh K.", location: "Delhi", quote: "Excellent service, dedicated support, and completely genuine profiles.", image: "/avatar-placeholder.jpg" },
    { name: "Anjali M.", location: "Bangalore", quote: "A beautifully professional and secure platform for modern families.", image: "/avatar-placeholder.jpg" },
  ];

  // --- About Data ---
  const values = [
    { title: "Trust", desc: "We believe in absolute transparency and honesty.", icon: Shield },
    { title: "Integrity", desc: "Our operations are guided by strong ethical values.", icon: Heart },
    { title: "Privacy", desc: "Your personal data is never shared without consent.", icon: Lock },
    { title: "Excellence", desc: "Striving for the best matchmaking experience.", icon: Award },
  ];

  const team = [
    { name: "Maanas Malhotra", role: "Founder & CEO", photo: "/avatar-placeholder.jpg", bio: "15+ years in matchmaking industry." },
    { name: "Priya Sharma", role: "Head of Operations", photo: "/avatar-placeholder.jpg", bio: "Ensuring smooth profile verifications." },
    { name: "Rahul Verma", role: "Customer Relations", photo: "/avatar-placeholder.jpg", bio: "Dedicated to member satisfaction." },
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/1y8n5mxdvnOaK5_tShsh05S-cC-0mnk4tYq5nea0qD2E/edit";

  const scrollToProfiles = () => {
    const yOffset = -80;
    const element = profilesRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      
      {/* 1. Hero Section with Video Background */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden">
       <video
  autoPlay
  loop
  muted
  playsInline
  // Adjusted mobile object position from 30% to 15% to shift it further left
  className="absolute inset-0 w-full h-full object-cover object-[58%_center] md:object-center"
  poster="/hero-poster.jpg"
>
  <source src="/hero-bg.mp4" type="video/mp4" />
</video>

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
              Begin Your <span className="text-primary-300">Forever</span> Journey
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
                  <span className="text-sm md:text-base font-medium">{text}</span>
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

      {/* 2. Stats Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center pt-6 md:pt-0 first:pt-0">
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

      {/* 3. Company Story (From About Page) */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="order-2 lg:order-1"
            >
              <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full inline-block"></span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">Our Story</h2>
              </motion.div>
              <motion.p variants={itemVariants} className="text-slate-600 mb-6 leading-relaxed text-lg">
                Founded in 2010, <span className="font-bold text-red-600">A&M Matrimony</span> has been the bridge that connects hearts and families across India. We believe marriage is not just a union of two individuals, but a lifelong bond between families and cultures.
              </motion.p>
              <motion.p variants={itemVariants} className="text-slate-600 mb-6 leading-relaxed text-lg">
                What started as a small family initiative in Bhubaneswar has organically grown into a trusted platform serving over 50,000 members across 15+ cities. Our unwavering commitment to authenticity, privacy, and traditional values has made us the preferred choice for modern Indian families.
              </motion.p>
              <motion.p variants={itemVariants} className="text-slate-800 font-medium leading-relaxed text-lg border-l-4 border-red-500 pl-4 py-1">
                We blend traditional matchmaking values with cutting‑edge technology to create meaningful, lasting matches.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative w-full aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group"
            >
              <Image
                src="/am-about-profile.jpg"
                alt="A&M Matrimony Story"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.currentTarget.src = "/avatar-placeholder.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision (From About Page) */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-rose-500"></div>
              <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To create happy, lasting marriages by offering genuine profiles and family‑centric services, making the journey to find a life partner joyful, secure, and completely stress‑free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-red-500"></div>
              <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become India's most trusted and culturally rooted matrimonial platform, empowering families to find the perfect life partner in a safe, respectful, and transparent environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Featured Profiles Section */}
      <section ref={profilesRef} className="py-16 md:py-24 bg-gray-50">
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
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Browse through verified profiles of like-minded individuals curated exclusively for A&M members.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
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
              <p className="text-xl text-gray-500 font-medium">No public profiles available yet.</p>
              <p className="text-gray-400 mt-2">Be the first to register and find your match!</p>
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
                      src={profile.photoURL || "/avatar-placeholder.jpg"}
                      alt={profile.fullName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      onError={(e) => { e.currentTarget.src = "/avatar-placeholder.jpg"; }}
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
                      {profile.religion || "Not specified"} • {profile.caste || "Not specified"}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span className="font-medium">{profile.age || "25"} yrs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-medium truncate">{profile.location || "India"}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href={user ? `/profile/${profile.id}` : "/login"} className="block w-full">
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
              <Link href="/register" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline">
                Not seeing your perfect match? Register now <ChevronRight size={20} />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* 6. Core Values (From About Page) */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              The foundational principles that guide every match we make at A&M Matrimony.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50 p-8 rounded-3xl text-center shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group"
              >
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-slate-200/50 group-hover:scale-110 group-hover:bg-red-50 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
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
                className="bg-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm"
              >
                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Team Section (From About Page) */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              The dedicated team working behind the scenes to find your perfect match.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden group border border-slate-100"
              >
                <div className="relative h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = "/avatar-placeholder.jpg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center bg-white relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-bold tracking-wide text-sm mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
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
              A&M Success Stories
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
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

      {/* 10. Call to Action (From About Page) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"></div>

            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Ready to Begin Your <span className="text-red-400">Journey?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                Join thousands of happy couples who found their life partner
                through A&M Matrimony. Create your free profile today.
              </p>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
              >
                Register for Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}