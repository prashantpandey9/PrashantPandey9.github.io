import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, Tag, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRegistry = async () => {
      try {
        const response = await fetch("/blogs/registry.json");
        const data = await response.json();
        // Sort by date descending
        setBlogs(data.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      } catch (err) {
        console.error("Failed to fetch blog registry", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistry();
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-24 px-6 min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              Thoughts & Insights
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              The Blog
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed">
              Automated updates via OpenClaw. Exploring the intersection of high-scale engineering, 
              open-source culture, and mindful living.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={18} />
            <input 
              type="text" 
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-ink/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-accent transition-colors text-sm"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-ink/5 rounded-2xl mb-4" />
                <div className="h-6 bg-ink/5 rounded w-3/4 mb-2" />
                <div className="h-4 bg-ink/5 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBlogs.map((blog, idx) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bg/90 backdrop-blur-sm text-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-ink/5">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-[10px] font-mono text-ink/40 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold leading-tight mb-3 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-ink/60 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-ink/30 font-medium">#{tag}</span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && filteredBlogs.length === 0 && (
          <div className="py-24 text-center border border-dashed border-ink/10 rounded-3xl">
            <p className="text-ink/40 font-mono text-sm">No posts found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};
