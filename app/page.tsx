"use client";
import { useState } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import AnimatedGradientTextDemo from "@/components/LinkedinFolow";
import HomeSec from "@/components/HomeSec";
import Covertext from "@/components/textcover";
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
          <div
            className={`text-center flex justify-center flex flex-col ${
              show ? "h-[85vh]" : "h-[100vh]"
            } `}
          >
            <div>

            </div>
            <HomeSec />
            <h1 className="text-4xl cursor-pointer rounded-full md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
     <Covertext className="flex items-center justify-center gap-2">Discover the Unseen <span className="text-[2.4rem]">🚀</span></Covertext>
      </h1>
          </div>
          <div className="container mx-auto bg-slate-400"></div>
        </>
      )}
    </>
  );
}
