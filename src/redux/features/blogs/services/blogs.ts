import { api } from "@/redux/api";
import { Blog } from "@/app/lib/types"; // Blog tipi burada yer alıyor
import { END_POINTS } from "@/app/lib/end-points";

export const blogApi = api.injectEndpoints({

  endpoints: (builder) => ({
    getAllBlogs: builder.query<Blog[], void>({
      query: () => END_POINTS.blogs,
      providesTags: ["Blogs"],
    }),

    getBlogById: builder.query<Blog, string>({
      query: (id) => `${END_POINTS.blogs}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }]
    }),

    updateBlog: builder.mutation<Blog, Partial<Blog> & { id: string }>({
      query: ({ id, ...data }) => ({
        url: `${END_POINTS.blogs}/${id}`,
        method: "PUT", 
        body: data, 
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }],
    }),

  }),

  overrideExisting: false,
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} = blogApi;
