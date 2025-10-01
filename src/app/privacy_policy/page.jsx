"use client"

import Layout from '@/components/Layout';
import React from 'react'

const PrivacyPolicy = () => {
    const navLinks = [
        {
          id: "introduction",
          section: "Introduction",
          content: (
            <>
              <p>
                At Shopta, we are committed to protecting your privacy and ensuring
                that your personal information is used responsibly and in compliance
                with applicable laws and regulations. This privacy policy describes
                how we collect, use, disclose, protect, and retain your information.
              </p>
    
              <p className="mt-3">
                By using our service, you agree to the terms of this privacy policy.
              </p>
            </>
          ),
        },
        {
          id: "contact-details",
          section: "Contact Details",
          content: (
            <>
              <p>
                If you have any questions or requests about this privacy policy, or
                how we handle your information more generally, you can get in touch
                with us at{" "}
                <a
                  href="mailto:shoptamarket@gmail.com"
                  className="italic text-[#1852C3] font-700"
                >
                  shoptamarket@gmail.com
                </a>
              </p>
            </>
          ),
        },
        {
          id: "information-we-collect",
          section: "Information We Collect",
          content: (
            <>
              <p>
                We collect personal information when you register an account, place an order, or communicate with our customer service team. We collect different types of personal information from you, like:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>
                  Contact information, such as your name, address, email address, and phone number - which we collect when you create an account with us or place an order. We use this information to provide you with our services, including processing and delivering your orders, as well as communicating with you.
                </li>
                <li>
                  Payment information, such as your card details - which we collect when you make a purchase. We use this information to process your payment and comply with laws and regulatory requirements.
                </li>
                <li>
                  Demographic information, such as your age, gender, and occupation, which you may choose to provide us with to help us better understand our customers and provide you with a more personalised experience.
                </li>
                <li>
                  Device and usage information, such as your IP address, browser type, and referral source, which we collect by automated means when you use our website. We use this information to personalise your experience, improve our service, and prevent fraud and abuse.
                </li>
                <li>
                  Location data, such as your GPS coordinates, which we may collect if you choose to enable location services on our mobile application.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-information",
          section: "How We Use Information",
          content: (
            <>
              <p>
                We will only process your information if there is a reason for doing so, and if that reason is permitted by law. We collect personal information for the following purposes:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>To process and deliver your orders</li>
                <li>To communicate with you about our services, promotions, and offers</li>
                <li>To improve and personalise our services</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We may also collect information by automated means, such as device and usage information, location data, and cookies. This information helps us improve and personalise our services and analyze trends. We do not sell or rent your personal information to third parties.
              </p>
            </>
          ),
        },
        {
          id: "payment-processors-and-partners",
          section: "Payment Processors and Partners",
          content: (
            <>
              <p>
                We partner with local Nigerian payment processors to process payments for your orders. We may share your payment information with our payment partners to facilitate the payment process. We may also share your personal information with our delivery partners to deliver your orders.
              </p>
              <p className="mt-3">
                We partner with third-party service providers to help us deliver our services, such as hosting providers, customer service providers, and marketing providers. These service providers may have access to your personal information, but only to perform services on our behalf.
              </p>
            </>
          ),
        },
        {
          id: "sharing-your-information",
          section: "Sharing Your Information",
          content: (
            <>
              <p>
                We take the privacy and security of your personal information very seriously. As part of our commitment to providing you with the best possible service, we work with a number of third-party service providers to help us deliver our services to you. These service providers include payment processors, delivery partners, marketing and advertising partners, cloud storage services, system hosting, research partners, data security services, fraud prevention, payment processing services, analytics services, legal services, map services.
              </p>
              <p className="mt-3">
                We may also need to share your information with regulatory bodies, law enforcement agencies, or other parties when required by law or to protect our legal rights or those of others.
              </p>
              <p className="mt-3">
                Our team is constantly working to stay up-to-date with the latest developments in data privacy and security, and we are committed to making sure that your personal information is always protected to the highest standards. If you have any questions or concerns about our data protection policies, please don't hesitate to get in touch with us.
              </p>
            </>
          ),
        },
        {
          id: "third-party-websites",
          section: "Third-Party Websites",
          content: (
            <>
              <p>
                Shopta's website may contain links to third-party websites that are not operated by Shopta. We are not responsible for the privacy practices or content of these third-party websites.
              </p>
            </>
          ),
        },
        {
          id: "information-security",
          section: "Information Security",
          content: (
            <>
              <p>
                We use strong technologies and policies to safeguard your personal information from accidental loss, unauthorised access or usage, alteration, or disclosure.
              </p>
              <p className="mt-3">
                In case of any data breach, we have put in place proper procedures to handle it, and we will inform you and any relevant regulatory bodies where we are legally obligated to do so.
              </p>
              <p className="mt-3">
                To create an account on Shopta, users sign up with a First Name, Last Name and email address, and authenticate through a one-time password (OTP). Please do not share your OTP to prevent any unauthorised access to your account.
              </p>
            </>
          ),
        },
        {
          id: "information-retention",
          section: "Information Retention",
          content: (
            <>
              <p>
                We will only retain your personal information for as long as necessary to fulfil the purposes we collected it for. The reasons may include for the purposes of satisfying any tax, legal, dispute, regulatory, accounting or reporting requirements. In the event of a complaint or a prospect of litigation in respect of our relationship with you, we may retain your information for a longer period.
              </p>
              <p className="mt-3">
                When determining the appropriate retention periods, we take into account factors including:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>the amount, nature, and sensitivity of the Personal Information;</li>
                <li>our contractual obligations and rights in relation to the information involved;</li>
                <li>legal obligation(s) under applicable law to retain information for a certain period of time;</li>
                <li>statute of limitations under applicable law(s);</li>
                <li>the potential risk of harm from unauthorised use or disclosure of the Personal Information;</li>
                <li>whether we can achieve those purposes through other means;</li>
                <li>our legitimate interests for retaining the information (please see "Information Use" section);</li>
                <li>whether there is an actual or potential dispute; and</li>
                <li>guidelines issued by relevant data protection authorities.</li>
              </ul>
            </>
          ),
        },
        {
          id: "your-choices-and-data-rights",
          section: "Your Choices and Data Rights",
          content: (
            <>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also opt-out of receiving marketing
                communications from Shopta. Please contact our customer service
                team through{" "}
                <a
                  href="mailto:shoptamarket@gmail.com"
                  className="italic text-[#1852C3] font-700"
                >
                  shoptamarket@gmail.com
                </a>{" "}
                to exercise these rights.
              </p>
            </>
          ),
        },
        {
          id: "changes-to-this-privacy-policy",
          section: "Changes to this Privacy Policy",
          content: (
            <>
              <p>
                We update this privacy policy periodically, so please do check back every now and again in case anything has changed. When appropriate, we may notify you of updates made to this policy by email or push notification.
              </p>
            </>
          ),
        },
      ];
    
      const propContent = {
        title: "Privacy Policy",
        subTitle: "Last updated on August 2025",
        headerBg: "bg-[#1852C3]",
        navLinks: navLinks,
      };
  return (
    <Layout {...propContent} />
  )
}

export default PrivacyPolicy