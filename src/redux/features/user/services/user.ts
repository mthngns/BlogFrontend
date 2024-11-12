import { api } from "@/redux/api";
import { Blog, User } from "@/app/lib/types"; // Blog tipi burada yer alıyor
import { END_POINTS } from "@/app/lib/end-points";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getAllUsers: builder.query<User[], void>({
      query: () => END_POINTS.authors,
    }),

    getUserById: builder.query<Blog, string>({
      query: (id) => `${END_POINTS.authors}/${id}`,
    }),

  }),

  overrideExisting: false,
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
} = userApi;
