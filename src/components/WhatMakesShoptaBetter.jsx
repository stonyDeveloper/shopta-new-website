import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhatMakesShoptaBetter = () => {
  const features = [
    {
      id: 1,
      icon: "/assets/day-mode.svg",
      title: "Save Your Day",
      description:
        "No more sweating through busy markets or waiting in endless supermarket queues.",
    },
    {
      id: 2,
      icon: "/assets/value.svg",
      title: "Best Value",
      description:
        "Our dedicated shoppers shop from the exact supermarkets you have ordered from.",
    },
    {
      id: 3,
      icon: "/assets/convenient.svg",
      title: "Total Convenience",
      description:
        "Order in a few clicks, get updates, and track your delivery right to your door.",
    },
    {
      id: 4,
      icon: "/assets/love.svg",
      title: "Tailored For You",
      description:
        "Your favorite brands, Shopta finds and delivers it, your way within with same day delivery.",
    },
    {
      id: 5,
      icon: "/assets/insurance.svg",
      title: "Safe & Transparent",
      description:
        "No funny business. The product prices you see is what you pay.",
    },
    {
      id: 6,
      icon: "/assets/competency.svg", 
      title: "Security",
      description: "Our personal shoppers are meticulously verified.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 mx-auto">
      <div>
        <h2 className="text-[20px] font-[600] text-[#272727] lg:text-center lg:text-[40px] lg:font-[700]">
          What makes Shopta better
        </h2>
      </div>
      <motion.div
        className="space-y-4 lg:space-y-0 mt-5 lg:mt-9 lg:grid lg:grid-cols-3 lg:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 lg:h-[220px]"
          >
            <div className="flex-shrink-0 text-2xl">
                <Image className="lg:hidden" src={feature.icon} alt="icon" width={30} height={30} />
                <Image className="hidden lg:block" src={feature.icon} alt="icon" width={40} height={40} />
              </div>
            <div className="flex items-start space-x-4">
              {/* Icon */}
              

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[16px] lg:text-[20px] font-[500] lg:font-[600] text-shopta-text mb-2 lg:mb-0 lg:mt-5">
                  {feature.title}
                </h3>
                <p className="text-[14px] lg:text-[20px] text-[#4A4A4A] leading-relaxed lg:leading-[27px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatMakesShoptaBetter
