import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  Menu, 
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NAVIGATION, SOCIALS } from "./constants";

// Pages
import { Home } from "./pages/Home";
import { OpenSource } from "./pages/OpenSource";
import { Projects } from "./pages/Projects";
import { Lifestyle } from "./pages/Lifestyle";
import { Checklist } from "./pages/Checklist";
import { BlogDetail } from "./pages/BlogDetail";
import { Blog } from "./pages/Blog";

/** Utility for Tailwind class merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Layout Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled || location.pathname !== "/" ? "bg-bg/80 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-display font-bold text-xl tracking-tighter">
          PRASHANT<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            item.url.startsWith("http") ? (
              <a 
                key={item.id} 
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest"
              >
                {item.title}
              </a>
            ) : (
              <Link 
                key={item.id} 
                to={item.url}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-widest hover:text-accent",
                  location.pathname === item.url ? "text-accent" : "text-ink"
                )}
              >
                {item.title}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-ink/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {NAVIGATION.map((item) => (
              item.url.startsWith("http") ? (
                <a 
                  key={item.id} 
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-display font-medium hover:text-accent transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link 
                  key={item.id} 
                  to={item.url}
                  className={cn(
                    "text-lg font-display font-medium transition-colors hover:text-accent",
                    location.pathname === item.url ? "text-accent" : "text-ink"
                  )}
                >
                  {item.title}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-ink/10 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-bold text-2xl tracking-tighter">
          PRASHANT<span className="text-accent">.</span>
        </div>
        
        <div className="flex gap-8">
          {SOCIALS.map(s => (
            <a 
              key={s.name} 
              href={s.url} 
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>

        <div className="text-xs font-mono text-ink/40 uppercase tracking-widest">
          © {new Date().getFullYear()} Built with Passion
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


