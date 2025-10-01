"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const JoinWaitlist = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    usage: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const usageOptions = ["As a customer shopping", "As a personal shopper"];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.usage) {
      newErrors.usage = "Please select how you plan to use Shopta";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else {
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ""))) {
        newErrors.phoneNumber = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    const newErrors = { ...errors };

    if (name === "firstName" && !formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (name === "lastName" && !formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    } else if (name === "phoneNumber") {
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ""))) {
          newErrors.phoneNumber = "Please enter a valid phone number";
        }
      }
    }

    setErrors(newErrors);
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      usage: value,
    }));

    if (errors.usage) {
      setErrors((prev) => ({
        ...prev,
        usage: "",
      }));
    }
  };

  const handleSelectBlur = () => {
    if (!formData.usage) {
      setErrors((prev) => ({
        ...prev,
        usage: "Please select how you plan to use Shopta",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    const loadingToast = toast.loading("Adding you to the waitlist...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success("🎉 Thank you! You've been added to our waitlist.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          usage: "",
          phoneNumber: "",
        });
        setErrors({});
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="relative">
     <div className="hidden lg:block absolute top-6 right-12 text-shopta-primary">
        <button className="cursor-pointer" onClick={goBack}>Go back</button>
      </div>
      </div>
    <div className="min-h-screen max-h-screen overflow-hidden flex flex-col lg:flex-row px-5 lg:px-[113px] lg:items-center py-4 lg:py-8 lg:gap-[174px]">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <Image
          src="/assets/waitlist.svg"
          width={490}
          height={459}
          alt="Waitlist"
          className="w-full h-auto max-h-[70vh] object-contain"
        />
      </div>

     

      <div className="flex-1 flex flex-col max-h-full overflow-y-auto lg:overflow-visible">
        <button className="lg:hidden mb-2" onClick={goBack}>
          <Image src={"/assets/back.png"} width={30} height={30} alt="back" />
        </button>

        <h1 className="text-[24px] text-shopta-text font-[700]">
          Be the first to know
        </h1>
        <h2 className="text-[16px] font-[600] text-shopta-text mt-3 lg:mt-5">
          We'd love to get your details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-4 lg:mt-6 space-y-3 lg:space-y-4"
        >
          {/* First Name */}
          <div>
            <label className="block text-[14px] lg:text-[16px] font-[400] text-[#27272799] mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Enter your first name"
              className={`w-full h-[40px] lg:h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
                errors.firstName
                  ? "ring-1 ring-red-500 bg-red-50"
                  : "focus:ring-1 focus:ring-blue-500"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-[11px] mt-0.5">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[14px] lg:text-[16px] font-[400] text-[#27272799] mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Enter your last name"
              className={`w-full h-[40px] lg:h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
                errors.lastName
                  ? "ring-1 ring-red-500 bg-red-50"
                  : "focus:ring-1 focus:ring-blue-500"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-[11px] mt-0.5">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[14px] lg:text-[16px] font-[400] text-[#27272799] mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Enter your email address"
              className={`w-full h-[40px] lg:h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
                errors.email
                  ? "ring-1 ring-red-500 bg-red-50"
                  : "focus:ring-1 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>
            )}
          </div>

          {/* Usage Dropdown */}
          <div>
            <label className="block text-[14px] lg:text-[16px] font-[400] text-[#27272799] mb-1">
              How would you like to use Shopta?
            </label>
            <Select value={formData.usage} onValueChange={handleSelectChange}>
              <SelectTrigger
                onBlur={handleSelectBlur}
                className={`w-full h-[40px] lg:h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 text-[14px] outline-none ${
                  errors.usage
                    ? "ring-1 ring-red-500 bg-red-50"
                    : "focus:ring-1 focus:ring-blue-500"
                } ${
                  !formData.usage ? "text-[#7A7A7A]" : "text-black"
                } data-[placeholder]:text-[#7A7A7A]`}
              >
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
            {errors.usage && (
              <p className="text-red-500 text-[11px] mt-0.5">{errors.usage}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[14px] lg:text-[16px] font-[400] text-[#27272799] mb-1">
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Enter your phone number"
              className={`w-full h-[40px] lg:h-[45px] px-4 bg-gray-100 rounded-[5px] border-0 placeholder-[#7A7A7A] text-[14px] outline-none ${
                errors.phoneNumber
                  ? "ring-1 ring-red-500 bg-red-50"
                  : "focus:ring-1 focus:ring-blue-500"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-[11px] mt-0.5">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 lg:py-4 text-[18px] lg:text-[20px] font-[400] mt-4 lg:mt-8 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors h-[48px] lg:h-[56px] rounded-[20px]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default JoinWaitlist;
