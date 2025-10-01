import React, { useState } from "react";
import { motion } from "framer-motion";

const Layout = ({ title, subTitle, headerBg, navLinks }) => {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState(navLinks[0]?.id || "");

  // Function to handle navigation click
  const handleNavClick = (id) => {
    // Update the active section
    setActiveSection(id);

    // Find the section element by its ID
    const element = document.getElementById(id);

    // Scroll to the section smoothly
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="h-screen">
      <header
        className={`${headerBg} pt-[86px] pb-[34px] text-white flex flex-col justify-center items-center z-10`}
      >
        <h1 className="font-[600] text-[48px]">{title}</h1>
        <p className="font-[300] text-[16px] mt-1">{subTitle}</p>
      </header>

      <main className="flex flex-col md:flex-row h-full px-4 md:px-[100px] pt-8 2xl:pt-12">
        <aside className="hidden md:flex sticky top-[150px] flex-col w-fit gap-3 min-w-[287px] overflow-y-scroll">
          {navLinks?.map((link) => (
            <button
              key={link?.id}
              onClick={() => handleNavClick(link.id)}
              className={`
          text-start text-[14px] 2xl:text-[16px] font-[500] 
          whitespace-nowrap 
          ${activeSection === link.id ? "text-[#1852C3]" : "text-[#8D8D8D]"}
        `}
            >
              {link.section}
            </button>
          ))}
        </aside>

        {/* Content Sections */}
        <motion.div
          className="w-full h-full flex-1 overflow-y-auto flex flex-col gap-8 pb-[232px]"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks?.map((link) => (
            <section id={link.id} key={link.id} className="scroll-mt-[150px]">
              <h2 className="text-[24px] text-[#272727] font-[400]">
                {link?.section}
              </h2>

              <div className="text-[16px] text-[#272727] font-[400] leading-[25.52px] mt-3">
                {link.content}
              </div>
            </section>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
