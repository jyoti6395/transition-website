import React from 'react';
import { Play } from 'lucide-react';
import getStartedVideoThumbnail from '@/assets/get-started-video-thumbnail.png';
import googlePlayIcon from '@/assets/googleplay.png';
import appstoreIcon from '@/assets/appstore.png';
import {
  Dialog,
  DialogHeader ,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
const GetStartedSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
      
      {/* VIDEO SECTION */}
      <div className="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
        {/* Placeholder for your video thumbnail image */}
        <div className="aspect-[21/9] w-full relative">
          <img 
            src={getStartedVideoThumbnail}
            alt="Medical team" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#3B0A45] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-xl">
              Watch the video
              <Play size={16} fill="white" />
            </button>
          </div>
        </div>
      </div>

      {/* GETTING STARTED SECTION */}
      <div className="relative border border-gray-400 rounded-xl p-12 md:p-20 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Getting started
        </h2>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#3B0A45] hover:bg-black text-white px-10 py-4 rounded-full text-sm font-bold transition-all uppercase tracking-wide shadow-md">
              Get the App
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">Download The Transition App</DialogTitle>
              <DialogDescription className="text-center">
                Choose your preferred platform to download the app
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.transition.health&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={googlePlayIcon}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/the-transition/id6751278904"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={appstoreIcon}
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
    </div>
  );
};

export default GetStartedSection;