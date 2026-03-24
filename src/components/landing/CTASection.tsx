import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Update this path to your heart-shaped brand icon
import heartIcon from "@/assets/heart-icon.png"; 

const CTASection = () => {
  return (
    <section className="bg-white py-24 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP HEADING - Matches the dual-color typography */}
        <div className="text-center mb-14">
          <h2 className="text-[28px] md:text-[34px] font-bold leading-tight tracking-tight">
            <span className="text-[#4a154b]">The Transition is lovingly created</span>
            <br />
            <span className="text-[#4a154b]">by doctors and scientists</span>
            <span className="text-gray-900"> from around the world.</span>
          </h2>
        </div>

        {/* FLOATING CTA CARD - Matches the border-radius and layout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#4a154b]/40 rounded-[35px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 transition-shadow hover:shadow-sm"
        >
          <div className="flex items-center gap-6">
            {/* Heart Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <img 
                src={heartIcon} 
                alt="Transition" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-[#4a154b] text-[22px] md:text-[25px] font-bold mb-1">
                Start your Transition from $9.99
              </h3>
              <p className="text-gray-500 text-[15px] md:text-[17px] font-medium leading-relaxed">
                Stay healthy and organized—try our app and start improving your life today.
              </p>
            </div>
          </div>

          {/* Action Button - Exact pill shape and dark plum color */}
          <Button 
            className="rounded-full bg-[#300132] hover:bg-[#4a154b] text-white px-10 py-7 text-[16px] font-bold shadow-md h-auto"
          >
            Learn More
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;