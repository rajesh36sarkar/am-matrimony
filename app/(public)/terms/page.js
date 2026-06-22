"use client";
import { motion } from "framer-motion";
import { FileText, ShieldCheck } from "lucide-react";

export default function Terms() {
  const lastUpdated = "June 12, 2026";

  const termsData = [
    {
      id: 1,
      title: "Eligibility",
      content: "Users must be legally eligible to marry under applicable laws. Minimum age: 21 years for males and 18 years for females. Users must provide accurate and truthful information during registration."
    },
    {
      id: 2,
      title: "Registration & Profile Creation",
      content: "Members must provide genuine personal, educational, professional, and family details. Submission of false, misleading, or incomplete information may result in profile suspension or termination. A&M Matrimony reserves the right to verify profile details when necessary."
    },
    {
      id: 3,
      title: "User Responsibilities",
      content: "Members are solely responsible for the information shared on their profiles. Users must independently verify the credentials and background of prospective matches before making any decision. A&M Matrimony is a matchmaking platform and does not guarantee marriage or compatibility."
    },
    {
      id: 4,
      title: "Privacy & Confidentiality",
      content: "Personal information shared with A&M Matrimony will be handled with reasonable care and confidentiality. Users should avoid sharing sensitive financial information with other members. A&M Matrimony will not sell or disclose personal information except as required by law or with user consent."
    },
    {
      id: 5,
      title: "Membership Plans & Payments",
      content: "Membership fees are non-transferable. Services included in Silver, Gold, Platinum, or other plans will be provided as described in the selected package. Payments once made are generally non-refundable unless otherwise specified in the Refund Policy."
    },
    {
      id: 6,
      title: "Prohibited Activities",
      content: "Members shall not create fake or duplicate profiles; use abusive, offensive, discriminatory, or inappropriate language; harass, threaten, or mislead other members; or use the platform for dating, advertising, business promotion, or unlawful activities."
    },
    {
      id: 7,
      title: "Profile Suspension or Termination",
      content: "A&M Matrimony reserves the right to suspend or remove any profile that violates these Terms & Conditions, provides false information, receives repeated complaints from other members, or engages in fraudulent or suspicious activities."
    },
    {
      id: 8,
      title: "Limitation of Liability",
      content: "A&M Matrimony acts only as a facilitator for introductions between members. We do not guarantee the authenticity, character, financial status, health status, or intentions of any member. Users must conduct their own due diligence before proceeding with any matrimonial alliance."
    },
    {
      id: 9,
      title: "Communication Consent",
      content: "By registering, users consent to receive calls, SMS, WhatsApp messages, and emails related to matchmaking services, profile updates, and promotional offers."
    },
    {
      id: 10,
      title: "Intellectual Property",
      content: "All content, logos, designs, and materials associated with A&M Matrimony are the property of A&M Matrimony and may not be copied or reproduced without written permission."
    },
    {
      id: 11,
      title: "Amendments",
      content: "A&M Matrimony reserves the right to modify these Terms & Conditions at any time. Continued use of the platform constitutes acceptance of the updated terms."
    },
    {
      id: 12,
      title: "Governing Law",
      content: "These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Noida, Uttar Pradesh."
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
              Welcome to A&M Matrimony. By registering, accessing, or using our services, you agree to comply with the following Terms & Conditions. Please read them carefully before creating a profile or using our platform.
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