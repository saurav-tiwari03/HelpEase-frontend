"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const tabs = ["home", "pricing", "features", "aboutus"];

  type TabRef = HTMLButtonElement | null;
  const [tabRefs, _] = useState<TabRef[]>([]);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const hoveredTab = tabRefs[hoveredIdx ?? -1]?.getBoundingClientRect();

  return (
    <main className="">
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
              <Link href={`/${tab}`}
                ref={(el) => {
                  tabRefs[index] = el;
                }}
                key={tab}
                className="px-3 py-1.5 z-10 capitalize"
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
                  opacity: 0.5,
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
          <button className="bg-[#fff] px-3 py-1 rounded font-Mulish font-semibold hover:bg-[#333] hover:text-white duration-500 ease-in-out">Explore</button>
        </div>
      </nav>
    </main>
  );
}
