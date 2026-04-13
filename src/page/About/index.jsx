import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* --- About Us Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">
              About Us
            </span>

            {/* 🔥 Animated Heading */}
            <motion.h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-slate-900 overflow-hidden">
              
              {/* LEFT PART */}
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                Of all the things you wear,
              </motion.span>

              <br />

              {/* RIGHT PART */}
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-block"
              >
                your smile is by far the most appreciated.
              </motion.span>

            </motion.h1>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-slate-900">Dr. Simmis's Smile and Cosmetic Dental Clinic</span>. 
                We are well equipped with state-of-the-art treatment and surgical facilities adhering to international 
                standards of dentistry.
              </p>
              <p>
                We have on our panel an eminent team of skilled Doctors who work together as consultants 
                providing comprehensive dental treatments to our patients. We have an exclusive department 
                for cosmetic dentistry and smile design ensuring personalized care.
              </p>
              <p>
                With our stringent sterilization procedures with autoclaving, we ensure maximum hygiene 
                and safety in dental care.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Patient smiling at dental clinic" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Doctor Profile Section --- */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Doctor Image with Rotation */}
            <div className="md:col-span-5 lg:col-span-4">
              <motion.div
                initial={{ rotate: -5, scale: 0.95 }}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="bg-white p-2 rounded-2xl shadow-lg"
              >
                <img 
                  src="kot.webp" 
                  alt="Dr. Cherian" 
                  className="rounded-xl w-full grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>
            </div>

            {/* Doctor Bio */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-5xl font-bold text-slate-900 mb-2">Dr. Cherian</h2>
              <div className="w-16 h-1 bg-teal-500 mb-8"></div>
              
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-slate-900">Dr. Cherian K. Abraham</span>, 
                  CEO of Dr.Simmis's Smile and Cosmetic Dental Clinic, studied in College of Dental Surgery, 
                  Kasturba Medical College, Mangalore University.
                </p>
                <p>
                  He went on to specialize in advanced cosmetic procedures and has since dedicated his 
                  career to transforming smiles through a blend of art and science. His vision was to 
                  create a space where patients feel at ease while receiving world-class clinical care.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Back to Top Button --- */}
      <div className="fixed bottom-8 right-8">
        <button className="p-3 bg-white border border-slate-200 rounded shadow-md text-teal-600 hover:text-white hover:bg-teal-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;