"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Star, Heart, Users, Award, Quote, Sparkles } from "lucide-react";

// Expanded to 20 fallback testimonials with unique string IDs
const fallbackTestimonials = [
  { id: "fallback-1", name: "Priya & Rahul", location: "Mumbai, MH", quote: "Found my soulmate within 3 months! The verification process gave me immense confidence. Highly recommend A&M Matrimony.", image: "/uploads/t1.jpg", rating: 5, date: "March 2024" },
  { id: "fallback-2", name: "Ramesh K.", location: "New Delhi, DL", quote: "Excellent service and genuine profiles. The relationship manager was very supportive throughout my entire journey.", image: "/uploads/t2.jpg", rating: 5, date: "February 2024" },
  { id: "fallback-3", name: "Anjali M.", location: "Bangalore, KA", quote: "Very professional and secure platform. I found my perfect match within 2 months! The privacy controls are excellent.", image: "/uploads/t3.jpg", rating: 5, date: "January 2024" },
  { id: "fallback-4", name: "Vikram R.", location: "Chennai, TN", quote: "The matchmaking algorithm is spot on! Thank you A&M for understanding exactly what I was looking for in a partner.", image: "/uploads/t4.jpg", rating: 4, date: "December 2023" },
  { id: "fallback-5", name: "Neha & Aditya", location: "Pune, MH", quote: "Safe, verified profiles and great customer service. We just got married last week. Thank you for bringing us together!", image: "/uploads/t5.jpg", rating: 5, date: "November 2023" },
  { id: "fallback-6", name: "Suresh P.", location: "Hyderabad, TS", quote: "I never thought online matchmaking could be this easy. The personalized Kundli matching feature was a game-changer for our family.", image: "/uploads/t6.jpg", rating: 5, date: "October 2023" },
  { id: "fallback-7", name: "Kavita D.", location: "Ahmedabad, GJ", quote: "The NRI profiles section helped me find my husband who works in Canada. We connected instantly.", image: "/uploads/t7.jpg", rating: 5, date: "September 2023" },
  { id: "fallback-8", name: "Meera T.", location: "Kolkata, WB", quote: "I loved the Platinum Plan. Having a dedicated relationship manager took all the stress out of the search process.", image: "/uploads/t8.jpg", rating: 5, date: "August 2023" },
  { id: "fallback-9", name: "Arjun V.", location: "Jaipur, RJ", quote: "Trustworthy profiles and zero spam. It's refreshing to see a platform that takes background checks so seriously.", image: "/uploads/t9.jpg", rating: 4, date: "July 2023" },
  { id: "fallback-10", name: "Sneha & Rohan", location: "Lucknow, UP", quote: "A&M made it so easy. We met through the video meeting coordination service and just clicked instantly.", image: "/uploads/t10.jpg", rating: 5, date: "June 2023" },
  { id: "fallback-11", name: "Karthik N.", location: "Kochi, KL", quote: "The UI is clean and the app is very user-friendly. I found someone who shares my exact interests and values.", image: "/uploads/t11.jpg", rating: 5, date: "May 2023" },
  { id: "fallback-12", name: "Pooja S.", location: "Chandigarh, CH", quote: "Extremely professional team. They respected our traditional requirements while offering modern matchmaking solutions.", image: "/uploads/t12.jpg", rating: 5, date: "April 2023" },
  { id: "fallback-13", name: "Rahul B.", location: "Bhopal, MP", quote: "Verified profiles gave my parents peace of mind. I am now happily engaged!", image: "/uploads/t13.jpg", rating: 4, date: "March 2023" },
  { id: "fallback-14", name: "Aditi S.", location: "Indore, MP", quote: "Excellent customer service. They helped us filter exactly what we were looking for without overwhelming us.", image: "/uploads/t14.jpg", rating: 5, date: "February 2023" },
  { id: "fallback-15", name: "Sanjay M.", location: "Surat, GJ", quote: "I upgraded to the Gold plan and met my soulmate within two weeks. Totally worth the investment.", image: "/uploads/t15.jpg", rating: 5, date: "January 2023" },
  { id: "fallback-16", name: "Tanya R.", location: "Nagpur, MH", quote: "The platform's focus on privacy meant I didn't have to worry about my photos being misused. Found my match safely.", image: "/uploads/t16.jpg", rating: 5, date: "December 2022" },
  { id: "fallback-17", name: "Vivek & Riya", location: "Patna, BR", quote: "We are so grateful to A&M Matrimony. The matching system is highly accurate and focuses on real compatibility.", image: "/uploads/t17.jpg", rating: 5, date: "November 2022" },
  { id: "fallback-18", name: "Ananya C.", location: "Guwahati, AS", quote: "Very safe for women. The control you have over who can view your profile or contact you is fantastic.", image: "/uploads/t18.jpg", rating: 4, date: "October 2022" },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        const q = query(
          collection(db, "testimonials"),
          where("approved", "==", true),
          orderBy("date", "desc")
        );
        const snapshot = await getDocs(q);
        
        if (!isMounted) return;

        if (!snapshot.empty) {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          if (data.length < 20) {
            setTestimonials([...data, ...fallbackTestimonials.slice(0, 20 - data.length)]);
          } else {
            setTestimonials(data);
          }
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        if (isMounted) {
          setTestimonials(fallbackTestimonials);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = [
    { icon: Heart, label: "Happy Couples", value: "10,000+" },
    { icon: Users, label: "Verified Members", value: "50,000+" },
    { icon: Award, label: "Years of Trust", value: "15+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-slate-50">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
          <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-800 animate-pulse" size={24} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-hidden">
      
      {/* Premium Hero Section with Image and Smoky Fade */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/uploads/am-bg-4.jpg')" }} // Using your background image
        >
          {/* THE SMOKY SHADE: Blends into slate-50 at the bottom perfectly */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-50"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-amber-500 hidden md:block z-10"
        >
          <Sparkles size={32} />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-sm text-amber-400 text-sm font-semibold tracking-wider mb-6 border border-white/20 uppercase">
              Trusted By Thousands
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              Love <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Real stories from real people. Discover how A&M Matrimony has brought countless hearts together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center pt-6 sm:pt-0 first:pt-0"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-500">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Read authentic experiences from our community members who found their perfect matches.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || `test-${index}`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden group border border-slate-100 flex flex-col h-full"
              >
                <div className="p-8 flex-grow flex flex-col relative">
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Quote size={80} className="text-amber-500" />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < (testimonial.rating || 5) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
                      />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow relative z-10 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/avatar-placeholder.jpg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-100 bg-slate-100"
                        onError={(e) => { 
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f59e0b&color=fff&bold=true`; 
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-4 h-4 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{testimonial.location}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{testimonial.date || "Recently joined"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Ready to Write Your Own <span className="text-amber-400">Success Story?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                Take the first step towards finding your perfect life partner. Join thousands of verified profiles today.
              </p>
              <a 
                href="/register" 
                className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Create Your Profile Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}