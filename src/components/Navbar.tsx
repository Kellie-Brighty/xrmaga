import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Join Us", href: "#footer" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-black/80 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-xl sm:text-2xl font-bold gradient-text">XRMAGA</div>

      {/* Animated hamburger menu button */}
      <button
        className="lg:hidden w-8 h-8 flex flex-col justify-center items-center relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-white absolute"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            translateY: isMenuOpen ? 0 : -8,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white absolute"
          animate={{
            opacity: isMenuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white absolute"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            translateY: isMenuOpen ? 0 : 8,
          }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className="text-white hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {item.name}
          </motion.a>
        ))}
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-maga-red to-red-500 rounded-full font-bold hover:shadow-lg hover:shadow-red-500/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buy on FirstLedger
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="w-full lg:hidden mt-4 absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-white hover:text-gray-300 transition-colors w-full text-center py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="w-full max-w-xs px-6 py-3 bg-gradient-to-r from-maga-red to-red-500 rounded-full font-bold hover:shadow-lg hover:shadow-red-500/50 transition-shadow mx-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy on FirstLedger
              </motion.button>
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
