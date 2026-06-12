import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingEnquiryButton from "@/components/ui/FloatingEnquiryButton";
import AuthPopup from "@/components/ui/AuthPopup";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A&M Matrimony - Find Your Perfect Match",
  description: "Trusted matrimonial platform for Indian families",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingEnquiryButton />
          <AuthPopup />
        </AuthProvider>
      </body>
    </html>
  );
}