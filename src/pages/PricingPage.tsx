import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/landing/Footer';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "9",
      desc: "Perfect for personal use",
      features: ["Up to 1 users", "Analytics platform", "30-day free trial", "Team libraries"],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "12",
      desc: "Perfect for small teams.",
      features: ["Up to 20 users", "Smart analytics platform", "30-day free trial", "Team libraries", "Chat support 24/7"],
      isPopular: true,
    },
    {
      name: "Organization",
      price: "20",
      desc: "Perfect for organizations",
      features: ["Unlimited users", "System analytics", "30-day free trial", "Team libraries", "Chat support 24/7", "Advanced support services"],
      isPopular: false,
    }
  ];

  const testimonials = [
    { name: "Michael T.", role: "Fitness Enthusiast", text: "Transition has completely changed how I approach my diet. The AI guidance makes everything simple and easy to follow." },
    { name: "Sarah K.", role: "Working Professional", text: "The AI assistant feels like a real coach. It helps me make better food choices every day without overthinking." },
    { name: "David R.", role: "Lifestyle Coach", text: "I've stayed consistent with my health goals for the first time. Tracking and guidance are just effortless." },
  ];

  const faqs = [
    { 
      q: "Meal Tracking", 
      a: "Track your daily meals and stay aligned with your health goals. Transition helps you monitor your progress while guiding you with smart insights to improve your habits over time." 
    },
    { 
      q: "AI Guidance", 
      a: "Track what you eat and let our AI assistant guide you with personalized suggestions. Every choice becomes smarter, helping you stay consistent and reach your goals faster." 
    },
    { 
      q: "Achieve Goals", 
      a: "Log your meals, monitor your progress, and get intelligent guidance to stay on track every day." 
    },
    { 
      q: "Intelligent Meal Tracking", 
      a: "Transition goes beyond basic tracking combining data and AI to help you make informed decisions, build better habits, and achieve lasting results." 
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-[#3B0A45]">
      <Navbar />

      {/* FLEXIBLE PLANS */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Flexible Plans</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Consectetur dolor labore laborum ipsum pariatar culpa dolor duis dolore nulla. <br/>
            Labore aute sunt mollit sunt commodo labore exuemat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`rounded-[2.5rem] p-10 flex flex-col ${
                plan.isPopular 
                ? 'bg-[#3B0A45] text-white shadow-xl scale-105 z-10' 
                : 'bg-[#F3F0F5] text-[#3B0A45]'
              }`}
            >
              <div className="text-center mb-8 relative">
                <p className="font-semibold text-sm mb-4 opacity-80">{plan.name}</p>

                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-xs opacity-60 ml-1">/month</span>
                </div>

                <p className="text-xs opacity-70 italic">{plan.desc}</p>

                {plan.isPopular && (
                  <div className="absolute top-0 right-0">
                    <Star size={18} fill="white" />
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.isPopular ? "text-purple-300" : "text-[#3B0A45]"} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-sm border ${
                plan.isPopular 
                ? 'bg-white text-[#3B0A45]' 
                : 'border-[#3B0A45]/20 hover:bg-white'
              }`}>
                {plan.name === "Organization" ? "Contact Sale" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F3F0F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Trusted by doctor Professionals</h2>
          <p className="text-gray-500 mb-16 text-sm">
            See what our customers have to say about TheTransition.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex text-[#FFB800] gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-8">"{t.text}"</p>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Pricing FAQs</h2>
        <p className="text-center text-gray-500 mb-20 text-sm">
          Common questions about our pricing and plans.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 border rounded-[2rem] flex gap-4">
              <Check size={16} />
              <div>
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3B0A45] py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Free Trial Today
          </h2>
          <p className="opacity-80 mb-10 text-sm">
            No credit card required. Try all features free for 14 days.
          </p>

          <button className="bg-white text-[#3B0A45] px-10 py-4 rounded-2xl font-bold flex items-center gap-3 mx-auto hover:bg-gray-100 transition group">
            Start Free Trial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* GAP BETWEEN CTA & FOOTER */}
      <div className="w-full h-20 bg-white"></div>

      <Footer />
    </div>
  );
};

export default PricingPage;