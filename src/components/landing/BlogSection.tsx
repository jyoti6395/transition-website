import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Replace with your actual blog post thumbnail images
import blogImg1 from "@/assets/blog1.png";
import blogImg2 from "@/assets/blog2.png";
const BlogSection = () => {
  const navigate = useNavigate();
  const categories = ["AI in Medicine", "Apple Health", "Blockchain Health ID", "Dece"];

  const blogPosts = [
    {
      title: "After analyzing thousands of health journeys, one truth stands clear — real progress comes from building better habits, not just tracking them.",
      highlight: "Transition makes it possible.",
      subtext: "Don't just track food. Build a healthier life.",
      image: blogImg1,
    },
    {
      title: "The future of health isn't about tracking alone — it's about intelligent guidance and lasting habits.",
      highlight: "Transition brings that future to you.",
      subtext: "Don't just monitor your routine. Transform it.",
      image: blogImg2,
    }
  ];

  return (
    <section className="bg-[#300132] mb-40 py-24 px-4 md:px-12 text-center text-white font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[42px] font-bold mb-6">
            Read our Articles for health and inspiration
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed opacity-90">
            The best advice from doctors and scientists, health trends, and practical tips on sleep, nutrition, mental health, and fitness—all for your best life.
          </p>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-2 md:p-6 text-left shadow-2xl overflow-hidden"
            >
              {/* TAGS SCROLL */}
              <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
                {categories.map((cat, i) => (
                  <span key={i} className="bg-gray-200 w-30 text-gray-700 px-4 py-1.5 rounded-full text-[12px] font-semibold">
                    {cat}
                  </span>
                ))}
              </div>

              {/* CONTENT AREA */}
              <div className="relative">
                <div className="pr-20">
                  <h3 className="text-gray-800 text-[20px] md:text-[22px] font-medium leading-relaxed mb-6">
                    {post.title}
                  </h3>
                  <p className="text-[#4a154b] text-[20px] md:text-[22px] font-bold mb-2">
                    {post.highlight}
                  </p>
                  <p className="text-gray-500 text-[15px] font-medium">
                    {post.subtext}
                  </p>
                </div>

                {/* THUMBNAIL OVERLAY */}
                <div className="absolute top-1 right-0 w-24 h-20 md:w-58 md:h-20 rounded-xl overflow-hidden shadow-md">
                  <img src={post.image} alt="Blog post" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-3 mb-10">
          {[1, 2, 3, 4].map((dot) => (
            <div key={dot} className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-white opacity-40' : 'bg-white opacity-20'}`} />
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="space-y-6">
          <p className="text-gray-300 text-[14px] font-medium uppercase tracking-widest">
            Start your journey to better health
          </p>
          <button 
            onClick={() => navigate('/articles')}
            className="bg-white text-[#300132] px-10 py-4 rounded-full font-bold text-[15px] hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Explore the Articles now!
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;