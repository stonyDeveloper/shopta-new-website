import React from "react";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="px-5 lg:px-25">
      <section className="pt-5">
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
      </section>

      <section className="py-12 lg:py-20 max-w-5xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12">About us</h1>

        <div className="space-y-10">
          {/* Our Mission */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Our mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Empowering every Nigerian to shop smarter and live better—by
              bringing the best supermarkets and modern trade stores to your
              fingertips, with a personal touch.
            </p>
          </div>

          {/* Our Aim */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Our aim</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="leading-relaxed">
                • To eliminate the stress and hassle of grocery shopping by
                connecting you with trusted personal shoppers who curate and
                deliver everything you need, just the way you like it.
              </li>
              <li className="leading-relaxed">
                • To create a unified platform where you can access Nigeria's
                top supermarkets and brands, compare options, and enjoy seamless
                shopping—all in one place.
              </li>
              <li className="leading-relaxed">
                • To help you save time, money, and energy, letting you focus on
                what really matters while we handle your grocery run.
              </li>
              <li className="leading-relaxed">
                • To ensure transparent, secure, and personalized service every
                step of the way, so your experience is always reliable and
                enjoyable.
              </li>
              <li className="leading-relaxed">
                • To partner with malls and retailers, ensuring we deliver
                convenience and flexibility to you without increasing costs, so
                you get the best value every time you shop.
              </li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Shopta is committed to making everyday shopping effortless,
              convenient, and truly customer-focused—transforming how Nigerians
              experience modern retail.
            </p>
          </div>

          {/* Our Value Proposition */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Our value proposition
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="leading-relaxed">
                <strong>Save Time Instantly:</strong> Upload your list, share
                your preferences, and let your Shopta personal shopper handle
                everything — from receiving the order to timely doorstep
                delivery, same day.
              </li>
              <li className="leading-relaxed">
                <strong>Eliminate Shopping Stress:</strong> Forget crowds,
                confusing aisles, or product overload. We receive, assign, and
                secure your order, so you never have to worry about sold-out
                products or scrambles.
              </li>
              <li className="leading-relaxed">
                <strong>Personalized to You:</strong> Shopta adapts with every
                order, remembering your preferences for an even smoother
                experience next time. With Shopta, you can add alternative items
                in case you are unsure of your main order.
              </li>
              <li className="leading-relaxed">
                <strong>Transparency at Every Step:</strong> Track your order in
                real time. Get notifications from pickup, complete shopping, to
                delivery, ensuring total peace of mind
              </li>
              <li className="leading-relaxed">
                <strong>Expert personal Shoppers:</strong> Trust our shoppers to
                shop exactly where you have requested for. They're your insider
                advantage for quality and value
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mt-11 lg:mt-[136px]">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
