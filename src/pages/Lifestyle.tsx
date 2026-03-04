import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

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

export const Lifestyle = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistry = async () => {
      try {
        const response = await fetch("/blogs/registry.json");
        const data = await response.json();
        // Filter for lifestyle related content
        const lifestyleBlogs = data.filter((b: BlogPost) => 
          b.category.toLowerCase() === "mindfulness" || 
          b.category.toLowerCase() === "travel" || 
          b.category.toLowerCase() === "setup" ||
          b.tags.includes("lifestyle")
        );
        setBlogs(lifestyleBlogs);
      } catch (err) {
        console.error("Failed to fetch blog registry", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistry();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#f5f2ed] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              Beyond the Code
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter italic serif">
              Lifestyle
            </h2>
          </div>
          <Link to="/blog" className="text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors mt-4 md:mt-0">
            View All Blog Posts
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white p-6 rounded-[2rem]">
                <div className="aspect-[4/5] bg-ink/5 rounded-[1.5rem] mb-6" />
                <div className="h-6 bg-ink/5 rounded w-3/4 mb-2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{blog.category}</span>
                    <span className="w-1 h-1 rounded-full bg-ink/20" />
                    <span className="text-[10px] font-mono text-ink/40">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold leading-tight group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
