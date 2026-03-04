import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code2, Cpu, Globe2, Zap, Trophy, Bug, Play, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const EXPERTISE = [
  { icon: <Code2 size={24} />, title: "Backend Systems", desc: "Building scalable microservices and payment gateways at Razorpay." },
  { icon: <Cpu size={24} />, title: "Open Source", desc: "Core contributor to Django, Kubernetes, and Chromium." },
  { icon: <Globe2 size={24} />, title: "Web Infrastructure", desc: "Optimizing delivery and performance for millions of users." },
  { icon: <Zap size={24} />, title: "Performance", desc: "Latency reduction and high-throughput system design." },
];

const EXPERIENCE = [
  { company: "Razorpay", role: "Engineer", period: "2025 - Present" },
  { company: "Simfoni", role: "Engineer", period: "2022 - 2025" },
  { company: "Open Source", role: "Independent Contributor", period: "2020 - 2022" },
];

const BugSmasher = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bugs, setBugs] = useState<{ id: number; x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const bugIdRef = useRef(0);

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
    setBugs([]);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (bugs.length > 10) {
        setIsPlaying(false);
        return;
      }

      const newBug = {
        id: bugIdRef.current++,
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 80 + 10,
      };
      setBugs(prev => [...prev, newBug]);
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying, bugs.length]);

  const smashBug = (id: number) => {
    setBugs(prev => prev.filter(b => b.id !== id));
    setScore(prev => prev + 1);
  };

  return (
    <div className="bg-ink text-bg p-8 rounded-[2.5rem] relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center border border-bg/10">
      <div className="absolute top-8 left-8">
        <div className="text-xs font-mono uppercase tracking-widest text-accent mb-1">Mini Game</div>
        <h3 className="text-3xl font-display font-bold uppercase tracking-tighter">Bug Smasher</h3>
      </div>

      <div className="absolute top-8 right-8 text-right">
        <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-1">Score</div>
        <div className="text-4xl font-display font-bold">{score}</div>
      </div>

      {!isPlaying ? (
        <div className="text-center z-10">
          <Trophy size={64} className="mx-auto mb-6 text-accent" />
          <h4 className="text-2xl font-display font-bold mb-4">
            {score > 0 ? `Final Score: ${score}` : "Ready to smash some bugs?"}
          </h4>
          <button 
            onClick={startGame}
            className="bg-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
          >
            {score > 0 ? <><RefreshCw size={20} /> Try Again</> : <><Play size={20} /> Start Game</>}
          </button>
          <p className="mt-6 text-xs font-mono opacity-40 uppercase tracking-widest">Smash them before they overflow the stack!</p>
        </div>
      ) : (
        <div className="absolute inset-0" ref={containerRef}>
          <AnimatePresence>
            {bugs.map(bug => (
              <motion.button
                key={bug.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                onClick={() => smashBug(bug.id)}
                className="absolute p-4 text-accent hover:text-white transition-colors"
                style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
              >
                <Bug size={32} />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      )}
      
      <div className="absolute bottom-8 text-xs font-mono opacity-20 uppercase tracking-[0.5em]">
        Developer Mode: Active
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-accent font-mono text-sm mb-4 tracking-widest uppercase">
              Engineer @ Razorpay
            </span>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-display font-bold uppercase tracking-tighter mb-8 text-balance">
              Crafting <br />
              <span className="text-ink/20 outline-text">Digital</span> <br />
              Infrastructure
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
              <p className="max-w-xl text-lg md:text-xl text-ink/70 leading-relaxed">
                Building high-performance payment systems and contributing to the global open-source ecosystem. 
                Based in India, working on the future of fintech.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/projects" 
                  className="bg-ink text-bg px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats - Removed as per user feedback */}
      </section>

      {/* Expertise Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-ink/5 hover:border-accent/20 transition-colors group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Journey</span>
            <h2 className="text-5xl font-display font-bold uppercase tracking-tighter leading-none">Professional <br /> Experience</h2>
          </div>
          <div className="md:w-2/3 w-full flex flex-col gap-px bg-ink/5 border border-ink/5">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-bg p-8 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-white transition-colors"
              >
                <div>
                  <h4 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">{exp.company}</h4>
                  <p className="text-ink/60 font-medium">{exp.role}</p>
                </div>
                <div className="text-xs font-mono uppercase tracking-widest opacity-40 mt-4 md:mt-0">{exp.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <BugSmasher />
      </section>
    </div>
  );
};

