import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import bgImage from '../public/bg.png';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotherEarth India Foundation",
  description: "A Socio-Enviro-Educational Initiative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative min-h-screen flex flex-col"> 
            <Navbar />
            <div className="bg-[#A3D1C6] opacity-60 absolute inset-0 z-[-1]"></div> 
            <div className="relative flex-grow">{children}</div> 
            <Footer/>
        </div>
    </body>
    </html>
  );
}
