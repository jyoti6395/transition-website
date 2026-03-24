import React from "react";
import { motion } from "framer-motion";
import googlePlayImg from "@/assets/googleplay.png";
import appStoreImg from "@/assets/appstore.png";
import phoneMockup from "@/assets/phones.png";

const WhyTransitionSection = () => {
  return (
    // ✅ EXACT SAME PADDING AS STATS
    <section className="w-full py-12 md:py-20 bg-white">
      
      <div className="container mx-auto px-4">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            className="flex justify-center order-last lg:order-first"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={phoneMockup}
              alt="App preview"
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[480px] object-contain"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="w-full" // ✅ important (no max-width shrink)
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#4A154B] mb-4 md:mb-6">
              Why TheTransition
            </h2>

            {/* SUBTEXT */}
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold mb-6 md:mb-8">
              Track your habits and see real progress with clear, visual data.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {[
                "Talk to a humanoid AI that understands your needs and gives real-time nutrition guidance.",
                "Log meals effortlessly with intelligent tracking and accurate nutritional insights.",
                "Set and achieve goals tailored to your lifestyle — weight loss, fitness, or balance."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">

                  {/* BULLET */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-[3px] border-[#4A154B]/20">
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#4A154B]" />
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA TEXT */}
            <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6">
              Take the first step toward a healthier, stress-free life.
            </p>

            <p className="text-gray-900 font-semibold mb-3 md:mb-4 text-sm sm:text-base">
              Download the app now!
            </p>

            {/* STORE BUTTONS */}
            <div className="flex flex-row gap-3 sm:gap-4">
              
              <a href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className=" rounded-md  py-2 flex items-center justify-center hover:shadow-sm transition">
                <img
                  src={googlePlayImg}
                  alt="Google Play"
                  className="h-8 w-auto sm:h-9 md:h-10"
                />
              </a>

              <a href="https://apps.apple.com/in/app/the-transition/id6751278904" target="_blank" rel="noopener noreferrer" className=" rounded-md   py-2 flex items-center justify-center hover:shadow-sm transition">
                <img
                  src={appStoreImg}
                  alt="App Store"
                  className="h-8 w-auto sm:h-9 md:h-10"
                />
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyTransitionSection;