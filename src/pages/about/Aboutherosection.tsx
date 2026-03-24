import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import illustration from "@/assets/illustration.png";
import breakfastImg from "@/assets/breakfast.png";
// Assets - Using the filenames you provided

const Aboutherosection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white border-b overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start order-2 lg:order-1"
          >
            <p className="text-gray-400 text-sm mb-3 md:mb-4 font-medium tracking-tight">
              Dolore dolore voluptate aliqua ut mi
            </p>
            
            <div className="relative mb-6 md:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B0A45] mb-2 tracking-tight">
                About us
              </h2>
              {/* Hand-drawn Underline SVG */}
              <svg 
                width="120"
                height="12"
                viewBox="0 0 200 15" 
                fill="none" 
                className="absolute -bottom-1 left-0 w-[100px] md:w-[180px] text-[#3B0A45]"
              >
                <path 
                  d="M5 10C60 2 140 2 195 10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed max-w-lg mb-8 md:mb-12">
              Transition is designed to simplify healthy living through smart technology. 
              With intelligent meal tracking, personalized goals, and an advanced AI 
              assistant, the app helps users make better decisions, build consistent 
              habits, and stay aligned with their health journey.
            </p>

            <Button 
              variant="outline" 
              className="rounded-full px-8 md:px-12 py-4 md:py-6 border-[#3B0A45] text-[#3B0A45] hover:bg-[#3B0A45] hover:text-white font-bold text-sm md:text-md transition-all border-2"
            >
              Learn more
            </Button>
          </motion.div>

          {/* RIGHT COLUMN: Illustration & Arch */}
          <motion.div 
            className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The Arched Purple Shape */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] aspect-[4/4.5] bg-[#3B0A45] rounded-t-[140px] sm:rounded-t-[180px] md:rounded-t-[220px] lg:rounded-t-[240px] flex items-end justify-center">
              
              {/* Main Illustration */}
              <img 
                src={illustration} 
                alt="Health consultation" 
                className="w-[55%] sm:w-[58%] md:w-[60%] h-auto z-10 ml-12 sm:ml-16 md:ml-20 mb-16 sm:mb-18 md:mb-20"
              />

              {/* Floating Breakfast Card */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -left-10 sm:-left-16 md:-left-20 top-[30%] sm:top-[35%] md:top-[40%] z-20 bg-white p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] border border-gray-50"
              >
                <h4 className="text-[#3B0A45] font-bold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 md:mb-3">Breakfast</h4>
                <div className="rounded-lg sm:rounded-xl overflow-hidden mb-1.5 sm:mb-2 md:mb-3 aspect-video">
                  <img 
                    src={breakfastImg} 
                    alt="Healthy Toast" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-gray-900">Berry Pudding</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400">320 cal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Aboutherosection;