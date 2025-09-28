"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation'

const JoinWaitlist = () => {
  const router = useRouter()

  const goBack = () => {
    router.back() 
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    usage: '',
    phoneNumber: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const usageOptions = [
    "As a customer shopping",
    "As a personal shopper"
  ]

  const validateForm = () => {
    const newErrors = {}
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Usage validation
    if (!formData.usage) {
      newErrors.usage = 'Please select how you plan to use Shopta'
    }
    
    // Phone number validation - make it required
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else {
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/
      if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
        newErrors.phoneNumber = 'Please enter a valid phone number'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleInputBlur = (e) => {
    const { name } = e.target
    
    // Validate single field on blur
    const newErrors = { ...errors }
    
    if (name === 'firstName' && !formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (name === 'lastName' && !formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required'
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    } else if (name === 'phoneNumber') {
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone number is required'
      } else {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/
        if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
          newErrors.phoneNumber = 'Please enter a valid phone number'
        }
      }
    }
    
    setErrors(newErrors)
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      usage: value
    }))
    
    // Clear error when user selects an option
    if (errors.usage) {
      setErrors(prev => ({
        ...prev,
        usage: ''
      }))
    }
  }

  const handleSelectBlur = () => {
    if (!formData.usage) {
      setErrors(prev => ({
        ...prev,
        usage: 'Please select how you plan to use Shopta'
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Thank you! You\'ve been added to our waitlist.')
        // Reset form or redirect
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          usage: '',
          phoneNumber: ''
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-5 lg:px-[113px] lg:items-center pt-9 pb-8 lg:flex lg:gap-[174px]">
      <div className="hidden lg:block lg:flex-1">
        <Image src="/assets/waitlist.svg" width={490} height={459} className="w-full h-auto" />
      </div>
      <div className="lg:flex-1">
      <button className="lg:hidden" onClick={goBack}>
        <Image src={"/assets/back.png"} width={30} height={30} alt="back" />
      </button>
      <h1 className="text-[24px] text-shopta-text font-[700] mt-2">Be the first to know</h1>
      
      <h2 className="text-[16px] font-[600] text-shopta-text mt-5">We'd love to get your details</h2>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-[16px] font-[400] text-[#27272799] mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Enter your first name"
            className={`w-full h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
              errors.firstName ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-[12px] mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-[16px] font-[400] text-[#27272799] mb-2">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Enter your last name"
            className={`w-full h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
              errors.lastName ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-[12px] mt-1">{errors.lastName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-[16px] font-[400] text-[#27272799] mb-2">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Enter your email address"
            className={`w-full h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
              errors.email ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
        </div>

        {/* Usage Dropdown */}
        <div>
          <label className="block text-[16px] font-[400] text-[#27272799] mb-2">How would you like to use Shopta?</label>
          <Select value={formData.usage} onValueChange={handleSelectChange}>
            <SelectTrigger 
              onBlur={handleSelectBlur}
              className={`w-full h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 text-[14px] outline-none ${
                errors.usage ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-1 focus:ring-blue-500'
              } ${!formData.usage ? 'text-[#7A7A7A]' : 'text-black'} data-[placeholder]:text-[#7A7A7A]`}>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded-[5px] shadow-lg">
              {usageOptions.map((option, index) => (
                <SelectItem 
                  key={index} 
                  value={option} 
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-[14px]"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.usage && <p className="text-red-500 text-[12px] mt-1">{errors.usage}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[16px] font-[400] text-[#27272799] mb-2">Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Enter your phone number"
            className={`w-full h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
              errors.phoneNumber ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-[12px] mt-1">{errors.phoneNumber}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 text-[20px] font-[400] mt-8 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors h-[56px] rounded-[20px]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      </div>
    </div>
  )
}

export default JoinWaitlist