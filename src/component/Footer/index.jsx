import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f3b63] text-white pt-12 pb-6 px-6 md:px-16">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

        {/* Newsletter */}
        <div className="flex w-full md:w-1/2">
          <input
            type="email"
            placeholder="sample@mail.com"
            className="w-full px-4 py-3 rounded-l-full outline-none text-gray-700"
          />
          <button className="bg-blue-500 px-6 py-3 rounded-r-full font-semibold">
            SUBSCRIBE
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
            <div
              key={i}
              className="bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-600"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Contact */}
        <div>
          <h3 className="text-blue-400 text-lg font-semibold mb-4">Contact Us</h3>

          <div className="flex items-start gap-3 mb-3">
            <FaPhoneAlt className="text-blue-400 mt-1" />
            <p>98460 09004</p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="text-blue-400 mt-1" />
            <p>drsimms@yahoo.com</p>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-400 mt-1" />
            <p>
              Above Cochin Medicals, Kaloor–Kadavanthara Rd, Kadavanthra Junction,
              Ernakulam, Kochi - 682 020, Kerala, India.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-400 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Who Are We</li>
            <li>Our Services</li>
            <li>Dental Tourism</li>
            <li>Photo Gallery</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-400 text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Cosmetic dentistry</li>
            <li>Smile Makeover</li>
            <li>Smile designing</li>
            <li>Teeth Whitening</li>
            <li>Root canal treatment</li>
          </ul>
        </div>

        {/* Services Column 2 */}
        <div className="mt-8 md:mt-10">
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
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-300">
        © 2022 Dr. Simm’s Smile and Cosmetic Dental Clinic. All Rights Reserved.
      </div>

      {/* Scroll Top Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-600">
          ↑
        </button>
      </div>

    </footer>
  );
};

export default Footer;