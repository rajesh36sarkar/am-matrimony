"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    religion: "",
    caste: "",
    familyType: "",
    fatherName: "",
    motherName: "",
    siblingsCount: "",
    prefAgeMin: 18,
    prefAgeMax: 60,
    prefReligion: "",
    prefCaste: "",
    prefLocation: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      // Not logged in, show Google sign‑in button
      return;
    }
    if (user && !loading) {
      // Already logged in – you could check if profile exists, but we'll just show the form
    }
  }, [user, loading, router]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL || "",
        ...form,
        createdAt: new Date(),
        isProfilePublic: true,
        membershipPlan: "Free",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Profile save error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // If not logged in, show Google sign‑in box
  if (!loading && !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-primary p-6 text-center">
            <Image
              src="/am-logo.png"
              alt="A&M Matrimony"
              width={80}
              height={80}
              className="mx-auto bg-white rounded-full p-2"
            />
            <h1 className="text-2xl font-bold text-white mt-3">Create Your Profile</h1>
            <p className="text-white/80 text-sm">Sign in to get started</p>
          </div>
          <div className="p-6 sm:p-8">
            <button
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition shadow-md"
            >
              <FcGoogle size={24} />
              Sign in with Google
            </button>
            <p className="text-center text-gray-500 text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-semibold">Login</a>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading || !user) return null;

  // Multi‑step form (logged in)
  const stepTitles = ["Personal Details", "Family Details", "Partner Preferences"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-primary p-4 text-center">
          <h2 className="text-xl font-bold text-white">{stepTitles[step]}</h2>
          <div className="flex justify-center gap-2 mt-2">
            {stepTitles.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 w-12 rounded-full transition ${
                  idx === step ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Step 0: Personal */}
              {step === 0 && (
                <>
                  <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary" required />
                  <input name="dob" type="date" placeholder="Date of Birth" value={form.dob} onChange={handleChange} className="w-full border rounded-xl p-3" required />
                  <select name="gender" value={form.gender} onChange={handleChange} className="w-full border rounded-xl p-3">
                    <option value="">Select Gender</option>
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                  <input name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} className="w-full border rounded-xl p-3" required />
                  <input name="caste" placeholder="Caste / Community" value={form.caste} onChange={handleChange} className="w-full border rounded-xl p-3" />
                </>
              )}

              {/* Step 1: Family */}
              {step === 1 && (
                <>
                  <select name="familyType" value={form.familyType} onChange={handleChange} className="w-full border rounded-xl p-3">
                    <option value="">Family Type</option>
                    <option>Nuclear</option><option>Joint</option>
                  </select>
                  <input name="fatherName" placeholder="Father's Name" value={form.fatherName} onChange={handleChange} className="w-full border rounded-xl p-3" />
                  <input name="motherName" placeholder="Mother's Name" value={form.motherName} onChange={handleChange} className="w-full border rounded-xl p-3" />
                  <input name="siblingsCount" type="number" placeholder="Number of Siblings" value={form.siblingsCount} onChange={handleChange} className="w-full border rounded-xl p-3" />
                </>
              )}

              {/* Step 2: Partner Preferences */}
              {step === 2 && (
                <>
                  <div className="flex gap-2">
                    <input name="prefAgeMin" type="number" placeholder="Min Age" value={form.prefAgeMin} onChange={handleChange} className="w-1/2 border rounded-xl p-3" />
                    <input name="prefAgeMax" type="number" placeholder="Max Age" value={form.prefAgeMax} onChange={handleChange} className="w-1/2 border rounded-xl p-3" />
                  </div>
                  <input name="prefReligion" placeholder="Preferred Religion" value={form.prefReligion} onChange={handleChange} className="w-full border rounded-xl p-3" />
                  <input name="prefCaste" placeholder="Preferred Caste" value={form.prefCaste} onChange={handleChange} className="w-full border rounded-xl p-3" />
                  <input name="prefLocation" placeholder="Preferred Location" value={form.prefLocation} onChange={handleChange} className="w-full border rounded-xl p-3" />
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 0 && (
              <button onClick={prevStep} className="flex items-center gap-1 text-gray-600 hover:text-primary">
                <ChevronLeft size={18} /> Back
              </button>
            )}
            {step < 2 ? (
              <button onClick={nextStep} className="ml-auto btn-primary flex items-center gap-1">
                Next <ChevronRight size={18} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={submitting} className="ml-auto btn-primary flex items-center gap-1">
                {submitting ? "Creating..." : "Create Profile"} <CheckCircle size={18} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}