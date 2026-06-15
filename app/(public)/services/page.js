"use client";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Headset, 
  Heart, 
  UserPlus, 
  MessageCircleHeart 
} from "lucide-react";

export default function Services() {
  const plans = [
    {
      name: "SILVER PLAN",
      price: "₹*,***",
      duration: "/year",
      features: [
        "Profile Creation",
        "8 Profile Views Per Month for 1 Year",
        "Customer Support",
        "Indian Profiles",
        "Meeting Coordination"
      ],
      popular: false,
      color: "from-slate-500 to-slate-700",
      buttonStyle: "bg-slate-800 text-white hover:bg-slate-700",
    },
    {
      name: "GOLD PLAN",
      price: "₹*,***",
      duration: "/year",
      features: [
        "Profile Creation",
        "16 Profile Views Per Month for 1 Year",
        "Indian & NRI Profiles",
        "Personalised Kundli Matching",
        "Dedicated Relationship Manager",
        "Video Meeting Coordination"
      ],
      popular: true,
      color: "from-amber-500 to-orange-600",
      buttonStyle: "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30",
    },
    {
      name: "PLATINUM PLAN",
      price: "₹*,***",
      duration: "/year",
      features: [
        "Profile Creation",
        "25 Profile Views Per Month for 1 Year",
        "Indian & NRI Profiles",
        "Dedicated Relationship Manager",
        "Professional Astrologer for Kundli Matching",
        "Video Meeting Coordination",
        "Personal Meet-up"
      ],
      popular: false,
      color: "from-blue-600 to-indigo-800",
      buttonStyle: "bg-indigo-700 text-white hover:bg-indigo-600",
    }
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/1y8n5mxdvnOaK5_tShsh05S-cC-0mnk4tYq5nea0qD2E/edit";

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full overflow-hidden bg-slate-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/uploads/am-bg-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-50"></div>
        </div>
        
        {/* Floating Background Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-white/20 hidden md:block"
        >
          <Heart size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 text-white/20 hidden md:block"
        >
          <Sparkles size={48} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium tracking-wider mb-4 border border-white/30">
              PREMIUM MATCHMAKING
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Perfect Match</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Choose from our curated membership packages and take the first step towards a lifetime of happiness and companionship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-slate-100 ${
                  plan.popular 
                    ? "ring-4 ring-amber-500/30 shadow-2xl shadow-amber-500/10 lg:scale-105 z-10" 
                    : "shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-1.5 rounded-b-xl flex items-center gap-1.5 text-xs font-bold tracking-wider shadow-md">
                      <Crown size={14} className="animate-pulse" /> MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
                  <h3 className="text-lg font-bold tracking-widest text-white/90 mb-2 mt-4">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-white/80 font-medium self-end mb-1">{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow bg-white">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <div className="mt-0.5 rounded-full bg-green-100 p-0.5 shrink-0">
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0 bg-white">
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-slate-500 text-sm font-medium"
          >
            <p>All prices are inclusive of taxes. Terms and conditions apply.</p>
            <p className="mt-2">
              Need help choosing? <a href="/contact" className="text-amber-600 hover:text-amber-700 underline underline-offset-4 transition-colors">Contact us</a> for custom tailored plans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section (New Element) */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 -z-0"></div>
            
            {[
              { icon: UserPlus, title: "1. Create Profile", desc: "Register and build your detailed matchmaking profile." },
              { icon: Heart, title: "2. Get Matches", desc: "Receive curated profiles based on your specific preferences." },
              { icon: MessageCircleHeart, title: "3. Connect", desc: "We coordinate meetings to help you connect securely." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-slate-50 mb-6">
                  <step.icon size={32} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose A&M Matrimony?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We combine traditional values with modern technology to provide a seamless, secure, and successful matchmaking experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Verified Profiles", desc: "100% manual verification of all profiles to ensure absolute authenticity and peace of mind." },
              { icon: Lock, title: "Privacy First", desc: "Your personal data and photographs are encrypted and strictly controlled by your preferences." },
              { icon: Headset, title: "24/7 Support", desc: "Dedicated relationship managers available around the clock to assist your partner search." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-amber-500 group-hover:text-white">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your beautiful journey?</h2>
            <p className="text-slate-300 mb-8 text-lg">Join thousands of happy couples who found their soulmates through A&M Matrimony.</p>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}