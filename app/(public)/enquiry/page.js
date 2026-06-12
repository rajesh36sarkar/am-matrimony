"use client";
import { useState } from "react";
import { Send, HelpCircle } from "lucide-react";

export default function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", queryType: "general", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Will connect to API later
    console.log(form);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", email: "", queryType: "general", message: "" });
  };
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <HelpCircle size={48} className="text-primary mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-primary">Enquiry Form</h1>
        <p className="text-gray-600">Have a question? Fill the form below and we'll get back to you within 24 hours.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input type="text" placeholder="Full Name *" className="w-full border rounded p-2 focus:ring-2 focus:ring-primary" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input type="tel" placeholder="Phone Number *" className="w-full border rounded p-2 focus:ring-2 focus:ring-primary" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        <input type="email" placeholder="Email Address *" className="w-full border rounded p-2 focus:ring-2 focus:ring-primary" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <select className="w-full border rounded p-2 focus:ring-2 focus:ring-primary" value={form.queryType} onChange={e => setForm({...form, queryType: e.target.value})}>
          <option value="general">General Query</option>
          <option value="membership">Membership / Pricing</option>
          <option value="technical">Technical Support</option>
          <option value="complaint">Complaint / Feedback</option>
        </select>
        <textarea placeholder="Your Message *" rows="5" className="w-full border rounded p-2 focus:ring-2 focus:ring-primary" required value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2"><Send size={18} /> Submit Enquiry</button>
        {sent && <p className="text-green-600 text-center">Enquiry sent! We'll contact you soon.</p>}
      </form>
    </div>
  );
}