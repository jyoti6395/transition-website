import { motion } from "framer-motion";

import salad1 from "@/assets/salad1.png";
import salad2 from "@/assets/salad2.png";
import salad3 from "@/assets/salad3.png";

const ArticlesHero = () => {
  return (
    <section className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden flex items-center justify-center">

      {/* 🔥 RICH GRADIENT */}
      <div className="absolute inset-0 
        bg-[linear-gradient(90deg,#4B014F_0%,#6D2C6F_40%,#9A7B9F_100%)]" />

      {/* TITLE */}
      <h1 className="relative z-10 pt-16 sm:pt-20 text-white font-semibold
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
        Articles
      </h1>

      {/* ✅ LEFT SMALL IMAGE - Hidden on mobile, visible on tablet+ */}
      <motion.img
        src={salad1}
        alt=""
        className="absolute left-4 sm:left-[12%] top-[35%] 
          w-[40px] sm:w-[50px] md:w-[80px] opacity-90 hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      />

      {/* ✅ RIGHT BIG BOWL */}
      <motion.img
        src={salad2}
        alt=""
        className="absolute right-2 sm:right-[8%] top-[20%] sm:top-[25%]
          w-[70px] sm:w-[90px] md:w-[160px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      />

      {/* ✅ RIGHT FLOAT MIX - Hidden on mobile, visible on tablet+ */}
      <motion.img
        src={salad3}
        alt=""
        className="absolute right-[15%] sm:right-[20%] top-[45%] sm:top-[50%]
          w-[45px] sm:w-[55px] md:w-[90px] opacity-90 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      />

    </section>
  );
};

export default ArticlesHero;