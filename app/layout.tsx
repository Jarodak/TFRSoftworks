import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TFR Softworks",
  description: "TFR Softworks: Custom software, web, and mobile solutions. View our services, projects, and contact us for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin:0, minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <nav style={{display:'flex',gap:'2rem',padding:'1.5rem 2rem',background:'#f4f8fb',borderBottom:'1px solid #e3e3e3',fontWeight:600,fontSize:'1.1rem'}}>
          <a href="#home" style={{color:'#1a3a5c',textDecoration:'none'}}>Home</a>
          <a href="#about" style={{color:'#1a3a5c',textDecoration:'none'}}>About</a>
          <a href="#services" style={{color:'#1a3a5c',textDecoration:'none'}}>Services</a>
          <a href="#projects" style={{color:'#1a3a5c',textDecoration:'none'}}>Projects</a>
          <a href="#contact" style={{color:'#1a3a5c',textDecoration:'none'}}>Contact</a>
          <a href="#blog" style={{color:'#1a3a5c',textDecoration:'none'}}>Blog</a>
        </nav>
        <div style={{flex:1}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
