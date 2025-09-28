"use client";

import AreYouAPersonalShopper from "@/components/AreYouAPersonalShopper";
import Logo from "@/components/common/Logo";
import Footer from "@/components/Footer";
import HowShoptaWorks from "@/components/HowShoptaWorks";
import { Button } from "@/components/ui/button";
import WeAreTheBest from "@/components/WeAreTheBest";
import WhatMakesShoptaBetter from "@/components/WhatMakesShoptaBetter";
import WhatYouGet from "@/components/WhatYouGet";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 lg:px-25">
      <section className="text-center lg:text-start  bg-[#C9D6DF] pt-5 -mx-5 lg:-mx-25 lg:px-25 lg:bg-[url('/assets/happy-woman-desktop.png')] lg:bg-cover lg:bg-center lg:pb-[300px]">
        <div className="flex justify-center lg:justify-between items-center">
          <Logo />

          <Button
            className={
              "text-[20px] font-[400] bg-shopta-primary text-white w-[232px] h-[62px] hidden lg:block rounded-[5px] cursor-pointer"
            }
          >
            Join Waitlist
          </Button>
        </div>

        <h2 className="font-[900] text-shopta-text text-[36px] lg:text-[65px] leading-[44px] lg:leading-[85px] mt-6 lg:mt-[155px]">
          Send your list. <br />
          Skip the market <br className="hidden lg:block" /> stress
        </h2>

        <div className=" flex-col items-center justify-center py-8 px-6 mt-7 bg-[#F3F3F3] w-fit rounded-[5px] hidden lg:flex">
          <p className="text-[#959595] text-[18px]">Coming soon</p>
          <div className="flex gap-3 justify-center mt-3">
            <Button disabled className={"bg-[#D2D2D2] rounded-[10px]"}>
              <Image
                src="/assets/playstore-icon-disabled.svg"
                alt="playstore-icon"
                width={18}
                height={18}
              />
              <span className="text-[#949494] text-[12px]">
                Download on Google Play
              </span>
            </Button>
            <Button disabled className={"bg-[#D2D2D2] rounded-[10px]"}>
              <Image
                src="/assets/appstore-icon-disabled.svg"
                alt="appstore-icon"
                width={18}
                height={18}
              />
              <span className="text-[#949494] text-[12px]">
                Download on App Store
              </span>
            </Button>
          </div>
        </div>

        <div className="flex gap-3 justify-center mt-3 lg:hidden">
          <Button className={"bg-[#F0F0F0] rounded-[10px]"}>
            <Image
              src="/assets/playstore-icon-disabled.svg"
              alt="playstore-icon"
              width={14}
              height={14}
            />
            <span className="text-[#949494] text-[9px]">
              Download on Google Play
            </span>
          </Button>
          <Button className={"bg-[#F0F0F0] rounded-[10px]"}>
            <Image
              src="/assets/appstore-icon-disabled.svg"
              alt="appstore-icon"
              width={14}
              height={14}
            />
            <span className="text-[#949494] text-[9px]">
              Download on App Store
            </span>
          </Button>
        </div>
        <div className="flex justify-center lg:hidden">
          <Image
            src="/assets/happy-woman.svg"
            alt="happy-woman"
            width={663}
            height={442}
          />
        </div>
      </section>

      <section className="pt-[72px] lg:pt-[106px]">
        <div className="lg:flex lg:items-center lg:gap-[126px]">
          <Image
            src="/assets/shopping-simplified.webp"
            alt="shopping-simplified"
            width={320}
            height={260}
            sizes="100vw"
            className="w-full h-auto rounded-[5px]"
          />

          <div className="text-start">
            <h2 className="text-[20px] lg:text-[40px] lg:leading-[50px] font-[600] lg:font-[700] text-[#272727] mt-6">
              Shopping simplified, your <br /> personal shopper awaits
            </h2>

            <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2 lg:mt-5">
              Say goodbye to crowded stores or supermarkets, long lines, and the
              stress of juggling your market list. Let us handle it all — you
              enjoy your day while we do the shopping.
            </p>
          </div>
        </div>
      </section>

      <HowShoptaWorks />

      <section className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <div className="flex justify-center gap-4 relative overflow-x-hidden -mx-5 overflow-y-hidden pb-10">
          <img className=" -mr-40 absolute" src="/assets/save-time.png" />

          <div className=" w-full flex justify-center gap-4  mt-52 z-10">
            <Image
              src="/assets/save-time-1.webp"
              alt="Rectangle 17"
              width={150}
              height={229}
              className=""
            />
            <Image
              src="/assets/save-time-2.webp"
              alt="Rectangle 18"
              width={150}
              height={229}
              className="transform translate-y-6"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] lg:text-[40px] font-[600] lg:font-[700] text-shopta-text">
            Save time, skip the queues
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2">
            Shop from your favorite supermarket online and let our personal{" "}
            <br className="hidden lg:block" />
            shoppers pick and pack your groceries for fast doorstep delivery.{" "}
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2">
            Prefer to swing by after shopping online? Choose easy in-store{" "}
            <br className="hidden lg:block" />
            pickup, or simply walk in at your convenience. Enjoy shopping your{" "}
            <br className="hidden lg:block" />
            way—simple, flexible, and hassle-free.
          </p>
        </div>
      </section>

      <WhatMakesShoptaBetter />

      <AreYouAPersonalShopper />

      <WhatYouGet />
      <WeAreTheBest />
      <div className="mt-11 lg:mt-[136px]">
        <Footer />
      </div>
    </div>
  );
}
