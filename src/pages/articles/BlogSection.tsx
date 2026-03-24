// BlogSection.tsx
import React, { useState } from 'react';
import { Search, ArrowUpRight, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, blogCategories, recentPosts, Article} from './blog';

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = articles.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-[#300132]">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: MAIN ARTICLES LIST */}
        <div className="flex-1 space-y-16">
          {filteredArticles.length > 0 ? filteredArticles.map((post: Article) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden rounded-xl mb-6 shadow-sm">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-center gap-4 text-[12px] opacity-70 mb-3 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-[#4a154b] transition-colors">{post.title}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{post.description}</p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="bg-[#300132] text-white px-6 py-2.5 rounded-xl inline-flex items-center gap-2 text-sm font-bold hover:bg-[#4a154b] transition-all transform hover:translate-x-1"
              >
                Read More <ArrowUpRight size={18} />
              </Link>
            </article>
          )) : (
            <div className="text-center py-20 bg-gray-50 rounded-[32px]">
              <p className="text-xl font-medium opacity-40">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="w-full lg:w-[350px] space-y-10">
          {/* SEARCH */}
          <section className="bg-[#f3ebf3] p-6 rounded-3xl">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..." 
                className="w-full py-3 px-4 rounded-xl bg-white outline-none text-sm text-black"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#300132] p-2 rounded-lg text-white">
                <Search size={18} />
              </div>
            </div>
          </section>

          {/* CATEGORIES */}
          <section className="bg-[#f3ebf3] p-6 rounded-3xl">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`w-full flex justify-between p-4 rounded-xl text-sm font-bold transition-all ${activeCategory === 'all' ? 'bg-[#300132] text-white scale-[1.02]' : 'bg-white hover:bg-gray-50'}`}
              >
                <span>All Articles</span>
              </button>
              {blogCategories.map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`w-full flex justify-between p-4 rounded-xl text-sm font-bold transition-all ${activeCategory === cat.slug ? 'bg-[#300132] text-white scale-[1.02]' : 'bg-white hover:bg-gray-50'}`}
                >
                  <span>{cat.name}</span>
                  <span className="opacity-50">({cat.count})</span>
                </button>
              ))}
            </div>
          </section>

          {/* RECENT POSTS */}
          <section className="bg-[#f3ebf3] p-6 rounded-3xl">
            <h3 className="text-lg font-bold mb-6">Recent Post</h3>
            <div className="space-y-6">
              {recentPosts.map((post: Article, i) => (
                <Link to={`/blog/${post.slug}`} key={i} className="flex gap-4 group">
                  <img src={post.image} className="w-16 h-16 rounded-xl object-cover shadow-sm" alt="" />
                  <div>
                    <h4 className="text-sm font-bold leading-tight group-hover:text-[#4a154b]">{post.title}</h4>
                    <p className="text-[11px] opacity-60 mt-2 flex items-center gap-1 font-bold">
                      <Calendar size={12}/> {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default BlogSection;