import { SortBy } from "./types";

export const SORT_METHODS: SortBy = {
  ["New to old"]: { sortBy: "createdAt", order: "desc" },
  ["Old to new"]: { sortBy: "createdAt", order: "asc" },
  ["Views high to low"]: { sortBy: "viewCount", order: "desc" },
  ["Views low to high"]: { sortBy: "viewCount", order: "asc" },
  ["Likes high to low"]: {sortBy: "totalLikes", order: "desc"},
  ["Likes low to high"]: {sortBy: "totalLikes",order: "asc"}
};
export const LIMIT = 12;
