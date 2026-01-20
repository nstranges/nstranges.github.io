import { type Project, type Skill } from "@/lib/constants";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
}

export class MemStorage implements IStorage {
  async getProjects(): Promise<Project[]> { return []; }
  async getSkills(): Promise<Skill[]> { return []; }
}

export const storage = new MemStorage();
