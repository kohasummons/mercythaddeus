"use client";
import {
  InstagramLogo,
  EnvelopeSimple,
  Globe
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function KitPage() {

  const services = [
    {
      title: "Instagram Post",
      price: "$200"
    },
    {
      title: "Instagram Reel",
      price: "$500"
    },
    {
      title: "Instagram Stories (3 Slides)",
      price: "$100"
    },
    {
      title: "Speaking Engagements",
      price: "Reach Out"
    }
  ];


  const instagramStats = [
    {
      label: "Views",
      value: "4.7M+"
    },
    {
      label: "Interactions",
      value: "500K+"
    },
    {
      label: "Followers",
      value: "53K+"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat mx-auto mb-4" />

          {/* Name and Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 uppercase">
            Mercy Thaddeus
          </h1>
          <p className="text-sm text-gray-700 mb-6">
            AI • Tech Content Creator • Software Engineer
          </p>
        </motion.div>

        {/* Instagram Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 bg-white border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="text-center font-bold text-gray-900 text-lg mb-6">
            Instagram Insights
          </h2>
          <div className="space-y-4">
            {instagramStats.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-gray-700">{stat.label}</span>
                <span className="font-bold text-gray-900 text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

{/* Services Offered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 bg-white border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="text-center font-bold text-gray-900 text-lg mb-6">
            Services Offered
          </h2>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2"
              >
                <span className="text-gray-700 text-sm">{service.title}</span>
                <span className="font-medium text-gray-900">{service.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-pink-600 text-white rounded-2xl p-6 mt-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Globe size={20} />
              <span className="text-sm">mercythaddeus.xyz</span>
            </div>
            <div className="flex items-center gap-3">
              <InstagramLogo size={20} />
              <span className="text-sm">mercythaddeus</span>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeSimple size={20} />
              <span className="text-sm">mercythaddeus234@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}