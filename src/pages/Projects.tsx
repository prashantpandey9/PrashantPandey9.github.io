import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-video bg-ink/5 rounded-2xl mb-6 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${project.title}/1200/800`} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-ink/60 mb-4 max-w-md">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-ink/40">#{t}</span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-bg transition-all"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
