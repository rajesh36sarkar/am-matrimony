"use client";
import { HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Enquiry() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <HelpCircle size={56} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Enquiries</h1>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mt-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              We handle all our enquiries directly through WhatsApp to provide you with faster and more personalized support.
            </p>
            <p className="text-lg text-slate-600 mt-4 font-medium">
              Click the button below to chat with our team right away!
            </p>
            
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <FaWhatsapp size={24} />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}