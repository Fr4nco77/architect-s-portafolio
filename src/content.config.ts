import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const project = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    hero: z.string(),
    description: z.string(),
    process: z.object({
      images: z.array(
        z.object({
          src: z.string(),
          caption: z.string(),
        }),
      ),
      text: z.string(),
    }),
    gallery: z.array(
      z.object({
        src: z.string(),
        caption: z.string(),
      }),
    ),
    details: z.array(
      z.object({
        src: z.string(),
        caption: z.string(),
      }),
    ),
    reflection: z.string(),
    prev: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = { project };
