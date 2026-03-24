import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const DEMO_VIDEO_SRC = "/videos/demo.mp4";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoDialog = (open: boolean) => {
    setIsVideoOpen(open);
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: "#3D0642",
        backgroundImage: "url('/Images/hero-image.jpg')",
        backgroundSize: "cover", // ✅ FIXED
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
     <div className="absolute inset-0 bg-[linear-gradient(90deg,#3D0642_0%,rgba(61,6,66,0.95)_20%,rgba(61,6,66,0.5)_50%,rgba(0,0,0,0)_75%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-xl">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-medium leading-tight
              text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px]"
          >
            Living Healthy,
            <br className="hidden sm:block" />
            Powered By AI.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mt-4 sm:mt-6
              text-sm sm:text-base md:text-lg lg:text-xl
              leading-relaxed max-w-lg"
          >
            Track meals, set smart goals, and get real-time guidance from your AI assistant — all in one seamless experience.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Dialog open={isVideoOpen} onOpenChange={handleVideoDialog}>
              <DialogTrigger asChild>
                <Button
                  className="
                    relative overflow-hidden 
                    rounded-xl border-2 border-white/40 
                    bg-white/10 text-white backdrop-blur-md
                    flex flex-col items-center justify-center gap-3

                    w-[200px] h-[120px]
                    sm:w-[240px] sm:h-[140px]
                    md:w-[260px] md:h-[150px]
                  "
                >
                  {/* TOP IMAGE */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-10 overflow-hidden rounded-b-md opacity-80">
                    <img
                      src="/Images/hero-image.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* PLAY */}
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/70">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                    </div>

                    <span className="text-sm sm:text-lg md:text-xl font-medium">
                      View Demo
                    </span>
                  </div>
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[95vw] max-w-4xl bg-black p-0 border-none">
                <video
                  ref={videoRef}
                  className="w-full aspect-video"
                  controls
                  autoPlay
                >
                  <source src={DEMO_VIDEO_SRC} type="video/mp4" />
                </video>
              </DialogContent>
            </Dialog>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;