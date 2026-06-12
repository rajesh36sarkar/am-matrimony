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
    {
      title: "Trust",
      desc: "We believe in absolute transparency and honesty.",
      icon: Shield,
    },
    {
      title: "Integrity",
      desc: "Our operations are guided by strong ethical values.",
      icon: Heart,
    },
    {
      title: "Privacy",
      desc: "Your personal data is never shared without consent.",
      icon: Lock,
    },
    {
      title: "Excellence",
      desc: "Striving for the best matchmaking experience.",
      icon: Award,
    },
  ];

  const team = [
    {
      name: "Maanas Malhotra",
      role: "Founder & CEO",
      photo: "/team/maanas.jpg",
      bio: "15+ years in matchmaking industry.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      photo: "/team/priya.jpg",
      bio: "Ensuring smooth profile verifications.",
    },
    {
      name: "Rahul Verma",
      role: "Customer Relations",
      photo: "/team/rahul.jpg",
      bio: "Dedicated to member satisfaction.",
    },
  ];

  const badges = [
    { icon: Shield, label: "ISO Certified", desc: "Data security standards" },
    { icon: Lock, label: "Privacy First", desc: "GDPR compliant" },
    {
      icon: CheckCircle,
      label: "Verified Profiles",
      desc: "100% manual check",
    },
    { icon: TrendingUp, label: "10K+ Matches", desc: "Successful weddings" },
  ];

  const testimonials = [
    {
      names: "Anjali & Rohan",
      quote:
        "A&M Matrimony understood exactly what our families were looking for. We found our perfect match within 3 months!",
      location: "Delhi",
    },
    {
      names: "Priya & Vikram",
      quote:
        "The manual verification gave my parents peace of mind. We couldn't be happier with the personalized service.",
      location: "Mumbai",
    },
    {
      names: "Sneha & Amit",
      quote:
        "Thank you A&M Matrimony for making our dream wedding possible. The platform is secure and highly authentic.",
      location: "Bhubaneswar",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section – using CSS background to avoid Next.js image warnings */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center md:text-left overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/uploads/am-bg-2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              About A&M Matrimony
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-200"
            >
              Connecting hearts and uniting families since 2010
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="order-2 lg:order-1"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
              >
                Our Story
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg"
              >
                Founded in 2010,{" "}
                <span className="font-semibold text-primary">
                  A&M Matrimony
                </span>{" "}
                has been the bridge that connects hearts and families across
                India. We believe marriage is not just a union of two
                individuals, but a lifelong bond between families and cultures.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg"
              >
                What started as a small family initiative in Bhubaneswar has
                organically grown into a trusted platform serving over 50,000
                members across 15+ cities. Our unwavering commitment to
                authenticity, privacy, and traditional values has made us the
                preferred choice for modern Indian families.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-700 leading-relaxed text-base sm:text-lg"
              >
                We blend traditional matchmaking values with cutting‑edge
                technology to create meaningful, lasting matches.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative w-full aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/uploads/am-bg-3.jpg"
                alt="A&M Matrimony Story"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
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
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become India's most trusted and culturally rooted matrimonial
                platform, empowering families to find the perfect life partner
                in a safe, respectful, and transparent environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              The foundational principles that guide every match we make at A&M
              Matrimony.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10 sm:mb-12"
          >
            Why Thousands of Families Trust Us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          >
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <badge.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-1">
                  {badge.label}
                </h4>
                <p className="text-sm md:text-base text-primary-50 opacity-90">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A&M Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
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
                className="bg-white p-8 rounded-2xl shadow-md relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">
                  "{testi.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testi.names}</h4>
                  <p className="text-sm text-gray-500">{testi.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg">
              The dedicated team working behind the scenes to find your perfect
              match.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-72 sm:h-80 bg-gray-200 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/avatar-placeholder.png";
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of happy couples who found their life partner through
            A&M Matrimony. Create your free profile today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/register"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] inline-block"
            >
              Register for Free
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
