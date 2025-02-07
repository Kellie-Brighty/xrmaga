import React, { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Tokenomics: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0000000000000000000"; // Replace with actual address

  const distribution = [
    { name: "Liquidity Pool", value: 70, color: "#FF0000" },
    // { name: "Community", value: 10, color: "#FFFFFF" },
    { name: "Development", value: 10, color: "#0000FF" },
    { name: "Marketing", value: 10, color: "#FF4444" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="tokenomics"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900"
    >
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
            Tokenomics
          </motion.h2>
          <motion.div
            className="text-2xl sm:text-3xl font-bold mb-8"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Total Supply: <span className="text-red-500">100,000 XRMAGA</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            className="h-[400px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Distribution Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {distribution.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400">{item.value}% of total supply</p>
                </div>
              </motion.div>
            ))}

            {/* Contract Address */}
            <motion.div
              className="mt-8 p-4 bg-black/30 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-400 mb-2">Contract Address:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 font-mono text-sm sm:text-base text-white bg-black/50 p-2 rounded">
                  {contractAddress}
                </code>
                <motion.button
                  className={`px-4 py-2 rounded-lg ${
                    copied ? "bg-green-500" : "bg-red-500"
                  } text-white font-bold`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyToClipboard}
                >
                  {copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
