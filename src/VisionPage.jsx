import React from "react";
import { motion } from "framer-motion";
import doctorSafe from "./assets/doctor-stay-safe.png";
import HoverCardStack from "./assets/HoverCardStack";

const VisionPage = () => {
  return (
    <div className="min-h-screen w-full px-10 py-16 bg-[#dcebff] text-black">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="flex flex-col items-center text-center">

          {/* OUR VISION TITLE + ANIMATED SUBTITLE */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <h1 className="text-6xl font-extrabold text-blue-800">
              Our Vision
            </h1>

           {/* ----- Sub-text (letter by letter) ----- */}
<motion.p
  className="text-lg text-gray-700 mt-2 tracking-wide"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  }}
>
  {("Redefining Indian MBBS for the World").split("").map((char, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
      }}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.p>

          </motion.div>

          {/* STICKER FLOAT + FLIP ANIMATION */}
          <motion.img
            src={doctorSafe}
            alt="doctor"
            initial={{ y: 300, opacity: 0 }}
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 15, -15, 0],
              opacity: 1,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[600] mt-10 drop-shadow-4xl"
          />

          {/* INTRODUCTION BOX — MOVED DOWN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow: [
                "0 0 0px rgba(0,150,255,0.0)",
                "0 0 18px rgba(0,150,255,0.35)",
                "0 0 25px rgba(0,150,255,0.45)",
                "0 0 18px rgba(0,150,255,0.35)",
                "0 0 0px rgba(0,150,255,0.0)",
              ],
            }}
            transition={{
              duration: 2.3,
              ease: "easeOut",
              boxShadow: { duration: 3, repeat: Infinity, repeatType: "mirror" },
            }}
            className="max-w-md mt-[200px] bg-white/50 shadow-xl p-8 rounded-xl backdrop-blur-md border border-blue-200"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              Introduction
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Kanopy Medicare Premium is a 5-year advanced skill, research, and
              digital medicine curriculum built exclusively for MBBS students of
              private medical universities in India. It aligns the NMC curriculum
              with global medical education standards to create world-class,
              compassionate doctors.
            </p>
          </motion.div>

        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="col-span-2 flex flex-col items-end pr-10">

          {/* GROUP 1 */}
          <HoverCardStack
            delay={0.3}
            cards={[
              {
                img: "/src/assets/ai-healthcare.jpg",
                title: "AI-Powered Healthcare",
              },
              {
                img: "/src/assets/doctor-bg.jpg",
                title: "Patient-Doctor Care",
              },
            ]}
          />

          {/* GROUP 2 */}
          <HoverCardStack
            delay={0.7}
            cards={[
              {
                img: "/src/assets/excellence-bg.jpg",
                title: "Provide Excellence",
              },
              {
                img: "/src/assets/secure-doctor.jpg",
                title: "Secure & Trusted",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
