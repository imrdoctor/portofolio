"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Intro = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [removeConfetti, setRemoveConfetti] = useState(false); // حالة لحذف الكونفيتي

  // تأثير لجعل الكونفيتي يظهر بعد وقت معين
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2940); // تأخير 2620 مللي ثانية حتى يظهر الكونفيتي

    return () => clearTimeout(timer);
  }, []);

  // حذف الكونفيتي بعد وقت محدد (بعد 5 ثوانٍ من الظهور)
  useEffect(() => {
    if (showConfetti) {
      const removeTimer = setTimeout(() => {
        setRemoveConfetti(true); // حذف الكونفيتي بعد انتهاء التأثير
      }, 5000); // مدة التأثير 5 ثوانٍ

      return () => clearTimeout(removeTimer);
    }
  }, [showConfetti]);

  return (
    <section className="overflow-hidden relative">
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
  className="p1 text-9xl bg-gradient-to-t from-orange-200 to-white text-transparent bg-clip-text max-[660px]:text-8xl max-[484px]:text-7xl text-left flex items-center justify-start font-bold absolute top-[5%] left-[5%]"
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
  className="p1 text-9xl bg-gradient-to-t from-orange-200 to-white text-transparent bg-clip-text max-[660px]:text-8xl max-[484px]:text-7xl text-right flex items-center justify-end font-bold absolute bottom-[5%] right-[5%]"
  initial={{ scale: 0, opacity: 0, rotate: 0, right: "-100%", bottom: "-10%" }}
  animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, 0], right: "5%", bottom: "10%" }}
  transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
> 
  My Portfolio
</motion.p>


        {/* تأثير الكونفيتي المتنوع */}
        {showConfetti && !removeConfetti && <ConfettiAnimation />}

        {/* حركة النجوم العائمة في الخلفية لإضفاء تأثير فخم */}
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
  const shapes = ["circle", "square", "star", "spiral"]; // إضافة الشكل اللولبي

  return (
    <>
      {[...Array(250)].map((_, index) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 12 + 6; // حجم الكونفيتي
        const angle = Math.random() * 360; // زاوية عشوائية
        const distance = Math.random() * 850 + 350; // المسافة العشوائية للخروج

        return (
          <motion.div
            key={index}
            className={`absolute ${shape}`}
            style={{
              width: shape === "spiral" ? `${size}px` : `${size}px`, // حجم الشكل اللولبي
              height: shape === "spiral" ? `${size * 2}px` : `${size}px`, // ارتفاع الشكل اللولبي
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              position: "absolute",
              top: "50%", // البداية من المركز
              left: "50%", // البداية من المركز
              borderRadius: shape === "circle" ? "50%" : shape === "spiral" ? "50% 50% 0 0" : "0", // الشكل اللولبي له حدود دائرية
              transform: shape === "spiral" ? `translate(-50%, -50%) rotate(${angle}deg)` : `translate(-50%, -50%)`, // المركز
            }}
            initial={{
              scale: 0, // البداية من حجم صغير
              opacity: 1,
            }}
            animate={{
              scale: [0, 1], // يتضخم حتى يصل للحجم العادي
              opacity: [1, 0], // يتلاشى
              x: [0, distance * Math.cos(angle)], // الحركة الأفقي
              y: [0, distance * Math.sin(angle)], // الحركة الرأسي
              rotate: [0, Math.random() * 360], // دوران عشوائي
            }}
            transition={{
              duration: Math.random() * 2 + 1, // مدة الحركة
              ease: "easeOut",
              delay: Math.random() * 0.5, // تأخير عشوائي
            }}
          />
        );
      })}
    </>
  );
};

export default Intro;