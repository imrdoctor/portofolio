"use client";
import { useState } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import AnimatedGradientTextDemo from "@/components/LinkedinFolow";
import HomeSec from "@/components/HomeSec";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [show, setShow] = useState(true);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onEnd={handleIntroEnd} />
      ) : (
        <>
          
          <AnimatedGradientTextDemo show={show} setShow={setShow} />
          <div className={show ? "sticky top-0" : "fixed top-0 left-0 right-0"}>

          <Navbar />

          </div>

          <HomeSec />



          <div className="container mx-auto bg-slate-400">
          </div>
        </>
      )}
    </>
  );
}
