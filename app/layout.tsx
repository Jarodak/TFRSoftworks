import type { Metadata } from "next";
import Script from "next/script";
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
  <head>
    {/* Google Tag Manager */}
    <Script
      id="gtm-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KWB4VHDR');`
      }}
    />
    {/* End Google Tag Manager */}
  </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin:0, minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        {/* Animated Gradient Background */}
        <div id="site-bg-gradient" style={{
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          background: '#181e34',
          opacity: 1
        }} />
        {/* Google Tag Manager (noscript) */}
        <noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWB4VHDR"
    height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
</noscript>

        <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3.5rem', padding: '0 2vw', background: 'var(--nav-bg)', borderBottom: '2px solid #222', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.5px', fontFamily: 'inherit' }}>TFR Softworks</span>
          </div>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', fontWeight: 500 }}>
            <a href="#home" className="nav-link nav-link-active" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>
              Home
              <span style={{ display: 'block', height: 3, background: 'var(--primary)', borderRadius: 2, width: '100%', position: 'absolute', left: 0, bottom: -6 }} />
            </a>
            <a href="#about" className="nav-link" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>About Us</a>
            <a href="#services" className="nav-link" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>What We Do</a>
            <a href="#why-us" className="nav-link" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>Why Choose Us</a>
            <a href="#contact" className="nav-link" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>Contact Information</a>
            <a href="#blog" className="nav-link" style={{ color: '#fff', position: 'relative', padding: '0.2rem 0' }}>Latest Updates</a>
</div>
        </nav>
        <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
