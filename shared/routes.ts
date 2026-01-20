import { z } from 'zod';

export const api = {
  projects: { list: { path: '/api/projects' } },
  skills: { list: { path: '/api/skills' } },
  contact: { send: { path: '/api/contact' } }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  return path;
}
