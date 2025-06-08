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
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWB4VHDR"
              height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <nav className="main-nav">
  <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation" />
  <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="Open navigation menu">
    <span />
    <span />
    <span />
  </label>
  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
  </div>
</nav>
        <div style={{flex:1}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
