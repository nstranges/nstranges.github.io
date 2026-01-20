import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactForm } from "@/components/ContactForm";
import { PROJECTS, SKILLS, PERSONAL_INFO } from "@/lib/constants";

export default function Home() {
  const projects = PROJECTS;
  const skills = SKILLS;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

        <div className="container px-4 text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              AI Researcher & Software Engineer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight mb-6">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specializing in AI reasoning, robotics, and high-performance software systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg rounded-full" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="I specialize in building performant web applications with modern technologies."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Unsplash abstract tech image */}
              {/* <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Coding setup" className="object-cover w-full h-full" /> */}
               <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                 {/* Placeholder for personal photo */}
                 <span className="text-lg">Developer Photo</span>
               </div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Master of Science in Applied Computing student at the University of Toronto, specializing in Artificial Intelligence. My work focuses on reasoning path optimization and episodic memory for AI systems.
              </p>
              <p>
                With a background in Mechatronic Systems Engineering and Business from Western University, I blend technical expertise with a strategic mindset. I've had the opportunity to build software at Tesla, lead R&D teams, and publish AI research.
              </p>
              <div className="pt-6 space-y-4">
                {PERSONAL_INFO.education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-bold text-foreground">{edu.school}</h4>
                    <p className="text-sm font-medium text-primary">{edu.degree}</p>
                    <p className="text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 md:py-32">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="The tools and technologies I use to bring ideas to life."
          />
          
          <div className="space-y-12">
            {skillsByCategory && Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => (
              <div key={category}>
                <h3 className="text-xl font-bold mb-6 text-foreground/80">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBadge key={skill.id} skill={skill} index={catIndex * 5 + index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 md:py-32 bg-secondary/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of projects I've worked on recently."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container px-4 mx-auto">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a project in mind? Let's build something together."
          />
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border/50 bg-secondary/10">
        <div className="container px-4 mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
