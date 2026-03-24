import Navbar from "@/components/Navbar";

import StatsSection from "./about/StatsSection";
import HistorySection from "./about/HistorySection";
import WhyTransitionSection from "./about/WhyTransitionSection";
import GetStartedSection from "./about/GetStartedSection";
import Aboutherosection from "./about/Aboutherosection";
import Footer from "@/components/landing/Footer";


const about = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Aboutherosection/>
    <StatsSection/>
    <HistorySection/>
    <WhyTransitionSection/>
    <GetStartedSection/>
    <Footer/>
  </div>
);

export default about;
