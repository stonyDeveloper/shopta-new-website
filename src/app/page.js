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
import Link from "next/link";

export default function Home() {
  const slidingImages = [
    {
      id: 1,
      src: "/assets/spar.svg",
      mobileSrc: "/assets/spar.png",
    },
    {
      id: 2,
      src: "/assets/jendol.svg",
      mobileSrc: "/assets/jendol.png",
    },
    {
      id: 3,
      src: "/assets/bokku.svg",
      mobileSrc: "/assets/bokku.png",
    },
    {
      id: 4,
      src: "/assets/hutoos.svg",
      mobileSrc: "/assets/hutoos.png",
    },
  ];
  return (
    <div className="px-5 lg:px-25">
      <section className="text-center lg:text-start  bg-[#C9D6DF] pt-5 -mx-5 lg:-mx-25 lg:px-25 lg:bg-[url('/assets/happy-woman-desktop.png')] lg:bg-cover lg:bg-center lg:pb-[300px]">
        <div className="flex justify-center lg:justify-between items-center">
          <Logo />

          <Link href="/join_waitlist">
            <Button
              className={
                "text-[20px] font-[400] bg-shopta-primary text-white w-[232px] h-[62px] hidden lg:block rounded-[5px] cursor-pointer"
              }
            >
              Join Waitlist
            </Button>
          </Link>
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

        <div className="flex flex-col gap-3 justify-center mt-4 lg:hidden">
          <p className="text-[#959595] text-[14px]">Coming soon</p>
          <div className="space-x-4">
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
        </div>
        <div className="flex justify-center lg:hidden">
          <Image
            src="/assets/happy-woman.png"
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
        <div className="flex justify-center lg:items-center gap-4 relative overflow-x-hidden -mx-5 lg:-mx-25 overflow-y-hidden pb-10">
          {/* <img className=" -mr-40 absolute" src="/assets/save-time.png" /> */}

          <div className=" w-full flex justify-center gap-4  z-10 pl-11">
            <Image
              src="/assets/woman-on-phone.png"
              alt="Rectangle 17"
              width={459}
              height={358}
              className="cover lg:hidden"
            />
            <Image
              src="/assets/woman-on-phone.svg"
              width={700}
              height={500}
              className="hidden lg:block"
            />
            {/* <Image
              src="/assets/save-time-2.webp"
              alt="Rectangle 18"
              width={150}
              height={229}
              className="transform translate-y-6"
            /> */}
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
      <section className="lg:mb-[96px] mb-[60px]">
  <div>
    <h2 className="text-[20px] font-[600] text-[#272727] lg:text-center lg:text-[40px] lg:font-[700] lg:leading-[50px]">
      You can shop from any of your <br className="hidden lg:block" />{" "}
      favorite stores
    </h2>
  </div>

  <div className="hidden lg:block overflow-hidden relative mt-8">
    <div className="flex gap-9 animate-scroll-desktop">
      {[...Array(3)].map((_, setIndex) =>
        slidingImages.map((image) => (
          <Image
            key={`desktop-${setIndex}-${image.id}`}
            src={image.src}
            alt={image.alt}
            width={127}
            height={80}
            className="flex-shrink-0"
          />
        ))
      )}
    </div>
  </div>

  <div className="block lg:hidden overflow-hidden relative mt-5">
    <div className="flex gap-9 animate-scroll-mobile">
      {[...Array(3)].map((_, setIndex) =>
        slidingImages.map((image) => (
          <Image
            key={`mobile-${setIndex}-${image.id}`}
            src={image.mobileSrc}
            alt={image.alt}
            width={68}
            height={43}
            className="flex-shrink-0"
          />
        ))
      )}
    </div>
  </div>
</section>

      <AreYouAPersonalShopper />

      <WhatYouGet />
      <WeAreTheBest />
      <div className="mt-11 lg:mt-[136px]">
        <Footer />
      </div>
    </div>
  );
}
