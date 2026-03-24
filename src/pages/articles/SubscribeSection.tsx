import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 sm:py-16 md:py-20 flex justify-center px-4">
      <div className="w-full max-w-6xl bg-[#300132] rounded-xl px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-14 
      flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-0">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-[20px] sm:text-[24px] md:text-[26px] font-semibold leading-[1.4]">
            Subscribe & <br className="hidden sm:block" /> Join With Now !
          </h2>
        </div>

        {/* INPUT + BUTTON */}
        <div className="w-full md:w-auto">
          <div className="flex items-center bg-white rounded-sm border border-gray-300 overflow-hidden h-[38px] w-full md:w-auto">
            
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-3 text-[12px] outline-none w-full md:w-[220px] h-full"
            />

            <button className="bg-[#4B0B4F] text-white text-[12px] px-4 h-full whitespace-nowrap border-l border-gray-300">
              Subscribe Now
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;