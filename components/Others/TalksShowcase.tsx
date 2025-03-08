"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TalksSchema } from "@/helpers";

const talks: TalksSchema[] = [
  {
    id: 1,
    date: "August 25, 2025",
    title: "Understanding your community growth at scale",
    images: [
      "/talksImage.svg",
      "/talksImage.svg",
      "/talksImage.svg", // Added extra copy for smooth scrolling
    ],
  },
  {
    id: 2,
    date: "August 25, 2025",
    title: "Going on tours: Tech edition",
    images: ["/talksImage.svg", "/talksImage.svg", "/talksImage.svg"],
  },
  {
    id: 3,
    date: "August 25, 2025",
    title: "Building Responsive frontend experiences",
    images: ["/talksImage.svg", "/talksImage.svg", "/talksImage.svg"],
  },
  {
    id: 4,
    date: "August 25, 2025",
    title: "Performance & Polish",
    images: ["/talksImage.svg", "/talksImage.svg", "/talksImage.svg"],
  },
  {
    id: 5,
    date: "August 25, 2025",
    title: "The Scale Move, The scale moves",
    images: ["/talksImage.svg", "/talksImage.svg", "/talksImage.svg"],
  },
  {
    id: 6,
    date: "August 25, 2025",
    title: "Finding Growth in places",
    images: ["/talksImage.svg", "/talksImage.svg", "/talksImage.svg"],
  },
];

export default function TalksShowcase() {
  const [selectedTour, setSelectedTour] = useState<TalksSchema | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {talks.map((tour) => (
        <div key={tour.id} className="mb-8">
          <motion.div
            className="cursor-pointer"
            onClick={() =>
              setSelectedTour(selectedTour?.id === tour.id ? null : tour)
            }
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <p className="text-gray-400 text-sm mb-1">{tour.date}</p>
            <h2 className="text-2xl text-gray-700 font-medium mb-2">
              {tour.title}
            </h2>
          </motion.div>

          <AnimatePresence>
            {selectedTour?.id === tour.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="overflow-hidden"
              >
                <InfiniteImageScroll images={tour.images} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function InfiniteImageScroll({ images }: { images: string[] }) {
  return (
    <div className="relative w-full h-[200px] overflow-hidden rounded-xl mt-4">
      <motion.div
        className="flex absolute"
        animate={{
          x: [0, -1920], // Adjust based on your image width
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {/* Double the images for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            className="relative w-[310px] h-[200px] shrink-0 mr-4"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Tour image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
