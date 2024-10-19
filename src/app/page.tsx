/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Agent from "./../assets/agent.png";
import Customer from "./../assets/contact-us.png";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const tabs = ["home", "pricing", "features", "aboutus"];

  type TabRef = HTMLButtonElement | null;
  const [tabRefs, _] = useState<TabRef[]>([]);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const hoveredTab = tabRefs[hoveredIdx ?? -1]?.getBoundingClientRect();

  return (
    <main className="">
      {/*Navbar Section */}
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
              <Link
                href={`/${tab}`}
                ref={(el: HTMLAnchorElement | null) => {
                  tabRefs[index] = el;
                }}
                key={tab}
                className="px-3 py-1.5 z-10 capitalize hover:text-[#fff] duration-300"
                onPointerEnter={() => setHoveredIdx(index)}
              >
                {tab}
              </Link>
            ))}
          </ul>
          <AnimatePresence>
            {hoveredTab ? (
              <motion.button
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
      {/*Hero Section */}
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
            <button className="text-[#333] bg-[#fff] font-Mulish px-4 py-2 rounded-lg hover:font-semibold scale-105  hover:scale-125 duration-500">
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
      {/*Features */}
      <div>
        
      </div>
    </main>
  );
}
