import React, { useState } from "react";
import { Copy, Mail, Badge, Loader2 } from "lucide-react";

// 1. Set your Google Apps Script Web App URL here:
const GOOGLE_SHEET_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbyX_U5_iLL7KNpSMb6bc5cfQs8IgpXOiYGP-FIu0Djl7lb5EYQ7xnRkqepcq1FLj8Bi/exec";

const LandingHero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false); // Button effect
  const [loading, setLoading] = useState(false); // Loader

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || loading) return;

    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    setLoading(true);

    try {
      // Send email to Google Sheets via Apps Script
      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      alert("There was an error submitting your email.");
    } finally {
      setLoading(false);
    }
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
          We’re building{" "}
          <span className="text-violet-500">Something Exciting</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-6">
          A React + Tailwind Component Library launching on 27th August
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
            One-Click Copy and Quality Components
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-black/50 border border-gray-700 rounded-xl hover:bg-black/70 transition">
            <Badge className="w-4 h-4 text-pink-400" />
            Lots of Components and no external downloads or dependencies
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
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 flex items-center justify-center gap-2 font-semibold rounded-lg transition w-full sm:w-auto
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700"
                }
                ${clicked ? "scale-105 bg-green-500 shadow-lg" : ""}
              `}
              style={{
                transition:
                  "transform 0.15s, background 0.15s, box-shadow 0.15s",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                </>
              ) : (
                "Join Waitlist"
              )}
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
