// ArticleDetail.tsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, Article} from './blog';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import Footer from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = articles.find((a) => a.slug === slug);

  // Scroll to top when article opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-[#300132]">Article Not Found</h2>
        <Link to="/" className="bg-[#300132] text-white px-6 py-2 rounded-full font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-[#300132] pb-20">
        <Navbar/>
      <div className="max-w-4xl mx-auto px-6 pt-12">
       

        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            <span className="bg-[#f3ebf3] px-3 py-1.5 rounded-lg text-[#300132]">{post.category.replace('-', ' ')}</span>
            <span className="flex items-center gap-1"><Clock size={14}/> 5 Min Read</span>
            <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#300132] rounded-full flex items-center justify-center text-white font-black text-xl">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg leading-none">By {post.author}</span>
                <span className="text-xs text-gray-400 font-bold mt-1">Health Specialist</span>
              </div>
            </div>
            {/* <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-[#300132] transition-colors">
              <Share2 size={22}/>
            </button> */}
          </div>
        </header>

        <div className="relative group mb-16">
          <img 
            src={post.image} 
            className="w-full h-[400px] md:h-[550px] object-cover rounded-[48px] shadow-2xl" 
            alt={post.title} 
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-bold leading-relaxed mb-10 text-gray-800 border-l-4 border-[#300132] pl-8 py-2">
            {post.description}
          </p>
          
          <div className="space-y-8 text-gray-600 text-lg leading-[1.8] font-medium">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* TAGS SECTION */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap gap-3">
            {['Health', 'AI', 'Plant Based', 'Lifestyle'].map(tag => (
              <span key={tag} className="px-5 py-2 bg-gray-50 rounded-full text-sm font-bold text-gray-400 hover:text-[#300132] cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold mb-10 mt-10 text-gray-400 hover:text-[#300132] transition-colors">
          <ArrowLeft size={18} /> BACK TO ARTICLES
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default ArticleDetail;