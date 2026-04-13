import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const phone = "9744436191";
  const message = "Hello, I would like to enquire about your services";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSend = async () => {
    const token = "YOUR_CSEND_TOKEN";

    try {
      const res = await fetch("https://api.csend.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: "Test User",
          message: "New enquiry from website",
        }),
      });

      if (res.ok) {
        alert("Message sent successfully");
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="d.png"
          alt="contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">
            Contact
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <p className="text-gray-600 mb-4">
            Dr Cherian's Smile & Dental Clinic
          </p>

          <p className="text-gray-600 mb-4">
            Kaloor-Kadavanthara Rd, Kochi - 682020,
            Kerala, India
          </p>

          <p className="text-gray-700 mb-4">+91 9744436191</p>

          <p className="text-gray-700 mb-6">
            drsimmsi92@gmail.com
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              WhatsApp
            </button>

            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Right - Timing (Animated) */}
        <div className="bg-white p-6 rounded shadow">
          {[
            { day: "Monday", time: "08:00 AM - 05:00 PM" },
            { day: "Tuesday", time: "08:00 AM - 05:00 PM" },
            { day: "Wednesday", time: "08:00 AM - 05:00 PM" },
            { day: "Thursday", time: "08:00 AM - 05:00 PM" },
            { day: "Friday", time: "08:00 AM - 05:00 PM" },
            { day: "Saturday", time: "08:00 AM - 01:00 PM" },
            { day: "Sunday", time: "Closed" },
          ].map((item, index) => (
            
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.4, // 🔥 slow stagger
                duration: 0.6
              }}
              className="flex justify-between border-b py-2 text-gray-600"
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </motion.div>

          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;