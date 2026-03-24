import { Instagram, Linkedin, Twitter, Facebook, Phone, Mail } from "lucide-react";

// Assuming these are your asset paths
import logo from "@/assets/logo1.png";
import googlePlayImg from "@/assets/googleplay.png";
import appStoreImg from "@/assets/appstore.png";

const Footer = () => {
  return (
    <footer className="bg-[#300132] text-white py-24 px-4 md:px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">

          {/* 1. LEFT BRAND SECTION (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
              
            </div>

            <p className="text-xl font-medium tracking-wide">
              Your Health In Your Hands
            </p>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider">Get the App!</p>
              <div className="flex gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  <img src={googlePlayImg} alt="Google Play" className="h-11 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://apps.apple.com/in/app/the-transition/id6751278904" target="_blank" rel="noopener noreferrer">
                  <img src={appStoreImg} alt="App Store" className="h-11 cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION COLUMNS & SOCIALS (Col span 5) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-4">
              {/* About */}
              <div>
                <h4 className="text-lg font-bold mb-5">About</h4>
                <ul className="space-y-3 text-[14px] opacity-80">
                  <li className="hover:text-gray-300 cursor-pointer">Features</li>
                  <li className="hover:text-gray-300 cursor-pointer">AI Assistant</li>
                  <li className="hover:text-gray-300 cursor-pointer">App Screens</li>
                </ul>
              </div>

              {/* Articles */}
              <div>
                <h4 className="text-lg font-bold mb-5">Articles</h4>
                <ul className="space-y-3 text-[14px] opacity-80">
                  <li className="hover:text-gray-300 cursor-pointer">Resources</li>
                  <li className="hover:text-gray-300 cursor-pointer">Support</li>
                </ul>
              </div>

              {/* Pricing */}
              <div>
                <h4 className="text-lg font-bold mb-5">Pricing</h4>
                <ul className="space-y-3 text-[14px] opacity-80">
                  <li className="hover:text-gray-300 cursor-pointer">FAQs</li>
                  
               
                </ul>
              </div>
            </div>

            {/* SOCIAL ICONS (Aligned under the link columns as per SS) */}
            <div className="flex gap-4 mt-12">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white text-[#300132] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-all shadow-md"
                >
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* 3. RIGHT CONTACT & SUBSCRIBE (Col span 3) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-5">Contact</h4>
              <div className="space-y-4 text-[14px]">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white/80" />
                  <span>+1 (123) 456-7893</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white/80" />
                  <span>stjohnsdpc@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Subscribe</h4>
              <p className="text-[14px] opacity-90 leading-snug">
                Join our community to receive update
              </p>
              <div className="bg-white rounded-full flex items-center p-1 w-full max-w-[280px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-2 text-sm text-black outline-none bg-transparent placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;