export default function Services() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ width: '100%', position: 'relative', padding: '4rem 0 3rem', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,32,56,0.70)', zIndex: 1 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1rem', color: '#fff', textShadow: '0 2px 12px #0008' }}>Our Services</h1>
          <h2 style={{ fontWeight: 400, fontSize: '1.2rem', marginBottom: '0', color: '#e0eaff', textShadow: '0 2px 8px #0005' }}>
            What we offer for your business
          </h2>
        </div>
      </section>
      {/* Content Card */}
      <section style={{ maxWidth: 900, margin: '3rem auto 2.5rem', background: 'var(--card-bg)', borderRadius: '1.2rem', boxShadow: '0 2px 18px #2563eb10', padding: '2.5rem 2rem', border: '1px solid var(--card-border)' }}>
        <h2 style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '1rem' }}>Our Expertise</h2>
        <p style={{ color: 'var(--foreground)', fontSize: '1.15rem', lineHeight: 1.7 }}>
          Discover the custom software, web, and mobile development services we offer.
        </p>
      </section>
    </div>
  );
}
