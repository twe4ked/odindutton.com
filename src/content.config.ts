import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
});

const photos = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      slug: z.string().optional(),
      photos: z.array(
        z.object({
          src: image(),
          title: z.string().optional(),
        }),
      ),
    }),
  loader: glob({ pattern: "**/*.toml", base: "./src/photos" }),
});

const projects = defineCollection({
  schema: z.object({
    projects: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        description: z.string(),
        deprecated: z.boolean().optional(),
      }),
    ),
  }),
  loader: glob({ pattern: "index.toml", base: "./src/collections/projects" }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  photos,
  projects,
};
