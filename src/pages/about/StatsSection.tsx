import { motion } from "framer-motion";

import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";

import ladyImg from "@/assets/lady.png";

const StatsSection = () => {
  const stats = [
    { icon: icon1, value: "5+", label: "Meals tracked", keyword: "Meals" },
    { icon: icon2, value: "2+", label: "Smart AI Sessions", keyword: "Smart AI" },
    { icon: icon3, value: "8+", label: "Builds trust & scale", keyword: "Builds" },
    { icon: icon4, value: "4+", label: "Goals Achieved", keyword: "Goals" },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white border-t">
      <div className="max-w-4xl mx-auto px-4">

        {/* ✅ STATS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8 md:mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-5 py-3 sm:py-4 border border-purple-300 rounded-xl sm:rounded-2xl bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* ICON */}
              <img
                src={stat.icon}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                alt="icon"
              />

              {/* TEXT */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-none">
                  {stat.value}
                </h3>

                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-0.5">
                  <span className="text-purple-700 font-semibold">
                    {stat.keyword}
                  </span>{" "}
                  {stat.label.replace(stat.keyword, "")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ PURPLE CARD */}
        <div className="relative rounded-xl overflow-hidden px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 shadow-lg 
          bg-gradient-to-r from-[#4B014F] to-[#8E6C8F] min-h-[260px] sm:min-h-[260px] md:min-h-[260px]">

          {/* ✅ MOBILE TEXT */}
          <div className="md:hidden mb-4">
            <h2 className="text-sm font-semibold text-white leading-snug">
              Your Personalized Health Hub
            </h2>
            <p className="text-white/90 text-xs mt-1">
              Track your progress, get meal plans and access expert guidance.
            </p>
          </div>

          {/* ✅ DESKTOP TEXT */}
          <div className="hidden md:block">
            <div className="max-w-[40%]">
              <h2 className="text-lg font-semibold text-white leading-snug">
                Your Personalized <br /> Health Hub
              </h2>
            </div>

            <div className="absolute right-8 top-7 max-w-[40%] text-right">
              <p className="text-white/90 text-sm leading-relaxed">
                Track your progress, get meal plans and access expert guidance — all in one place.
              </p>
            </div>
          </div>

          {/* ✅ IMAGE */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src={ladyImg}
              className="h-[120px] sm:h-[140px] md:h-[180px] object-contain"
              alt="lady"
            />
          </div>

          {/* ✅ LEFT FLOAT CARD */}
          <div className="absolute left-[6%] sm:left-[12%] md:left-[18%] bottom-[12%] sm:bottom-[15%] md:bottom-[18%] bg-white  rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none px-2 sm:px-3 md:px-4 py-2 shadow-md w-[110px] sm:w-[130px] md:w-[150px]">
            
            <p className="text-[8px] text-gray-400">Data label</p>

            <div className="flex justify-between items-center mt-1">
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">23,000</p>
              <div className="bg-purple-700 text-white w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-md text-[9px]">
                😊
              </div>
            </div>

            <p className="text-[8px] sm:text-[9px] text-green-500 mt-1">
              ▲ 5.39%
            </p>
          </div>

          {/* ✅ RIGHT FLOAT CARDS */}
          <div className="absolute right-[6%] sm:right-[12%] md:right-[20%] top-[45%] flex flex-col gap-2">

  {/* CARD 1 */}
  <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1.5 sm:py-2 shadow-md text-[10px] sm:text-xs
    rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

    🛒 +56.000
  </div>

  {/* CARD 2 */}
  <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1.5 sm:py-2 shadow-md text-[10px] sm:text-xs
    rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

    <span className="bg-purple-700 text-white w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full text-[8px]">
      f
    </span>

    +123K
  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;