import { motion } from "framer-motion";
import type { Skill } from "@/lib/constants";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-white dark:bg-card border border-border/50 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold text-foreground">{skill.name}</span>
        {skill.proficiency && (
          <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary" 
              style={{ width: `${skill.proficiency}%` }} 
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
