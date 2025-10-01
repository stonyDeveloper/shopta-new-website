"use client"

import Layout from '@/components/Layout';
import React from 'react'

const TermsOfService = () => {
    const navLinks = [
        {
          id: "introduction",
          section: "Introduction",
          content: (
            <>
              <p>
                {" "}
                Welcome 👋 to Shopta, an online shopping and grocery service in
                Nigeria. This agreement outlines the terms and conditions that{" "}
                <br /> govern your use of our platform and services.
              </p>
              <p className="mt-3">
                By accessing or using our platform, you agree to be bound by the
                terms and conditions set forth below.
              </p>
            </>
          ),
        },
        {
          id: "acceptance-of-terms",
          section: "Acceptance of Terms",
          content: (
            <p>
              This Terms of Use Policy Agreement ("Agreement") constitutes a legally
              binding agreement between you, the user, and Shopta, the provider of
              the online shopping and grocery service. By accessing or using the
              Shopta platform, you agree to be bound by the terms and conditions set
              forth in this Agreement. If you do not agree to these terms, you may
              not use our platform.
            </p>
          ),
        },
        {
          id: "use-of-platform",
          section: "Use of Platform",
          content: (
            <>
              <p>
                You may use our platform only for lawful purposes and in accordance
                with this Agreement. You agree not to use our platform:
              </p>
              <ul className="list-disc child:ml-10 space-y-2 mt-4">
                <li>
                  In any way that violates any applicable federal, state, local, or
                  international law or regulation.
                </li>
                <li>
                  For the purpose of exploiting, harming, or attempting to exploit
                  or harm minors in any way by exposing them to inappropriate
                  content, asking for personally identifiable information, or
                  otherwise.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any "junk mail," "chain letter,"
                  "spam," or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate Shopta, a Shopta
                  employee, another user, or any other person or entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's
                  use or enjoyment of the platform, or which, as determined by
                  Shopta, may harm Shopta or users of the platform or expose them to
                  liability.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "user-accounts",
          section: "User Accounts",
          content: (
            <p>
              To use our platform, you must create an account. You agree to provide
              accurate and complete information when creating your account, and you
              agree to keep your account information up to date. You are responsible
              for maintaining the confidentiality of your account and password and
              for restricting access to your account. You agree to accept
              responsibility for all activities that occur under your account or
              password.
            </p>
          ),
        },
        {
          id: "user-content",
          section: "User Content",
          content: (
            <>
              <p>
                Shopta may, in its sole discretion, permit users to submit, upload,
                publish or otherwise make available content, including but not
                limited to text, photographs, videos, and audio (collectively, "User
                Content"). You retain all rights in, and are solely responsible for,
                the User Content you make available through the platform.
              </p>
              <p className="py-6">
                By making any User Content available through the platform, you grant
                to Shopta a non-exclusive, transferable, sub-licensable,
                royalty-free, worldwide license to use, copy, modify, create
                derivative works based on, distribute, publicly display, publicly
                perform, and otherwise exploit such User Content in connection with
                the platform and Shopta's (and its successors' and affiliates')
                business, including without limitation for promoting and
                redistributing part or all of the platform (and derivative works
                thereof) in any media formats and through any media channels.
              </p>
              <p>
                You understand that Shopta does not guarantee any confidentiality
                with respect to any User Content. You should not submit User Content
                that you consider to be confidential or proprietary.
              </p>
            </>
          ),
        },
        {
          id: "proprietary-rights",
          section: "Proprietary Rights",
          content: (
            <p>
              The platform and its original content, features, and functionality are
              and will remain the exclusive property of Shopta and its licensors.
              The platform is protected by copyright, trademark, and other laws of
              both Nigeria and foreign countries.
            </p>
          ),
        },
        {
          id: "disclaimer-of-warranties",
          section: "Disclaimer of Warranties",
          content: (
            <p>
              Shopta provides the platform and services on an "as is" and "as
              available" basis. Your use of the platform and services is at your
              sole risk. To the fullest extent permitted by law, Shopta makes no
              representations or warranties of any kind, express or implied, as to
              the operation of the platform or the information, content, materials,
              or products included on the platform.
            </p>
          ),
        },
        {
          id: "limitation-of-liability",
          section: "Limitation of Liability",
          content:
            "Shopta will not be liable for any damages of any kind arising from the use of the platform, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.",
        },
        {
          id: "indemnification",
          section: "Indemnification",
          content: (
            <p>
              You agree to indemnify, defend, and hold harmless Shopta, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) arising out
              of your violation of this Agreement or your use of the platform.
            </p>
          ),
        },
        {
          id: "governing-law",
          section: "Governing Law",
          content: (
            <p>
              This Agreement will be governed by the laws of the Federal Republic of
              Nigeria, without giving effect to any conflict of laws principles.
            </p>
          ),
        },
        {
          id: "dispute-resolution",
          section: "Dispute Resolution",
          content: (
            <p>
              Any dispute arising out of or in connection with this Agreement,
              including any question regarding its existence, validity, or
              termination, will be referred to and finally resolved by arbitration
              in accordance with the Nigerian Arbitration and Conciliation Act. The
              arbitration will be conducted by a single arbitrator and will take
              place in Lagos, Nigeria.
            </p>
          ),
        },
        {
          id: "termination",
          section: "Termination",
          content: (
            <p>
              Shopta reserves the right, in its sole discretion, to terminate your
              access to all or part of the platform, with or without notice and with
              or without cause.
            </p>
          ),
        },
        {
          id: "changes-to-agreement",
          section: "Changes to Agreement",
          content: (
            <p>
              Shopta reserves the right to modify this Agreement at any time. Your
              continued use of the platform following the posting of changes to this
              Agreement will mean you accept those changes.
            </p>
          ),
        },
        {
          id: "delivery-schedule",
          section: "Delivery Schedule",
          content: (
            <p>
              Shopta delivers orders every day of the week, including weekends. Any
              changes to this delivery schedule will be communicated to you in
              advance.
            </p>
          ),
        },
        {
          id: "entire-agreement",
          section: "Entire Agreement",
          content: (
            <p>
              This Agreement constitutes the entire agreement between you and Shopta
              and governs your use of the platform, superseding any prior agreements
              between you and Shopta.
            </p>
          ),
        },
        {
          id: "contact-information",
          section: "Contact Information",
          content: (
            <p>
              If you have any questions about this Agreement, please contact us at{" "}
              <a 
                href="mailto:shoptasupport@gmail.com" 
                className="italic text-[#1852C3] font-600"
              >
                shoptasupport@gmail.com
              </a>.
            </p>
          ),
        },
        {
          id: "return-and-refund-policy",
          section: "Return and Refund Policy",
          content: (
            <p>
              Shopta aims to provide the highest quality products to our customers.
              If you are not satisfied with the products you receive, you may return
              them for a full refund within 7 days of delivery. To initiate a return, please contact our customer support at{" "}
              <a 
                href="mailto:shoptasupport@gmail.com" 
                className="italic text-[#1852C3] font-600"
              >
                shoptasupport@gmail.com
              </a>.
            </p>
          ),
        },
        {
          id: "payment",
          section: "Payment",
          content: (
            <p>
              Shopta accepts payment via debit/credit card and bank transfer. All
              payments are processed through secure and trusted payment gateways.
              Shopta does not store or have access to your payment information. By
              placing an order on our platform, you agree to pay the total amount
              due, including any applicable taxes and delivery fees.
            </p>
          ),
        },
        {
          id: "refunds",
          section: "Refunds",
          content: (
            <p>
              In the event of a return, the refund will be processed within 2-5
              business days after we have received the returned products. Refunds
              will be credited to the original method of payment.
            </p>
          ),
        },
        {
          id: "chargebacks",
          section: "Chargebacks",
          content: (
            <p>
              Shopta reserves the right to dispute any chargeback claim made by a
              customer. If a customer initiates a chargeback, Shopta may take legal
              action to recover the funds and any additional expenses incurred in
              the process.
            </p>
          ),
        },
        {
          id: "price-changes",
          section: "Price Changes",
          content: (
            <p>
              Shopta reserves the right to change prices of products at any time.
              Any changes to prices will be reflected on the platform and will not
              apply retroactively to orders that have already been placed.
            </p>
          ),
        },
      ];
      const propContent = {
        title: "Terms of Service",
        subTitle: "Last updated on August 2025",
        headerBg: "bg-[#1BC368]",
        navLinks: navLinks
      };
  return (
    <Layout {...propContent} />
  )
}

export default TermsOfService