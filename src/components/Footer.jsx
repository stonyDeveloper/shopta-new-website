import React from 'react'
import Logo from './common/Logo'
import Link from 'next/link'

const Footer = () => {
  const footerContent = [
    {
      title: "Connect with us",
      items: ["Linkedin"]
    },
    {
      title: "Categories",
      items: ["FMCGs", "Personal Care and Health", "Baby and Toddler", "Wines and beverages", "Groceries"]
    },
    {
      title: "Our company",
      items: ["About us", "Terms of service", "Privacy policy"]
    },
    {
      title: "Contact",
      items: ["Shoptamarket@gmail.com"]
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
                    key={linkItem} 
                    href="#" 
                    className="text-gray-600 text-[14px] hover:text-shopta-primary transition-colors"
                  >
                    {linkItem}
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
                      key={linkItem} 
                      href="#" 
                      className="text-gray-600 text-[16px] hover:text-shopta-primary transition-colors whitespace-nowrap"
                    >
                      {linkItem}
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