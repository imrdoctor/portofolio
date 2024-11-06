"use client";
import { useState } from "react"; // استيراد useState فقط
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function AnimatedGradientTextDemo({ show, setShow }) {

  const handleHide = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="relative"
          initial={{ opacity: 1}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}> 
          <div >
          <div className="relative z-10 bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#6366f1]  py-1 flex items-center justify-center shadow-lg">
            <a target="_blank" href="#">
              <AnimatedGradientText>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0077b5" }}
                  className="text-lg mx-1"
                />
                <hr className="mx-2 shrink-0 bg-gray-300" />
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Connect on LinkedIn
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </a>
          </div>
          </div>
          <div onClick={handleHide}  className="absolute right-3 top-2 w-5 h-5 flex justify-center items-center cursor-pointer z-10 border rounded-full  hover:border-white p-3 ">
            <FontAwesomeIcon 
              style={{ color: "#fff" }} 
              icon={faX}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}