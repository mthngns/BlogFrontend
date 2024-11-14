export interface User {
  id:string,
  name:string,
  email:string,
  password:string,
  avatar:string,
  bio:string,
  posts:string[] | [],
  totalPosts:number,
  totalLikes:number,
  followers:number,
}

export interface Blog {
  id: string;
  title:string,
  category:string,
  content:string,
  authorId:string,
  createdAt:string,
  updatedAt:string,
  totalLikes:number,
  viewCount:number,
  images:string[],
  comments:Comments[] | []
}

export type BlogCategories = "Technology" | "Health" | "Nature" | "Cooking" | "Fashion" | "Life" | "Health" | "Travel" | "Economy";

export interface SortMethod {
  sortBy: "createdAt" | "viewCount" | "totalLikes";
  order: "asc" | "desc";
}

export type SortBy = {
  "New to old": { sortBy: "createdAt"; order: "desc" };
  "Old to new": { sortBy: "createdAt"; order: "asc" };
  "Views high to low": { sortBy: "viewCount"; order: "desc" };
  "Views low to high": { sortBy: "viewCount"; order: "asc" };
  "Likes high to low": { sortBy: "totalLikes"; order: "desc" };
  "Likes low to high": { sortBy: "totalLikes"; order: "asc" };
};


export type Comments = {
  id:string,
  username:string,
  avatar:string,
  comment:string,
  createdAt:string,
}
