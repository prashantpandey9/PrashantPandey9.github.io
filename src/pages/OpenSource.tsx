import React from "react";
import { motion } from "motion/react";
import { Github } from "lucide-react";
import { OS_PROJECTS } from "../constants";

export const OpenSource = () => {
  return (
    <section className="py-24 px-6 bg-ink text-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              Contribution History
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
              Open Source
            </h2>
          </div>
          <p className="max-w-md text-bg/60 text-sm md:text-base italic font-serif">
            "Software is a conversation between developers across time."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bg/10 border border-bg/10">
          {OS_PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-ink hover:bg-bg/5 transition-colors group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-accent">{project.date}</span>
                <a href={project.githubURL} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github size={20} />
                </a>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-bg/60 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase border border-bg/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
