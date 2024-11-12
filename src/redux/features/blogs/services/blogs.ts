import { api } from "@/redux/api";
import { Blog } from "@/app/lib/types"; // Blog tipi burada yer alıyor
import { END_POINTS } from "@/app/lib/end-points";

export const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getAllBlogs: builder.query<Blog[], void>({
      query: () => END_POINTS.blogs,
    }),

    getBlogById: builder.query<Blog, string>({
      query: (id) => `${END_POINTS.blogs}/${id}`,
    }),

  }),

  overrideExisting: false,
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
} = blogApi;
