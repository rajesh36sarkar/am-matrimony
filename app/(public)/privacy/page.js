"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Lock } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "June 12, 2026";

  const privacyData = [
    {
      id: 1,
      title: "Information We Collect",
      content: "We may collect the following information during registration and service usage: Full Name, Date of Birth and Age, Gender, Contact Number, Email Address, Residential City and State, Educational Qualifications, Occupation and Income Details, Family Information, Horoscope/Kundli Details (if provided), Profile Photographs, and Communication records with our support team."
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: "Your information may be used to: create and manage your matrimonial profile, provide suitable matchmaking services, share matching profiles based on your preferences, contact you regarding profile updates and service-related matters, improve our services and customer experience, and prevent fraud and misuse of our platform."
    },
    {
      id: 3,
      title: "Information Sharing",
      content: "Your profile information may be visible to other registered members based on your selected membership plan. We do not sell, rent, or trade your personal information to third parties. Information may be disclosed when required by law, court order, or government authorities."
    },
    {
      id: 4,
      title: "Profile Privacy",
      content: "Members are responsible for the information they choose to share. A&M Matrimony may provide options to hide contact details or photographs based on membership plans. Users should exercise caution while sharing personal or financial information with other members."
    },
    {
      id: 5,
      title: "Data Security",
      content: "We implement reasonable security measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure. However, no online platform can guarantee 100% security, and users share information at their own discretion."
    },
    {
      id: 6,
      title: "Cookies and Website Usage",
      content: "If you use our website, we may collect certain technical information such as: IP Address, Browser Type, Device Information, and Website Usage Statistics. This information helps us improve website performance and user experience."
    },
    {
      id: 7,
      title: "Communication Consent",
      content: "By registering with A&M Matrimony, you agree to receive Phone Calls, SMS Messages, WhatsApp Messages, and Email Notifications related to matchmaking services, profile updates, promotions, and customer support. You may opt out of promotional communications at any time."
    },
    {
      id: 8,
      title: "Verification and Background Checks",
      content: "While A&M Matrimony may conduct basic verification procedures, we do not guarantee the complete accuracy of information provided by members. Users are advised to independently verify details before proceeding with any matrimonial alliance."
    },
    {
      id: 9,
      title: "Data Retention",
      content: "Your information will be retained as long as your profile remains active or as required by applicable laws. We may remove inactive profiles after a reasonable period."
    },
    {
      id: 10,
      title: "Account Deletion",
      content: "Members may request profile deletion by contacting A&M Matrimony customer support. Upon approval, personal information will be removed from public view, subject to legal and operational requirements."
    },
    {
      id: 11,
      title: "Changes to This Privacy Policy",
      content: "A&M Matrimony reserves the right to modify this Privacy Policy at any time. Updated versions will be published on our website and become effective immediately upon posting."
    },
    {
      id: 12,
      title: "Contact Us",
      content: "By using A&M Matrimony services, you acknowledge that you have read, understood, and agreed to this Privacy Policy. You can reach us at our Noida Office: UG-10, The Aaranya Hotmart, Sector 119, Noida, Uttar Pradesh - 201304, or our Delhi Office: B-68 BK Dutt Colony, New Delhi-110003."
    }
  ];

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
      {/* Header */}
      <div className="bg-primary pt-20 pb-16 px-4 text-center text-white rounded-b-[2rem] shadow-md mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-6">
            <Lock size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-100 text-lg opacity-90">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10"
        >
          <div className="flex items-start md:items-center gap-4 mb-8 pb-8 border-b border-gray-100">
            <div className="bg-primary/10 p-3 rounded-full shrink-0 mt-1 md:mt-0">
              <ShieldAlert className="text-primary w-6 h-6 md:w-8 md:h-8" />
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At A&M Matrimony, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our matrimonial services.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {privacyData.map((policy) => (
              <motion.div key={policy.id} variants={itemVariants} className="group">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary/40 font-mono text-lg mt-0.5">{policy.id}.</span>
                  <span>{policy.title}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed pl-7 md:pl-8">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-gray-500 text-sm"
        >
          <p>A&M Matrimony © {new Date().getFullYear()}. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}