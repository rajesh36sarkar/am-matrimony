"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Lock } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "June 12, 2026";

  const privacyData = [
    {
      id: 1,
      title: "Information We Collect",
      content: "We collect personal information you provide directly to us during registration and profile completion. This includes your name, email address, phone number, date of birth, gender, religion, caste, family details, educational background, career information, and partner preferences."
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: "We use the information primarily to facilitate highly compatible matchmaking. Additionally, we use your data to communicate with you regarding matches, improve our algorithms and services, process payments, and ensure platform security against fraud."
    },
    {
      id: 3,
      title: "Sharing of Information",
      content: "Your privacy is our priority. We do not sell or share your personal information with third-party marketers. Data is only shared as strictly necessary to provide our service (e.g., secure cloud hosting, email delivery providers) or when legally required by law enforcement."
    },
    {
      id: 4,
      title: "Data Security",
      content: "We implement rigorous industry-standard security measures, including end-to-end encryption for chat, strict database access controls, and regular vulnerability audits to protect your sensitive personal data from unauthorized access or breaches."
    },
    {
      id: 5,
      title: "Your Rights",
      content: "You retain full control over your data. You may request access to, correction of, or complete deletion of your personal data at any time. You can also control profile visibility through your dashboard. For assistance, contact us at hello@am-matrimony.com."
    },
    {
      id: 6,
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to keep you logged in, enhance user experience, and analyze site traffic patterns. You can choose to disable non-essential cookies through your browser settings without losing access to core features."
    },
    {
      id: 7,
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy periodically to reflect changes in legal requirements or our operational practices. Any material changes will be communicated via email and posted on this page with an updated revision date."
    },
    {
      id: 8,
      title: "Contact Us",
      content: "If you have any questions, concerns, or grievances regarding our privacy practices, please contact our Data Protection Officer by emailing privacy@am-matrimony.com or calling our support line at +91 12345 67890."
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
              At A&M Matrimony, we deeply value the trust you place in us when searching for your life partner. This policy explains what information we collect, why we collect it, and the strict measures we take to keep it safe.
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