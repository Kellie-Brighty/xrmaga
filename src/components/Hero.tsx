import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.div
      className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/usa-flag-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900"></div>
      </div>

      {/* Stars Animation Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <div className="z-10 text-center w-full max-w-4xl">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img
            src="/xrmaga-logo.jpg"
            alt="XRMAGA Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full shadow-lg shadow-red-500/20"
          />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text drop-shadow-lg"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          XRMAGA
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 mb-6 sm:mb-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The Future of Trump's Community on XRP Ledger
        </motion.p>
        <motion.a
          className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg uppercase font-bold bg-gradient-to-r from-maga-red to-red-500 rounded-full shadow-lg hover:shadow-red-500/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://t.me/xrmaga"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Movement
        </motion.a>

      </div>
    </motion.div>
  );
};

export default Hero;
