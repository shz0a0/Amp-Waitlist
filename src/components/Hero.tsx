'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArrowIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error); // Log the error for debugging
      setMessage("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/20"
          >
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
              Amplifier AI
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px]"
              drag
              dragSnapToOrigin
            >
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
          AI-driven software that automates the process of finding customers on social media.
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-8">
          <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-black/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
                required
              />
              <button
                type="submit"
                className="bg-white text-black h-12 rounded-lg px-5 flex items-center justify-center"
                disabled={loading}
              >
                <span className="font-bold whitespace-nowrap">
                  {loading ? "Sending..." : "Join the waitlist"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
