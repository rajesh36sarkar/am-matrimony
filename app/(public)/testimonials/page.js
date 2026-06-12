"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Star, Heart, Users, Award, Quote } from "lucide-react";

// Fallback static testimonials (used if Firestore is empty or fails)
const fallbackTestimonials = [
  {
    id: 1,
    name: "Priya S.",
    location: "Mumbai",
    quote: "Found my soulmate within 3 months! The verification process gave me confidence. Highly recommend A&M Matrimony.",
    image: "/testimonial-priya.jpg",
    rating: 5,
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Ramesh K.",
    location: "Delhi",
    quote: "Excellent service and genuine profiles. The team was very supportive throughout my journey.",
    image: "/testimonial-ramesh.jpg",
    rating: 5,
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Anjali M.",
    location: "Bangalore",
    quote: "Very professional and secure platform. I found my perfect match within 2 months!",
    image: "/testimonial-anjali.jpg",
    rating: 5,
    date: "2024-01-20"
  },
  {
    id: 4,
    name: "Vikram R.",
    location: "Chennai",
    quote: "The matchmaking algorithm is spot on! Thank you A&M for helping me find my life partner.",
    image: "/testimonial-vikram.jpg",
    rating: 4,
    date: "2023-12-05"
  },
  {
    id: 5,
    name: "Neha G.",
    location: "Pune",
    quote: "Safe, verified profiles and great customer service. I'm now happily married!",
    image: "/testimonial-neha.jpg",
    rating: 5,
    date: "2023-11-18"
  },
  {
    id: 6,
    name: "Suresh P.",
    location: "Hyderabad",
    quote: "I never thought online matchmaking could be this easy. Thanks to the dedicated team.",
    image: "/testimonial-suresh.jpg",
    rating: 5,
    date: "2023-10-22"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(
          collection(db, "testimonials"),
          where("approved", "==", true),
          orderBy("date", "desc")
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTestimonials(data);
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const stats = [
    { icon: Heart, label: "Happy Couples", value: "10,000+" },
    { icon: Users, label: "Members", value: "50,000+" },
    { icon: Award, label: "Years of Trust", value: "15+" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Hear from our happy couples who found their perfect match through A&M Matrimony
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <stat.icon size={40} className="text-primary mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={sectionRef} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who found their life partners through our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="p-6">
                  <Quote className="text-primary/20 w-10 h-10 mb-4" />
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < (testimonial.rating || 5) ? "fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date || "Recent"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/avatar-placeholder.png"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => { e.target.src = "/avatar-placeholder.png"; }}
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {testimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No testimonials available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of happy couples who found their life partner through A&M Matrimony.
            </p>
            <a href="/register" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block">
              Start Your Journey Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}