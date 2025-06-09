"use client";
import Image from "next/image";
import SleepContactForm from "./SleepContactForm";

export default function Home() {
  return (
    <div style={{ background: 'var(--section-bg, var(--background))', minHeight: '100vh', width: '100%' }}>
      {/* Hero Section */}
      <section id="home" style={{ width: '100%', position: 'relative', background: 'transparent', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '32vh', padding: 0 }}>
        {/* Cityscape background image */}
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
          alt="Abstract digital tech background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.23, filter: 'blur(1px)', zIndex: 0 }}
        />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'visible' }}>
          <h1 style={{ fontSize: 'clamp(1rem, 4vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '1.1rem', color: 'var(--primary)', textShadow: 'none', lineHeight: 1.07, textAlign: 'center', wordBreak: 'break-word', overflow: 'visible' }}>Welcome to TFR Softworks</h1>
          <div style={{ display: 'flex', gap: '1.1rem', color: 'var(--primary)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '2.1rem', letterSpacing: '0.01em', width: '100%', justifyContent: 'center' }}>
            <span>Custom Software</span>
            <span>&#8226;</span>
            <span>Modern Web Apps</span>
            <span>&#8226;</span>
            <span>Expert Consulting</span>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href="mailto:info@tfrsoftworks.com"
              style={{
                display: 'inline-block',
                background: 'var(--card-bg)',
                color: 'var(--primary)',
                fontWeight: 600,
                padding: '0.7rem 1.8rem',
                borderRadius: '2rem',
                fontSize: '1rem',
                letterSpacing: '0.03em',
                boxShadow: '0 2px 12px var(--primary)18',
                border: '1px solid var(--primary)',
                marginTop: '0.2rem',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              className="work-with-us-btn"
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ width: '100%', padding: '6rem 0 5rem', margin: 0, position: 'relative', overflow: 'hidden', background: 'transparent' }}>
  <style>{`
    @media (max-width: 800px) {
      .about-row, .why-row, .contact-row {
        flex-direction: column !important;
        gap: 2rem !important;
        padding: 0 1rem !important;
      }
      .about-row img, .why-row img, .contact-row img {
        width: 100% !important;
        height: auto !important;
        max-width: 100% !important;
        margin-bottom: 1.2rem !important;
      }
      .about-row h2, .why-row h2, .contact-row h2 {
        font-size: 2rem !important;
        text-align: center !important;
      }
      .about-row p, .why-row p, .contact-row p {
        text-align: center !important;
        font-size: 1.09rem !important;
        margin-bottom: 1.1rem !important;
        display: block !important;
        color: var(--foreground) !important;
      }
    }
  `}</style>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row' }}>
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
            alt="Code on a computer screen - tech workspace"
            width={420}
            height={260}
            style={{ borderRadius: '1rem', boxShadow: '0 2px 12px var(--primary)18', objectFit: 'cover', flexShrink: 0 }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '1.5rem', letterSpacing: '-1px', textAlign: 'left', width: '100%' }}>About Us</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'left' }}>
              TFR Softworks is a boutique software company specializing in custom applications, tools, and solutions. We combine technical expertise with creative problem-solving to help our clients thrive in today’s digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ width: '100%', padding: '6rem 0 5rem', margin: 0, background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'left', width: '100%', fontFamily: 'inherit', textTransform: 'none' }}>What We Do</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {/* Card 1 */}
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '1.3rem', boxShadow: '0 4px 24px var(--primary)33', padding: '2.2rem 1.6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
                <span className="card-icon" style={{ marginBottom: '1.1rem' }}>
                  {/* Laptop SVG */}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M2 17h20"/></svg>
                </span>
                <h3 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.7rem', textAlign: 'center' }}>Custom Software</h3>
                <p style={{ fontSize: '1.07rem', textAlign: 'center' }}>End-to-end development of web, mobile, and desktop apps tailored to your business goals.</p>
              </div>
            {/* Card 2 */}
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '1.3rem', boxShadow: '0 4px 24px var(--primary)33', padding: '2.2rem 1.6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
                <span className="card-icon" style={{ marginBottom: '1.1rem' }}>
                  {/* Mobile SVG */}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                </span>
                <h3 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.7rem', textAlign: 'center' }}>Web & Mobile Solutions</h3>
                <p style={{ fontSize: '1.07rem', textAlign: 'center' }}>Responsive websites, cross-platform mobile apps, and cloud integrations using modern stacks.</p>
              </div>
            {/* Card 3 */}
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '1.3rem', boxShadow: '0 4px 24px var(--primary)33', padding: '2.2rem 1.6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
                <span className="card-icon" style={{ marginBottom: '1.1rem' }}>
                  {/* Brain SVG */}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 6.5a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5"/><path d="M8.5 6.5A3.5 3.5 0 0 0 5 10v4a3.5 3.5 0 0 0 3.5 3.5"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h6"/></svg>
                </span>
                <h3 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.7rem', textAlign: 'center' }}>Project Consulting</h3>
                <p style={{ fontSize: '1.07rem', textAlign: 'center' }}>Technical strategy, architecture, and project management to turn your ideas into reality.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" style={{ width: '100%', padding: '6rem 0 5rem', margin: 0, background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row' }}>
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
            alt="Teamwork and innovation at a modern tech company"
            width={420}
            height={260}
            style={{ borderRadius: '1rem', boxShadow: '0 2px 12px var(--primary)18', objectFit: 'cover', flexShrink: 0 }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'left', width: '100%' }}>Why Choose Us</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'left', marginBottom: '1.1rem' }}>
              As a new and agile company, we are passionate about building strong partnerships and delivering real value. Here’s what sets us apart:
            </p>
            <ul style={{ color: 'var(--primary)', fontSize: '1.08rem', lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
              <li><b>Personal Attention:</b> You work directly with our founders and senior engineers on every project.</li>
              <li><b>Modern Technology:</b> We use the latest tools and frameworks for efficient, scalable solutions.</li>
              <li><b>Transparent Process:</b> You’re kept in the loop from day one, with clear communication and honest feedback.</li>
              <li><b>Flexible Engagement:</b> We adapt to your needs, whether you’re a startup or an established business.</li>
              <li><b>Results-Driven:</b> Our success is measured by your satisfaction and the impact of our work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ width: '100%', padding: '6rem 0 5rem', margin: 0, background: 'transparent' }}>
        <div className="contact-row" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {/* Left: Heading, Text, Image */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'left', width: '100%' }}>Contact Information</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'left' }}>
              Please fill out our contact form to get in touch. We’d love to discuss how we can help with your next project.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Man typing on a laptop in a tech workspace"
              width={420}
              height={260}
              style={{ borderRadius: '1rem', boxShadow: '0 2px 12px var(--primary)18', objectFit: 'cover', flexShrink: 0, marginTop: '2.2rem' }}
            />
          </div>
          {/* Right: Contact Form, vertically centered */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 360 }}>
            <div style={{ width: '100%', maxWidth: 420 }}>
              <SleepContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" style={{ width: '100%', padding: '6rem 0 5rem', margin: 0, background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'center' }}>Latest Updates</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {/* Update 1 */}
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '1.3rem', boxShadow: '0 4px 24px var(--primary)33', padding: '2.2rem 1.6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="card-icon" style={{ marginBottom: '1.1rem' }}>
                {/* Rocket SVG */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5l5-5M15 9l5-5-5 5zm-6 6l-5 5 5-5zm2.5-2.5l5-5-5 5zm6 6l5-5-5 5z"/></svg>
              </span>
              <h4 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', textAlign: 'center' }}>Coming Soon: Our Project Portfolio</h4>
              <p style={{ fontSize: '1.07rem', textAlign: 'center' }}>We’ll be sharing highlights from our favorite projects and client success stories. Stay tuned!</p>
            </div>
            {/* Update 2 */}
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '1.3rem', boxShadow: '0 4px 24px var(--primary)33', padding: '2.2rem 1.6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="card-icon" style={{ marginBottom: '1.1rem' }}>
                {/* Pencil SVG */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
              </span>
              <h4 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', textAlign: 'center' }}>Launching Our Blog</h4>
              <p style={{ fontSize: '1.07rem', textAlign: 'center' }}>Follow us for technical insights, company news, and tips for digital transformation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

