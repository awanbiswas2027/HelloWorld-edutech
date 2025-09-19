import React, { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Safe Tawk.to integration
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined" && !window.Tawk_API) {
      const Tawk_API = window.Tawk_API || {};
      const Tawk_LoadStart = new Date();
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://embed.tawk.to/68c690bb312e381925a1fea0/1j53qankj"; // Replace with your Tawk.to ID
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    }
  }, []);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // simulate submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="opacity-90 text-lg">
        Send us a message and we'll get back to you. For instant help, use the
        chat at the bottom-right corner.
      </p>

      {!sent ? (
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 mt-4 p-6 backdrop-glass rounded-2xl shadow-lg"
        >
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            required
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none md:col-span-2"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors md:col-span-2"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="backdrop-glass p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-xl">Thanks — message received!</h3>
          <p className="text-sm opacity-90 mt-2">
            We'll reply to the email you provided. For immediate support, use
            the chat at the bottom-right corner.
          </p>
        </div>
      )}
    </div>
  );
}
