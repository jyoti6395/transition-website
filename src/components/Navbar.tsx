import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      
      <div className="w-full grid h-[72px] grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 lg:px-16">
        
        {/* LOGO (LEFT EDGE) */}
        <a href="#" className="flex items-center">
          <img 
            src={logo}
            alt="The Transition Logo" 
            className="h-12 md:h-12 object-contain"
          />
        </a>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {links.map((l) => {
            const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
            const isActive = activeLink === href || (l === "Home" && activeLink === "/");
            return (
              <a
                key={l}
                href={href}
                className={`font-ui text-[15px] lg:text-[16px] font-medium transition px-3 py-1.5 rounded-md ${
                  isActive 
                    ? " text-black/90 hover:text-black underline" 
                    : "text-black/90 hover:text-black"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="h-11 rounded-full bg-[#3D0642] px-6 text-[14px] font-medium text-white hover:bg-[#3D0642]/90 flex items-center gap-2"
              >
                Get the App <ChevronDown className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-45 p-2" align="end">
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={googleplay}
                    alt="Google Play Store"
                    className="h-10 w-auto"
                  />
            
                </a>
                <a
                  href="https://apps.apple.com/in/app/the-transition/id6751278904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="h-11 w-auto"
                  />
                  
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* MOBILE MENU */}
        <button
          className="justify-self-end text-black md:hidden"
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
              <Button className="w-full h-11 rounded-full bg-white text-[#3D0642] font-medium flex items-center justify-center gap-2">
                Get the App <ChevronDown className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-4" align="center">
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src={googleplay}
                    alt="Google Play Store"
                    className="h-9 w-auto"
                  />
                
                </a>
                <a
                  href="https://apps.apple.com/in/app/the-transition/id6751278904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-0 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src={appstore}
                    alt="App Store"
                       className="h-10 w-auto"
                  />
                
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