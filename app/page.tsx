"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0b0b] text-white flex flex-col items-center justify-center overflow-hidden relative font-serif">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black opacity-90" />

      {/* Animated Gate */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-[#b8860b] mb-4">
          SeeYouOnThat
        </h1>
        <p className="text-gray-400 text-lg tracking-wide">
          A Private Gateway to the World of Business & Luxury
        </p>

        {/* Animated Door */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-64 bg-[#1f1f1f] border border-[#b8860b]/40 rounded-xl overflow-hidden shadow-[0_0_60px_#b8860b40]"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 50, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center text-[#b8860b] text-3xl font-semibold"
            >
              The Gate Opens Soon
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-20 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="border border-[#b8860b] text-[#b8860b] px-6 py-3 rounded-full hover:bg-[#b8860b] hover:text-black transition-all duration-300"
          >
            Apply for Membership
          </a>
          <a
            href="#"
            className="border border-gray-600 text-gray-400 px-6 py-3 rounded-full hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
          >
            Useful Information
          </a>
          <a
            href="mailto:info@seeyouonthat.com"
            className="border border-gray-600 text-gray-400 px-6 py-3 rounded-full hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 text-sm z-10">
        © {new Date().getFullYear()} SeeYouOnThat. All Rights Reserved.
      </footer>
    </main>
  );
}