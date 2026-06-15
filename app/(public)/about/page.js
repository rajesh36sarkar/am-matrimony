"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Users,
  Award,
  CheckCircle,
  Star,
  Lock,
  TrendingUp,
  Quote,
} from "lucide-react";
import Image from "next/image";

export default function About() {
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

  const badges = [
    { icon: Shield, label: "ISO Certified", desc: "Data security standards" },
    { icon: Lock, label: "Privacy First", desc: "GDPR compliant" },
    { icon: CheckCircle, label: "Verified Profiles", desc: "100% manual check" },
    { icon: TrendingUp, label: "10K+ Matches", desc: "Successful weddings" },
  ];

  const testimonials = [
    { names: "Anjali & Rohan", quote: "A&M Matrimony understood exactly what our families were looking for. We found our perfect match within 3 months!", location: "Delhi" },
    { names: "Priya & Vikram", quote: "The manual verification gave my parents peace of mind. We couldn't be happier with the personalized service.", location: "Mumbai" },
    { names: "Sneha & Amit", quote: "Thank you A&M Matrimony for making our dream wedding possible. The platform is secure and highly authentic.", location: "Bhubaneswar" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const googleFormUrl = "https://docs.google.com/forms/d/1y8n5mxdvnOaK5_tShsh05S-cC-0mnk4tYq5nea0qD2E/edit";

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/uploads/am-bg-3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-slate-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-600/20 backdrop-blur-md text-red-400 text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                A&M Matrimony
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Connecting hearts and uniting families since 2010. Discover the
              story behind India's most trusted matchmaking platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20 relative z-20 -mt-10">
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
                Founded in 2010,{" "}
                <span className="font-bold text-red-600">A&M Matrimony</span>{" "}
                has been the bridge that connects hearts and families across
                India. We believe marriage is not just a union of two
                individuals, but a lifelong bond between families and cultures.
              </motion.p>
              <motion.p variants={itemVariants} className="text-slate-600 mb-6 leading-relaxed text-lg">
                What started as a small family initiative in Bhubaneswar has
                organically grown into a trusted platform serving over 50,000
                members across 15+ cities. Our unwavering commitment to
                authenticity, privacy, and traditional values has made us the
                preferred choice for modern Indian families.
              </motion.p>
              <motion.p variants={itemVariants} className="text-slate-800 font-medium leading-relaxed text-lg border-l-4 border-red-500 pl-4 py-1">
                We blend traditional matchmaking values with cutting‑edge
                technology to create meaningful, lasting matches.
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
                onError={(e) => {
                  e.currentTarget.src = "/avatar-placeholder.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-rose-500"></div>
              <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To create happy, lasting marriages by offering genuine profiles
                and family‑centric services, making the journey to find a life
                partner joyful, secure, and completely stress‑free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-red-500"></div>
              <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become India's most trusted and culturally rooted matrimonial
                platform, empowering families to find the perfect life partner
                in a safe, respectful, and transparent environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-y border-slate-100">
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

      {/* Trust Badges */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-red-500 to-transparent transform -skew-x-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16"
          >
            Why Thousands of Families Trust Us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6"
          >
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md group-hover:bg-red-500/20 transition-colors duration-300 border border-white/5">
                  <badge.icon className="w-12 h-12 text-red-400" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2 text-white">{badge.label}</h4>
                <p className="text-sm md:text-base text-slate-300 font-light max-w-[200px] mx-auto">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">A&M Success Stories</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Real couples who found their forever through our platform.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-red-500/5 group-hover:text-red-500/10 transition-colors duration-300" />
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "{testi.quote}"
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-slate-800 text-lg">{testi.names}</h4>
                  <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    {testi.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white border-t border-slate-100">
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
                    onError={(e) => {
                      e.currentTarget.src = "/avatar-placeholder.png";
                    }}
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

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
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
                Ready to Begin Your{" "}
                <span className="text-red-400">Journey?</span>
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