"use client";
import { motion } from "framer-motion";
import { FileText, ShieldCheck } from "lucide-react";

export default function Terms() {
  const lastUpdated = "June 12, 2026";

  const termsData = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "By accessing or using A&M Matrimony website, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our service."
    },
    {
      id: 2,
      title: "Eligibility",
      content: "You must be at least 18 years of age (or the legal age for marriage in your jurisdiction) to register. You agree to provide accurate, current, and complete information during the registration process."
    },
    {
      id: 3,
      title: "Membership Plans",
      content: "We offer Free, Silver, Gold, and Platinum plans. Features and pricing are as displayed on the Packages page. Payment processing is handled securely, and all premium subscriptions are subject to our refund policy."
    },
    {
      id: 4,
      title: "User Conduct",
      content: "You agree not to post false, misleading, or inappropriate content. Harassment, fraud, request for money, or misuse of the platform will result in immediate termination of your account and potential legal action."
    },
    {
      id: 5,
      title: "Privacy",
      content: "Your privacy is paramount. Your use of the site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information."
    },
    {
      id: 6,
      title: "Intellectual Property",
      content: "All content, logos, text, graphics, and design are the exclusive property of A&M Matrimony. You may not copy, reproduce, distribute, or create derivative works without our explicit written permission."
    },
    {
      id: 7,
      title: "Disclaimer of Warranties",
      content: "The platform is provided on an 'as is' and 'as available' basis. While we verify profiles, we do not guarantee successful matches, nor do we assume responsibility for the offline conduct of our members."
    },
    {
      id: 8,
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, A&M Matrimony shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or interactions with other members."
    },
    {
      id: 9,
      title: "Termination",
      content: "We reserve the right to suspend or terminate accounts that violate these terms, behave suspiciously, or remain inactive for extended periods, without prior notice or liability."
    },
    {
      id: 10,
      title: "Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of India. Any disputes shall be exclusively resolved in the competent courts of Bhubaneswar, Odisha."
    },
    {
      id: 11,
      title: "Contact Information",
      content: "For questions, concerns, or legal inquiries regarding these terms, please contact our legal team at legal@am-matrimony.com."
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
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-primary-100 text-lg opacity-90">
            Effective from: {lastUpdated}
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
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <ShieldCheck className="text-primary w-8 h-8 shrink-0" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to A&M Matrimony. Please read these terms carefully before using our platform. By accessing our services, you agree to be bound by these legal obligations.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {termsData.map((term) => (
              <motion.div key={term.id} variants={itemVariants} className="group">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary/40 font-mono text-lg mt-0.5">{term.id}.</span>
                  <span>{term.title}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed pl-7 md:pl-8">
                  {term.content}
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