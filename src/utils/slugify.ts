import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter, ShowFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: BlogFrontmatter | ShowFrontmatter) =>
  post.slug ? slugger(post.slug) : slugger(post.title);

export const slufigyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
