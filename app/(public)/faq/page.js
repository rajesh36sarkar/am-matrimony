"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, UserPlus, Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

// Enhanced FAQ data with Indian cultural naming flavor and icons
const faqsByCategory = [
  {
    id: "registration",
    category: "Profile & Registration",
    subtitle: "Aarambh (The Beginning)",
    icon: UserPlus,
    faqs: [
      { q: "How do I register on A&M Matrimony?", a: "Click on the Register button, fill in your personal, family, and partner preference details in a simple 3-step form. After submission, verify your email to activate your profile." },
      { q: "Is registration free?", a: "Yes, basic registration is absolutely free. You can create your profile, add photos, and set your partner preferences at no cost." },
      { q: "Can I register on behalf of my son/daughter?", a: "Absolutely. A vast majority of our profiles are managed by parents or siblings. You can specify who is creating the profile during registration." },
    ]
  },
  {
    id: "membership",
    category: "Premium Memberships",
    subtitle: "Sewa (Our Services)",
    icon: Award,
    faqs: [
      { q: "What are the membership plans?", a: "We offer Free, Silver, Gold, and Platinum plans. Premium plans allow you to view contact details, send direct messages, and get a dedicated relationship manager." },
      { q: "How do I upgrade my plan?", a: "Log in to your dashboard and click on 'Upgrade Membership'. We accept all major Indian payment methods including UPI, Credit/Debit cards, and Net Banking." },
      { q: "Can I cancel my subscription?", a: "Yes, you can cancel your auto-renewal anytime from account settings. However, we do not offer refunds for partially used subscription periods." },
    ]
  },
  {
    id: "matching",
    category: "Matches & Connections",
    subtitle: "Milan (The Union)",
    icon: HeartHandshake,
    faqs: [
      { q: "How does the matchmaking algorithm work?", a: "Our system uses the preferences you set (age, religion, caste, location, education, etc.) combined with cultural compatibility factors to show you the most suitable profiles." },
      { q: "Can I hide my profile from certain people?", a: "Yes, premium members have advanced privacy controls to hide their profile from specific users or make it visible only to matches they approve." },
      { q: "How do I contact a match?", a: "You can send an 'Interest' for free. If they accept, premium members can view their contact number or initiate a secure chat on our platform." },
    ]
  },
  {
    id: "privacy",
    category: "Trust & Privacy",
    subtitle: "Vishwas (Trust & Security)",
    icon: ShieldCheck,
    faqs: [
      { q: "Is my personal data and photo safe?", a: "Yes. We use banking-level encryption. You also have a 'Photo Privacy' feature to show your picture only to accepted matches." },
      { q: "How do you verify profiles?", a: "Every profile goes through a manual screening process. We verify mobile numbers via OTP and encourage users to verify their Government ID for a 'Trust Badge'." },
      { q: "Can I delete my profile once I find a match?", a: "Yes, congratulations! You can permanently delete your profile from the settings page, and your data will be securely removed from our servers." },
    ]
  }
];

// Inline Animated Accordion Item Component
const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-2xl mb-4 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-base md:text-lg pr-4 transition-colors ${isOpen ? "text-primary" : "text-gray-800"}`}>
          {faq.q}
        </span>
        <div className={`shrink-0 p-2 rounded-full transition-colors ${isOpen ? "bg-primary/10 text-primary" : "bg-gray-50 text-gray-400"}`}>
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} 
          />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 md:px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  // State to track which accordion is open. Using a string combination of categoryIndex-faqIndex
  const [openId, setOpenId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-24">
      {/* Premium Hero Header */}
      <div className="bg-primary pt-20 pb-16 px-4 text-center text-white rounded-b-[3rem] shadow-lg relative overflow-hidden mb-12 md:mb-16">
        {/* Subtle Indian-style background elements (mandalas/circles) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-6 shadow-inner">
            <HelpCircle size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-primary-100 text-lg opacity-90 max-w-xl mx-auto font-light">
            Find answers to the most common questions about finding your life partner on A&M Matrimony.
          </p>
        </motion.div>
      </div>

      {/* Main FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqsByCategory.map((section, sectionIdx) => (
            <motion.div key={section.id} variants={itemVariants} className="mb-12">
              {/* Category Header with Indian naming */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3.5 rounded-2xl">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {section.category}
                  </h2>
                  <div className="flex items-center gap-1.5 text-primary font-medium text-sm mt-0.5">
                    <Sparkles size={14} />
                    <span>{section.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Accordion List for this category */}
              <div className="space-y-4">
                {section.faqs.map((faq, faqIdx) => {
                  const currentId = `${sectionIdx}-${faqIdx}`;
                  const isOpen = openId === currentId;

                  return (
                    <AccordionItem
                      key={faqIdx}
                      faq={faq}
                      isOpen={isOpen}
                      onClick={() => setOpenId(isOpen ? null : currentId)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-10 text-center border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden"
        >
          {/* Decorative side accent */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our dedicated support team is here to assist you in your journey to find the perfect match.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_4px_14px_0_rgba(var(--primary-rgb),0.39)] hover:shadow-[0_6px_20px_rgba(var(--primary-rgb),0.23)] hover:-translate-y-0.5"
          >
            Contact Customer Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}