"use client";

import { motion } from "framer-motion";

const HowShoptaWorks = () => {
  const workSteps = [
    {
      id: 1,
      number: "1",
      title: "Share your shopping list",
      description: "Select, your items, brands, sizes.",
      indicatorColor: "bg-blue-600",
    },
    {
      id: 2,
      number: "2",
      title: "We shop for you",
      description:
        "A dedicated personal shopper selects each item and secures the best picks.",
      indicatorColor: "bg-green-500",
    },
    {
      id: 3,
      number: "3",
      title: "Track & relax",
      description: "Receive updates as your order is filled and delivered.",
      indicatorColor: "bg-red-500",
    },
    {
      id: 4,
      number: "4",
      title: "Delivered your way",
      description:
        "Home delivery or in-store pickup — your choice, fast and flexible",
      indicatorColor: "bg-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pt-7 lg:pt-[107px] md:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div>
        <h2 className="text-[20px] font-[600] text-[#272727] md:text-center md:text-[32px] lg:text-[40px] lg:font-[700]">
          How shopta works
        </h2>
      </div>

      <motion.div
        className="space-y-6 mt-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:mt-9 lg:grid-cols-4 lg:gap-4 xl:gap-6 2xl:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {workSteps.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="bg-white border border-[#DEDEDE] rounded-[10px] py-4 px-6 transition-shadow duration-300 md:py-6 md:px-7 lg:min-h-[242px] lg:h-auto xl:min-h-[260px] 2xl:min-h-[280px]"
          >
            <div className="flex flex-col md:space-y-0 space-x-6 md:space-x-0 h-full">
              <div
                className={`${step.indicatorColor} text-white w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[45px] xl:h-[45px] rounded-full flex items-center justify-center text-[16px] md:text-[18px] xl:text-[20px] font-bold flex-shrink-0`}
              >
                {step.number}
              </div>

              <div className="flex-1 mt-2 md:mt-4 lg:mt-6 xl:mt-8 min-w-0">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-[500] text-shopta-text break-words">
                  {step.title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#4A4A4A] mt-1 md:mt-2 lg:mt-3 break-words leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowShoptaWorks;