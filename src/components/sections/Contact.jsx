import React, { useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

const GradientBackground = () => (
  <>
    {/* Top Right Gradient */}
    <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
    {/* Bottom Left Gradient */}
    <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
  </>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 bg-gray-900 overflow-hidden">
      <GradientBackground />
      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-lg px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Get In Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
