import Image from "next/image";

export default function Home() {
  return (
    <div style={{ background: 'var(--section-bg, var(--background))', minHeight: '100vh', width: '100%' }}>
      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" style={{ width: '100%', position: 'relative', padding: '4rem 0 3rem', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)', textAlign: 'center', overflow: 'hidden' }}>
        {/* Cityscape background image */}
        <Image
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80"
          alt="Cityscape background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'bottom', opacity: 0.23, filter: 'blur(1px)', zIndex: 0 }}
        />
        {/* Overlay for contrast */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,32,56,0.70)', zIndex: 1 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1rem', color: '#fff', textShadow: '0 2px 12px #0008', background: 'linear-gradient(90deg, #fff 20%, #b8d0f9 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Welcome to TFR Softworks</h1>
          <h2 style={{ fontWeight: 400, fontSize: '1.5rem', marginBottom: '2rem', color: '#e0eaff', textShadow: '0 2px 8px #0005' }}>
            Custom Applications. Modern Solutions. Exceptional Results.
          </h2>
          <a
            href="mailto:info@tfrsoftworks.com"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #fff9, #eaf6ff 70%, #b8d0f9 100%)',
              backdropFilter: 'blur(7px)',
              color: 'var(--primary)',
              fontWeight: 700,
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              fontSize: '1.2rem',
              letterSpacing: '0.03em',
              boxShadow: '0 4px 20px #2563eb22',
              border: '1px solid #fff6',
              transition: 'background 0.22s, box-shadow 0.22s, transform 0.18s',
              marginTop: '1rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Work With Us
          </a>
        </div>

      </section>

      {/* About Section */}
      <section id="about" style={{ width: '100%', background: 'var(--section-bg-1)', padding: '6rem 0 5rem', margin: 0, position: 'relative', overflow: 'hidden' }}>
        {/* Geometric SVG background */}
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" style={{ position: 'absolute', top: '-60px', left: '-80px', opacity: 0.14, zIndex: 0 }} aria-hidden="true">
          <circle cx="200" cy="200" r="180" stroke="#2563eb" strokeWidth="18" fill="none" />
          <rect x="60" y="60" width="120" height="120" rx="30" fill="#2563eb" opacity="0.18" />
        </svg>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row', position: 'relative', zIndex: 1 }}>
          <Image
            src="https://unsplash.it/420/260?image=1062"
            alt="About us illustration"
            width={420}
            height={260}
            style={{ borderRadius: '1rem', boxShadow: '0 2px 12px #2563eb18', objectFit: 'cover', flexShrink: 0 }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '1.5rem', letterSpacing: '-1px', textAlign: 'center', width: '100%' }}>About Us</h2>
            <p style={{ color: 'var(--foreground)', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'center' }}>
              TFR Softworks is a boutique software company specializing in custom applications, tools, and solutions. We blend technical excellence with creative problem-solving to help our clients succeed in a digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ width: '100%', background: 'var(--section-bg-2)', padding: '6rem 0 5rem', margin: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'center', width: '100%', fontFamily: 'inherit', textTransform: 'none' }}>What We Do</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.1rem', boxShadow: '0 4px 18px #2563eb14', padding: '2.2rem 1.7rem', display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
              {/* Accent bar */}
              <div style={{ width: 6, height: 60, background: 'linear-gradient(180deg, #2563eb 60%, #b8d0f9 100%)', borderRadius: 8, marginRight: 18, alignSelf: 'flex-start' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</span>
                <h3 style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.8rem', textAlign: 'center' }}>Custom Software</h3>
                <p style={{ color: 'var(--foreground)', fontSize: '1.07rem', textAlign: 'center' }}>End-to-end development of web, mobile, and desktop apps tailored to your business goals.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.1rem', boxShadow: '0 4px 18px #2563eb14', padding: '2.2rem 1.7rem', display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
              {/* Accent bar */}
              <div style={{ width: 6, height: 60, background: 'linear-gradient(180deg, #2563eb 60%, #b8d0f9 100%)', borderRadius: 8, marginRight: 18, alignSelf: 'flex-start' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</span>
                <h3 style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.8rem', textAlign: 'center' }}>Web & Mobile Solutions</h3>
                <p style={{ color: 'var(--foreground)', fontSize: '1.07rem', textAlign: 'center' }}>Responsive websites, cross-platform mobile apps, and cloud integrations using modern stacks.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.1rem', boxShadow: '0 4px 18px #2563eb14', padding: '2.2rem 1.7rem', display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.22s, transform 0.18s' }}>
              {/* Accent bar */}
              <div style={{ width: 6, height: 60, background: 'linear-gradient(180deg, #2563eb 60%, #b8d0f9 100%)', borderRadius: 8, marginRight: 18, alignSelf: 'flex-start' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</span>
                <h3 style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.8rem', textAlign: 'center' }}>Project Consulting</h3>
                <p style={{ color: 'var(--foreground)', fontSize: '1.07rem', textAlign: 'center' }}>Technical strategy, architecture, and project management to turn your ideas into reality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ width: '100%', background: 'var(--section-bg-3)', padding: '6rem 0 5rem', margin: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row' }}>
          <Image
            src="https://unsplash.it/420/260?image=1005"
            alt="Projects collage"
            width={420}
            height={260}
            style={{ borderRadius: '1rem', boxShadow: '0 2px 12px #2563eb18', objectFit: 'cover', flexShrink: 0 }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'center', width: '100%', fontFamily: 'inherit', textTransform: 'none' }}>Featured Projects</h2>
            <p style={{ color: 'var(--foreground)', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'center' }}>
              Explore some of the projects we’ve delivered for clients across a range of industries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ width: '100%', background: 'var(--section-bg-1)', padding: '6rem 0 5rem', margin: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row-reverse' }}>
          <Image
            src="https://unsplash.it/420/260?image=883"
            alt="Contact illustration"
            width={420}
            height={260}
            style={{ borderRadius: '1rem', boxShadow: '0 2px 12px #2563eb18', objectFit: 'cover', flexShrink: 0 }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'center', width: '100%', fontFamily: 'inherit', textTransform: 'none' }}>Contact Information</h2>
            <p style={{ color: 'var(--foreground)', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 700, textAlign: 'center' }}>
              Email us at <a href="mailto:info@tfrsoftworks.com" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>info@tfrsoftworks.com</a> to get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" style={{ width: '100%', background: 'var(--section-bg-2)', padding: '6rem 0 5rem', margin: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.3rem', marginBottom: '2.5rem', letterSpacing: '-1px', textAlign: 'center' }}>Latest Updates</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {/* Update 1 */}
            <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.1rem', boxShadow: '0 4px 18px #2563eb14', padding: '2.2rem 1.7rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🚀</span>
              <h4 style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', textAlign: 'center' }}>Coming Soon: Our Project Portfolio</h4>
              <p style={{ color: 'var(--foreground)', fontSize: '1.07rem', textAlign: 'center' }}>We’ll be sharing highlights from our favorite projects and client success stories. Stay tuned!</p>
            </div>
            {/* Update 2 */}
            <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340, background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.1rem', boxShadow: '0 4px 18px #2563eb14', padding: '2.2rem 1.7rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <span style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📝</span>
              <h4 style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', textAlign: 'center' }}>Launching Our Blog</h4>
              <p style={{ color: 'var(--foreground)', fontSize: '1.07rem', textAlign: 'center' }}>Follow us for technical insights, company news, and tips for digital transformation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

