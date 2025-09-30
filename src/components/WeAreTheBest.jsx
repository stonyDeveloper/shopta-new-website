import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const WeAreTheBest = () => {
  const tableData = {
    columns: [
      { id: "features", title: "Features", align: "left" },
      { id: "shopta", title: "Shopta", align: "center" },
      { id: "markets", title: "Markets", align: "center" },
      { id: "other", title: "Other apps", align: "center" },
    ],
    rows: [
      {
        id: 1,
        features: "Best prices (products + delivery combined)",
        shopta: "check", // You'll replace with your check icon
        markets: "cross", // You'll replace with your cross icon
        other: "cross",
      },
      {
        id: 2,
        features: "All groceries & essentials in one place",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 3,
        features: "No queueing, traffic, or market stress",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 4,
        features: "Zero shopping fee",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 5,
        features: "Custom order with your brands & sizes",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 6,
        features: "Customer safety and security",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 7,
        features: "Trusted personal shoppers",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 8,
        features: "Real-time tracking & updates",
        shopta: "check",
        markets: "cross",
        other: "check", // Note: Other apps have this feature
      },
      {
        id: 9,
        features: "No product Markup",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
      {
        id: 10,
        features: "Eco-friendly packaging options",
        shopta: "check",
        markets: "cross",
        other: "cross",
      },
    ],
  };

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "check":
        return (
          <Image
            src="/assets/check-blue.svg"
            alt="check-icon"
            width={20}
            height={20}
            className="w-5 h-5 lg:w-7 lg:h-7"
          />
        );
      case "cross":
        return (
          <Image
            src="/assets/cancel.svg"
            alt="cross-icon"
            width={20}
            height={20}
            className="w-5 h-5 lg:w-7 lg:h-7"
          />
        );
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mt-16 lg:mt-[117px] mx-auto ">
      <h2 className="text-[20px] lg:text-[40px] font-[600] lg:font-[700] text-shopta-text lg:text-center lg:text-[32px] lg:mb-[50px]">
        We are the best 🥳
      </h2>
      <div className="lg:px-[180px]">
        <div className="bg-[#F3F3F3] p-6 overflow-hidden -mx-5 px-5 lg:px-[105px] mt-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 pb-4 border-b border-gray-200">
              {tableData.columns.map((column) => (
                <div
                  key={column.id}
                  className={`font-[500] text-shopta-text text-[12px] lg:text-[18px] ${
                    column.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {column.title}
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-4">
              {tableData.rows.map((row) => (
                <motion.div
                  key={row.id}
                  variants={rowVariants}
                  className="grid grid-cols-4 gap-4 items-center py-4 border-b border-[#E6E6E6] last:border-b-0 hover:bg-white hover:rounded-lg hover:px-4 transition-all duration-300"
                >
                  {/* Feature column */}
                  <div className="text-gray-700 font-medium text-[10px] lg:text-[16px] w-full">
                    {row.features}
                  </div>

                  {/* Shopta column */}
                  <div className="flex justify-center">
                    {renderIcon(row.shopta)}
                  </div>

                  {/* Markets column */}
                  <div className="flex justify-center">
                    {renderIcon(row.markets)}
                  </div>

                  {/* Other apps column */}
                  <div className="flex justify-center">
                    {renderIcon(row.other)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center bg-shopta-primary mt-10 lg:mt-[131px] p-6 lg:pt-[95px] lg:pb-[127px] rounded-[10px]">
        <h2 className="text-white text-[24px] lg:text-[40px] font-[800] lg:leading-[50px]">
          Ready to shop the smart <br className="hidden lg:block" /> Nigerian
          way?
        </h2>
        <p className="text-white text-[14px] lg:text-[28px] mt-4 lg:mt-1">
          Join thousands saving time, money, <br className="block lg:hidden" />{" "}
          and energy with Shopta.
        </p>
        <Link href="/join_waitlist">
          <Button className="bg-shopta-green text-white mt-5 w-full lg:w-[412px] text-[18px] lg:text-[20px] py-4 lg:py-5 h-[49px] lg:h-[62px] rounded-[5px]">
            Join the waitlist
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WeAreTheBest;
