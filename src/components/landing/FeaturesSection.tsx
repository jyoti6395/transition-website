import React from 'react';
import { motion } from "framer-motion";

// Replace these with your actual local paths
import featureImg1 from "@/assets/feature1.png"; 
import featureImg2 from "@/assets/feature2.png";
import featureImg3 from "@/assets/feature3.png";

const FeatureSection = () => {
  // Common styles to ensure high fidelity
  const brandPurple = "#4a154b";

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-[42px] md:text-[28px] font-bold text-gray-900 leading-tight">
            Supporting your health and the Transition
          </h2>
          <p className="text-[#4a154b] text-[42px] md:text-[28px] font-bold">
            goals at every stage
          </p>
        </div>

        {/* 1st SECTION - SMARTER FASTER MEAL TRACKING */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The background image is now the container itself */}
            <img 
              src={featureImg1} 
              alt="Meal tracking UI" 
              className="w-full rounded-sm object-cover" 
            />
          </motion.div>

          <div className="md:pl-10">
            <h3 className="text-[42px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Smarter, faster <br /> meal tracking
            </h3>
            <p className="text-gray-600 text-[18px] leading-relaxed max-w-md">
              Log your meals effortlessly with intelligent tracking. Snap a photo, speak your input, or add items instantly — all designed to fit your daily routine.
            </p>
          </div>
        </div>

        {/* 2nd SECTION - INTELLIGENT NUTRITION TRACKING (Reversed) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-[42px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Intelligent <br /> nutrition tracking
            </h3>
            <p className="text-gray-600 text-[18px] leading-relaxed max-w-md">
              Go beyond basic tracking with AI-driven insights that help you understand, adjust, and optimize your nutrition effortlessly.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src={featureImg2} 
              alt="AI Chat UI" 
              className="w-full rounded-sm object-cover" 
            />
          </motion.div>
        </div>

        {/* 3rd SECTION - YOUR NUTRITION INTELLIGENTLY GUIDED */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={featureImg3} 
              alt="Detailed Insights UI" 
              className="w-full rounded-sm object-cover" 
            />
          </motion.div>

          <div className="md:pl-10">
            <h3 className="text-[42px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Your nutrition, <br /> intelligently guided
            </h3>
            <p className="text-gray-600 text-[18px] leading-relaxed max-w-md">
              Understand what you eat with detailed insights and let AI suggest smarter adjustments based on your goals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
