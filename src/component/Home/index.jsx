import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    {
      name: "Aligners",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png",
    },
    {
      name: "Dental Implants",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
    },
    {
      name: "Root Canal",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966324.png",
    },
    {
      name: "Digital Consultation",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      name: "Veneers",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966316.png",
    },
    {
      name: "Teeth Whitening",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966318.png",
    },
  ];

  const text = "Dental Care Done Right";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[300px] md:h-[380px]">
        <img
          src="dd.png"
          alt="Dental Care"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-white text-3xl md:text-5xl font-semibold text-center flex flex-wrap justify-center"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <div className="max-w-6xl mx-auto -mt-10 md:-mt-14 bg-white rounded-xl shadow-lg border p-6 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-105 transition"
          >
            <img src={item.img} alt={item.name} className="w-14 h-14" />
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>

      {/* DOCTORS SECTION */}
      <section className="bg-[#eaf4f8] py-16 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE GRID */}
          <div className="grid grid-cols-3 gap-4 bg-gray-200 p-4 rounded-lg">
            <img src="o.jpg" className="w-full h-32 object-cover rounded" />
            <img src="h.jpg" className="col-span-2 row-span-2 w-full h-full object-cover rounded" />
            <img src="t.jpg" className="w-full h-32 object-cover rounded" />
            <img src="s.jpg" className="w-full h-32 object-cover rounded" />
            <img src="a.jpg" className="w-full h-32 object-cover rounded" />
            <img src="tot.jpg" className="w-full h-32 object-cover rounded" />
          </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Orthodontists behind your smiles
            </h2>

            <p className="text-gray-600 mb-8">
              All our Orthodontists are Specialists with a minimum of 7 years of experience.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-gray-600">
                  Years of Collective Experience
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">20+</h3>
                <p className="text-sm text-gray-600">
                  Awards & Recognitions
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">4.7/5</h3>
                <p className="text-sm text-gray-600">
                  Average Patient Rating
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;