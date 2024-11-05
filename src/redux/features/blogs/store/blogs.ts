import { Blog } from "@/app/lib/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface BlogsState {
  blogs: Blog[] | null;
}

const initialState: BlogsState = {
  blogs: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    resetBlogsState: () => initialState,
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs, resetBlogsState } = blogsSlice.actions;
export const blogsReducer = blogsSlice.reducer;

export const getBlogs = (state: RootState) => state.blogs.blogs;
