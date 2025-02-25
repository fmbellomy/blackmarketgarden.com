import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.datetime).getTime() / 1000) -
        Math.floor(new Date(a.data.datetime).getTime() / 1000)
    );
const getSortedShows = (shows: CollectionEntry<"show"> []) =>
  shows
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.datetime).getTime() / 1000) -
        Math.floor(new Date(a.data.datetime).getTime() / 1000)
    );
export { getSortedPosts, getSortedShows };