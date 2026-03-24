import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/landing/Footer';

const ContactPage = () => {
  return (
    <main className="w-full bg-white">
      {/* Navbar placed outside of padding to stay full-width */}
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* HEADER SECTION - Matches image title and subtitle */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our AI assistant is designed to understand your lifestyle and provide personalized guidance.
              Have questions or need support? We're here to help you stay consistent and on track.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: CONTACT INFORMATION - Deep Purple Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-[#3B0A45] rounded-[2rem] p-10 text-white min-h-[480px] shadow-xl"
            >
              <h2 className="text-xl font-bold mb-10">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-center gap-5">
                  <Phone size={22} className="text-white" />
                  <span className="text-lg">+1 (123) 456-7893</span>
                </div>

                <div className="flex items-center gap-5">
                  <Mail size={22} className="text-white" />
                  <span className="text-lg">stjohnsdpc@gmail.com</span>
                </div>

                <div className="flex items-center gap-5">
                  <MapPin size={22} className="text-white" />
                  <span className="text-lg">US</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <form className="space-y-10">
                
                {/* Name Input with Floating Border Label */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-[#3B0A45] text-sm font-bold z-10">
                    Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your Name"
                    className="w-full border border-purple-200 rounded-xl px-6 py-5 focus:outline-none focus:border-[#3B0A45] transition-colors placeholder:text-gray-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-[#3B0A45] text-sm font-bold z-10">
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your Email"
                    className="w-full border border-purple-200 rounded-xl px-6 py-5 focus:outline-none focus:border-[#3B0A45] transition-colors placeholder:text-gray-300"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-[#3B0A45] text-sm font-bold z-10">
                    How can we help?
                  </label>
                  <textarea 
                    rows={6}
                    placeholder="Enter your message here"
                    className="w-full border border-purple-200 rounded-xl px-6 py-5 focus:outline-none focus:border-[#3B0A45] transition-colors placeholder:text-gray-300 resize-none"
                  />
                </div>

                {/* Submit Button - Left Aligned to match image form flow */}
                <div className="flex justify-start">
                  <button 
                    type="submit"
                    className="bg-[#3B0A45] hover:bg-black text-white font-bold py-4 px-14 rounded-xl transition-all shadow-lg active:scale-95"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;