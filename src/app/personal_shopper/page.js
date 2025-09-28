"use client";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Link from "next/link";

const PersonalShopper = () => {
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

  const whyJoin = [
    {
      id: 1,
      icon: "/assets/chronometer.svg",
      description: "Choose when you want to work and be your own boss.",
    },
    {
      id: 2,
      icon: "/assets/payment-method.svg",
      description: "Earn competitive pay for every complete delivery.",
    },
    {
      id: 3,
      icon: "/assets/partners.png",
      description: "Be part of a supportive and trustworthy team.",
    },
  ];

  const personalShopperRequirements = [
    "Be at least 18 years old",
    "Own a bank account",
    `Own a means of Verification [NIN, BVN, Drivers license etc]`,
    "Have reliable access to a smartphone",
    "Have about NGN 100,000 naira in your bank account.",
  ];

  const howToRegister = [
    {
      id: 1,
      title: "Sign Up",
      subtitle:
        "Fill out the personal shopper registration form with your basic details",
    },
    {
      id: 2,
      title: "Onboarding",
      subtitle:
        "Complete a simple onboarding session where we introduce you to our platform, best practices and rules.",
    },
    {
      id: 3,
      title: "Background Check",
      subtitle:
        "Submit your KYC details while we conduct a quick background and identity verification to ensure safety for all.",
    },
    {
      id: 4,
      title: "Start Shopping & Delivering",
      subtitle:
        "Once approved and verified, receive orders through the Shopta app and start earning.",
    },
  ];
  return (
    <div className="px-5 lg:px-25">
      <section className="pt-5">
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

        <div className="bg-shopta-green flex items-center lg:justify-between px-6 lg:px-20 py-3 rounded-[5px] mt-7 lg:mt-[51px]">
          <h1 className="text-[26px] font-[600] lg:text-[65px] lg:font-[700] text-white">
            Personal Shopper
          </h1>
          <Image
            src="/assets/mobile-shopping-basket.png"
            width={100}
            height={100}
            className="w-25 h-25 lg:w-[197px] lg:h-[197px]"
          />
        </div>
        <p className="text-[#4A4A4A] mt-4 lg:mt-9 text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[20px]">
          Shopta is an online grocery delivery services. We make shopping and
          delivery simple, affordable, and accessible for everyone. Our
          technology connects customers to their preferred stores online,
          enabling them to order anything they need from anywhere whilst saving
          time.
        </p>
      </section>

      <section className="mt-12 lg:hidden">
        <div className="flex justify-center">
          <Image
            src="/assets/young-happy-black-male.png"
            width={663}
            height={442}
            alt=""
          />
        </div>

        <div className="text-start">
          <h2 className="text-[20px] font-[600] text-[#272727] mt-6">
            Shopping simplified, your <br /> personal shopper awaits
          </h2>

          <p className="text-[14px] text-[#4A4A4A] mt-2">
            Say goodbye to crowded stores or supermarkets, long lines, and the
            stress of juggling your market list. Let us handle it all — you
            enjoy your day while we do the shopping.
          </p>
        </div>
      </section>

      <section className="hidden lg:flex lg:ites-center gap-[64px] mt-[97px]">
        <div className="text-start">
          <h2 className="text-[20px] lg:text-[40px] lg:leading-[50px] font-[600] lg:font-[700] text-[#272727]">
            Become a Shopta Personal Shopper
          </h2>

          <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2 lg:mt-5">
            Are you reliable, love shopping, and want to earn extra income?
            Become a Shopta Personal Shopper and be part of a growing community
            delivering convenience to customers across the city.
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2 lg:mt-5">
            As a personal shopper with Shopta, you will handle the entire
            order—shopping, purchasing, and delivering items directly to
            customers who have placed the order. You earn money with every
            completed delivery and always know your earnings upfront before
            accepting a delivery. Sign up now and enjoy the freedom to choose
            when, where, and how much you work.
          </p>
        </div>

        <Image
          src={"/assets/young-happy-black-male.svg"}
          width={549}
          height={366}
        />
      </section>

      <section className="mt-11 lg:mt-[103px]">
        <div>
          <h2 className="text-[20px] font-[600] text-[#272727] lg:text-center lg:text-[40px] lg:font-[700] lg:leading-[50px]">
            Why join Shopta as a <br /> Personal Shopper?
          </h2>
        </div>

        <motion.div
          className="space-y-4 mt-5 lg:grid lg:grid-cols-3 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyJoin.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white border border-[#DEDEDE] rounded-[10px] p-4 lg:px-8 lg:pb-7 hover:shadow-md transition-shadow duration-300 lg:h-[182px]"
            >
              <div className="flex-shrink-0 text-2xl">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] lg:w-10 lg:h-10"
                />
              </div>
              <div className="flex items-start space-x-4 mt-3 lg:mt-10">
                <div className="flex-1">
                  <p className="text-[16px] lg:text-[20px] text-[#595959] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-shopta-primary -mx-5 lg:-mx-0 lg:flex lg:items-center lg:justify-center lg:gap-22 px-5 lg:px-21 py-6 lg:py-21 space-y-4 mt-15 lg:rounded-[10px]">
        <h2 className="text-white text-[20px] lg:text-[40px] font-[600]">
          You need just 5 <br className="hidden lg:block" /> things to be a{" "}
          <br /> Personal Shopper <br className="hidden lg:block" /> on shopta
        </h2>
        <div className="lg:flex lg:flex-col lg:gap-6">
          {personalShopperRequirements.map((requirement, index) => (
            <div
              className="text-shopta-text flex items-center gap-3 bg-white rounded-[5px] p-3 lg:px-7 h-[60px] lg:w-full lg:text-[20px]"
              key={index}
            >
              <Image
                src="/assets/black-check.png"
                alt="check-icon"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              {requirement}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 lg:mt-[132px] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="flex justify-center">
          <Image
            src="/assets/smiling-young-customer.png"
            width={663}
            height={442}
            alt="smiling-young-customer"
          />
        </div>

        <div className="text-start">
          <h2 className="text-[20px] lg:text-[50px] font-[600] lg:font-[700] lg:leading-[63px] text-[#272727] mt-6">
            Who should consider <br className="hidden lg:block" /> shopping{" "}
            <br className="lg:hidden" /> with Shopta?
          </h2>

          <p className="text-[14px] lg:text-[18px] text-[#4A4A4A] mt-2 lg:leading-[28px]">
            If you already work as a personal shopper or in delivery{" "}
            <br className="hidden lg:block" /> services (courier, driver, taxi),
            Shopta could be the perfect fit. <br className="hidden lg:block" />{" "}
            We welcome individuals from all backgrounds.
          </p>
        </div>
      </section>

      <section className="mt-13 lg:mt-[107px]">
        <div>
          <h2 className="text-[20px] font-[600] text-[#272727] lg:text-center lg:text-[40px] lg:font-[700]">
            How to register
          </h2>
        </div>

        <motion.div
          className="space-y-4 mt-5 lg:grid lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {howToRegister.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-[#F0F0F0] border border-[#DEDEDE] rounded-[10px] p-6 lg:pt-4 lg:pb-9 lg:px-8 hover:shadow-md transition-shadow duration-300 lg:h-[276px]"
            >
              <div className="bg-shopta-primary text-[12px] lg:text-[16px] font-[600] w-7 h-7  lg:w-[35px] lg:h-[35px] rounded-full grid place-items-center text-white">
                {item?.id}
              </div>

              <h2 className="text-[16px] lg:text-[20px] font-[500] lg:font-[600] mt-2 lg:mt-9">
                {item.title}
              </h2>
              <p className="text-[#4A4A4A] text-[14px] lg:text-[18px] font-[500] mt-1 lg:mt-2">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="text-center bg-shopta-green mt-10 lg:mt-[131px] p-6 lg:pt-[95px] lg:pb-[127px] rounded-[10px]">
        <h2 className="text-white text-[24px] lg:text-[40px] font-[800] lg:leading-[50px]">
          Ready to become a Shopta <br className="hidden lg:block" /> Personal
          Shopper?
        </h2>
        <p className="text-white text-[14px] lg:text-[28px] mt-4 lg:mt-1">
          Join us and help make shopping easier for everyone!
        </p>
        <Button className="bg-shopta-primary text-white mt-5 w-full lg:w-[412px] text-[18px] lg:text-[20px] py-4 lg:py-5 h-[49px] lg:h-[62px] rounded-[5px]">
          Join the waitlist
        </Button>
      </div>
      <div className="mt-11 lg:mt-[136px]">
        <Footer />
      </div>
    </div>
  );
};

export default PersonalShopper;
