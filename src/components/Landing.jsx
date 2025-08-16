import React, { useState } from "react";
import { Twitter, Github, Code2, Copy, Eye, Mail, Badge } from "lucide-react";

const LandingHero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Collected email:", email); // 🔗 send to backend / Mailchimp / Supabase
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-black to-black" />

      {/* Navbar */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-violet-600 rounded-md"></div>
          <h1 className="font-bold text-lg">Nexacrft</h1>
        </div>
      
      </header>

      {/* Content */}
      <main className="relative z-10 text-center px-6 mt-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-gray-700 text-sm mb-6">
          <span>🚀 Building in India</span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter mb-4">
          We’re building <span className="text-violet-500">Something Exciting</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-6">
          A React + Tailwind Component Library launching on 30th August
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Clean, production-ready, responsive UI components codes.  
          Crafted in India 🇮🇳 for modern React developers using TailwindCSS.  
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="flex items-center gap-2 px-5 py-3 bg-black/50 border border-gray-700 rounded-xl hover:bg-black/70 transition">
            <Copy className="w-4 h-4 text-purple-400" />
            One-Click Copy
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-black/50 border border-gray-700 rounded-xl hover:bg-black/70 transition">
            <Badge className="w-4 h-4 text-pink-400" />
            500+ Components
          </button>
        </div>

        {/* Email Collector */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-700 bg-black/40 text-white focus:ring-2 focus:ring-violet-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition w-full sm:w-auto"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <p className="text-green-500 font-medium mt-4">
            ✅ Thanks! You’re on the waitlist.
          </p>
        )}
      </main>

      
    </div>
  );
};

export default LandingHero;
