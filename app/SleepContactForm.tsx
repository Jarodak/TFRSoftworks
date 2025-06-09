"use client";
import { useState } from "react";

export default function SleepContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async sleep
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--card-bg)",
        borderRadius: "1rem",
        boxShadow: "0 2px 12px var(--primary)18",
        padding: "2rem 1.5rem 1.2rem",
        maxWidth: 420,
        margin: "2.5rem auto 0 auto",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        border: "1px solid var(--card-border)",
        fontFamily: "inherit",
        fontSize: "1.05rem",
        opacity: 0.97,
      }}
      aria-label="Contact Form"
    >
      <h3 style={{ margin: 0, fontWeight: 700, fontSize: "1.18rem", color: "var(--primary)", textAlign: "center" }}>
        Quick Contact
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "0.6rem",
          border: "1px solid #444",
          fontSize: "1rem",
          background: "#181e34",
          color: "#fff",
          outline: "none",
          transition: "border-color 0.18s, box-shadow 0.18s",
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "0.6rem",
          border: "1px solid #444",
          fontSize: "1rem",
          background: "#181e34",
          color: "#fff",
          outline: "none",
          transition: "border-color 0.18s, box-shadow 0.18s",
        }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={3}
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "0.6rem",
          border: "1px solid #444",
          fontSize: "1rem",
          background: "#181e34",
          color: "#fff",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.18s, box-shadow 0.18s",
        }}
      />
      <button
        type="submit"
        disabled={loading || submitted}
        style={{
          padding: "0.7rem 1.8rem",
          borderRadius: "2rem",
          background: submitted ? "var(--card-bg)" : loading ? "var(--primary)88" : "var(--primary)",
          color: submitted ? "var(--primary)" : "var(--foreground)",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          cursor: loading || submitted ? "not-allowed" : "pointer",
          boxShadow: submitted ? "0 0 8px var(--primary)77" : loading ? "0 0 8px var(--foreground)77" : "0 2px 8px var(--primary)22",
          transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
          marginTop: "0.5rem",
        }}
      >
        {submitted ? "Thank you!" : loading ? "Sending..." : "Send Message"}
      </button>
      <div style={{ height: 2 }} />
    </form>
  );
}
