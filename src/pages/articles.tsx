import Navbar from "@/components/Navbar";
import ArticlesHero from "./articles/ArticlesHero";
import BlogSection from "./articles/BlogSection";
import SubscribeSection from "./articles/SubscribeSection";
import Footer from "@/components/landing/Footer";


const Articles = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
   <ArticlesHero/>
   <BlogSection/>
   <SubscribeSection/>
   <Footer/>
  </div>
);

export default  Articles;
