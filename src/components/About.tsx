import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const features = [
    {
      title: "MAGA Movement",
      description: "Join the growing movement of Trump's community on XRPL",
      icon: "🦅",
    },
    {
      title: "XRP Power",
      description: "Bringing Trump's millions from Solana to XRP Ledger",
      icon: "💪",
    },
    {
      title: "Community First",
      description: "Built by MAGA supporters, for MAGA supporters",
      icon: "🇺🇸",
    },
    {
      title: "Future of Finance",
      description: "Leading the transition to a better blockchain",
      icon: "🚀",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold gradient-text mb-6"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Future is XRPL
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The days of the Trump family using the Solana Network are almost over. 
            Let's get Trump and his family to bring their millions into XRPL.
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl text-red-500 font-bold max-w-3xl mx-auto"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            XRMAGA is the growing movement of Trump's community on the XRP Ledger
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About; 