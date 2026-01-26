export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  repoUrl?: string;
  pdfUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export const PERSONAL_INFO = {
  name: "Nicholas Stranges",
  email: "nicholastranges4@hotmail.com",
  phone: "519-317-6378",
  location: "Toronto, ON, Canada",
  linkedin: "https://www.linkedin.com/in/nicholas-stranges/",
  github: "https://github.com/nstranges",
  education: [
    {
      school: "University of Toronto",
      degree: "Master of Science in Applied Computing, AI Specialization",
      details: "Vector Scholarship in AI Winner."
    },
    {
      school: "Ivey Business School",
      degree: "HBA Honours Business Administration",
      details: "Dual degree with engineering."
    },
    {
      school: "Western University",
      degree: "BESc Mechatronic Systems Engineering",
      details: "4.0 GPA in Engineering."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Research: Interpretable Ratings for LLMs",
    description: "Lead author of 'What Is Missing: Interpretable Ratings for Large Language Model Outputs'. Developed a rating system outperforming standard techniques by 3x.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    repoUrl: "https://github.com/nstranges/expert-chat",
    pdfUrl: `${import.meta.env.BASE_URL}What_Is_Missing.pdf`,
    tags: ["LLM", "Reinforcement Learning", "PyTorch", "HuggingFace"],
    featured: true
  },
  {
    id: 2,
    title: "AI Research: Reasoning paths for LLMs",
    description: "Designed a reasoning-tree approach that turns LLM token entropy into explicit decision graphs. The approach enables better reasoning analysis and more efficient reinforcement learning. Future work will include inference time path selection to improve reasoning.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    pdfUrl: `${import.meta.env.BASE_URL}Building_Reasoning_Trees.pdf`,
    tags: ["LLM", "Reasoning", "PyTorch", "HuggingFace"],
    featured: true
  },
  {
    id: 3,
    title: "AI Research: Agent Episodic Memory",
    description: "Built a multimodal episodic memory system for embodied LLM agents. The system retrieves and reuses past experiences via vector databases, significantly improving decision-making performance in Minecraft tasks.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    pdfUrl: `${import.meta.env.BASE_URL}Agent_Episodic_Memory.pdf`,
    tags: ["LLM", "Agents", "Vector Databases", "HuggingFace"],
    featured: true
  },
  {
    id: 4,
    title: "Ecolux",
    description: "Co-founded an energy monitoring business. Developed prototypes using React, Flask, and Google Cloud, attracting investor interest.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    tags: ["React", "Flask", "Google Cloud", "MongoDB"],
    featured: false
  },
  {
    id: 5,
    title: "Tesla: Controls Software Automation",
    description: "Independently created and deployed a full-stack automatic code generation application in Python, replacing a two-day manual task for engineers.",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    tags: ["Python", "Automation", "Full-Stack", "Controls"],
    featured: false
  },
  {
    id: 6,
    title: "Continual Energy: R&D Software",
    description: "Implemented an API-accessible data pipeline for real-time training of an LSTM classification network in PyTorch, achieving 98% accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["PyTorch", "LSTM", "Docker", "PostgreSQL"],
    featured: false
  },
  
];

export const SKILLS: Skill[] = [
  { id: 1, name: "PyTorch", category: "AI/ML", proficiency: 90 },
  { id: 2, name: "TensorFlow", category: "AI/ML", proficiency: 70 },
  { id: 3, name: "Reinforcement Learning", category: "AI/ML", proficiency: 90 },
  { id: 4, name: "Python", category: "Languages", proficiency: 95 },
  { id: 5, name: "JavaScript/React", category: "Web", proficiency: 70 },
  { id: 6, name: "C++", category: "Languages", proficiency: 80 },
  { id: 7, name: "Docker", category: "Tools", proficiency: 85 },
  { id: 8, name: "SQL", category: "Backend", proficiency: 85 },
  { id: 9, name: "Robotics", category: "Engineering", proficiency: 90 },
  { id: 10, name: "Vector Databases", category: "Backend", proficiency: 85 },
];
