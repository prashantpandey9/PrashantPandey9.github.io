import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import { X, ArrowLeft } from "lucide-react";

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) throw new Error("Blog not found");
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setContent("# Blog Not Found\nSorry, the blog post you are looking for could not be found.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-6 py-24 relative">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="markdown-body prose prose-lg prose-ink max-w-none"
          >
            <Markdown>{content}</Markdown>
          </motion.div>
        )}
      </div>
    </div>
  );
};
