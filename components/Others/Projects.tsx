"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectSchema } from "@/helpers";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  const tabs: ProjectSchema[] = [
    {
      title: "Ralli",
      des: "Description of Project 1",
      id: 0,
    },
    {
      title: "Project 2",
      des: "Description of Project 2",
      id: 1,
    },
    {
      title: "Project 3",
      des: "Description of Project 3",
      id: 2,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-[family-name:var(--font-romanesco)] text-3xl">
          Projects
        </h2>
        <p>things and projects i&apos;ve been a part of 🍕</p>
      </div>

      {/* Content */}
      <div className="flex gap-5 items-start flex-col md:flex-row">
        <div className="md:w-[27%] w-full grid grid-cols-2 md:block gap-3 md:space-y-3 font-medium">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              className={`w-full bg-secondary rounded-lg p-2 flex justify-between ${
                activeTab === tab.id ? "" : "opacity-50"
              } cursor-pointer transition-all duration-500`}
              onClick={() => handleTabChange(tab.id)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tab.title}</span>

              {activeTab == tab.id && <p>🌈</p>}
            </motion.button>
          ))}
        </div>

        <div className="w-full md:w-[73%] h-[350px] md:h-[405px] rounded-xl bg-secondary space-y-10">
          {/* header */}
          <div className="flex items-center justify-between bg-[#E6E6E6] py-3 px-5 rounded-tl-xl rounded-tr-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#D9D9D9]"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2 px-5">
                <h3 className="text-4xl font-medium">
                  {tabs[activeTab].title}
                </h3>
                <p>{tabs[activeTab].des}</p>
              </div>
              {/* {tab === "home" && <HomeComponent />} */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
