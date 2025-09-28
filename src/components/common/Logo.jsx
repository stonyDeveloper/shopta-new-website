"use client"

import React from "react";
import IconMobile from "@/assets/shopta-logo.svg";
import IconDesktop from "@/assets/shopta-logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col text-[#1852C3] text-[8.47px] lg:text-[20px] font-[300] ">
      <Image
        className="w-[58px] h-[25px] lg:hidden"
        src={IconMobile}
        alt="logo"
      />
      <Image width={105} height={46} className=" hidden lg:block" src={IconDesktop} alt="logo" />
      {/* <p>Shop with ease</p> */}
    </div>
  );
};

export default Logo;
