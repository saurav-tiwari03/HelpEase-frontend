"use client";
import Agent from "./../assets/agent.png";
import Customer from "./../assets/contact-us.png";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FeatureSidebar from "@/components/landing-page/FeatureSidebar";

export default function Home() {
  const tabs = ["home", "pricing", "features", "aboutus"];

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Use useRef instead of useState
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const hoveredTab =
    hoveredIdx !== null
      ? tabRefs.current[hoveredIdx]?.getBoundingClientRect()
      : null;

  useEffect(() => {
    // Clear tabRefs on component unmount to prevent memory leaks
    return () => {
      tabRefs.current = [];
    };
  }, []);

  return (
    <main className="">
      {/* Navbar Section */}
      <nav
        onMouseLeave={() => {
          setHoveredIdx(null);
        }}
        className="bg-[#fff] flex items-center justify-between py-4 px-12"
      >
        <div>
          <h1 className="font-kanit font-semibold text-3xl">HelpEase</h1>
        </div>
        <div>
          <ul className="flex gap-2 font-Mulish">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                ref={(el) => {
                  if (el) tabRefs.current[index] = el;
                }}
                className="relative"
              >
                <Link
                  href={`/${tab}`}
                  className="px-3 py-1.5 z-10 capitalize hover:text-[#fff] duration-300"
                  onPointerEnter={() => setHoveredIdx(index)}
                >
                  {tab}
                </Link>
              </div>
            ))}
          </ul>
          <AnimatePresence>
            {hoveredTab ? (
              <motion.div
                className="absolute top-0 left-0 bg-[#333] rounded-md"
                initial={{
                  top: hoveredTab.top,
                  left: hoveredTab.left,
                  width: hoveredTab.width,
                  height: hoveredTab.height,
                  opacity: 0,
                }}
                animate={{
                  top: hoveredTab.top,
                  left: hoveredTab.left,
                  width: hoveredTab.width,
                  height: hoveredTab.height,
                  opacity: 1,
                }}
                exit={{
                  top: hoveredTab.top,
                  left: hoveredTab.left,
                  width: hoveredTab.width,
                  height: hoveredTab.height,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              />
            ) : null}
          </AnimatePresence>
        </div>
        <div className="bg-[#333] px-1 py-1 rounded-md">
          <button className="bg-[#fff] px-3 py-1 rounded font-Mulish font-semibold hover:bg-[#333] hover:text-white duration-500 ease-in-out">
            Explore
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <div>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-white text-[90px] font-kanit font-bold text-center">
            Seamless Solutions for Effortless Customer Support
          </h1>
          <p className="text-white w-[50%] text-center">
            Delivering seamless, efficient customer support with powerful tools
            designed to simplify communication and enhance customer
            satisfaction, all without the complexity.
          </p>
        </div>
        <div className="flex items-start mt-24 justify-between pr-4">
          <div>
            <Image
              src={Agent}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="flex gap-8">
            <button className="text-[#fff] bg-[#111] font-Mulish px-4 py-2 rounded-lg hover:font-semibold scale-105 hover:scale-125 duration-300">
              Try now
            </button>
            <button className="text-[#333] bg-[#fff] font-Mulish px-4 py-2 rounded-lg hover:font-semibold scale-105 hover:scale-125 duration-500">
              Learn more
            </button>
          </div>
          <div>
            <Image
              src={Customer}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="bg-[#f6f6f6] mt-12 pb-16 relative">
        <h1 className="text-black py-8 text-[56px] font-kanit font-bold text-center">
          Features that makes us different
        </h1>
        <FeatureSidebar />
        <div className="absolute right-12 bottom-0">
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-[#333]"></div>
        </div>
      </div>
      {/* How it works */}
      <div className="relative">
        <h1 className="text-white py-8 text-[56px] font-kanit font-bold text-center">
          How it works?
        </h1>
        <div className="absolute top-0 left-12">
          <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-[#f6f6f6] border-r-[100px] border-r-transparent"></div>
        </div>
      </div>
    </main>
  );
}
