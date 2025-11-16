"use client"
import { useState } from "react";
import { FaEnvelope, FaUserAlt, FaPaperPlane } from "react-icons/fa";
import React from 'react'


// export const metadata = {
//   title: "Contact",
// }

const contact = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        <h2 className="text-3xl font-bold  mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 focus-within:border-indigo-400 transition">
            <FaUserAlt className="text-indigo-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none  placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 focus-within:border-indigo-400 transition">
            <FaEnvelope className="text-indigo-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none placeholder-gray-400"
              required
            />
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10 focus-within:border-indigo-400 transition">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-transparent outline-none placeholder-gray-400 resize-none"
              required
            ></textarea>
          </div>

 
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600  font-bold py-3 rounded-xl transition transform hover:scale-[1.02] shadow-lg"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}

 
export default contact