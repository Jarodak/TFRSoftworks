'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Utility components ---
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

//

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the data to a server
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Page header removed; using global Header */}

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
                How Can We Help You?
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Get in touch with our team to discuss your project, investment opportunity, or partnership. We're here to help you build, invest, and scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Contact Form */}
              <div className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                {isSubmitted ? (
                  <div className="text-center p-8 bg-green-900/20 rounded-2xl">
                    <h3 className="text-2xl font-bold text-green-400">Thank you!</h3>
                    <p className="text-white/80 mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                          placeholder="Your first name"
                        />
                        {errors.firstName && <p className="text-red-400 text-sm mt-2">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                          placeholder="Your last name"
                        />
                        {errors.lastName && <p className="text-red-400 text-sm mt-2">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        How Can We Help You? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)] resize-none"
                        placeholder="Tell us about your project, funding needs, partnership opportunity, or how we can assist you..."
                      ></textarea>
                      {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--sage-500)] px-8 py-3 text-sm font-semibold text-[color:var(--hunter-green-100)] transition-colors hover:bg-[color:var(--timberwolf-600)]"
                      >
                        Send Message <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Address</h4>
                      <p className="text-white/70">
                        1 Vantage Way, Suite C-250<br />
                        Nashville, TN 37228
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Email</h4>
                      <a href="mailto:info@kernelequity.com" className="text-[color:var(--sage-400)] hover:text-[color:var(--sage-300)]">
                        info@kernelequity.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">What We Do</h3>
                  <p className="text-white/70 mb-4">
                    We partner with exceptional founders to build durable, efficient companies through:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Hands-on product development</li>
                    <li>• Smart capital investment</li>
                    <li>• Go-to-market support</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>

                <div className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Response Time</h3>
                  <p className="text-white/70">
                    We typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Footer moved to global layout */}
    </div>
  );
}
