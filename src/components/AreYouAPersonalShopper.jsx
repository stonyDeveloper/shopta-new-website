import Image from "next/image";
import React from "react";
import Link from "next/link";

const AreYouAPersonalShopper = () => {
  return (
    <div className="flex bg-[#1BC3684D] justify-between items-center px-4 lg:px-11 py-8 -mx-5">
      <Image
        className="lg:hidden"
        src="/assets/delivery-bike.svg"
        width={54}
        height={54}
        alt="delivery-bike"
      />
      <Image
        className="hidden lg:block"
        src="/assets/delivery-bike.svg"
        width={103}
        height={103}
        alt="delivery-bike"
      />
      <div className="text-center text-shopta-text text-[16px]">
        <h2 className="lg:text-[20px]">Are you a personal shopper?</h2>
        <Link href="/personal_shopper">
          {" "}
          <h1 className="font-[600] underline mt-1 lg:text-[24px]">Join Shopta today</h1>
        </Link>
      </div>
      <Image
        className="lg:hidden"
        src="assets/grocery-store.svg"
        width={54}
        height={54}
        alt="grocery-store"
      />
      <Image
        className="hidden lg:block"
        src="assets/grocery-store.svg"
        width={103}
        height={103}
        alt="grocery-store"
      />
    </div>
  );
};

export default AreYouAPersonalShopper;
