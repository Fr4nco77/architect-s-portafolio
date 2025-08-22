import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const project = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/projects" }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    subtitle: z.object({
      en: z.string(),
      es: z.string(),
    }),
    hero: z.string(),
    description: z.object({
      en: z.string(),
      es: z.string(),
    }),
    process: z.object({
      images: z.array(
        z.object({
          src: z.string(),
          caption: z.object({
            en: z.string(),
            es: z.string(),
          }),
        }),
      ),
      text: z.object({
        en: z.string(),
        es: z.string(),
      }),
    }),
    gallery: z.array(
      z.object({
        src: z.string(),
        caption: z.object({
          en: z.string(),
          es: z.string(),
        }),
      }),
    ),
    details: z.array(
      z.object({
        src: z.string(),
        caption: z.object({
          en: z.string(),
          es: z.string(),
        }),
      }),
    ),
    reflection: z.object({
      en: z.string(),
      es: z.string(),
    }),
    prev: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = { project };
