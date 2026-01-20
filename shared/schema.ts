import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
});
