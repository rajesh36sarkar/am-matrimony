"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200 text-gray-700 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/am-logo.png"
                alt="A&M Matrimony"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Find your perfect life partner with trusted, community-driven matchmaking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary after:rounded-full sm:after:left-0 after:left-1/2 after:-translate-x-1/2 sm:after:translate-x-0">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Testimonials','Services', 'Login' ].map((item) => {
                const href = `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="relative group text-gray-600 hover:text-primary transition-colors inline-block"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary after:rounded-full sm:after:left-0 after:left-1/2 after:-translate-x-1/2 sm:after:translate-x-0">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'FAQ', href: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative group text-gray-600 hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[2px] after:bg-primary after:rounded-full sm:after:left-0 after:left-1/2 after:-translate-x-1/2 sm:after:translate-x-0">
              Connect With Us
            </h4>
            
            {/* Updated Social Links */}
            <div className="flex justify-center sm:justify-start space-x-4 mb-6">
              {[
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61590506096779" },
                { icon: FaInstagram, href: "https://www.instagram.com/anm_matrimony/" },
                { icon: FaYoutube, href: "https://www.youtube.com/channel/UC3JR8u0Rbq8xIA6SKxhBzNg" },
                { icon: FaTwitter, href: "https://x.com/AnM_MATRIMONY" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <p className="flex items-center justify-center sm:justify-start gap-3 group cursor-pointer">
                <span className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaEnvelope size={14} />
                </span>
                <span className="group-hover:text-primary transition-colors">hello@am-matrimony.com</span>
              </p>
              
              {/* Updated Address Summary */}
              <p className="flex items-center justify-center sm:justify-start gap-3 group cursor-pointer">
                <span className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaMapMarkerAlt size={14} />
                </span>
                <span className="group-hover:text-primary transition-colors">Noida & New Delhi</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} A&M Matrimony. All rights reserved.</p>
          <div className="flex gap-3 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}