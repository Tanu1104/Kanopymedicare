import React from "react";
import { motion } from "framer-motion";

const HoverCardStack = ({ cards, delay = 0 }) => {
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay }}
      className="relative w-[420px] h-[580px] my-20"   // ⬅ wider + taller
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white"
          style={{ zIndex: index }}
          initial={{
            scale: 0.9,
            rotate: -10 + index * 7,
            y: index * 35,
            opacity: 0.9,
          }}
          whileHover={{
            scale: 1.09,
            rotate: 0,
            y: 0,
            zIndex: 50,
            opacity: 1,
            boxShadow:
              "0px 20px 40px rgba(0,0,0,0.25), 0 0 35px #9ec7ff", // 🔵 glowing blue shadow
            transition: { duration: 0.45 },
          }}
        >
          {/* IMAGE */}
          <img src={card.img} className="w-full h-full object-cover rounded-xl" />

          {/* CARD TITLE */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 
                          bg-white/80 backdrop-blur-md 
                          rounded-lg shadow-md border border-blue-200">

            <p className="text-center text-blue-800 font-bold text-xl tracking-wide">
              {card.title}
            </p>

          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HoverCardStack;
