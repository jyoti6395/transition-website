import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Menu, X } from "lucide-react";
import logo1 from "@/assets/logo1.png";
import googleplay from "@/assets/googleplay.png";
import appstore from "@/assets/appstore.png";

const links = ["Home", "About", "Articles", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav className="fixed top-0 left-4 right-0 z-50 bg-transparent backdrop-blur-md">
      
      <div className="relative h-[72px] w-full">
        
        {/* LEFT LOGO (exact corner) */}
        <div className="absolute left-6 md:left-10 lg:left-16 top-1/2 -translate-y-1/2">
          <img
            src={logo1}
            alt="logo"
            className="h-12 md:h-12 object-contain"
          />
        </div>

        {/* CENTER LINKS */}
        <div className="hidden md:flex justify-center items-center h-full gap-10">
          {links.map((l) => {
            const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
            const isActive = activeLink === href || (l === "Home" && activeLink === "/");
            return (
              <a
                key={l}
                href={href}
                className={`text-[15px] lg:text-[16px] font-medium transition px-3 py-1.5 rounded-md ${
                  isActive 
                    ? " text-white underline" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>

        {/* RIGHT BUTTON (exact corner) */}
        <div className="hidden md:block absolute right-6 md:right-10 lg:right-16 top-1/2 -translate-y-1/2">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="h-11 rounded-full bg-[#3D0642] px-6 text-[14px] font-medium text-white flex items-center gap-2 hover:bg-[#3D0642]/90">
                Get the App <ChevronDown className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 bg-white rounded-xl p-4 border-none shadow-xl">
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg transition"
                >
                  <img
                    src={googleplay}
                    alt="Google Play"
                    className="w-auto h-9"
                  />
                 
                </a>
                <a
                  href="https://apps.apple.com/in/app/the-transition/id6751278904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg   transition"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="w-auto h-10"
                  />
                 
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#3D0642] border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => {
            const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
            const isActive = activeLink === href || (l === "Home" && activeLink === "/");
            return (
              <a
                key={l}
                href={href}
                className={`block py-2 text-base font-medium transition px-3 py-2 rounded-md ${
                  isActive 
                    ? "bg-[#300132] text-white underline" 
                    : "text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            );
          })}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full h-11 rounded-full bg-white text-[#3D0642] font-medium">
                Get the App
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 bg-white rounded-xl p-4 border-none shadow-xl">
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
                >
                  <img
                    src={googleplay}
                    alt="Google Play"
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-sm font-medium text-white">Google Play</p>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/in/app/the-transition/id6751278904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-sm font-medium text-white">App Store</p>
                  </div>
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </nav>
  );
};

export default Navbar;