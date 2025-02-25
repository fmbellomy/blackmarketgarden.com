import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    datetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();
export const showSchema = z
  .object({
    title: z.string(),
    postSlug: z.string().optional(),
    datetime: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
  })
  .strict();
export type BlogFrontmatter = z.infer<typeof blogSchema>;
export type ShowFrontmatter = z.infer<typeof showSchema>;
