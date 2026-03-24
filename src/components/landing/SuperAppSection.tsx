import { motion } from "framer-motion";
import googleImg from "@/assets/googleplay.png";
import appStoreImg from "@/assets/appstore.png";

const SuperAppSection = () => {
  return (
    <section className="bg-[#f5f6f8] py-12 md:py-20 overflow-hidden">

      {/* HEADER (CENTERED) */}
      <div className="max-w-5xl mx-auto text-center px-4 md:px-6 mb-12 md:mb-20">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-tight">
          The ALL-IN-ONE App that helps <br className="hidden md:block" />
          to manage your Daily Health.
        </h2>

        <p className="mt-3 md:mt-4 text-gray-500 text-sm md:text-base lg:text-lg">
          Your partner in health – easy, safe, and always there when you need it.
        </p>
      </div>

      {/* 50-50 SECTION */}
      <div className="grid md:grid-cols-2 items-center">

        {/* LEFT IMAGE (FULL 50%) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full order-2 md:order-1"
        >
          <div className="w-full">
            <img
              src="/Images/hand-holding-phone-bg.png"
              alt="Health App"
              className="w-full max-h-[400px] md:max-h-[600px] lg:max-h-[790px] object-cover rounded-r-none md:rounded-r-[40px]"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT (50%) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center justify-center md:justify-start px-4 md:px-6 lg:px-8 py-8 md:py-10 order-1 md:order-2"
        >
          <div className="max-w-[520px] w-full text-center md:text-left">

            {/* TITLE */}
            <h3 className="text-[32px] md:text-[42px] lg:text-[52px] md:text-[58px] font-bold text-[#4a154b] leading-tight">
              Your daily nutrition,
              <br className="hidden md:block" />
              simplified
            </h3>

            {/* UNDERLINE */}
            <svg
              width="140"
              height="10"
              viewBox="0 0 180 12"
              fill="none"
              className="mt-2 md:mt-3 mb-5 md:mb-6 opacity-70 mx-auto md:mx-0"
            >
              <path
                d="M3 9C45 4 135 2 177 8"
                stroke="#4a154b"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-base md:text-[18px] lg:text-[20px] leading-relaxed mb-5 md:mb-6">
              Get clear, personalized guidance on meals and timing to stay consistent and feel your best.
            </p>

            {/* REVIEWS */}
            <p className="text-base md:text-[18px] lg:text-[20px] font-bold text-[#4a154b] mb-5 md:mb-6">
              465,121{" "}
              <span className="text-gray-700 font-medium text-sm md:text-[15px]">
                reviews and counting
              </span>
            </p>

            {/* APP SECTION */}
            <div>
              <p className="font-semibold text-gray-900  text-base md:text-lg mb-3">
                Get the App!
              </p>

              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  <img
                    src={googleImg}
                    alt="Google Play"
                    className="h-12"
                  />
                </a>
                <a href="https://apps.apple.com/in/app/the-transition/id6751278904" target="_blank" rel="noopener noreferrer">
                  <img
                    src={appStoreImg}
                    alt="App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuperAppSection;
