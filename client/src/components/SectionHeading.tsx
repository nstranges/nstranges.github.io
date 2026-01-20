import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  alignment = "center" 
}: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16 space-y-4",
        alignment === "center" && "text-center",
        alignment === "left" && "text-left",
        alignment === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
