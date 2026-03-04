import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Circle } from "lucide-react";
import { CHECKLIST_ITEMS } from "../content/checklist";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Checklist = () => {
  const completedCount = CHECKLIST_ITEMS.filter(item => item.completed).length;
  const progress = (completedCount / CHECKLIST_ITEMS.length) * 100;

  return (
    <section className="py-24 px-6 bg-ink text-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            Personal Milestones
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Life Checklist
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-mono uppercase opacity-50">Progress</span>
              <span className="text-2xl font-display font-bold">{completedCount} / {CHECKLIST_ITEMS.length}</span>
            </div>
            <div className="h-2 w-full bg-bg/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHECKLIST_ITEMS.map((item) => (
            <div 
              key={item.id}
              className={cn(
                "p-4 rounded-xl border transition-all flex items-center gap-4",
                item.completed 
                  ? "bg-bg/5 border-accent/20 text-bg" 
                  : "bg-transparent border-bg/10 text-bg/40"
              )}
            >
              {item.completed ? (
                <CheckCircle2 className="text-accent shrink-0" size={20} />
              ) : (
                <Circle className="shrink-0" size={20} />
              )}
              <span className={cn(
                "font-medium",
                item.completed ? "line-through opacity-50" : ""
              )}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
