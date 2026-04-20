import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f3b63] text-white pt-10 pb-6 px-4 sm:px-6 md:px-12 lg:px-16">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">

        {/* Newsletter */}
        <div className="flex w-full lg:w-1/2">
          <input
            type="email"
            placeholder="sample@mail.com"
            className="w-full px-4 py-2 sm:py-3 rounded-l-full outline-none text-gray-700 text-sm sm:text-base"
          />
          <button className="bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-r-full font-semibold text-sm sm:text-base">
            SUBSCRIBE
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-4">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
            <div
              key={i}
              className="bg-blue-500 p-2 sm:p-3 rounded-full cursor-pointer hover:bg-blue-600"
            >
              <Icon size={14} className="sm:w-4 sm:h-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">

        {/* Contact */}
        <div>
          <h3 className="text-blue-400 text-base sm:text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="flex items-start gap-3 mb-3">
            <FaPhoneAlt className="text-blue-400 mt-1" />
            <p className="break-all">99999993333</p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="text-blue-400 mt-1" />
            <p className="break-all">drsimms@yahoo.com</p>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-400 mt-1" />
            <p className="text-xs sm:text-sm leading-relaxed">
              Above kodakal Medicals, Kalor–Kadavayur Rd, Kadavayur Junction,
              ettikal, Kochi - 684 556, Kerala, India.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-400 text-base sm:text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-300 cursor-pointer">Who Are We</li>
            <li className="hover:text-blue-300 cursor-pointer">Our Services</li>
            <li className="hover:text-blue-300 cursor-pointer">Dental Tourism</li>
            <li className="hover:text-blue-300 cursor-pointer">Photo Gallery</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-400 text-base sm:text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>Cosmetic dentistry</li>
            <li>Smile Makeover</li>
            <li>Smile designing</li>
            <li>Teeth Whitening</li>
            <li>Root canal treatment</li>
          </ul>
        </div>

        {/* Services Column 2 */}
        <div>
          <h3 className="text-blue-400 text-base sm:text-lg font-semibold mb-4 lg:hidden">
            More Services
          </h3>
          <ul className="space-y-2">
            <li>Orthodontics</li>
            <li>Dental implant</li>
            <li>Tooth colour filling</li>
            <li>Veneering</li>
            <li>Gum treatment</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-xs sm:text-sm text-gray-300">
        © 2022 Dr. Simm’s Smile and Cosmetic Dental Clinic. All Rights Reserved.
      </div>

      {/* Scroll Top Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 p-2 sm:p-3 rounded-md hover:bg-blue-600"
        >
          ↑
        </button>
      </div>

    </footer>
  );
};

export default Footer;