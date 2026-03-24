import React from "react";
import foodImg from "@/assets/food.png";
import detoxImg from "@/assets/detox.png";

const HistorySection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-[#f7f7fb] relative overflow-hidden">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute -left-32 top-20 w-72 h-72 border border-dashed border-purple-300 rounded-full opacity-30"></div>
      <div className="absolute -right-32 bottom-10 w-80 h-80 border border-dashed border-purple-300 rounded-full opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs text-gray-400 mb-2">
            Create custom wellness lifestyle
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our History
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full border-l border-dotted border-purple-300 -translate-x-1/2"></div>
          <div className="md:hidden absolute left-5 top-0 h-full border-l border-dotted border-purple-300"></div>

          {/* ITEM */}
          {[
            {
              year: "2018",
              text: "Transition adapts to your daily routine. Whether you're busy, active, or just starting your health journey, our app fits seamlessly into your lifestyle with personalized recommendations and simple tracking.",
              align: "left",
            },
            {
              year: "2020",
              text: "Our humanoid AI assistant goes beyond tracking. It listens, learns, and guides you helping you make smarter food choices, stay consistent, and stay motivated every day.",
              align: "right",
            },
            {
              year: "2022",
              text: "Our AI assistant learns from you and provides smart, personalized guidance to help you eat better, stay consistent, and reach your goals.",
              align: "left",
            },
          ].map((item, i) => (
            <div key={i} className="relative mb-16 md:mb-16">

              {/* DESKTOP */}
              <div className="hidden md:grid grid-cols-2 items-center">
                {item.align === "left" ? (
                  <>
                    <div className="text-right pr-12">
                      <h3 className="text-xl font-bold text-[#4B014F] mb-2">
                        {item.year}
                      </h3>
                      <p className="text-gray-800 text-sm leading-relaxed max-w-md ml-auto">
                        {item.text}
                      </p>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="text-left pl-12">
                      <h3 className="text-xl font-bold text-[#4B014F] mb-2">
                        {item.year}
                      </h3>
                      <p className="text-gray-800 text-sm leading-relaxed max-w-md">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* MOBILE */}
              <div className="md:hidden pl-12">
                <h3 className="text-lg font-bold text-[#4B014F] mb-1">
                  {item.year}
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* DOT */}
              <div className="absolute left-5 md:left-1/2 top-1 -translate-x-1/2">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#4B014F] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-16 md:mt-24 max-w-5xl mx-auto">

          {/* CARD */}
          {[
            {
              title: "Food Selection",
              desc: "Refreshing vibrant healthy choice.",
              img: foodImg,
            },
            {
              title: "Detox Delight",
              desc: "Cleanse with delicious nutrition",
              img: detoxImg,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-r from-[#4B014F] to-[#7A3B7A] rounded-2xl px-6 py-6 md:px-8 md:py-8 flex items-center justify-between overflow-hidden"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />

              <div className="text-right">
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                  {card.title.split(" ")[0]} <br />
                  {card.title.split(" ")[1]}
                </h3>
                <p className="text-purple-200 text-xs mt-1">
                  {card.desc}
                </p>
              </div>

              {/* ICON */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-sm">
                ↗
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HistorySection;