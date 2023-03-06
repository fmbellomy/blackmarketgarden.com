import { defineCollection } from "astro:content";
import { blogSchema, showSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});
const show = defineCollection({
  schema: showSchema
})
export const collections = { blog, show };
