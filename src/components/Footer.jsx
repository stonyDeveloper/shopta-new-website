import React from 'react'
import Logo from './common/Logo'
import Link from 'next/link'

const Footer = () => {
  const footerContent = [
    {
      title: "Connect with us",
      items: [
        { label: "Linkedin", route: "#" }
      ]
    },
    {
      title: "Categories",
      items: [
        { label: "FMCGs", route: "#" },
        { label: "Personal Care and Health", route: "#" },
        { label: "Baby and Toddler", route: "#" },
        { label: "Wines and beverages", route: "#" },
        { label: "Groceries", route: "#" }
      ]
    },
    {
      title: "Our company",
      items: [
        { label: "About us", route: "/about_us" },
        { label: "Terms of service", route: "/terms_of_service" },
        { label: "Privacy policy", route: "/privacy_policy" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "Shoptamarket@gmail.com", route: "mailto:Shoptamarket@gmail.com" }
      ]
    }
  ]

  return (
    <section className='bg-[#F3F3F3] -mx-5 lg:-mx-25 lg:px-25 px-5 pt-6 pb-8 lg:pt-12 lg:pb-16'>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <Logo />
        <div className="mt-4 space-y-5">
          {footerContent?.map((item) => (
            <div key={item.title}>
              <h2 className="text-shopta-text font-[600] text-[16px] mb-2">{item.title}</h2>
              <div className='flex flex-col gap-1'>
                {item.items?.map((linkItem) => (
                  <Link 
                    key={linkItem.label} 
                    href={linkItem.route} 
                    className="text-gray-600 text-[14px] hover:text-shopta-primary transition-colors"
                  >
                    {linkItem.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex gap-[106px] items-start">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Footer Content Columns */}
          <div className="flex gap-16 xl:gap-24">
            {footerContent?.map((item) => (
              <div key={item.title} className="min-w-0">
                <h2 className="text-shopta-text font-[600] text-[18px] mb-4">{item.title}</h2>
                <div className='flex flex-col gap-2'>
                  {item.items?.map((linkItem) => (
                    <Link 
                      key={linkItem.label} 
                      href={linkItem.route} 
                      className="text-gray-600 text-[16px] hover:text-shopta-primary transition-colors whitespace-nowrap"
                    >
                      {linkItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer