"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Intro = ({ onEnd }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [removeConfetti, setRemoveConfetti] = useState(false);
  const [slideOut, setSlideOut] = useState(false); 
  const [isRemoved, setIsRemoved] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2940); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const removeTimer = setTimeout(() => {
        setRemoveConfetti(true);
      }, 2300);

      return () => clearTimeout(removeTimer);
    }
  }, [showConfetti]);

  useEffect(() => {
    if (removeConfetti) {
      const slideOutTimer = setTimeout(() => {
        setSlideOut(true);
      }, 1); 

      return () => clearTimeout(slideOutTimer);
    }
  }, [removeConfetti]);

  useEffect(() => {
    if (slideOut) {
      const removePageTimer = setTimeout(() => {
        setIsRemoved(true); 
        onEnd(); // استدعاء الدالة عند الانتهاء
      }, 1000); 

      return () => clearTimeout(removePageTimer);
    }
  }, [slideOut, onEnd]);

  if (isRemoved) return null;

  return (
    <section className={`overflow-hidden relative ${slideOut ? "slide-out" : ""}`}>
      <motion.div
        initial={{
          clipPath: "polygon(0% 0%, 0% 0%, 500% 500%, 0% 0%)",
          scale: 1.3,
        }}
        animate={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background-image"
          width={1920}
          height={1080}
          objectFit="cover"
          className="h-screen w-screen brightness-90 brightness-50"
        />
      </motion.div>

      <div className="absolute inset-0 z-[9999] overflow-hidden">
        <motion.p
          className="p1 text-9xl bg-gradient-to-t from-orange-100 to-white text-transparent bg-clip-text max-[660px]:text-8xl max-[484px]:text-7xl text-left flex items-center justify-start font-bold absolute top-[5%] left-[5%]"
          initial={{ scale: 0, opacity: 0, rotate: 0, left: "-100%", top: "-10%" }}
          animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, 0], left: "10%", top: "24%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          Welcome
        </motion.p>

        <motion.p
          className="p1 text-9xl bg-gradient-to-t from-orange-200 to-white text-transparent bg-clip-text max-[660px]:text-8xl max-[484px]:text-7xl text-left flex items-center justify-start font-bold absolute top-[5%] left-[5%]"
          initial={{ scale: 0, opacity: 0, top: "-150%", left: "20%" }}
          animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, 0], top: "48%", left: "47%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        >
          In
        </motion.p>

        <motion.p
          className="p1 text-9xl bg-gradient-to-t text-center sm:text-s from-orange-200 to-white text-transparent bg-clip-text max-[660px]:text-8xl max-[484px]:text-7xl flex items-center justify-end font-bold absolute bottom-[5%] right-[5%] "
          initial={{ scale: 0, opacity: 0, rotate: 0, right: "-100%", bottom: "-10%" }}
          animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, 0], right: "5%", bottom: "10%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
        >
          <span className="text-center">My Portfolio</span>
        </motion.p>

        {showConfetti && !removeConfetti && <ConfettiAnimation />}

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            animation: "stars 10s linear infinite",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        />
      </div>
    </section>
  );
};

// مكون الكونفيتي المتنوع
const ConfettiAnimation = () => {
  const shapes = ["circle", "square", "star", "spiral"];

  return (
    <>
      {[...Array(800)].map((_, index) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 12 + 8;
        const angle = Math.random() * 360;
        const distance = Math.random() * 700 + 400;

        return (
          <motion.div
            key={index}
            className={`absolute ${shape}`}
            style={{
              width: shape === "spiral" ? `${size}px` : `${size}px`,
              height: shape === "spiral" ? `${size * 2}px` : `${size}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              position: "absolute",
              top: "50%",
              left: "50%",
              borderRadius: shape === "circle" ? "50%" : shape === "spiral" ? "50% 50% 0 0" : "0",
              transform: shape === "spiral" ? `translate(-50%, -50%) rotate(${angle}deg)` : `translate(-50%, -50%)`,
            }}
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1],
              opacity: [1, 0],
              x: [0, distance * Math.cos(angle)],
              y: [0, distance * Math.sin(angle)],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              ease: "easeOut",
              delay: Math.random() * 0.5,
            }}
          />
        );
      })}
    </>
  );
};

export default Intro;
