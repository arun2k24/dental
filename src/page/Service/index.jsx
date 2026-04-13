import React from 'react';
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="relative bg-[#f8fafc] py-12 md:py-20 px-6 overflow-hidden min-h-screen">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-green-600 rounded-b-full"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl font-light text-slate-800 mb-2 tracking-wide">
            The Service
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>

          {/* TEXT (comes last) */}
          <div className="max-w-3xl mx-auto space-y-4 text-slate-500 text-sm md:text-base leading-relaxed overflow-hidden">
            
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              We imbibe & adapt to all the technological advances in modern dentistry.
            </motion.p>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.7 }}
            >
              Our commitment ensures every patient walks out with a bright smile.
            </motion.p>

          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* IMAGE (FIRST) */}
          <div className="md:col-span-5 flex justify-center relative">
            
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40 scale-110"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }} // FIRST
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Dental Patient"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

          {/* TEXT SIDE */}
          <div className="md:col-span-7">
            
            {/* 🔥 HEADING AFTER IMAGE */}
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }} // AFTER IMAGE
              className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6"
            >
              Practice that perfects your "Smile"
            </motion.h3>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              >
                Dr.Simm’s's Dental Clinic is dedicated to the early detection and prevention of dental diseases.
              </motion.p>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.7 }}
              >
                Our ethical team of professionals take care of the smallest detail in every procedure.
              </motion.p>

            </div>
          </div>

        </div>
      </div>

      {/* BUTTON */}
      <button className="fixed bottom-8 right-8 w-24 h-24 bg-[#5c6bc0] text-white rounded-full shadow-2xl flex items-center justify-center text-center p-4 text-xs font-bold z-50 uppercase leading-tight hover:scale-110 transition-transform">
        Quick<br/>Enquiry
      </button>
    </section>
  );
};

export default Service;