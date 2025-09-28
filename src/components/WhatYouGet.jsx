import React from "react";
import Image from "next/image";

const WhatYouGet = () => {
  const customerBenefits = [
    "Save time",
    "Skip the market stress",
    "Skip the long queues",
    "Enjoy same-day doorstep delivery",
    "Shopping experience design around you",
  ];

  const personalShopperBenefits = [
    "Make money",
    "Flexible working hours",
    "Get paid fast",
    "Be your own boss",
    "Earn income flexibly",
  ];

  return (
    <section className="mt-15 lg:mt-[117px]">
      <h2 className="text-[20px] lg:text-[40px] font-[600] lg:font-[700] text-shopta-text lg:text-center lg:text-[32px] lg:mb-[50px]">
        What you get with Shopta
      </h2>

      {/* Mobile Layout */}
      <div className="bg-black mt-7 -mx-5 px-5 py-7 lg:hidden">
        <div className="space-y-4">
          <h2 className="text-white text-[18px] font-[600]">Customers</h2>

          {customerBenefits.map((benefit, index) => (
            <div
              className="text-white flex items-center gap-3 bg-shopta-green rounded-[5px] p-3"
              key={index}
            >
              <Image
                src="/assets/check.svg"
                alt="check-icon"
                width={20}
                height={20}
              />
              {benefit}
            </div>
          ))}

          <h2 className="text-white text-[18px] font-[600] mt-10">
            Personal shoppers
          </h2>

          {personalShopperBenefits.map((benefit, index) => (
            <div
              className="text-white flex items-center gap-3 bg-shopta-primary rounded-[5px] p-3"
              key={index}
            >
              <Image
                src="/assets/check.svg"
                alt="check-icon"
                width={20}
                height={20}
              />
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:gap-8 lg:mt-8">
        {/* Customers Card */}
        <div className="flex-1 bg-shopta-text rounded-[20px] p-8">
          <h2 className="text-white text-[28px] font-[600] mb-8">Customers</h2>
          
          <div className="space-y-4">
            {customerBenefits.map((benefit, index) => (
              <div
                className="text-white flex items-center gap-4 bg-shopta-green rounded-[8px] px-6 py-4 text-[16px] lg:text-[20px] font-[500]"
                key={index}
              >
                <div className="w-[24px] h-[24px] rounded-full  bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/check.svg"
                    alt="check-icon"
                    width={32}
                    height={32}
                  />
                </div>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Shoppers Card */}
        <div className="flex-1 bg-shopta-text rounded-[20px] p-8">
          <h2 className="text-white text-[28px] font-[600] mb-8">Personal shoppers</h2>
          
          <div className="space-y-4">
            {personalShopperBenefits.map((benefit, index) => (
              <div
                className="text-white flex items-center gap-4 bg-shopta-primary rounded-[8px] px-6 py-4 text-[16px] lg:text-[20px] font-[500]"
                key={index}
              >
                <div className="w-[24px] h-[24px] rounded-full bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/check.svg"
                    alt="check-icon"
                    width={32}
                    height={32}
                  />
                </div>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;